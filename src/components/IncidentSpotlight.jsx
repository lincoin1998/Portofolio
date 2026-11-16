import React, { useState } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  Terminal, 
  Server, 
  Lock, 
  AlertTriangle,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function IncidentSpotlight({ onSelectProject }) {
  const adaniProject = projectsData.find(p => p.id === 'adani-security');
  const [activeTab, setActiveTab] = useState('timeline');

  const timelinePhases = [
    {
      time: "T+0h - 12h",
      title: "Threat Identification & Containment",
      action: "Identified high-priority vulnerability vectors in critical electrical distribution endpoints; isolated test environments and established reverse-proxy sanitization."
    },
    {
      time: "T+12h - 24h",
      title: "Hardened Patch Engineering",
      action: "Developed parameterized SQL queries and cryptographic request validation filters in PHP/MySQL stack without altering core telemetry interfaces."
    },
    {
      time: "T+24h - 36h",
      title: "Canary Testing on Linux Staging",
      action: "Executed 10,000+ automated stress and penetration tests on staging clusters; verified zero payload escapes and sub-millisecond overhead."
    },
    {
      time: "T+36h - 48h",
      title: "Zero-Downtime Hot Cut-Over",
      action: "Executed phased blue/green rolling rollout across live nodes. Zero dropped customer transactions, zero power grid communication loss, 100% compliance."
    }
  ];

  return (
    <section id="incident" className="py-20 relative overflow-hidden">
      {/* Subtle Amber Incident Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-mono mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider font-semibold">Mission-Critical Incident Response</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            High-Stakes Resilience in Action
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl mt-2">
            When critical public and industrial infrastructure is on the line, there is zero margin for error. Here is how high-pressure engineering saved live operations without a single second of outage.
          </p>
        </div>

        {/* Hero Card Container */}
        <div className="relative rounded-2xl bg-white dark:bg-gradient-to-b dark:from-cyber-850 dark:to-cyber-900 border border-amber-500/30 shadow-md dark:shadow-[0_0_40px_rgba(245,158,11,0.08)] overflow-hidden">
          
          {/* Top Banner Bar */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-cyber-950/80 border-b border-slate-200 dark:border-cyber-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              <span className="font-mono text-sm font-bold text-slate-900 dark:text-white tracking-wide">
                CASE STUDY: ADANI ELECTRICITY CRITICAL REMEDIATION
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-semibold border border-amber-500/40">
                48-Hour Rapid Task Force
              </span>
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-500/40">
                0s Downtime
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Context & Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Target Environment</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  Metropolitan Electrical Grid & Consumer Infrastructure
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-3">
                  Appointed as <strong>Lead Developer</strong> to resolve a critical security vulnerability threatening enterprise compliance and telemetry integrity. With millions relying on power distribution services, standard maintenance windows were not an option.
                </p>
              </div>

              {/* Key Metrics Pill Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-cyber-950 border border-slate-200 dark:border-cyber-800">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Total Downtime</div>
                  <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">0.00s</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Continuous live availability</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-cyber-950 border border-slate-200 dark:border-cyber-800">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Resolution Window</div>
                  <div className="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400 mt-1">&lt; 48 Hours</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">From triage to full rollout</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-cyber-950 border border-slate-200 dark:border-cyber-800">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Compliance Status</div>
                  <div className="text-2xl font-bold font-mono text-cyan-600 dark:text-cyanGlow mt-1">100%</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Enterprise security audit passed</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-cyber-950 border border-slate-200 dark:border-cyber-800">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Data Loss</div>
                  <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">0 Bytes</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Full audit trail preservation</div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectProject(adaniProject)}
                className="w-full py-3 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-800 dark:text-amber-300 font-mono text-xs font-semibold flex items-center justify-center space-x-2 transition-all group"
              >
                <span>Inspect Technical Architecture & Deep Dive</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Column: Interactive 48-Hour Operation Timeline */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-cyber-950/70 p-6 rounded-xl border border-slate-200 dark:border-cyber-800 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-cyber-800">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                    <span>Operation Timeline Breakdown</span>
                  </span>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                    Lead: Partha Sarathi Biswal
                  </span>
                </div>

                <div className="space-y-4">
                  {timelinePhases.map((phase, idx) => (
                    <div key={idx} className="relative pl-6 pb-2 border-l border-slate-300 dark:border-cyber-700 last:border-0 last:pb-0">
                      {/* Node point */}
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-cyber-900 border-2 border-amber-500 dark:border-amber-400 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                      </div>

                      <div className="flex items-baseline space-x-2">
                        <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300">
                          {phase.time}
                        </span>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                          — {phase.title}
                        </span>
                      </div>
                      
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        {phase.action}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-cyber-800/80 flex items-center space-x-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Verified outcome: No rollbacks required. Zero disruption to downstream grid telemetry.</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
