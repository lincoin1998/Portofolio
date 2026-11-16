import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Server, 
  ShieldCheck, 
  Layers, 
  Activity, 
  Cpu, 
  Terminal
} from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-cyber-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-cyber-900 border border-cyber-700/80 shadow-2xl shadow-cyanGlow/10 overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Top Header */}
        <div className="p-6 bg-cyber-950 border-b border-cyber-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono mb-2">
              <span className="px-2.5 py-0.5 rounded bg-cyanGlow/10 text-cyanGlow border border-cyanGlow/30 font-semibold">
                {project.client}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{project.category}</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white leading-tight">
              {project.title}
            </h3>

            <div className="mt-1 text-xs font-mono text-slate-400">
              Role: <strong className="text-slate-200">{project.role}</strong>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-cyber-850 hover:bg-cyber-800 border border-cyber-750 text-slate-400 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-cyanGlow" />
              <span>Project Background & High-Stakes Scope</span>
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-cyber-950/60 p-4 rounded-xl border border-cyber-800">
              {project.fullDesc}
            </p>
          </div>

          {/* Architectural Implementations */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-2">
              <Server className="w-4 h-4 text-cyanGlow" />
              <span>Technical Architecture & Key Engineering Deliverables</span>
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.architecture.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-cyber-850/50 border border-cyber-800/80">
                  <div className="w-5 h-5 rounded-md bg-cyanGlow/10 border border-cyanGlow/30 text-cyanGlow flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 leading-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Business & Production Impact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Verified Impact & Production Metrics</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.impact.map((metric, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-snug">
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Applied Technologies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technologies & Infrastructure Applied
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-cyber-950 text-cyanGlow border border-cyanGlow/25"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-cyber-950 border-t border-cyber-800 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-500">
            Validated Enterprise SDLC Project • Partha Sarathi Biswal
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-cyber-850 hover:bg-cyber-800 border border-cyber-700 text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
}
