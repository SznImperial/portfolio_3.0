/* eslint-disable react-hooks/purity */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Terminal, Cpu, FolderGit, BookOpen, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Core', target: '/', icon: Terminal },
    { name: 'Skills', target: '/skills', icon: Cpu },
    { name: 'Projects', target: '/projects', icon: FolderGit },
    { name: 'Articles', target: '/articles', icon: BookOpen },
    { name: 'Contact', target: '/contact', icon: Mail },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cyber-bg/85 backdrop-blur-md border-b border-cyber-accent/20 py-3 shadow-lg"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="shrink-0">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 font-mono text-xl font-bold tracking-wider text-cyber-accent group"
            >
              <Terminal className="w-5 h-5 text-cyber-accent group-hover:scale-110 transition-transform duration-200" />
              <span className="relative">
                {portfolioData.cyberAlias}
                <span className="absolute -right-3 bottom-1.5 w-2.5 h-2.5 bg-cyber-accent rounded-full animate-ping"></span>
                <span className="absolute -right-3 bottom-1.5 w-2.5 h-2.5 bg-cyber-accent rounded-full"></span>
              </span>
              <span className="text-xs text-cyber-light font-mono ml-4 opacity-60 hidden sm:inline-block">
                // SHELL: v3.0
              </span>
            </NavLink>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <NavLink
                    key={link.target}
                    to={link.target}
                    className={({ isActive }) =>
                      `flex items-center space-x-2 px-4 py-2 rounded-md font-mono text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-cyber-accent bg-cyber-accent/10 border border-cyber-accent/30 shadow-[0_0_10px_rgba(57,255,20,0.15)]'
                          : 'text-cyber-light hover:text-cyber-accent hover:bg-cyber-accent/5 border border-transparent'
                      }`
                    }
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{link.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-cyber-light hover:text-cyber-accent hover:bg-cyber-accent/10 border border-transparent hover:border-cyber-accent/30 focus:outline-none transition-all duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-cyber-bg/95 border-b border-cyber-accent/20 backdrop-blur-lg">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <NavLink
                key={link.target}
                to={link.target}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-md font-mono text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyber-accent bg-cyber-accent/10 border-l-4 border-cyber-accent shadow-[0_0_15px_rgba(57,255,20,0.1)]'
                      : 'text-cyber-light hover:text-cyber-accent hover:bg-cyber-accent/5'
                  }`
                }
              >
                <IconComponent className="w-5 h-5 text-cyber-accent" />
                <span>{link.name}</span>
              </NavLink>
            );
          })}
          <div className="pt-4 px-4 border-t border-cyber-accent/10 font-mono text-[10px] text-cyber-light/40 flex justify-between">
            <span>SECURE SHELL // ROUTED</span>
            <span>PING // {(12 + Math.floor(Math.random() * 8))}ms</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
