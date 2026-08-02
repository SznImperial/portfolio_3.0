import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, Code2, FolderGit, BookOpen, BarChart3, 
  ArrowLeft, Plus, Trash2, ChevronDown, ChevronUp, 
  Save, Check, Lock, LogOut, Loader2, Cloud, AlertCircle
} from 'lucide-react';

import { type PortfolioData, type Skill, type Project, type Article } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';
import { supabase } from '../lib/supabase';

export default function AdminPage() {
  const { data, setData, saveToCloud, cloudStatus } = usePortfolio();
  const [activeSection, setActiveSection] = useState<'profile' | 'skills' | 'projects' | 'articles' | 'stats'>('profile');
  const [toastMessage, setToastMessage] = useState<{ text: string; isError?: boolean } | null>(null);

  // Auth State
  const [session, setSession] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authInProgress, setAuthInProgress] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setAuthLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setAuthLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const showToast = (text: string, isError = false) => {
    setToastMessage({ text, isError });
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleSave = async () => {
    const result = await saveToCloud();
    if (result.success) {
      showToast('Successfully saved & synchronized with Supabase database!');
    } else {
      showToast(`Notice: Saved to browser cache. (${result.error || 'Check Supabase SQL table configuration'})`, true);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthInProgress(true);
    try {
      if (authMode === 'signin') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { data: signUpData, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        if (signUpData.user && !signUpData.session) {
          setAuthError('Account registered successfully! If email confirmation is required in your Supabase project, check your inbox or disable "Confirm email" in Supabase Auth settings.');
        }
      }
    } catch (err: any) {
      setAuthError(err.message || 'Authentication failed');
    } finally {
      setAuthInProgress(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center text-text font-sans">
        <Loader2 className="w-8 h-8 text-accent animate-spin mb-4" />
        <p className="text-sm text-text-muted font-mono">Verifying administrative credentials...</p>
      </div>
    );
  }

  // Authentication Gateway
  if (!session) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4 text-text font-sans relative overflow-hidden">
        {/* Background Decorative Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-md w-full bg-dark-surface border border-dark-border rounded-2xl p-8 shadow-2xl z-10 relative">
          <div className="flex items-center gap-3 mb-6 border-b border-dark-border/60 pb-6">
            <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent-light shrink-0">
              <Lock size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold font-mono text-white tracking-tight">Executive Gateway</h1>
              <p className="text-xs text-text-muted">Restricted Portfolio CMS • Supabase Auth</p>
            </div>
          </div>

          {authError && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5 leading-relaxed">
              <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleAuth} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-wider font-mono">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contact@imp3rial.dev"
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder-text-muted focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-wider font-mono">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder-text-muted focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={authInProgress}
              className="w-full py-3 bg-accent hover:bg-accent-dim disabled:opacity-60 text-white font-semibold rounded-lg shadow-lg shadow-accent/20 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              {authInProgress && <Loader2 size={16} className="animate-spin" />}
              <span>{authMode === 'signin' ? 'Unlock Dashboard' : 'Register Admin Account'}</span>
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-dark-border/60 flex items-center justify-between text-xs">
            <button
              onClick={() => { setAuthMode(authMode === 'signin' ? 'signup' : 'signin'); setAuthError(null); }}
              className="text-accent-light hover:underline font-medium cursor-pointer"
            >
              {authMode === 'signin' ? 'First time? Register admin account' : 'Already registered? Sign in'}
            </button>
            <Link to="/" className="text-text-muted hover:text-white transition">← Return to live site</Link>
          </div>
        </div>
      </div>
    );
  }

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
      <aside className="w-full md:w-64 bg-dark-surface border-b md:border-b-0 md:border-r border-dark-border shrink-0 flex flex-col justify-between">
        <div>
          <div className="p-6 border-b border-dark-border">
            <Link to="/" className="flex items-center gap-2 text-text-secondary hover:text-text transition">
              <ArrowLeft size={18} />
              <span className="font-medium text-sm">Back to Portfolio</span>
            </Link>
            <div className="mt-6">
              <h1 className="text-xl font-bold font-mono text-text">Admin CMS</h1>
              <div className="flex items-center gap-1.5 mt-1.5 text-xs font-mono">
                <Cloud size={13} className={cloudStatus === 'connected' ? 'text-emerald-400' : 'text-amber-400'} />
                <span className={`w-1.5 h-1.5 rounded-full ${cloudStatus === 'connected' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
                <span className={cloudStatus === 'connected' ? 'text-emerald-400' : 'text-amber-400'}>
                  {cloudStatus === 'connected' ? 'Supabase Sync' : 'Cache Mode'}
                </span>
              </div>
            </div>
          </div>

          <nav className="p-4 flex md:flex-col gap-1.5 overflow-x-auto md:overflow-y-auto no-scrollbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap md:whitespace-normal
                  ${activeSection === item.id 
                    ? 'bg-accent/15 text-accent-light border-l-2 border-accent' 
                    : 'text-text-secondary hover:bg-dark-surface-2 hover:text-text'
                  }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-dark-border bg-dark-bg/40">
          <div className="flex items-center justify-between text-xs text-text-muted mb-3 px-2">
            <span className="truncate max-w-[150px]" title={session?.user?.email}>{session?.user?.email}</span>
            <span className="text-[10px] bg-accent/20 text-accent-light px-2 py-0.5 rounded font-mono">ADMIN</span>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full py-2 px-3 bg-dark-surface-2 hover:bg-red-500/20 hover:text-red-300 text-text-secondary text-xs font-semibold rounded-md border border-dark-border transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogOut size={14} />
            <span>Sign Out</span>
          </button>
        </div>
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
        <div className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-on-scroll is-visible z-50 border ${
          toastMessage.isError ? 'bg-dark-surface-2 border-amber-500/50 text-amber-300' : 'bg-dark-surface-2 border-accent/40 text-accent-light'
        }`}>
          <div className={`p-1.5 rounded-full ${toastMessage.isError ? 'bg-amber-500/20 text-amber-400' : 'bg-accent/20 text-accent'}`}>
            {toastMessage.isError ? <AlertCircle size={18} /> : <Check size={18} />}
          </div>
          <span className="font-medium text-sm">{toastMessage.text}</span>
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

const SectionHeader = ({ title, description, onSave }: { title: string, description: string, onSave: () => void }) => {
  const { isSaving } = usePortfolio();
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h2 className="text-2xl font-bold text-text mb-2">{title}</h2>
        <p className="text-sm text-text-muted">{description}</p>
      </div>
      <button 
        onClick={onSave}
        disabled={isSaving}
        className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dim disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition shrink-0 shadow-lg shadow-accent/20 cursor-pointer"
      >
        {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
        <span>{isSaving ? 'Saving to Supabase...' : 'Save Changes'}</span>
      </button>
    </div>
  );
};



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
