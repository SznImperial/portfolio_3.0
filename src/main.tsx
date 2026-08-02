import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { PortfolioProvider } from './context/PortfolioContext';

// Automatically route direct domain attempts to /admin into the proper HashRouter path
if (window.location.pathname === '/admin' || window.location.pathname === '/admin/') {
  window.location.replace(window.location.origin + '/#/admin');
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </React.StrictMode>
);
