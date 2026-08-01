import { useState, useRef } from 'react';
import { Mail, Send, CheckCircle2, ShieldAlert, Terminal, Clock, Github, Linkedin, AtSign, Globe, HelpCircle, Briefcase, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'transmitting' | 'transmitted' | 'failed'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleIntentClick = (intent: string) => {
    if (selectedIntent === intent) {
      setSelectedIntent(null);
      setFormData((prev) => ({ ...prev, subject: '' }));
    } else {
      setSelectedIntent(intent);
      setFormData((prev) => ({ ...prev, subject: `[${intent}] - ` }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('failed');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('failed');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('transmitting');

    const SERVICE_ID = 'service_3vvno3k';
    const TEMPLATE_ID = 'template_u5am1wb';
    const PUBLIC_KEY = 'WsUM_ipAYkJfPKxUU';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY)
      .then(() => {
        setStatus('transmitted');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setSelectedIntent(null);
      })
      .catch((error: unknown) => {
        console.error('EmailJS Core Failure:', error);
        setStatus('failed');
        setErrorMessage('Something went wrong on our end. Please try sending your message again.');
      });
  };

  const intentTags = [
    'Freelance / Contract Work',
    'Full-Time Remote Role',
    'SaaS Product Development',
    'AI & Data Solutions',
    'General Connect'
  ];

  const faqs = [
    {
      question: "What is your primary tech stack and specialty?",
      answer: "I specialize in building full-stack web platforms using Next.js 16, React 19, TypeScript, and Tailwind CSS. On the backend, I design database schemas and secure row-level access policies with Supabase and PostgreSQL. For AI implementations, I integrate models like Groq LLaMA 3.3 for conversational features and document processing."
    },
    {
      question: "Are you open to full-time roles or global relocation?",
      answer: "Yes. While I am currently based in Lagos, Nigeria, I work seamlessly with remote engineering teams across global time zones and am open to relocation for full-time software engineering and data science roles."
    },
    {
      question: "How do new projects or consulting engagements start?",
      answer: "Send a brief message outlining your project goals, timelines, or role requirements. I will review your note and respond within 24 hours to schedule an introductory conversation and discuss the best approach."
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 relative bg-dark-bg border-t border-dark-border/60 text-text overflow-hidden"
      aria-label="Contact Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-accent-light uppercase tracking-widest px-3 py-1 rounded bg-dark-surface border border-dark-border">
            <Mail className="w-3.5 h-3.5 text-accent-light" />
            <span>Contact &amp; Inquiries</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s work together
          </h2>
          <p className="text-base sm:text-lg text-text-muted font-sans leading-relaxed max-w-2xl">
            Whether you are building a new software product, scaling an existing team, or exploring full-time engineering candidates, I would love to hear from you.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Contact Details & Profiles (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email & Location Card */}
            <div className="bg-dark-surface/90 border border-dark-border rounded-xl p-6 sm:p-7 shadow-xl space-y-6">
              <div className="pb-5 border-b border-dark-border/60">
                <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent-light" />
                  Email Address
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-dark-bg p-3.5 rounded-lg border border-dark-border">
                  <span className="font-mono text-sm font-bold text-white tracking-tight selection:bg-accent/30">
                    {portfolioData.socials.email}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      aria-label="Copy email address"
                      className="px-3 py-1.5 rounded bg-dark-surface hover:bg-accent/20 border border-dark-border hover:border-accent/60 text-xs font-mono font-medium text-text-secondary hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`mailto:${portfolioData.socials.email}`}
                      className="p-1.5 rounded bg-accent/20 border border-accent/40 text-accent-light hover:bg-accent hover:text-white transition-colors"
                      title="Send an email"
                      aria-label="Send an email"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Location & Availability */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded bg-dark-bg border border-dark-border/80 text-emerald-400 shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-text">Location &amp; Work Flexibility</div>
                    <div className="text-text-muted text-xs leading-relaxed mt-0.5">
                      Based in Lagos, Nigeria (WAT / UTC+1)
                    </div>
                    <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Open to global relocation &amp; remote roles
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded bg-dark-bg border border-dark-border/80 text-indigo-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-text">Response Time</div>
                    <div className="text-text-muted text-xs leading-relaxed mt-0.5">
                      I aim to respond to all project inquiries and recruiter notes within 24 hours.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="bg-dark-surface/90 border border-dark-border rounded-xl p-6 sm:p-7 shadow-xl">
              <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-accent-light" />
                Professional Profiles
              </div>

              <div className="space-y-3">
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-dark-bg/80 border border-dark-border hover:border-accent/60 hover:bg-dark-bg transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-text-secondary group-hover:text-accent-light transition-colors" />
                    <div>
                      <div className="font-bold text-sm text-text">GitHub</div>
                      <div className="text-xs text-text-muted">Explore codebases and open-source contributions</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-white transition-colors" />
                </a>

                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-dark-bg/80 border border-dark-border hover:border-accent/60 hover:bg-dark-bg transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-text-secondary group-hover:text-accent-light transition-colors" />
                    <div>
                      <div className="font-bold text-sm text-text">LinkedIn</div>
                      <div className="text-xs text-text-muted">Connect for full-time roles and professional networking</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-white transition-colors" />
                </a>

                <a
                  href={portfolioData.socials.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-dark-bg/80 border border-dark-border hover:border-accent/60 hover:bg-dark-bg transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <AtSign className="w-5 h-5 text-text-secondary group-hover:text-accent-light transition-colors" />
                    <div>
                      <div className="font-bold text-sm text-text">Threads</div>
                      <div className="text-xs text-text-muted">@_ayomiposi4tw • Follow my development logs and projects</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-dark-surface/95 border border-dark-border rounded-xl p-6 sm:p-10 shadow-2xl relative">
            
            {status === 'transmitted' ? (
              <div className="py-16 space-y-6 text-center animate-fade-in" role="alert">
                <div className="inline-flex p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.4)]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-2xl text-white tracking-tight">
                    Message Sent Successfully
                  </h3>
                  <p className="text-base text-text-muted font-sans max-w-md mx-auto">
                    Thank you for reaching out! I have received your note and will get back to you shortly.
                  </p>
                </div>
                <div className="border border-dark-border bg-dark-bg p-5 rounded-lg text-xs text-left max-w-md mx-auto space-y-1.5 shadow-inner font-sans">
                  <div className="text-accent-light font-semibold mb-1">Delivery Summary</div>
                  <div className="text-text-secondary">Status: Successfully transmitted to inbox</div>
                  <div className="text-text-secondary">Recipient: {portfolioData.socials.email}</div>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-xs font-medium text-accent-light border border-accent/50 px-5 py-2.5 rounded hover:bg-accent/20 transition-all duration-150 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                {status === 'failed' && (
                  <div className="p-4 border border-red-500/35 bg-red-500/10 rounded-lg flex items-start space-x-3 text-left" role="alert">
                    <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-xs font-bold text-red-400 uppercase block">
                        Unable to Send
                      </span>
                      <span className="text-sm text-red-200 font-sans">
                        {errorMessage}
                      </span>
                    </div>
                  </div>
                )}

                {/* Intent Selection Tags */}
                <div className="space-y-2.5">
                  <label className="text-xs text-text-secondary font-medium uppercase tracking-wider flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-accent-light" />
                    What are you looking for? (Optional)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {intentTags.map((intent, idx) => {
                      const isSelected = selectedIntent === intent;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleIntentClick(intent)}
                          className={`px-3 py-1.5 rounded-md text-xs transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-accent text-white border border-accent shadow-[0_0_12px_rgba(124,58,237,0.4)] font-medium'
                              : 'bg-dark-bg border border-dark-border/90 text-text-muted hover:border-accent/60 hover:text-text'
                          }`}
                        >
                          {intent}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs text-text-secondary font-semibold uppercase tracking-wider block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'transmitting'}
                      placeholder="Jane Doe"
                      required
                      aria-required="true"
                      className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent/50 focus:outline-none transition-all duration-150 disabled:opacity-50 font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs text-text-secondary font-semibold uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'transmitting'}
                      placeholder="jane@company.com"
                      required
                      aria-required="true"
                      className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent/50 focus:outline-none transition-all duration-150 disabled:opacity-50 font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs text-text-secondary font-semibold uppercase tracking-wider block">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === 'transmitting'}
                    placeholder="Project consultation, open engineering role, etc."
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent/50 focus:outline-none transition-all duration-150 disabled:opacity-50 font-sans"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs text-text-secondary font-semibold uppercase tracking-wider block">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'transmitting'}
                    rows={6}
                    placeholder="Tell me a bit about your project goals, timeline, or team role requirements..."
                    required
                    aria-required="true"
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent/50 focus:outline-none transition-all duration-150 disabled:opacity-50 resize-y font-sans leading-relaxed"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={status === 'transmitting'}
                    className="w-full flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-white font-semibold text-sm px-6 py-4 rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {status === 'transmitting' ? (
                      <>
                        <Terminal className="w-4 h-4 animate-spin text-white" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Section */}
        <div className="pt-12 border-t border-dark-border/60">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center space-x-2 font-mono text-xs text-text-muted uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-accent-light" />
              <span>Common Questions</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-dark-surface/70 border border-dark-border rounded-xl p-6 flex flex-col justify-between hover:border-dark-border/90 transition-colors">
                <div>
                  <h4 className="font-bold text-base text-white mb-3 tracking-tight">
                    {faq.question}
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}