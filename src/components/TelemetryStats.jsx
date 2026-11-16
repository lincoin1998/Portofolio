import React from 'react';
import { Activity, ShieldAlert, Server, Zap, Radio, CheckCircle } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function TelemetryStats() {
  const stats = [
    {
      label: "Enterprise Experience",
      value: profileData.experienceYears,
      unit: "Years",
      desc: "Full-cycle SDLC in mission-critical environments",
      icon: Zap,
      color: "text-cyanGlow",
      bgBorder: "border-cyanGlow/20"
    },
    {
      label: "System Availability SLA",
      value: profileData.slaUptime,
      unit: "Uptime",
      desc: "High-availability clusters & ECSAPP1 stability",
      icon: Activity,
      color: "text-emerald-400",
      bgBorder: "border-emerald-500/20"
    },
    {
      label: "Emergency Patching Speed",
      value: "48",
      unit: "Hours",
      desc: "Zero-downtime hot-patch for Adani Electricity",
      icon: ShieldAlert,
      color: "text-amber-400",
      bgBorder: "border-amber-500/20"
    },
    {
      label: "Telecom Call Scale",
      value: "10M+",
      unit: "Records/Mo",
      desc: "High-volume CDR dump pipeline for GoIndigo",
      icon: Radio,
      color: "text-purple-400",
      bgBorder: "border-purple-500/20"
    }
  ];

  return (
    <section id="stats" className="py-12 relative z-20 border-y border-cyber-850 bg-cyber-900/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Telemetry Pill */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-cyber-800/80">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyanGlow animate-ping"></span>
            <span className="tracking-widest uppercase text-slate-300 font-semibold">Live Operational Telemetry</span>
          </div>
          <div className="text-[11px] font-mono text-emerald-400 flex items-center space-x-1.5">
            <CheckCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">ALL PROTOCOLS NOMINAL</span>
            <span>(v2.4.9)</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={idx}
                className={`relative p-5 rounded-xl bg-cyber-850/60 border ${stat.bgBorder} hover:border-slate-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-black/40 group`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </span>
                  <div className={`p-2 rounded-lg bg-cyber-900 border border-cyber-700/60 ${stat.color} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-baseline space-x-2 mb-1">
                  <span className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white`}>
                    {stat.value}
                  </span>
                  <span className={`text-sm font-semibold font-mono ${stat.color}`}>
                    {stat.unit}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-snug">
                  {stat.desc}
                </p>

                {/* Subtly glowing bottom corner accent */}
                <div className="absolute bottom-0 right-0 w-8 h-8 overflow-hidden rounded-br-xl pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-cyber-700/40 group-hover:bg-cyanGlow/40 transition-colors"></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
