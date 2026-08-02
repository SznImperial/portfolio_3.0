import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData as initialDefaultData, type PortfolioData } from '../data/portfolioData';
import { supabase } from '../lib/supabase';

interface PortfolioContextType {
  data: PortfolioData;
  setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
  saveToCloud: (updatedData?: PortfolioData) => Promise<{ success: boolean; error?: string }>;
  isFetching: boolean;
  isSaving: boolean;
  cloudStatus: 'connected' | 'offline' | 'error';
}

const LOCAL_CACHE_KEY = 'portfolio_v3_override';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from localStorage cache if available, otherwise static data
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const cached = localStorage.getItem(LOCAL_CACHE_KEY);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (e) {
      console.error("Failed to parse cached portfolio data:", e);
    }
    return JSON.parse(JSON.stringify(initialDefaultData));
  });

  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [cloudStatus, setCloudStatus] = useState<'connected' | 'offline' | 'error'>('connected');

  // Fetch live portfolio record from Supabase on load
  useEffect(() => {
    const fetchFromSupabase = async () => {
      setIsFetching(true);
      try {
        const { data: remoteRecord, error } = await supabase
          .from('portfolio_data')
          .select('data')
          .eq('id', 'main_portfolio')
          .maybeSingle();

        if (error) {
          // If table doesn't exist yet or network error, fallback silently to offline mode
          console.warn("Supabase fetch warning (offline or table not yet initialized):", error.message);
          setCloudStatus('offline');
        } else if (remoteRecord && remoteRecord.data) {
          setData(remoteRecord.data);
          localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(remoteRecord.data));
          setCloudStatus('connected');
        } else {
          // No record in table yet, still connected and ready to save
          setCloudStatus('connected');
        }
      } catch (err) {
        console.error("Unexpected error fetching Supabase data:", err);
        setCloudStatus('error');
      } finally {
        setIsFetching(false);
      }
    };

    fetchFromSupabase();
  }, []);

  // Save updated data to Supabase and cache locally
  const saveToCloud = async (updatedData?: PortfolioData): Promise<{ success: boolean; error?: string }> => {
    const targetData = updatedData || data;
    setIsSaving(true);
    
    // Always save to localStorage immediately for guaranteed fast local reflection
    try {
      localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(targetData));
      if (updatedData) setData(updatedData);
    } catch (e) {
      console.error("Error writing to localStorage cache:", e);
    }

    try {
      // Upsert into Supabase portfolio_data table
      const { error } = await supabase
        .from('portfolio_data')
        .upsert({
          id: 'main_portfolio',
          data: targetData,
          updated_at: new Date().toISOString(),
        });

      if (error) {
        console.error("Supabase upsert failed:", error.message);
        setCloudStatus('error');
        return { success: false, error: error.message };
      }

      setCloudStatus('connected');
      return { success: true };
    } catch (err: any) {
      console.error("Unexpected save error:", err);
      setCloudStatus('error');
      return { success: false, error: err?.message || "Failed to communicate with Supabase" };
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <PortfolioContext.Provider value={{
      data,
      setData,
      saveToCloud,
      isFetching,
      isSaving,
      cloudStatus,
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
