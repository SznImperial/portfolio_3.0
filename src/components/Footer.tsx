import { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, ArrowUp, Cpu, Server } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = portfolioData.socials;

  return (
    <footer
      className="bg-[#030406] border-t border-cyber-accent/15 py-12 relative overflow-hidden"
      role="contentinfo"
    >
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-cyber-accent/10">

          <div className="text-left space-y-2">
            <div className="flex items-center space-x-2 font-mono text-sm font-bold text-cyber-accent">
              <Server className="w-4 h-4 text-cyber-accent" />
              <span>TERMINAL NODE: {portfolioData.cyberAlias}</span>
            </div>
            <div className="font-mono text-[10px] text-cyber-light/40 space-y-1">
              <div>HOST: 127.0.0.1 // LOCALHOST</div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyber-accent/50" />
                <span>UPTIME: {uptime}s (SESSION ACTIVE)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-cyber-accent/20 rounded hover:border-cyber-accent hover:bg-cyber-accent/10 text-cyber-light hover:text-cyber-accent transition-all duration-200"
                aria-label="GitHub Profile Link"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-cyber-accent/20 rounded hover:border-cyber-accent hover:bg-cyber-accent/10 text-cyber-light hover:text-cyber-accent transition-all duration-200"
                aria-label="LinkedIn Profile Link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {socials.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-cyber-accent/20 rounded hover:border-cyber-accent hover:bg-cyber-accent/10 text-cyber-light hover:text-cyber-accent transition-all duration-200"
                aria-label="Twitter Profile Link"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
          </div>

          <div>
            <button
              onClick={handleScrollTop}
              type="button"
              className="flex items-center space-x-2 font-mono text-xs text-cyber-accent border border-cyber-accent/30 hover:border-cyber-accent hover:bg-cyber-accent/10 px-4 py-2.5 transition-all duration-200 cursor-pointer"
              aria-label="Return to top of page"
            >
              <span>SYS_BOUNCE_TOP</span>
              <ArrowUp className="w-4 h-4 animate-bounce" />
            </button>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-cyber-light/40 gap-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse"></span>
            <span>BUILD: COMPILED_SUCCESSFULLY // NODE_ENV = PROD</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} {portfolioData.developerName}. REL_3.0_VOIDSCAPE.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
