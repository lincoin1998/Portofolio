import React from 'react';
import { 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  BookOpen,
  FileCheck
} from 'lucide-react';
import { profileData } from '../data/profileData';

export default function CredentialsSection() {
  return (
    <section id="credentials" className="py-20 relative z-10 bg-slate-100/60 dark:bg-cyber-900/30 border-y border-slate-200 dark:border-cyber-850">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyanGlow text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider font-semibold">Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Professional Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Formal engineering foundations reinforced with continuous industry certifications in scalable architectures and secure infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Degree & Higher Education (Left Column) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2 pb-3 border-b border-slate-200 dark:border-cyber-800">
              <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyanGlow" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider">
                Degree & Academic Background
              </h3>
            </div>

            {profileData.education.map((edu, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-cyber-950/80 border border-slate-200 dark:border-cyanGlow/30 shadow-sm relative overflow-hidden group"
              >
                {/* Status Pill */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-700 dark:text-cyanGlow border border-cyan-500/25 font-semibold flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3 h-3 text-cyan-600 dark:text-cyanGlow" />
                    <span>{edu.status}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{edu.year}</span>
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyanGlow transition-colors">
                  {edu.degree}
                </h4>

                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {edu.institution}
                </div>

                <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-4 font-medium">
                  {edu.grade}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-cyber-900/80 p-3.5 rounded-xl border border-slate-200 dark:border-cyber-800">
                  <strong className="text-slate-800 dark:text-slate-200">Academic Focus:</strong> {edu.highlights}
                </p>

                {/* Helpful update reminder */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-cyber-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>Customizable in <code className="text-cyan-700 dark:text-cyanGlow">profileData.js</code></span>
                  <span className="text-slate-500 dark:text-slate-400">Verified Engineering Degree</span>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Certifications & Accreditations (Right Column) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2 pb-3 border-b border-slate-200 dark:border-cyber-800">
              <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider">
                Certifications & Accreditations
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileData.certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-white dark:bg-cyber-950/70 border border-slate-200 dark:border-cyber-800 hover:border-emerald-500/40 transition-all group flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25">
                        {cert.year}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                        {cert.credentialId}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors leading-snug mb-1">
                      {cert.name}
                    </h4>

                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-mono">
                      {cert.issuer}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-cyber-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Certified</span>
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">Industry Validated</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Note on Adding More Certs */}
            <div className="p-4 rounded-xl bg-white dark:bg-cyber-950/40 border border-slate-200 dark:border-cyber-800 text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between shadow-sm">
              <span>Have additional AWS, Cisco, or Google Cloud certs?</span>
              <span className="text-cyan-700 dark:text-cyanGlow">Easily append in profileData.js</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
