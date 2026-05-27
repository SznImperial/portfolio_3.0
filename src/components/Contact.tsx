import { useState, useRef } from 'react';
import { Mail, Send, CheckCircle2, ShieldAlert, Terminal } from 'lucide-react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('failed');
      setErrorMessage('Validation Error: Missing required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('failed');
      setErrorMessage('Validation Error: Invalid email address.');
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
      })
      .catch((error: unknown) => {
        console.error('EmailJS Core Failure:', error);
        setStatus('failed');
        setErrorMessage('Server Error: Something went wrong. Please try sending your message again.');
      });
  };

  return (
    <section
      id="contact"
      className="py-20 relative bg-cyber-void border-b border-cyber-accent/10"
      aria-label="Contact Channel"
    >
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-cyber-accent uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-cyber-accent" />
            <span>[ CONTACT_PORTAL ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-cyber-accent mx-auto rounded-full shadow-[0_0_10px_#39FF14]"></div>
          <p className="text-base text-cyber-light/60 font-sans max-w-xl mx-auto">
            Have a project in mind, a question, or just want to connect? Drop a message below and I will get back to you as soon as possible.
          </p>
        </div>

        <div className="cyber-border cyber-corners bg-cyber-card/45 backdrop-blur-sm p-6 sm:p-10 rounded-lg shadow-2xl">
          {status === 'transmitted' ? (
            <div className="py-12 space-y-6 text-center animate-fade-in" role="alert">
              <div className="inline-flex p-4 bg-cyber-accent/10 border border-cyber-accent/30 rounded-full">
                <CheckCircle2 className="w-12 h-12 text-cyber-accent shadow-[0_0_15px_rgba(57,255,20,0.4)]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-mono text-xl font-bold text-white uppercase tracking-wider">
                  Message Sent Successfully
                </h3>
                <p className="text-sm text-cyber-light/60 font-mono">
                  Thank you for reaching out. I have successfully received your message.
                </p>
              </div>
              <div className="border border-cyber-accent/20 bg-cyber-void/90 p-4 rounded font-mono text-xs text-left max-w-md mx-auto space-y-1">
                <div className="text-cyber-accent">// TRANSMISSION DETAILS</div>
                <div>Status: Delivered (200 OK)</div>
                <div>Destination: {portfolioData.socials.email}</div>
                <div>Priority Level: High Priority</div>
                <div className="pt-2 text-cyber-light/40">// Connection successfully completed.</div>
              </div>
              <button
                onClick={() => setStatus('idle')}
                className="font-mono text-xs text-cyber-accent border border-cyber-accent/40 px-4 py-2 hover:bg-cyber-accent/10 hover:border-cyber-accent transition-colors duration-200 cursor-pointer"
              >
                SEND_ANOTHER_MESSAGE
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

              {status === 'failed' && (
                <div className="p-4 border border-red-500/35 bg-red-500/5 rounded flex items-start space-x-3 text-left animate-shake" role="alert">
                  <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-xs font-bold text-red-500 uppercase block">
                      Submission Failed
                    </span>
                    <span className="text-sm text-red-200/80 font-sans">
                      {errorMessage}
                    </span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-xs text-cyber-accent font-semibold uppercase tracking-wider block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'transmitting'}
                    placeholder="Enter your name"
                    required
                    aria-required="true"
                    className="w-full bg-cyber-card border border-cyber-accent/20 rounded px-4 py-3 font-mono text-sm text-white placeholder-cyber-light/30 focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent/40 focus:outline-none transition-all duration-200 disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-xs text-cyber-accent font-semibold uppercase tracking-wider block">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'transmitting'}
                    placeholder="name@example.com"
                    required
                    aria-required="true"
                    className="w-full bg-cyber-card border border-cyber-accent/20 rounded px-4 py-3 font-mono text-sm text-white placeholder-cyber-light/30 focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent/40 focus:outline-none transition-all duration-200 disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label htmlFor="subject" className="font-mono text-xs text-cyber-accent font-semibold uppercase tracking-wider block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === 'transmitting'}
                  placeholder="What is this regarding?"
                  className="w-full bg-cyber-card border border-cyber-accent/20 rounded px-4 py-3 font-mono text-sm text-white placeholder-cyber-light/30 focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent/40 focus:outline-none transition-all duration-200 disabled:opacity-50"
                />
              </div>

              <div className="space-y-2 text-left">
                <label htmlFor="message" className="font-mono text-xs text-cyber-accent font-semibold uppercase tracking-wider block">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'transmitting'}
                  rows={5}
                  placeholder="Type your message details here..."
                  required
                  aria-required="true"
                  className="w-full bg-cyber-card border border-cyber-accent/20 rounded px-4 py-3 font-mono text-sm text-white placeholder-cyber-light/30 focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent/40 focus:outline-none transition-all duration-200 disabled:opacity-50 resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'transmitting'}
                  className="w-full flex items-center justify-center space-x-2 bg-cyber-accent text-black font-mono font-bold text-sm px-6 py-4 border border-cyber-accent hover:bg-transparent hover:text-cyber-accent transition-all duration-300 shadow-[0_0_10px_rgba(57,255,20,0.3)] hover:shadow-[0_0_20px_rgba(57,255,20,0.7)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {status === 'transmitting' ? (
                    <>
                      <Terminal className="w-4 h-4 animate-spin text-black group-hover:text-cyber-accent" />
                      <span>SENDING MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}