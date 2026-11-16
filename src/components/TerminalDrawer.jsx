import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { profileData } from '../data/profileData';
import { projectsData } from '../data/projectsData';
import { skillsData } from '../data/skillsData';

export default function TerminalDrawer({ isOpen, onClose, onSelectProject }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { text: "PSB Enterprise Command Interface v2.5.0-prod", type: "system" },
    { text: "Connected to ECSAPP1 production environment (Node: Linux x86_64).", type: "system" },
    { text: "Type 'help' to review available diagnostic and navigation commands.", type: "system" }
  ]);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newEntry = { text: `> ${cmd}`, type: "user" };
    
    let responses = [];

    switch (trimmed) {
      case 'help':
        responses = [
          { text: "Available Commands:", type: "header" },
          { text: "  about       - Summary and core engineering pillars", type: "text" },
          { text: "  projects    - List mission-critical enterprise case studies", type: "text" },
          { text: "  incident    - View Adani Electricity 48-hour zero-downtime report", type: "text" },
          { text: "  skills      - Dump full-stack technology matrix", type: "text" },
          { text: "  degree      - Display academic engineering credentials", type: "text" },
          { text: "  certs       - Display professional industry certifications", type: "text" },
          { text: "  contact     - Print email, phone, LinkedIn & GitHub coordinates", type: "text" },
          { text: "  uptime      - Print production cluster availability SLA", type: "text" },
          { text: "  clear       - Clear current console session", type: "text" },
          { text: "  exit        - Close developer terminal interface", type: "text" }
        ];
        break;

      case 'about':
        responses = [
          { text: `[PROFILE] ${profileData.name} - ${profileData.title} (${profileData.specialization})`, type: "cyan" },
          { text: profileData.summary, type: "text" },
          { text: `Experience: ${profileData.experienceYears} Years in Critical Infrastructure`, type: "emerald" }
        ];
        break;

      case 'projects':
        responses = [
          { text: "ENTERPRISE CASE STUDIES & DELIVERIES:", type: "header" },
          ...projectsData.map(p => ({
            text: `• [${p.client}] ${p.title} (${p.highlight})`,
            type: "text"
          }))
        ];
        break;

      case 'incident':
        responses = [
          { text: "INCIDENT REPORT: ADANI ELECTRICITY CRITICAL INFRASTRUCTURE", type: "amber" },
          { text: "• Window: 48 Hours emergency triage to canary deployment", type: "text" },
          { text: "• Total System Downtime: 0.00 seconds (100% operational)", type: "emerald" },
          { text: "• Vulnerability Status: 100% Remediation & Audit Passed", type: "emerald" },
          { text: "• Lead Engineer: Partha Sarathi Biswal", type: "cyan" }
        ];
        break;

      case 'skills':
        responses = [
          { text: "PRIMARY TECHNICAL CAPABILITIES:", type: "header" },
          { text: "Frontend: React.js, JavaScript (ES6+), HTML5/CSS3, Responsive UI/UX", type: "text" },
          { text: "Backend: Node.js, Express.js, PHP, CodeIgniter, RESTful APIs, WebSockets", type: "text" },
          { text: "Databases: MySQL, MongoDB, Microsoft SQL Server (MSSQL)", type: "text" },
          { text: "DevOps & Infra: CI/CD (Jenkins), Git/SVN, Oracle Linux, Docker, Apache/Nginx", type: "text" },
          { text: "Domain: Telephony (SIP/RTP, Cisco PBX, PRI), ECR Systems, Conversational AI", type: "emerald" }
        ];
        break;

      case 'degree':
        responses = [
          { text: "ACADEMIC QUALIFICATIONS:", type: "header" },
          ...profileData.education.map(e => ({
            text: `• ${e.degree} — ${e.institution} (${e.year}) | Grade: ${e.grade}`,
            type: "text"
          }))
        ];
        break;

      case 'certs':
        responses = [
          { text: "PROFESSIONAL CERTIFICATIONS:", type: "header" },
          ...profileData.certifications.map(c => ({
            text: `• ${c.name} [${c.issuer}] (${c.year}) ID: ${c.credentialId}`,
            type: "text"
          }))
        ];
        break;

      case 'contact':
        responses = [
          { text: "DIRECT CONTACT COORDINATES:", type: "header" },
          { text: `Email:    ${profileData.contact.email}`, type: "cyan" },
          { text: `Phone:    ${profileData.contact.phone}`, type: "emerald" },
          { text: `LinkedIn: ${profileData.contact.linkedin}`, type: "text" },
          { text: `GitHub:   ${profileData.contact.github}`, type: "text" }
        ];
        break;

      case 'uptime':
        responses = [
          { text: `HIGH AVAILABILITY SLA: ${profileData.slaUptime} Production Uptime Across Clusters`, type: "emerald" },
          { text: "Active Server Node: ECSAPP1 (Tata Steel) | Dev/UAT/Pre-prod (Indigo)", type: "text" }
        ];
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      case '':
        break;

      default:
        responses = [
          { text: `command not recognized: '${trimmed}'. Type 'help' for options.`, type: "amber" }
        ];
        break;
    }

    setHistory(prev => [...prev, newEntry, ...responses]);
    setInputVal('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputVal !== undefined) {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-cyber-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Terminal Window Box */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-cyber-950 border border-cyber-700/80 shadow-2xl shadow-cyanGlow/10 overflow-hidden z-10 flex flex-col h-[520px] max-h-[85vh]">
        
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-cyber-900 border-b border-cyber-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose}></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="font-mono text-xs text-slate-300 ml-2">
              partha@ecs-node-1:~ (bash)
            </span>
          </div>

          <div className="flex items-center space-x-2 text-slate-400">
            <button 
              onClick={onClose} 
              className="p-1 hover:text-white rounded"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto font-mono text-xs space-y-2 bg-[#080B11]">
          {history.map((line, idx) => {
            let color = "text-slate-300";
            if (line.type === "system") color = "text-slate-500";
            if (line.type === "user") color = "text-white font-bold";
            if (line.type === "cyan") color = "text-cyanGlow";
            if (line.type === "emerald") color = "text-emerald-400 font-semibold";
            if (line.type === "amber") color = "text-amber-400";
            if (line.type === "header") color = "text-cyanGlow font-bold uppercase tracking-wider pt-1";

            return (
              <div key={idx} className={`${color} leading-relaxed whitespace-pre-wrap`}>
                {line.text}
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <form onSubmit={onSubmit} className="p-3 bg-cyber-900 border-t border-cyber-800 flex items-center space-x-2 font-mono text-xs">
          <span className="text-cyanGlow font-bold">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'projects', 'skills', 'contact', 'degree'..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-600"
          />
          <button type="submit" className="text-slate-500 hover:text-cyanGlow transition-colors">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
}
