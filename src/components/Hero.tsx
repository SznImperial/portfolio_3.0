import React from 'react';
import { NavLink } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { Layers, Database, Cpu, ArrowDown, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-dark-bg">
      {/* Background Decorative Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Text Column (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center space-x-2.5 bg-dark-surface border border-dark-border rounded-md px-3.5 py-1.5 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-mono tracking-wide text-text-secondary uppercase">Available for deployment</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text mb-6 leading-tight">
              Hi, I&apos;m <br />
              <span className="text-white">{portfolioData.developerName}</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-text-secondary mb-4 font-medium">
              {portfolioData.developerTitle}
            </p>
            
            <p className="text-base sm:text-lg text-text-muted mb-8 max-w-lg leading-relaxed">
              {portfolioData.tagline}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <NavLink 
                to="/projects"
                className="px-6 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-md transition-colors duration-150"
              >
                View Projects
              </NavLink>
              <NavLink 
                to="/contact"
                className="px-6 py-3 bg-transparent border border-dark-border hover:border-text-muted text-text font-semibold rounded-md transition-colors duration-150"
              >
                Contact Me
              </NavLink>
              <a 
                href="/Adetola_Ayinde_Resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-dark-surface border border-dark-border hover:border-accent-light/50 text-accent-light hover:text-white font-semibold rounded-md transition-all duration-150 inline-flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Resume / CV</span>
              </a>
            </div>
          </div>
          
          {/* Right Column (6 Cols) - Editorial System Architecture Map */}
          <div className="hidden lg:flex lg:col-span-6 flex-col justify-center py-4 pl-4">
            
            <div className="w-full rounded-xl bg-dark-surface border border-dark-border/80 p-7 shadow-xl">
              {/* Architecture Map Header */}
              <div className="pb-5 mb-5 border-b border-dark-border/60 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono tracking-widest text-text-muted uppercase mb-1">
                    Core Technical Capabilities
                  </div>
                  <h3 className="text-base font-bold text-text tracking-tight">
                    Full-Stack Development &amp; AI Integration
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded bg-dark-bg border border-dark-border text-[11px] font-mono text-text-secondary">
                  Tech Overview
                </div>
              </div>

              {/* Layer 1: Client Architecture */}
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2.5 rounded-lg bg-dark-bg border border-dark-border/70 text-accent-light">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-accent-light font-medium mb-1">
                    01 • Frontend &amp; User Experience
                  </div>
                  <div className="text-sm font-bold text-text mb-1">
                    Next.js 16 • React 19 • Tailwind CSS v4
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Building fast, responsive, and intuitive web interfaces with clean typography, fluid layouts, and structured state management.
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              <div className="my-2 ml-[21px] flex items-center">
                <div className="h-6 w-px bg-dark-border/80 flex flex-col justify-center items-center">
                  <ArrowDown className="w-3 h-3 text-text-muted/60 -ml-[5px]" />
                </div>
              </div>

              {/* Layer 2: Backend & Database */}
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2.5 rounded-lg bg-dark-bg border border-dark-border/70 text-indigo-400">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-medium mb-1">
                    02 • Backend &amp; Database Design
                  </div>
                  <div className="text-sm font-bold text-text mb-1">
                    Supabase • PostgreSQL • Strict RLS
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Architecting secure relational databases, structured authentication workflows, and robust backends for SaaS platforms.
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              <div className="my-2 ml-[21px] flex items-center">
                <div className="h-6 w-px bg-dark-border/80 flex flex-col justify-center items-center">
                  <ArrowDown className="w-3 h-3 text-text-muted/60 -ml-[5px]" />
                </div>
              </div>

              {/* Layer 3: AI & Data Science Pipeline */}
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2.5 rounded-lg bg-dark-bg border border-dark-border/70 text-purple-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-medium mb-1">
                    03 • AI &amp; Data Science
                  </div>
                  <div className="text-sm font-bold text-text mb-1">
                    Groq LLaMA 3.3 • Document OCR • Data Analysis
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Integrating responsive AI models and smart automation features into production products, supported by Data Science studies at UNILAG.
                  </p>
                </div>
              </div>

              {/* Footer Metrics */}
              <div className="mt-6 pt-4 border-t border-dark-border/60 flex items-center justify-between text-xs text-text-muted">
                <span className="font-mono text-[11px]">20+ Live Deployed Web Apps</span>
                <span className="font-mono text-[11px] text-text-secondary">40+ Completed Projects</span>
              </div>

            </div>
            
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default Hero;