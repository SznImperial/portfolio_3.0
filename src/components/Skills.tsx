import { Layers, Database, Cpu, Sparkles } from 'lucide-react';
import { type Skill } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';

export default function Skills() {
  const { data: { skills } } = usePortfolio();

  const frontendSkills = skills.filter((s) => s.category === 'frontend');
  const backendSkills = skills.filter((s) => s.category === 'backend');
  const toolSkills = skills.filter((s) => s.category === 'tools');

  const SkillCategory = ({
    title,
    subtitle,
    skillsList,
    icon: IconComponent,
    accentClass,
    barGradient,
  }: {
    title: string;
    subtitle: string;
    skillsList: Skill[];
    icon: React.ElementType;
    accentClass: string;
    barGradient: string;
  }) => {
    return (
      <div className="bg-dark-surface border border-dark-border rounded-2xl p-7 hover:border-accent-light/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 mb-6 border-b border-dark-border/60 pb-5">
            <div className={`p-3 bg-dark-bg border border-dark-border rounded-xl ${accentClass}`}>
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white tracking-tight">
                {title}
              </h3>
              <span className="text-xs font-mono text-text-muted">
                {subtitle}
              </span>
            </div>
          </div>

          <div className="space-y-5">
            {skillsList.map((skill) => (
              <div key={skill.name} className="space-y-2 group">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-text group-hover:text-white transition-colors duration-200">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-text-muted font-semibold">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2.5 w-full bg-dark-bg border border-dark-border/80 rounded-full overflow-hidden p-0.5">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${barGradient}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="py-24 relative bg-dark-bg border-t border-b border-dark-border/50"
      aria-label="Technical Skills and Capabilities"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-light uppercase tracking-widest px-3 py-1.5 rounded-full bg-dark-surface border border-dark-border">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-base text-text-muted font-sans max-w-xl mx-auto leading-relaxed">
            A structured overview of my core technical capabilities across modern frontend development, secure backend architectures, and practical AI tooling.
          </p>
        </div>

        {/* 3-Column Skills Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory
            title="Frontend Architecture"
            subtitle="Responsive UI &amp; Client State"
            skillsList={frontendSkills}
            icon={Layers}
            accentClass="text-accent-light"
            barGradient="bg-gradient-to-r from-accent to-indigo-400"
          />
          <SkillCategory
            title="Backend &amp; Databases"
            subtitle="Server Logic &amp; Relational Schemas"
            skillsList={backendSkills}
            icon={Database}
            accentClass="text-indigo-400"
            barGradient="bg-gradient-to-r from-indigo-500 to-purple-400"
          />
          <SkillCategory
            title="AI, Data &amp; Tools"
            subtitle="LLMs, Analytics &amp; Workflow"
            skillsList={toolSkills}
            icon={Cpu}
            accentClass="text-purple-400"
            barGradient="bg-gradient-to-r from-purple-500 to-pink-500"
          />
        </div>

      </div>
    </section>
  );
}
