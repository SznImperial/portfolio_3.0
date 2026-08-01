import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, Code, FileText } from 'lucide-react';
import CountUp from '../components/CountUp';

const Home: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-dark-bg min-h-screen">
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 bg-dark-bg border-t border-dark-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll">
            <div className="p-8 rounded-2xl text-center bg-dark-surface border border-dark-border hover:border-accent-light/40 transition-all duration-200 shadow-lg">
              <h3 className="text-5xl font-extrabold text-white tracking-tight mb-2 font-mono"><CountUp value={portfolioData.stats.linesWritten} /></h3>
              <p className="text-text-muted font-medium uppercase tracking-wider text-xs">Lines of Code Written</p>
            </div>
            <div className="p-8 rounded-2xl text-center bg-dark-surface border border-dark-border hover:border-accent-light/40 transition-all duration-200 shadow-lg">
              <h3 className="text-5xl font-extrabold text-white tracking-tight mb-2 font-mono"><CountUp value={portfolioData.stats.projectsCompleted} /></h3>
              <p className="text-text-muted font-medium uppercase tracking-wider text-xs">Projects Built</p>
            </div>
            <div className="p-8 rounded-2xl text-center bg-dark-surface border border-dark-border hover:border-accent-light/40 transition-all duration-200 shadow-lg">
              <h3 className="text-5xl font-extrabold text-white tracking-tight mb-2 font-mono"><CountUp value={portfolioData.stats.projectsDeployed} /></h3>
              <p className="text-text-muted font-medium uppercase tracking-wider text-xs">Production Deployments</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-dark-surface-2 border-t border-dark-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold text-text mb-2">About <span className="gradient-text">Me</span></h2>
            <div className="w-16 h-1 bg-accent rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-on-scroll space-y-6 text-text-secondary text-lg leading-relaxed">
              {portfolioData.bio.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            <div className="space-y-6 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="glass-card p-6 rounded-xl bg-dark-surface border border-dark-border flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-accent-light" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text mb-1">Academic</h4>
                  <p className="text-text-secondary">{portfolioData.department}</p>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl bg-dark-surface border border-dark-border flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Code className="w-8 h-8 text-accent-light" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text mb-1">Software Engineering</h4>
                  <p className="text-text-secondary">Full-Stack Developer crafting scalable web applications</p>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl bg-dark-surface border border-dark-border flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <FileText className="w-8 h-8 text-accent-light" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text mb-1">Technical Writing</h4>
                  <p className="text-text-secondary">Sharing insights and knowledge as a LinkedIn Publisher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Home;