import { Github, Linkedin, AtSign, ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';

export default function Footer() {
  const { data: portfolioData } = usePortfolio();
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = portfolioData.socials;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Technical Skills', path: '/skills' },
    { name: 'Featured Projects', path: '/projects' },
    { name: 'Articles & Insights', path: '/articles' },
    { name: 'Contact & Inquiries', path: '/contact' },
  ];

  return (
    <footer
      className="bg-dark-surface border-t border-dark-border py-16 text-text overflow-hidden font-sans"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 4-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-dark-border/70">

          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent-light block mb-1">
                {portfolioData.cyberAlias}
              </span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                {portfolioData.developerName}
              </h3>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-sm">
              Full-Stack Software Developer &amp; Designer building high-performance web platforms, educational SaaS systems, and AI automation tools.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-bg border border-dark-border/80 text-xs text-text-secondary font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Based in Lagos, Nigeria • Open to relocation</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 lg:pl-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-muted hover:text-white transition-colors block py-0.5 hover:translate-x-0.5 transform duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/Adetola_Ayinde_Resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light hover:text-white transition-colors block py-0.5 hover:translate-x-0.5 transform duration-150 font-medium"
                >
                  Resume / CV ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Profiles (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Professional Profiles
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-text-muted hover:text-accent-light transition-colors group"
                >
                  <Github className="w-4 h-4 text-text-secondary group-hover:text-accent-light" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-text-muted hover:text-accent-light transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-text-secondary group-hover:text-accent-light" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              {socials.threads && (
                <li>
                  <a
                    href={socials.threads}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-text-muted hover:text-accent-light transition-colors group"
                  >
                    <AtSign className="w-4 h-4 text-text-secondary group-hover:text-accent-light" />
                    <span>Threads (@_ayomiposi4tw)</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${socials.email}`}
                  className="inline-flex items-center gap-2 text-text-muted hover:text-accent-light transition-colors group"
                >
                  <Mail className="w-4 h-4 text-text-secondary group-hover:text-accent-light" />
                  <span>{socials.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Back to Top & Specs (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start space-y-6">
            <div className="space-y-3 w-full">
              <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                Actions
              </h4>
              <button
                onClick={handleScrollTop}
                type="button"
                className="w-full flex items-center justify-center space-x-2 text-xs font-medium text-white bg-dark-bg border border-dark-border hover:border-accent/80 hover:bg-accent/10 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer shadow-sm group"
                aria-label="Return to top of page"
              >
                <span>Return to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-text-muted group-hover:text-white transition-colors" />
              </button>
            </div>
            
            <p className="text-[11px] text-text-muted leading-normal">
              Engineered with React 19, Vite, TypeScript &amp; Tailwind CSS v4.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted gap-4">
          <div>
            <span>© {new Date().getFullYear()} {portfolioData.developerName}. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              Get in touch
            </Link>
            <span className="text-dark-border">•</span>
            <span className="text-text-secondary">Lagos, Nigeria (WAT)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

