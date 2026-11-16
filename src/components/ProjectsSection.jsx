import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Radio, 
  ShieldCheck, 
  Bot, 
  Cpu, 
  ArrowUpRight,
  Server
} from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function ProjectsSection({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Industrial & Telephony',
    'Healthcare & Life-Safety',
    'CRM & Salesforce',
    'Aviation & Big Data',
    'Security & Critical Infra',
    'AI & Automation',
    'GovTech & Architecture',
    'Enterprise Full Stack'
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative z-10">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyanGlow/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyanGlow text-xs font-mono mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider font-semibold">Production Architecture Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Flagship Enterprise Deployments
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
              Mission-critical systems across aviation, steel manufacturing, conversational AI, and government tenders. Engineered for fault tolerance and high scale.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Showing <strong className="text-cyan-600 dark:text-cyanGlow font-semibold">{filteredProjects.length}</strong> verified system architectures
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200 dark:border-cyber-850">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeFilter === cat
                  ? 'bg-cyan-600 dark:bg-cyanGlow text-white dark:text-cyber-950 font-bold shadow-sm'
                  : 'bg-slate-100 dark:bg-cyber-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-cyber-800 border border-slate-300 dark:border-cyber-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative rounded-2xl bg-white dark:bg-cyber-900/80 border border-slate-200 dark:border-cyber-800 hover:border-cyan-500 dark:hover:border-cyanGlow/40 p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none hover:-translate-y-1 group"
            >
              <div>
                {/* Card Top: Client & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyanGlow font-semibold px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">
                    {project.client}
                  </span>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${project.badgeColor}`}>
                    {project.highlight}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyanGlow transition-colors leading-snug mb-2">
                  {project.title}
                </h3>

                {/* Role Pill */}
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3 flex items-center space-x-1.5">
                  <span className="text-slate-400 dark:text-slate-500">Role:</span>
                  <span className="text-slate-700 dark:text-slate-200 font-medium">{project.role}</span>
                </div>

                {/* Short Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 line-clamp-3">
                  {project.shortDesc}
                </p>

                {/* Key Architecture Highlight Box */}
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-cyber-950/90 border border-slate-200 dark:border-cyber-800 mb-5">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
                    Core Technical Deliverable:
                  </span>
                  <div className="text-xs text-slate-800 dark:text-slate-200 font-mono line-clamp-2">
                    {project.architecture[0]}
                  </div>
                </div>
              </div>

              {/* Card Footer: Tech Tags & Modal Trigger Button */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-cyber-850 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-cyber-750"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-cyber-850 hover:bg-slate-200 dark:hover:bg-cyber-800 border border-slate-300 dark:border-cyber-700 hover:border-cyan-500 dark:hover:border-cyanGlow/50 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyanGlow font-mono text-xs flex items-center justify-center space-x-2 transition-all group/btn"
                >
                  <span>Deep Dive Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
