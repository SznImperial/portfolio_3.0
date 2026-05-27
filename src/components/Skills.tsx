import { Cpu, Terminal, Hammer, Star } from 'lucide-react';
import { portfolioData, type Skill } from '../data/portfolioData';

export default function Skills() {
  const skills = portfolioData.skills;

  const frontendSkills = skills.filter((s) => s.category === 'frontend');
  const backendSkills = skills.filter((s) => s.category === 'backend');
  const toolSkills = skills.filter((s) => s.category === 'tools');

  const SkillCategory = ({
    title,
    subtitle,
    skillsList,
    icon: IconComponent,
  }: {
    title: string;
    subtitle: string;
    skillsList: Skill[];
    icon: React.ElementType;
  }) => {
    return (
      <div className="cyber-border cyber-corners bg-cyber-void/60 backdrop-blur-sm p-6 rounded-lg relative hover:shadow-[0_0_20px_rgba(57,255,20,0.05)] transition-all duration-300">
        <div className="flex items-center space-x-3 mb-6 border-b border-cyber-accent/20 pb-4">
          <div className="p-2 bg-cyber-accent/10 border border-cyber-accent/30 rounded">
            <IconComponent className="w-5 h-5 text-cyber-accent" />
          </div>
          <div>
            <h3 className="font-mono text-lg font-bold text-white uppercase tracking-wider">
              {title}
            </h3>
            <span className="font-mono text-[10px] text-cyber-accent/60 uppercase">
              {subtitle}
            </span>
          </div>
        </div>

        <div className="space-y-5">
          {skillsList.map((skill) => (
            <div key={skill.name} className="space-y-2 text-left group">
              <div className="flex justify-between items-center text-sm">
                <span className="font-mono font-medium text-cyber-light group-hover:text-cyber-accent transition-colors duration-200">
                  {skill.name}
                </span>
                <span className="font-mono text-xs text-cyber-accent font-semibold">
                  {skill.level}%
                </span>
              </div>

              <div className="h-2 w-full bg-[#121212] border border-cyber-accent/20 rounded-full overflow-hidden relative p-[1px]">
                <div
                  className="h-full bg-cyber-accent rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_#39FF14] relative"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="absolute top-0 right-0 bottom-0 w-2 bg-white/40 animate-pulse"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="py-20 relative bg-cyber-bg border-b border-cyber-accent/10"
      aria-label="Technical Skills and Capabilities"
    >
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-cyber-accent uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 text-cyber-accent" />
            <span>[ SYSTEM_CAPABILITIES ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Toolkit Matrix
          </h2>
          <div className="w-16 h-1 bg-cyber-accent mx-auto rounded-full shadow-[0_0_10px_#39FF14]"></div>
          <p className="text-base text-cyber-light/60 font-sans max-w-xl mx-auto">
            A comprehensive mapping of my architecture stack. Systematically indexed by layer, capability, and performance ratings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory
            title="Frontend Core"
            subtitle="Stack: Layer 01 // Interfaces"
            skillsList={frontendSkills}
            icon={Cpu}
          />
          <SkillCategory
            title="Backend Systems"
            subtitle="Stack: Layer 02 // Core Processes"
            skillsList={backendSkills}
            icon={Terminal}
          />
          <SkillCategory
            title="DevOps & Shell"
            subtitle="Stack: Layer 03 // Infrastructure"
            skillsList={toolSkills}
            icon={Hammer}
          />
        </div>
      </div>
    </section>
  );
}
