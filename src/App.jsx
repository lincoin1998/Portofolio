import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TelemetryStats from './components/TelemetryStats';
import IncidentSpotlight from './components/IncidentSpotlight';
import ProjectsSection from './components/ProjectsSection';
import ProjectDetailModal from './components/ProjectDetailModal';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceTimeline from './components/ExperienceTimeline';
import CredentialsSection from './components/CredentialsSection';
import ContactSection from './components/ContactSection';
import TerminalDrawer from './components/TerminalDrawer';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Keyboard shortcut: Ctrl+K or Cmd+K toggles the terminal CLI
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-950 text-slate-100 relative selection:bg-cyanGlow selection:text-cyber-950">
      
      {/* Navbar with live uptime beacon */}
      <Navbar 
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main>
        {/* Hero Command Center */}
        <Hero 
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Live Operational Metrics & Telemetry */}
        <TelemetryStats />

        {/* 48-Hour Zero-Downtime Incident Response Spotlight (Adani Electricity) */}
        <IncidentSpotlight 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Flagship Enterprise Case Studies & Architecture Deployments */}
        <ProjectsSection 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Full-Stack Technical Capabilities Matrix */}
        <SkillsMatrix />

        {/* Career Journey & Full-Cycle SDLC Ownership */}
        <ExperienceTimeline />

        {/* Verified Credentials: Degree & Industry Certifications */}
        <CredentialsSection />

        {/* Direct Contact Coordinates & Consultation Transmission Form */}
        <ContactSection />
      </main>

      {/* Footer & Server Heartbeat */}
      <Footer />

      {/* Modals & Interactive Drawers */}
      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <TerminalDrawer 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)}
        onSelectProject={(project) => {
          setSelectedProject(project);
          setTerminalOpen(false);
        }}
      />

      {resumeOpen && (
        <ResumeModal 
          onClose={() => setResumeOpen(false)} 
        />
      )}

    </div>
  );
}
