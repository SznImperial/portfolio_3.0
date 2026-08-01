import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, Code2, FolderGit, BookOpen, BarChart3, 
  ArrowLeft, Plus, Trash2, ChevronDown, ChevronUp, 
  Save, Check 
} from 'lucide-react';

import { portfolioData, type PortfolioData, type Skill, type Project, type Article } from '../data/portfolioData';

// Deep clone utility to avoid mutating the original data
const deepClone = <T,>(obj: T): T => JSON.parse(JSON.stringify(obj));

export default function AdminPage() {
  const [data, setData] = useState<PortfolioData>(deepClone(portfolioData));
  const [activeSection, setActiveSection] = useState<'profile' | 'skills' | 'projects' | 'articles' | 'stats'>('profile');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleSave = () => {
    // In a real app, you would save to Supabase here
    showToast('Ready for Supabase integration');
  };

  const navItems = [
    { id: 'profile', label: 'Profile', icon: <User size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Code2 size={20} /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit size={20} /> },
    { id: 'articles', label: 'Articles', icon: <BookOpen size={20} /> },
    { id: 'stats', label: 'Stats', icon: <BarChart3 size={20} /> },
  ] as const;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-dark-bg text-text font-sans">
      {/* Sidebar / Top Nav */}
      <aside className="w-full md:w-64 bg-dark-surface border-b md:border-b-0 md:border-r border-dark-border shrink-0 flex flex-col">
        <div className="p-6 border-b border-dark-border">
          <Link to="/" className="flex items-center gap-2 text-text-secondary hover:text-text transition">
            <ArrowLeft size={18} />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <div className="mt-8">
            <h1 className="text-xl font-bold font-mono text-text">Admin Panel</h1>
            <p className="text-xs text-text-muted mt-1">Local State Mode</p>
          </div>
        </div>

        <nav className="flex-1 overflow-x-auto md:overflow-y-auto p-4 flex md:flex-col gap-2 no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all whitespace-nowrap md:whitespace-normal
                ${activeSection === item.id 
                  ? 'bg-accent/10 text-accent-light md:border-l-2 border-b-2 md:border-b-0 border-accent rounded-l-none md:rounded-l-none rounded-b-none' 
                  : 'text-text-secondary hover:bg-dark-surface-2 hover:text-text'
                }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {activeSection === 'profile' && <ProfileEditor data={data} setData={setData} onSave={handleSave} />}
          {activeSection === 'skills' && <SkillsEditor data={data} setData={setData} onSave={handleSave} />}
          {activeSection === 'projects' && <ProjectsEditor data={data} setData={setData} onSave={handleSave} />}
          {activeSection === 'articles' && <ArticlesEditor data={data} setData={setData} onSave={handleSave} />}
          {activeSection === 'stats' && <StatsEditor data={data} setData={setData} onSave={handleSave} />}
        </div>
      </main>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-dark-surface-2 border border-accent/30 text-accent-light px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-on-scroll is-visible z-50">
          <div className="bg-accent/20 p-1.5 rounded-full text-accent">
            <Check size={18} />
          </div>
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

// ==========================================
// Form Building Blocks
// ==========================================

const Input = ({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-sm font-medium text-text-secondary">{label}</label>
    <input 
      className="bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-text w-full focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition"
      {...props} 
    />
  </div>
);

const Textarea = ({ label, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-sm font-medium text-text-secondary">{label}</label>
    <textarea 
      className="bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-text w-full focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition min-h-[120px]"
      {...props} 
    />
  </div>
);

const SectionHeader = ({ title, description, onSave }: { title: string, description: string, onSave: () => void }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
    <div>
      <h2 className="text-2xl font-bold text-text mb-2">{title}</h2>
      <p className="text-sm text-text-muted">{description}</p>
    </div>
    <button 
      onClick={onSave}
      className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dim text-white font-semibold px-6 py-3 rounded-lg transition shrink-0 shadow-lg shadow-accent/20"
    >
      <Save size={18} />
      <span>Save Changes</span>
    </button>
  </div>
);


// ==========================================
// Editor Components
// ==========================================

function ProfileEditor({ data, setData, onSave }: { data: PortfolioData, setData: React.Dispatch<React.SetStateAction<PortfolioData>>, onSave: () => void }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      socials: { ...prev.socials, [name]: value }
    }));
  };

  return (
    <div className="animate-on-scroll is-visible">
      <SectionHeader 
        title="Profile Settings" 
        description="Update your personal information and primary branding." 
        onSave={onSave} 
      />
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full Name" name="fullName" value={data.fullName} onChange={handleChange} />
          <Input label="Cyber Alias (Optional)" name="cyberAlias" value={data.cyberAlias || ''} onChange={handleChange} />
          <Input label="Developer Title" name="developerTitle" value={data.developerTitle} onChange={handleChange} />
          <Input label="Department/Org" name="department" value={data.department || ''} onChange={handleChange} />
        </div>
        
        <Input label="Tagline" name="tagline" value={data.tagline} onChange={handleChange} />
        <Textarea label="Biography" name="bio" value={data.bio} onChange={handleChange} />

        <div className="mt-10">
          <h3 className="text-lg font-bold text-text mb-4 border-b border-dark-border pb-2">Social Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="GitHub URL" name="github" value={data.socials.github} onChange={handleSocialChange} />
            <Input label="LinkedIn URL" name="linkedin" value={data.socials.linkedin} onChange={handleSocialChange} />
            <Input label="Threads URL" name="threads" value={data.socials.threads || ''} onChange={handleSocialChange} />
            <Input label="Email Address" name="email" value={data.socials.email} onChange={handleSocialChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsEditor({ data, setData, onSave }: { data: PortfolioData, setData: React.Dispatch<React.SetStateAction<PortfolioData>>, onSave: () => void }) {
  const updateSkill = (index: number, field: keyof Skill, value: any) => {
    setData(prev => {
      const newSkills = [...prev.skills];
      newSkills[index] = { ...newSkills[index], [field]: value };
      return { ...prev, skills: newSkills };
    });
  };

  const removeSkill = (index: number) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addSkill = () => {
    setData(prev => ({
      ...prev,
      skills: [...prev.skills, { name: 'New Skill', level: 50, category: 'frontend', iconName: 'Code' }]
    }));
  };

  return (
    <div className="animate-on-scroll is-visible">
      <SectionHeader 
        title="Skills Management" 
        description="Add, edit, or remove skills from your proficiency radar." 
        onSave={onSave} 
      />

      <div className="space-y-4">
        {data.skills.map((skill, index) => (
          <div key={index} className="bg-dark-surface-2 p-5 rounded-xl border border-dark-border flex flex-col md:flex-row gap-4 items-start md:items-center">
            
            <div className="flex-1 w-full flex flex-col gap-1.5">
              <label className="text-xs font-medium text-text-secondary">Name</label>
              <input 
                className="bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-text text-sm focus:border-accent outline-none"
                value={skill.name}
                onChange={(e) => updateSkill(index, 'name', e.target.value)}
              />
            </div>

            <div className="flex-1 w-full flex flex-col gap-1.5">
              <label className="text-xs font-medium text-text-secondary">Category</label>
              <select 
                className="bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-text text-sm focus:border-accent outline-none appearance-none"
                value={skill.category}
                onChange={(e) => updateSkill(index, 'category', e.target.value)}
              >
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="tools">Tools / Other</option>
              </select>
            </div>

            <div className="flex-[2] w-full flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-medium text-text-secondary">
                <label>Proficiency</label>
                <span className="text-accent-light">{skill.level}%</span>
              </div>
              <input 
                type="range"
                min="0"
                max="100"
                className="w-full accent-accent"
                value={skill.level}
                onChange={(e) => updateSkill(index, 'level', parseInt(e.target.value))}
              />
            </div>

            <button 
              onClick={() => removeSkill(index)}
              className="mt-5 md:mt-0 p-2.5 text-text-muted hover:text-red-400 hover:bg-red-400/10 rounded-lg transition"
              title="Remove Skill"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}

        <button 
          onClick={addSkill}
          className="w-full py-4 mt-4 border-2 border-dashed border-dark-border rounded-xl text-text-secondary hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition flex items-center justify-center gap-2 font-medium"
        >
          <Plus size={20} />
          <span>Add New Skill</span>
        </button>
      </div>
    </div>
  );
}

function ProjectsEditor({ data, setData, onSave }: { data: PortfolioData, setData: React.Dispatch<React.SetStateAction<PortfolioData>>, onSave: () => void }) {
  const [expandedId, setExpandedId] = useState<string | null>(data.projects[0]?.id || null);

  const updateProject = (index: number, field: keyof Project, value: any) => {
    setData(prev => {
      const newProjects = [...prev.projects];
      newProjects[index] = { ...newProjects[index], [field]: value };
      return { ...prev, projects: newProjects };
    });
  };

  const removeProject = (index: number) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  const addProject = () => {
    const newId = `proj-${Date.now()}`;
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, {
        id: newId,
        title: 'New Project',
        tagline: 'Short description here',
        description: 'Detailed description.',
        longDescription: 'Extended details about architecture and challenges.',
        technologies: ['React', 'TypeScript'],
        liveUrl: '',
        githubUrl: '',
        featured: false
      }]
    }));
    setExpandedId(newId);
  };

  return (
    <div className="animate-on-scroll is-visible">
      <SectionHeader 
        title="Project Showcase" 
        description="Manage your portfolio projects and case studies." 
        onSave={onSave} 
      />

      <div className="space-y-4">
        {data.projects.map((project, index) => {
          const isExpanded = expandedId === project.id;

          return (
            <div key={project.id} className="bg-dark-surface-2 rounded-xl border border-dark-border overflow-hidden transition-all duration-300">
              <div 
                className="p-5 flex items-center justify-between cursor-pointer hover:bg-dark-surface transition"
                onClick={() => setExpandedId(isExpanded ? null : project.id)}
              >
                <div className="flex items-center gap-3">
                  {isExpanded ? <ChevronUp size={20} className="text-text-muted" /> : <ChevronDown size={20} className="text-text-muted" />}
                  <h3 className="font-bold text-text">{project.title || 'Untitled Project'}</h3>
                  {project.featured && <span className="bg-accent/20 text-accent-light text-xs px-2 py-0.5 rounded-full font-medium">Featured</span>}
                </div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); removeProject(index); }}
                  className="p-2 text-text-muted hover:text-red-400 hover:bg-red-400/10 rounded-lg transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              {isExpanded && (
                <div className="p-5 border-t border-dark-border bg-dark-bg/50 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input label="Project Title" value={project.title} onChange={(e) => updateProject(index, 'title', e.target.value)} />
                    <Input label="Tagline (Short)" value={project.tagline} onChange={(e) => updateProject(index, 'tagline', e.target.value)} />
                  </div>
                  
                  <Textarea label="Brief Description" value={project.description} onChange={(e) => updateProject(index, 'description', e.target.value)} />
                  <Textarea label="Long Description" value={project.longDescription || ''} onChange={(e) => updateProject(index, 'longDescription', e.target.value)} />
                  
                  <div className="flex flex-col gap-1.5 w-full">
                    <label className="text-sm font-medium text-text-secondary">Technologies (comma separated)</label>
                    <input 
                      className="bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-text w-full focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition"
                      value={project.technologies.join(', ')}
                      onChange={(e) => updateProject(index, 'technologies', e.target.value.split(',').map(t => t.trim()).filter(Boolean))}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input label="Live URL" value={project.liveUrl || ''} onChange={(e) => updateProject(index, 'liveUrl', e.target.value)} />
                    <Input label="GitHub URL" value={project.githubUrl || ''} onChange={(e) => updateProject(index, 'githubUrl', e.target.value)} />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer p-4 bg-dark-surface rounded-lg border border-dark-border select-none">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 accent-accent"
                      checked={project.featured} 
                      onChange={(e) => updateProject(index, 'featured', e.target.checked)} 
                    />
                    <div>
                      <div className="font-medium text-text">Featured Project</div>
                      <div className="text-xs text-text-muted">Show this prominently on the home page</div>
                    </div>
                  </label>
                </div>
              )}
            </div>
          );
        })}

        <button 
          onClick={addProject}
          className="w-full py-4 mt-4 border-2 border-dashed border-dark-border rounded-xl text-text-secondary hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition flex items-center justify-center gap-2 font-medium"
        >
          <Plus size={20} />
          <span>Add New Project</span>
        </button>
      </div>
    </div>
  );
}

function ArticlesEditor({ data, setData, onSave }: { data: PortfolioData, setData: React.Dispatch<React.SetStateAction<PortfolioData>>, onSave: () => void }) {
  const [expandedId, setExpandedId] = useState<string | null>(data.articles?.[0]?.id || null);

  const updateArticle = (index: number, field: keyof Article, value: any) => {
    setData(prev => {
      const newArticles = [...(prev.articles || [])];
      newArticles[index] = { ...newArticles[index], [field]: value };
      return { ...prev, articles: newArticles };
    });
  };

  const removeArticle = (index: number) => {
    setData(prev => ({
      ...prev,
      articles: (prev.articles || []).filter((_, i) => i !== index)
    }));
  };

  const addArticle = () => {
    const newId = `art-${Date.now()}`;
    setData(prev => ({
      ...prev,
      articles: [...(prev.articles || []), {
        id: newId,
        title: 'New Article',
        excerpt: 'Short excerpt...',
        date: new Date().toISOString().split('T')[0],
        readTime: '5 min read',
        url: '',
        tags: ['Draft']
      }]
    }));
    setExpandedId(newId);
  };

  const articles = data.articles || [];

  return (
    <div className="animate-on-scroll is-visible">
      <SectionHeader 
        title="Writings & Articles" 
        description="Manage your published blog posts and articles." 
        onSave={onSave} 
      />

      <div className="space-y-4">
        {articles.map((article, index) => {
          const isExpanded = expandedId === article.id;

          return (
            <div key={article.id} className="bg-dark-surface-2 rounded-xl border border-dark-border overflow-hidden transition-all duration-300">
              <div 
                className="p-5 flex items-center justify-between cursor-pointer hover:bg-dark-surface transition"
                onClick={() => setExpandedId(isExpanded ? null : article.id)}
              >
                <div className="flex items-center gap-3">
                  {isExpanded ? <ChevronUp size={20} className="text-text-muted" /> : <ChevronDown size={20} className="text-text-muted" />}
                  <h3 className="font-bold text-text">{article.title || 'Untitled Article'}</h3>
                </div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); removeArticle(index); }}
                  className="p-2 text-text-muted hover:text-red-400 hover:bg-red-400/10 rounded-lg transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              {isExpanded && (
                <div className="p-5 border-t border-dark-border bg-dark-bg/50 space-y-5">
                  <Input label="Article Title" value={article.title} onChange={(e) => updateArticle(index, 'title', e.target.value)} />
                  <Textarea label="Excerpt" value={article.excerpt} onChange={(e) => updateArticle(index, 'excerpt', e.target.value)} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input label="Date" type="date" value={article.date} onChange={(e) => updateArticle(index, 'date', e.target.value)} />
                    <Input label="Read Time (e.g. '5 min read')" value={article.readTime} onChange={(e) => updateArticle(index, 'readTime', e.target.value)} />
                  </div>
                  
                  <Input label="External URL" value={article.url} onChange={(e) => updateArticle(index, 'url', e.target.value)} />
                  
                  <div className="flex flex-col gap-1.5 w-full">
                    <label className="text-sm font-medium text-text-secondary">Tags (comma separated)</label>
                    <input 
                      className="bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-text w-full focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition"
                      value={article.tags.join(', ')}
                      onChange={(e) => updateArticle(index, 'tags', e.target.value.split(',').map(t => t.trim()).filter(Boolean))}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <button 
          onClick={addArticle}
          className="w-full py-4 mt-4 border-2 border-dashed border-dark-border rounded-xl text-text-secondary hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition flex items-center justify-center gap-2 font-medium"
        >
          <Plus size={20} />
          <span>Add New Article</span>
        </button>
      </div>
    </div>
  );
}

function StatsEditor({ data, setData, onSave }: { data: PortfolioData, setData: React.Dispatch<React.SetStateAction<PortfolioData>>, onSave: () => void }) {
  const updateStat = (field: keyof PortfolioData['stats'], value: string) => {
    setData(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        [field]: value
      }
    }));
  };

  return (
    <div className="animate-on-scroll is-visible">
      <SectionHeader 
        title="Portfolio Statistics" 
        description="Update the global numbers shown on your profile." 
        onSave={onSave} 
      />

      <div className="bg-dark-surface-2 p-6 rounded-xl border border-dark-border space-y-6">
        <Input 
          label="Lines of Code Written (e.g. '1M+', '500k')" 
          value={data.stats.linesWritten} 
          onChange={(e) => updateStat('linesWritten', e.target.value)} 
        />
        <Input 
          label="Projects Completed" 
          type="number"
          value={data.stats.projectsCompleted} 
          onChange={(e) => updateStat('projectsCompleted', e.target.value)} 
        />
        <Input 
          label="Projects Deployed" 
          type="number"
          value={data.stats.projectsDeployed} 
          onChange={(e) => updateStat('projectsDeployed', e.target.value)} 
        />
      </div>
    </div>
  );
}
