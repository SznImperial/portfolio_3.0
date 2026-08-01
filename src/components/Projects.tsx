import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
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

  const featuredProjects = portfolioData.projects.filter(p => p.featured);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 animate-on-scroll">
        <h2 className="text-3xl font-bold text-text mb-2">Featured Projects</h2>
        <div className="w-16 h-1 bg-accent rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, idx) => (
          <div 
            key={project.id} 
            className="glass-card bg-dark-surface rounded-xl overflow-hidden border border-dark-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] hover:border-accent/40 animate-on-scroll flex flex-col h-full"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {/* Gradient Top Border */}
            <div className="h-1 w-full bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500"></div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-text mb-1">{project.title}</h3>
              <p className="text-sm font-medium text-text-muted mb-4">{project.tagline}</p>
              
              <p className="text-text-secondary text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.technologies.slice(0, 4).map(tech => (
                  <span key={tech} className="px-3 py-1 bg-accent/10 text-accent-light text-xs font-medium rounded-full">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-3 py-1 bg-dark-surface-2 text-text-muted text-xs font-medium rounded-full">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-dark-border/50">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-text hover:text-accent-light transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-text hover:text-accent-light transition-colors"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
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
    </section>
  );
};

export default Projects;
