import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  Briefcase,
  ExternalLink
} from 'lucide-react';
import { profileData } from '../data/profileData';
import { projectsData } from '../data/projectsData';
import { skillsData } from '../data/skillsData';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn print:p-0">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 dark:bg-cyber-950/85 backdrop-blur-md transition-opacity print:hidden"
        onClick={onClose}
      ></div>

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl rounded-2xl bg-white dark:bg-cyber-900 border border-slate-200 dark:border-cyber-750 shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:px-6 bg-slate-50 dark:bg-cyber-950 border-b border-slate-200 dark:border-cyber-800 flex items-center justify-between gap-4 print:hidden">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-600 dark:bg-cyanGlow"></span>
            <span className="font-mono text-xs text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
              Executive Resume Preview • {profileData.name}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-cyber-850 hover:bg-slate-100 dark:hover:bg-cyber-800 border border-slate-300 dark:border-cyber-700 text-xs font-mono text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyanGlow transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white dark:bg-cyber-850 hover:bg-slate-100 dark:hover:bg-cyber-800 border border-slate-300 dark:border-cyber-750 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors shadow-sm"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable / Viewable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200 print:text-black print:p-8">
          
          {/* Header Section */}
          <div className="border-b border-slate-200 dark:border-cyber-800 print:border-gray-300 pb-6">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white print:text-black tracking-tight">
              {profileData.name}
            </h1>
            <p className="text-base font-medium text-cyan-700 dark:text-cyanGlow print:text-cyan-800 mt-1">
              {profileData.title} ({profileData.specialization}) — {profileData.experienceYears} Experience
            </p>

            {/* Coordinates Grid */}
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-slate-600 dark:text-slate-400 print:text-gray-700">
              <span className="flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyanGlow" />
                <span>{profileData.contact.email}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{profileData.contact.phone}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                <span>linkedin.com/in/partha-sarathi-biswal</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Github className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                <span>github.com/parthasarathibiswal</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyanGlow print:text-cyan-900 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-gray-800 leading-relaxed">
              {profileData.summary}
            </p>
          </div>

          {/* Core Technical Matrix */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyanGlow print:text-cyan-900 font-bold mb-2">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300 print:text-gray-800 font-mono">
              <div><strong className="text-slate-900 dark:text-white print:text-black">Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive UI/UX</div>
              <div><strong className="text-slate-900 dark:text-white print:text-black">Backend:</strong> Node.js, Express.js, PHP, CodeIgniter, RESTful APIs, WebSockets</div>
              <div><strong className="text-slate-900 dark:text-white print:text-black">Databases:</strong> MySQL, MongoDB, Microsoft SQL Server, Query Optimization</div>
              <div><strong className="text-slate-900 dark:text-white print:text-black">Infra & DevOps:</strong> CI/CD (Jenkins), Git, GitLab, SVN, Linux (Oracle Linux), Apache/Nginx, Docker</div>
              <div className="sm:col-span-2"><strong className="text-slate-900 dark:text-white print:text-black">Domain & Telecom:</strong> Telephony (SIP/RTP, Cisco PBX, PRI), ECR Systems, Conversational AI Prompt Eng.</div>
            </div>
          </div>

          {/* Key Deliverables & Enterprise Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyanGlow print:text-cyan-900 font-bold mb-3">
              Selected High-Impact Enterprise Deliveries
            </h2>
            <div className="space-y-4">
              {projectsData.slice(0, 4).map((p, idx) => (
                <div key={idx} className="border-l-2 border-slate-200 dark:border-cyber-750 print:border-gray-300 pl-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900 dark:text-white print:text-black">{p.title} — {p.client}</span>
                    <span className="font-mono text-cyan-700 dark:text-cyanGlow print:text-cyan-800">{p.role}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 mt-1 leading-relaxed">
                    {p.shortDesc}
                  </p>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 print:text-gray-600 mt-1">
                    Key Deliverable: {p.architecture[0]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200 dark:border-cyber-800 print:border-gray-300">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyanGlow print:text-cyan-900 font-bold mb-2">
                Degree & Education
              </h2>
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="text-xs text-slate-700 dark:text-slate-300 print:text-gray-800">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black">{edu.degree}</div>
                  <div>{edu.institution} ({edu.year})</div>
                  <div className="text-emerald-600 dark:text-emerald-400 print:text-emerald-800 font-mono text-[11px]">{edu.grade}</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyanGlow print:text-cyan-900 font-bold mb-2">
                Certifications
              </h2>
              <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-gray-800">
                {profileData.certifications.map((c, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span>{c.name}</span>
                    <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 print:text-gray-600">{c.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
