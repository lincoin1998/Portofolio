import React from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  ArrowRight, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Server, 
  Radio, 
  Download,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Hero({ onOpenTerminal, onOpenResume }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Decorative Ambient Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyanGlow/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emeraldSLA/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Radar sweeping scan effect (visual mission control) */}
      <div className="absolute top-20 right-10 w-72 h-72 border border-cyber-800/40 rounded-full opacity-20 pointer-events-none hidden lg:block">
        <div className="absolute inset-0 border border-cyber-700/30 rounded-full m-8"></div>
        <div className="absolute inset-0 border border-cyber-700/20 rounded-full m-16"></div>
        <div className="w-full h-1/2 origin-bottom bg-gradient-to-t from-cyanGlow/10 to-transparent animate-radar rounded-t-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        {/* Top Operational Status Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyber-850/80 border border-cyanGlow/30 text-xs font-mono text-cyanGlow backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="tracking-wide uppercase text-[11px] font-semibold">
              Mission-Critical Infrastructure Specialist
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-cyber-850/60 border border-cyber-700 text-xs font-mono text-slate-300">
            <span className="text-emerald-400 font-bold">5+ YOE</span>
            <span>• High Availability (99.9%)</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Architecting <span className="bg-gradient-to-r from-cyan-400 via-cyan-200 to-emerald-400 bg-clip-text text-transparent">High-Scale</span> Enterprise Resilience
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl mx-auto">
            Hi, I'm <strong className="text-white font-semibold">{profileData.name}</strong> — a Full Stack Engineer specializing in <span className="text-cyanGlow font-medium">MERN</span> and enterprise <span className="text-cyanGlow font-medium">PHP/CodeIgniter</span>. Proven track record delivering zero-downtime infrastructure for <strong className="text-slate-200">Aviation, Steel Manufacturing, Electrical Grids, and Conversational AI</strong>.
          </p>

          {/* Dedicated Social & Contact Quick-Access Bar (Phone, Email, LinkedIn, GitHub) */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs sm:text-sm font-mono">
            {/* Email link */}
            <a 
              href={`mailto:${profileData.contact.email}`}
              className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-cyber-900 border border-cyber-700/80 hover:border-cyanGlow/60 hover:text-cyanGlow text-slate-300 transition-all shadow-sm group"
              title="Send Direct Email"
            >
              <Mail className="w-4 h-4 text-cyanGlow group-hover:scale-110 transition-transform" />
              <span>{profileData.contact.email}</span>
            </a>

            {/* Phone link */}
            <a 
              href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-cyber-900 border border-cyber-700/80 hover:border-emeraldSLA/60 hover:text-emeraldSLA text-slate-300 transition-all shadow-sm group"
              title="Call Phone Number"
            >
              <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>{profileData.contact.phone}</span>
            </a>

            {/* LinkedIn link */}
            <a 
              href={profileData.contact.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-cyber-900 border border-cyber-700/80 hover:border-blue-400/60 hover:text-blue-400 text-slate-300 transition-all shadow-sm group"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>

            {/* GitHub link */}
            <a 
              href={profileData.contact.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-cyber-900 border border-cyber-700/80 hover:border-slate-300 hover:text-white text-slate-300 transition-all shadow-sm group"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4 text-slate-200 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-cyber-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center space-x-2 group"
            >
              <span>Explore Enterprise Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button 
              onClick={onOpenTerminal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-cyber-850 hover:bg-cyber-800 border border-cyber-700 hover:border-cyanGlow/50 text-slate-200 hover:text-cyanGlow font-mono text-sm transition-all flex items-center justify-center space-x-2 group"
            >
              <Terminal className="w-4 h-4 text-cyanGlow group-hover:animate-pulse" />
              <span>Launch Terminal CLI</span>
            </button>

            <button 
              onClick={onOpenResume}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-cyber-900 hover:bg-cyber-850 border border-cyber-700 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-400 font-mono text-sm transition-all flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Credentials Teaser Badge (Degree & Certs Quick Reference) */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 font-mono">
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyanGlow" />
              <span>Degree: <strong className="text-slate-300 font-semibold">{profileData.education[0]?.degree?.split(' in ')[0] || 'B.Tech CSE'}</strong></span>
            </span>
            <span className="text-cyber-700">•</span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Certifications: <strong className="text-slate-300 font-semibold">{profileData.certifications.length} Enterprise Badges</strong></span>
            </span>
            <span className="text-cyber-700">•</span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Security: <strong className="text-slate-300 font-semibold">Zero-Downtime Patch Certified</strong></span>
            </span>
          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#stats" 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyanGlow transition-colors animate-bounce p-2"
        aria-label="Scroll down to metrics"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
