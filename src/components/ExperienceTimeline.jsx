import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  GitBranch, 
  Server, 
  ShieldCheck 
} from 'lucide-react';
import { timelineData } from '../data/timelineData';

export default function ExperienceTimeline() {
  const sdlcStages = [
    { title: "Architecture & RFC", desc: "Technical feasibility, high-availability architecture proposals (e.g. MOCI Tender).", icon: Layers },
    { title: "Full-Stack Dev", desc: "Robust APIs, MERN dashboards, CodeIgniter business logic, telephony integration.", icon: GitBranch },
    { title: "CI/CD & Hardening", desc: "Automated Jenkins pipelines, Dev/UAT/Pre-prod, vulnerability penetration scans.", icon: Server },
    { title: "Live SLA & Cut-Over", desc: "Zero-downtime deployment (Adani, ESAF Bank), 99.9% SLA monitoring on ECSAPP1.", icon: ShieldCheck }
  ];

  return (
    <section id="timeline" className="py-24 relative z-10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyanGlow/10 border border-cyanGlow/30 text-cyanGlow text-xs font-mono mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider font-semibold">Career Journey & Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise Experience & SDLC Ownership
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
              Over 5 years of demonstrated impact across critical aerospace, industrial safety, and public sector software lifecycles.
            </p>
          </div>
        </div>

        {/* Full-Cycle SDLC Banner */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyber-900 via-cyber-850 to-cyber-900 border border-cyber-750">
          <div className="flex items-center space-x-2 mb-4 text-xs font-mono text-cyanGlow">
            <span className="w-2 h-2 rounded-full bg-cyanGlow animate-ping"></span>
            <span className="uppercase tracking-wider font-bold">End-to-End SDLC Lifecycle Ownership</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sdlcStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-cyber-950/80 border border-cyber-800">
                  <div className="flex items-center space-x-2 text-cyanGlow mb-2">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold text-white">0{idx + 1}. {stage.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-cyber-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-cyber-950 border-2 border-cyanGlow/80 flex items-center justify-center group-hover:scale-125 group-hover:border-cyanGlow transition-transform">
                <div className="w-2 h-2 rounded-full bg-cyanGlow"></div>
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-cyber-900/90 border border-cyber-800 hover:border-cyanGlow/40 transition-all duration-300 shadow-lg">
                
                {/* Period & Role */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-cyanGlow px-2.5 py-1 rounded bg-cyanGlow/10 border border-cyanGlow/25 inline-block w-fit">
                    {item.period}
                  </span>
                  <div className="flex items-center space-x-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </span>
                    <span>•</span>
                    <span className="text-emerald-400">{item.type}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {item.role}
                </h3>
                <div className="text-sm font-semibold text-slate-300 mb-4">
                  {item.company}
                </div>

                {/* Client Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.clientBadges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyber-950 text-slate-300 border border-cyber-700"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {item.summary}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-2 pt-2 border-t border-cyber-800">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{ach}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
