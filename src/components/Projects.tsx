import { ExternalLink, Github, FolderGit } from 'lucide-react';
import { portfolioData, type Project } from '../data/portfolioData';

export default function Projects() {
  const projects = portfolioData.projects;

  const RenderMockup = ({ project }: { project: Project }) => {
    if (project.mockupType === 'terminal') {
      return (
        <div className="w-full h-full bg-black/95 font-mono text-[10px] p-4 text-left select-none overflow-hidden relative flex flex-col justify-between">
          <div className="space-y-1.5 text-[#00FF66] opacity-90">
            {project.mockupContent.map((line, idx) => (
              <div key={idx} className="truncate flex items-start">
                <span className="text-cyber-accent mr-1.5 font-bold">&gt;</span>
                <span>{line}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center text-[9px] text-[#00FF66]/40 border-t border-[#00FF66]/10 pt-2 mt-2">
            <span>CONSOLE EXECUTION</span>
            <span className="w-1.5 h-3 bg-cyber-accent animate-pulse"></span>
          </div>
        </div>
      );
    }

    if (project.mockupType === 'dashboard') {
      return (
        <div className="w-full h-full bg-[#121212] p-4 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-cyber-accent/15 pb-2">
            <span className="font-mono text-[9px] text-cyber-accent">THREAT_VISUALIZER_v1</span>
            <span className="w-2 h-2 rounded-full bg-cyber-accent animate-ping"></span>
          </div>
          
          <div className="grid grid-cols-2 gap-2 my-2 text-left">
            <div className="border border-cyber-accent/10 bg-cyber-void/80 p-1.5 rounded">
              <div className="text-[8px] text-cyber-light/40 font-mono">INGRESS RATE</div>
              <div className="text-xs font-mono font-bold text-cyber-accent">8,421 /s</div>
            </div>
            <div className="border border-cyber-accent/10 bg-cyber-void/80 p-1.5 rounded">
              <div className="text-[8px] text-cyber-light/40 font-mono">THREAT LEVEL</div>
              <div className="text-xs font-mono font-bold text-red-500">CRIT_0.02%</div>
            </div>
          </div>

          <div className="flex items-end justify-between gap-1 h-12 pt-1">
            <div className="w-full bg-cyber-accent/10 h-1/3 rounded-t border-t border-cyber-accent/20"></div>
            <div className="w-full bg-cyber-accent/20 h-1/2 rounded-t border-t border-cyber-accent/40"></div>
            <div className="w-full bg-cyber-accent/40 h-3/4 rounded-t border-t border-cyber-accent/60"></div>
            <div className="w-full bg-cyber-accent/80 h-full rounded-t border-t border-cyber-accent shadow-[0_0_8px_#39FF14]"></div>
            <div className="w-full bg-cyber-accent/30 h-2/3 rounded-t border-t border-cyber-accent/40"></div>
            <div className="w-full bg-cyber-accent/15 h-2/5 rounded-t border-t border-cyber-accent/20"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full bg-[#121212] flex flex-col justify-between select-none">
        <div className="bg-[#1b1e22] px-3 py-1.5 flex items-center justify-between border-b border-cyber-accent/10">
          <div className="flex space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/60"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/60"></span>
          </div>
          <div className="bg-black/40 text-[8px] px-4 py-0.5 rounded text-cyber-light/60 font-mono w-48 truncate text-center">
            {project.mockupContent[0]}
          </div>
          <div className="w-3"></div>
        </div>

        <div className="p-4 flex-1 flex flex-col justify-center items-center text-left text-xs text-cyber-light space-y-2">
          <div className="border border-cyber-accent/25 rounded p-2 bg-cyber-void/80 w-full">
            <div className="font-mono text-[9px] text-cyber-accent mb-1">// SYSTEM DATA</div>
            {project.mockupContent.slice(1).map((line, idx) => (
              <div key={idx} className="font-mono text-[10px] text-cyber-light/80 flex justify-between">
                <span>{line.split(': ')[0]}:</span>
                <span className="text-cyber-accent">{line.split(': ')[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="py-20 relative bg-cyber-void border-b border-cyber-accent/10"
      aria-label="Software Projects Showcase"
    >
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-cyber-accent uppercase tracking-widest">
            <FolderGit className="w-3.5 h-3.5 text-cyber-accent" />
            <span>[ SYSTEM_BUILDS ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Cybernetic Builds
          </h2>
          <div className="w-16 h-1 bg-cyber-accent mx-auto rounded-full shadow-[0_0_10px_#39FF14]"></div>
          <p className="text-base text-cyber-light/60 font-sans max-w-xl mx-auto">
            A curated inventory of network hubs, headless interfaces, and peer-to-peer protocols deployed to the production grid.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="cyber-border cyber-corners cyber-corners-inner bg-cyber-card/40 backdrop-blur-sm rounded-lg overflow-hidden flex flex-col justify-between group hover:-translate-y-2 hover:border-cyber-accent/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(57,255,20,0.15)]"
            >
              <div className="h-44 border-b border-cyber-accent/15 relative overflow-hidden bg-black/60 flex items-center justify-center">
                <RenderMockup project={project} />
                
                <div className="absolute inset-y-0 left-0 w-0.5 bg-cyber-accent/25 shadow-[0_0_10px_#39FF14] animate-pulse pointer-events-none group-hover:w-full group-hover:bg-cyber-accent/5 transition-all duration-500"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-5 text-left">
                <div className="space-y-2">
                  <h3 className="font-mono text-lg font-bold text-white group-hover:text-cyber-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[10px] text-cyber-accent/80 font-medium">
                    // {project.tagline}
                  </p>
                  <p className="text-sm text-cyber-light/75 leading-relaxed font-sans pt-1">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-cyber-accent/5 border border-cyber-accent/20 rounded font-mono text-[9px] text-cyber-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-2 border-t border-cyber-accent/10">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold text-cyber-accent hover:text-white transition-colors duration-200"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>LIVE_GRID</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold text-cyber-light/65 hover:text-cyber-accent transition-colors duration-200"
                      aria-label={`View source code of ${project.title} on GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>SOURCE_CODE</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
