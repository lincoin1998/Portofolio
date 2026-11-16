import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Terminal as TerminalIcon, 
  FileText, 
  Menu, 
  X, 
  Activity,
  ExternalLink,
  Github,
  Linkedin
} from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Navbar({ onOpenTerminal, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Incident Room', href: '#incident' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Matrix', href: '#skills' },
    { name: 'Experience', href: '#timeline' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cyber-950/85 backdrop-blur-md border-b border-cyber-800/80 shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Live Beacon */}
          <div className="flex items-center space-x-3">
            <a href="#hero" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-lg bg-cyber-850 border border-cyanGlow/40 flex items-center justify-center text-cyanGlow font-mono font-bold text-lg shadow-[0_0_15px_rgba(0,240,255,0.2)] group-hover:border-cyanGlow group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
                PS
              </div>
              <div>
                <span className="font-bold text-base tracking-wide text-white group-hover:text-cyanGlow transition-colors block leading-tight">
                  Partha Biswal
                </span>
                <span className="text-[10px] font-mono text-slate-400 block tracking-wider uppercase">
                  Enterprise Full Stack
                </span>
              </div>
            </a>

            {/* Live Uptime Pill - Desktop */}
            <div className="hidden lg:flex items-center space-x-2 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>SLA: {profileData.slaUptime} Uptime</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-300 hover:text-cyanGlow hover:bg-cyber-850/60 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Terminal Button */}
            <button
              onClick={onOpenTerminal}
              title="Open Developer Terminal (Ctrl+K)"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyber-850 border border-cyber-700 hover:border-cyanGlow/60 text-slate-300 hover:text-cyanGlow text-xs font-mono transition-all group"
            >
              <TerminalIcon className="w-3.5 h-3.5 text-cyanGlow group-hover:animate-pulse" />
              <span>&gt;_ CLI</span>
            </button>

            {/* Executive CV Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-cyber-950 font-semibold text-xs tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-cyber-850 border border-cyber-700 text-cyanGlow"
              aria-label="Open Terminal"
            >
              <TerminalIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-cyber-850 border border-cyber-700 text-slate-300 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-cyber-900/95 backdrop-blur-xl border-b border-cyber-800 px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyber-800 text-xs font-mono text-emerald-400">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span>SLA: {profileData.slaUptime} Uptime</span>
            </span>
            <span className="text-slate-400">v2.5 Enterprise</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-cyanGlow hover:bg-cyber-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-cyber-800 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2 rounded-lg bg-cyanGlow text-cyber-950 font-semibold text-xs text-center flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Executive CV / Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
