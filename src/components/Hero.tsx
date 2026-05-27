import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Shield, ChevronRight } from 'lucide-react';

export default function Hero() {
  const bootLogs = [
    'IMPERIAL_CORE // INITIALIZING STATUS_CHECK',
    'FRONTEND_STACK: React & Next.js systems... OK',
    'ANALYTICS_MODULE: UNILAG Statistics track loaded.',
    'AUDIO_STREAM: Eminem discography looping... STAN_MODE_ACTIVE',
    'CREATIVE_ENGINE: DaVinci Resolve video pipelines ready.',
    'STATUS: Environment stable. Ready to build.'
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid"
      aria-label="Welcome and Introduction"
    >
      <div className="matrix-overlay"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12 mt-8">
        
        <div className="flex-1 text-left space-y-6 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyber-accent/10 border border-cyber-accent/30 rounded-full font-mono text-xs text-cyber-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent animate-pulse"></span>
            <span>SYSTEM_MODE: LIVE_WORKSPACE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Engineering code, <br />
            <span className="text-cyber-accent text-glow-neon select-all font-mono font-bold">
              analyzing data,
            </span> <br />
            and optimizing interfaces.
          </h1>

          <p className="text-lg sm:text-xl text-cyber-light/95 leading-relaxed font-sans">
            Hey, I'm a Full-Stack Software Developer navigating code through a data-driven lens at the University of Lagos. I build smooth frontend experiences and reliable backend architectures, translating complex logic into clean products.
          </p>

          <p className="text-sm sm:text-base text-cyber-light/60 max-w-lg leading-relaxed">
            When my hands aren't on the keyboard building web builds or tracking statistical parameters, I'm usually editing video content in DaVinci Resolve, testing mobile gaming tactics, or over-analyzing lyrics like a true Eminem Stan. I value precision, fast pacing, and clean execution in everything I do.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/projects"
              className="flex items-center space-x-2 bg-cyber-accent text-black font-mono font-bold text-sm px-6 py-3 border-2 border-cyber-accent hover:bg-transparent hover:text-cyber-accent transition-all duration-300 shadow-[0_0_15px_rgba(57,255,20,0.4)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] cursor-pointer relative overflow-hidden group"
            >
              <span>VIEW_MY_BUILDS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-2 bg-transparent text-cyber-accent font-mono font-bold text-sm px-6 py-3 border-2 border-cyber-accent/50 hover:border-cyber-accent hover:bg-cyber-accent/10 transition-all duration-300 shadow-none hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] cursor-pointer"
            >
              <span>GET_IN_TOUCH</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <div className="cyber-border cyber-corners cyber-corners-inner bg-cyber-void/90 backdrop-blur-md rounded-lg overflow-hidden shadow-2xl">
            
            <div className="bg-[#16171d]/90 border-b border-cyber-accent/15 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-cyber-accent" />
                <span className="font-mono text-xs text-cyber-accent font-semibold tracking-wide">
                  imperial@void-console:~
                </span>
              </div>
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
              </div>
            </div>

            <div className="p-5 font-mono text-xs sm:text-sm text-cyber-light space-y-2.5 min-h-55 text-left leading-relaxed select-none">
              <div className="flex items-center space-x-2 text-cyber-accent/50 mb-1">
                <span>$</span>
                <span className="text-cyber-light">npm run status --user:imperial</span>
              </div>

              {bootLogs.map((line, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-cyber-accent mr-2">{'>'}</span>
                  <span className={line.includes('OK') || line.includes('stable') || line.includes('ACTIVE') ? 'text-cyber-accent' : ''}>
                    {line}
                  </span>
                </div>
              ))}

              <div className="flex items-center text-cyber-accent animate-pulse mt-2">
                <span>$</span>
                <span className="w-2 h-4 bg-cyber-accent ml-2 shadow-[0_0_5px_#39FF14]"></span>
              </div>
            </div>
            
            <div className="bg-cyber-card px-4 py-2 border-t border-cyber-accent/10 flex justify-between font-mono text-[10px] text-cyber-light/40">
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-cyber-accent/60" /> LOGIC_SECURE
              </span>
              <span>SHA256: imperial_0x...</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}