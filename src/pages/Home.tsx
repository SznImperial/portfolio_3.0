import { User, GraduationCap, Code2, LineChart } from 'lucide-react';
import Hero from '../components/Hero';
import { portfolioData } from '../data/portfolioData';

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />
      
      <section className="py-12 bg-cyber-bg relative z-10 border-t border-cyber-accent/15" aria-label="System Overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cyber-card/40 border border-cyber-accent/20 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
            
            <div className="text-left space-y-1">
              <span className="font-mono text-[10px] text-cyber-accent uppercase tracking-wider block">
                [ DIAGNOSTIC_OVERVIEW ]
              </span>
              <h3 className="text-lg font-bold text-white uppercase font-mono">
                Active System Metrics Status
              </h3>
              <p className="text-sm text-cyber-light/60 max-w-xl">
                Operating systems online. Backend architectures sandboxed. Statistical models synced. Database isolation routes fully functional.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center font-mono w-full md:w-auto min-w-70">
              <div className="p-2 border border-cyber-accent/10 rounded bg-[#0A0B10]/80">
                <div className="text-xl font-bold text-cyber-accent drop-shadow-[0_0_8px_rgba(57,255,20,0.3)]">25K+</div>
                <div className="text-[9px] text-cyber-light/40 tracking-wider uppercase">Lines Written</div>
              </div>
              <div className="p-2 border border-cyber-accent/10 rounded bg-[#0A0B10]/80">
                <div className="text-xl font-bold text-cyber-accent drop-shadow-[0_0_8px_rgba(57,255,20,0.3)]">12+</div>
                <div className="text-[9px] text-cyber-light/40 tracking-wider uppercase">Completed</div>
              </div>
              <div className="p-2 border border-cyber-accent/10 rounded bg-[#0A0B10]/80">
                <div className="text-xl font-bold text-cyber-accent drop-shadow-[0_0_8px_rgba(57,255,20,0.3)]">6</div>
                <div className="text-[9px] text-cyber-light/40 tracking-wider uppercase">Deployed</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-cyber-bg text-cyber-light border-t border-cyber-accent/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-left font-mono">
            <div className="text-cyber-accent text-xs tracking-widest uppercase mb-2">
              // EXECUTE: INITIALIZE_PROFILE_SCAN
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-white flex items-center gap-3">
              GET TO <span className="text-cyber-accent drop-shadow-[0_0_10px_rgba(57,255,20,0.4)]">KNOW ME</span>
            </h2>
            <div className="w-20 h-1 bg-cyber-accent mt-4 shadow-[0_0_8px_#39FF14]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2">
                <User className="w-5 h-5 text-cyber-accent" /> PROFILE_SUMMARY
              </h3>
              
              <p className="text-base text-cyber-light/80 leading-relaxed font-sans">
                Hey there! I'm <span className="text-white font-semibold">{portfolioData.fullName}</span>, known in the dev space as <span className="text-cyber-accent font-mono font-bold">{portfolioData.cyberAlias}</span>. 
                I'm a full-stack software developer balancing code architecture with an analytical mindset. I focus on building responsive web interfaces, clean data paths, and lightweight desktop layouts that make sense.
              </p>

              <p className="text-sm text-cyber-light/70 leading-relaxed font-sans">
                My approach values clear optimization and speed. I am highly intentional about code structure—writing system flows that scale smoothly without stacking unnecessary complexity into the workspace.
              </p>

              <p className="text-sm text-cyber-light/70 leading-relaxed font-sans">
                When I’m not testing code states or tracking statistical data layouts, I'm usually editing videos in DaVinci Resolve, breaking down mobile gaming tactics, or running through rap lyrics like a true Eminem Stan. I bring that same sharp precision and pace right into my source code.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xl font-bold font-mono text-white text-left pl-2 mb-6">
                // CORE_PILLARS
              </h3>

              <div className="bg-cyber-card/40 border border-cyber-accent/10 rounded-lg p-5 flex items-start gap-4 backdrop-blur-sm transition-all duration-300 hover:border-cyber-accent/30">
                <GraduationCap className="w-6 h-6 text-cyber-accent mt-1 shrink-0" />
                <div className="text-left font-mono">
                  <h4 className="text-sm font-bold text-white uppercase">Academic Node</h4>
                  <p className="text-xs text-cyber-light/50 mt-1">{portfolioData.department}</p>
                  <p className="text-[11px] text-cyber-light/40 mt-1">Harnessing mathematical analytics to optimize background processing rules and data organization schemas.</p>
                </div>
              </div>

              <div className="bg-cyber-card/40 border border-cyber-accent/10 rounded-lg p-5 flex items-start gap-4 backdrop-blur-sm transition-all duration-300 hover:border-cyber-accent/30">
                <Code2 className="w-6 h-6 text-cyber-accent mt-1 shrink-0" />
                <div className="text-left font-mono">
                  <h4 className="text-sm font-bold text-white uppercase">Software Engineering</h4>
                  <p className="text-xs text-cyber-light/50 mt-1">Full-Stack Development</p>
                  <p className="text-[11px] text-cyber-light/40 mt-1">Specializing in interactive React environments, C# configurations, and building optimized, responsive user ecosystems.</p>
                </div>
              </div>

              <div className="bg-cyber-card/40 border border-cyber-accent/10 rounded-lg p-5 flex items-start gap-4 backdrop-blur-sm transition-all duration-300 hover:border-cyber-accent/30">
                <LineChart className="w-6 h-6 text-cyber-accent mt-1 shrink-0" />
                <div className="text-left font-mono">
                  <h4 className="text-sm font-bold text-white uppercase">Technical Writing</h4>
                  <p className="text-xs text-cyber-light/50 mt-1">LinkedIn Publisher</p>
                  <p className="text-[11px] text-cyber-light/40 mt-1">Breaking down critical programming paradigms, next-generation web logic tracks, and systemic data privacy infrastructures.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}