import React from 'react';
import { 
  ArrowUp, 
  ShieldCheck, 
  Activity, 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  Heart
} from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-cyber-950 border-t border-cyber-850 pt-16 pb-12 overflow-hidden text-slate-400">
      
      {/* Background ambient line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-cyber-850">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-cyber-850 border border-cyanGlow/40 flex items-center justify-center text-cyanGlow font-mono font-bold text-base shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                PS
              </div>
              <span className="font-bold text-lg text-white font-mono">
                {profileData.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Full Stack Developer specializing in high-availability enterprise architectures, MERN, PHP/CodeIgniter, telephony infrastructure, and conversational AI.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-cyber-900 border border-emerald-500/25 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Cluster Status: ECSAPP1 Nominal • SLA: {profileData.slaUptime}</span>
            </div>
          </div>

          {/* Quick Nav Links (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-cyanGlow transition-colors">Overview</a></li>
              <li><a href="#incident" className="hover:text-cyanGlow transition-colors">Incident Room (Adani 48h)</a></li>
              <li><a href="#projects" className="hover:text-cyanGlow transition-colors">Enterprise Case Studies</a></li>
              <li><a href="#skills" className="hover:text-cyanGlow transition-colors">Technical Capabilities</a></li>
              <li><a href="#timeline" className="hover:text-cyanGlow transition-colors">Career SDLC Timeline</a></li>
              <li><a href="#credentials" className="hover:text-cyanGlow transition-colors">Degree & Certifications</a></li>
              <li><a href="#contact" className="hover:text-cyanGlow transition-colors">Contact Coordinates</a></li>
            </ul>
          </div>

          {/* Channels & Coordinates (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Contact Channels & Credentials
            </h4>
            <div className="space-y-2.5 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyanGlow" />
                <a href={`mailto:${profileData.contact.email}`} className="text-slate-300 hover:text-cyanGlow transition-colors">
                  {profileData.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-emerald-400 transition-colors">
                  {profileData.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="w-4 h-4 text-blue-400" />
                <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Github className="w-4 h-4 text-slate-200" />
                <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  GitHub Repositories
                </a>
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-slate-500">
              Verified Degree: <span className="text-slate-400">B.Tech (CSE)</span> • Certs: <span className="text-emerald-400">4 Active</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Partha Sarathi Biswal. Engineered for High Availability & Scale.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyber-900 border border-cyber-800 text-slate-400 hover:text-cyanGlow hover:border-cyanGlow/40 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
