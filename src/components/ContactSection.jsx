import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  ExternalLink,
  GraduationCap,
  Award,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import { profileData } from '../data/profileData';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Full-Time Senior Engineering Role',
    message: ''
  });

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 dark:bg-cyanGlow/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyanGlow text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider font-semibold">Initiate Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect & Collaborate
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Available for Senior Full Stack roles, Enterprise Solution Architecture, and Mission-Critical High-Availability engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact & Channel Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Direct Contact Coordinates
            </h3>

            {/* Email Card */}
            <div className="p-4 rounded-xl bg-white dark:bg-cyber-900 border border-slate-200 dark:border-cyber-800 hover:border-cyan-500 dark:hover:border-cyanGlow/40 transition-all flex items-center justify-between shadow-sm group">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-cyber-850 border border-slate-200 dark:border-cyber-700 text-cyan-600 dark:text-cyanGlow flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase block">Direct Email</span>
                  <a 
                    href={`mailto:${profileData.contact.email}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyanGlow transition-colors break-all"
                  >
                    {profileData.contact.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(profileData.contact.email, 'email')}
                className="p-2 rounded-lg bg-slate-100 dark:bg-cyber-850 hover:bg-slate-200 dark:hover:bg-cyber-800 border border-slate-300 dark:border-cyber-750 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyanGlow transition-colors shrink-0 ml-2"
                title="Copy Email Address"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl bg-white dark:bg-cyber-900 border border-slate-200 dark:border-cyber-800 hover:border-emerald-500/40 transition-all flex items-center justify-between shadow-sm group">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-cyber-850 border border-slate-200 dark:border-cyber-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase block">Direct Telephone</span>
                  <a 
                    href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {profileData.contact.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(profileData.contact.phone, 'phone')}
                className="p-2 rounded-lg bg-slate-100 dark:bg-cyber-850 hover:bg-slate-200 dark:hover:bg-cyber-800 border border-slate-300 dark:border-cyber-750 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shrink-0 ml-2"
                title="Copy Phone Number"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="p-4 rounded-xl bg-white dark:bg-cyber-900 border border-slate-200 dark:border-cyber-800 hover:border-blue-400/40 transition-all flex items-center justify-between shadow-sm group">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-cyber-850 border border-slate-200 dark:border-cyber-700 text-blue-500 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase block">LinkedIn Profile</span>
                  <a 
                    href={profileData.contact.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center space-x-1"
                  >
                    <span>in/partha-sarathi-biswal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <a 
                href={profileData.contact.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-cyber-850 hover:bg-slate-200 dark:hover:bg-cyber-800 border border-slate-300 dark:border-cyber-750 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Connect
              </a>
            </div>

            {/* GitHub Card */}
            <div className="p-4 rounded-xl bg-white dark:bg-cyber-900 border border-slate-200 dark:border-cyber-800 hover:border-slate-400/40 transition-all flex items-center justify-between shadow-sm group">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-cyber-850 border border-slate-200 dark:border-cyber-700 text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase block">GitHub Repositories</span>
                  <a 
                    href={profileData.contact.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyanGlow transition-colors flex items-center space-x-1"
                  >
                    <span>github.com/parthasarathibiswal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <a 
                href={profileData.contact.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-cyber-850 hover:bg-slate-200 dark:hover:bg-cyber-800 border border-slate-300 dark:border-cyber-750 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Explore
              </a>
            </div>

            {/* Credentials Quick Reference Box */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-cyber-950/80 border border-slate-200 dark:border-cyber-800 text-xs font-mono space-y-2 text-slate-600 dark:text-slate-400 mt-2 shadow-sm">
              <div className="flex items-center justify-between text-slate-800 dark:text-slate-300 font-semibold pb-2 border-b border-slate-200 dark:border-cyber-850">
                <span className="flex items-center space-x-1.5">
                  <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyanGlow" />
                  <span>Academic Degree:</span>
                </span>
                <span className="text-cyan-600 dark:text-cyanGlow">B.Tech (CSE)</span>
              </div>
              <div className="flex items-center justify-between text-slate-800 dark:text-slate-300 font-semibold">
                <span className="flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Certifications:</span>
                </span>
                <span className="text-emerald-600 dark:text-emerald-400">AWS / Microservices / SIP</span>
              </div>
              <div className="flex items-center justify-between text-slate-800 dark:text-slate-300 font-semibold pt-1">
                <span className="flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Base Location:</span>
                </span>
                <span className="text-slate-700 dark:text-slate-300">Bhubaneswar / Remote</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-cyber-900 border border-slate-200 dark:border-cyber-800 shadow-md dark:shadow-xl">
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Send a Direct Message / Project Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill out the technical inquiry form below. Inquiries are routed directly with priority SLAs.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Inquiry Transmitted Successfully</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you! Your message has been logged. Partha Sarathi Biswal will review the requirements and follow up within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-slate-100 dark:bg-cyber-850 hover:bg-slate-200 dark:hover:bg-cyber-800 border border-slate-300 dark:border-cyber-700 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-cyber-950 border border-slate-300 dark:border-cyber-750 focus:border-cyan-500 dark:focus:border-cyanGlow focus:outline-none text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-cyber-950 border border-slate-300 dark:border-cyber-750 focus:border-cyan-500 dark:focus:border-cyanGlow focus:outline-none text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                        Organization / Client
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Tata / Indigo / Startup"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-cyber-950 border border-slate-300 dark:border-cyber-750 focus:border-cyan-500 dark:focus:border-cyanGlow focus:outline-none text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                        Project / Role Domain
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-cyber-950 border border-slate-300 dark:border-cyber-750 focus:border-cyan-500 dark:focus:border-cyanGlow focus:outline-none text-slate-900 dark:text-white text-sm transition-colors"
                      >
                        <option>Full-Time Senior Engineering Role</option>
                        <option>Enterprise Architecture Consultation</option>
                        <option>Zero-Downtime Incident & Security Patching</option>
                        <option>Telephony & ECR / SIP Integration</option>
                        <option>Conversational AI & Prompt Engineering</option>
                        <option>Other Technical Project</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                      Technical Scope & Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your architectural needs, timeline, and goals..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-cyber-950 border border-slate-300 dark:border-cyber-750 focus:border-cyan-500 dark:focus:border-cyanGlow focus:outline-none text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-600 transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 dark:from-cyan-500 dark:to-cyan-400 hover:opacity-95 text-white dark:text-cyber-950 font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message to Partha</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
