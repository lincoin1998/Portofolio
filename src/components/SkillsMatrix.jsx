import React, { useState } from 'react';
import { 
  Layers, 
  Layout, 
  Server, 
  Database, 
  CloudCog, 
  Radio, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/skillsData';

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState(0);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return Layout;
      case 'Server': return Server;
      case 'Database': return Database;
      case 'CloudCog': return CloudCog;
      case 'Radio': return Radio;
      default: return Cpu;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-cyber-900/40 border-y border-cyber-850">
      
      {/* Background ambient spot */}
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-emeraldSLA/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyanGlow/10 border border-cyanGlow/30 text-cyanGlow text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider font-semibold">Technical Capabilities Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Full Stack & Enterprise Domain Engineering
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Spanning modern reactive single-page applications, battle-tested enterprise PHP frameworks, high-throughput database tuning, and real-time telephony protocols.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {skillsData.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.icon);
            const isActive = activeCategory === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyanGlow/20 to-emerald-500/20 text-cyanGlow border border-cyanGlow/60 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                    : 'bg-cyber-850/80 text-slate-300 hover:text-white hover:bg-cyber-800 border border-cyber-750'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyanGlow' : 'text-slate-400'}`} />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Deep Dive Panel */}
        <div className="rounded-2xl bg-cyber-950/80 border border-cyber-800 p-6 sm:p-8 lg:p-10 shadow-xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-cyber-800 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center space-x-3">
                <span>{skillsData[activeCategory].category}</span>
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {skillsData[activeCategory].description}
              </p>
            </div>
            
            <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-cyber-900 border border-cyber-700 text-cyanGlow shrink-0 flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Production Tested • 5+ YOE</span>
            </div>
          </div>

          {/* Skills Grid for active category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skillsData[activeCategory].skills.map((skill, sIdx) => (
              <div 
                key={sIdx}
                className="p-5 rounded-xl bg-cyber-900/60 border border-cyber-800/80 hover:border-cyanGlow/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-bold text-white group-hover:text-cyanGlow transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-cyanGlow font-semibold">
                    {skill.level}% Proficiency
                  </span>
                </div>

                {/* Progress Bar Indicator */}
                <div className="w-full h-1.5 rounded-full bg-cyber-800 overflow-hidden mb-3">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                {/* Technical Highlight Details */}
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  {skill.highlight}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
