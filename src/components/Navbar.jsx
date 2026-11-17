import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Terminal as TerminalIcon, 
  FileText, 
  Menu, 
  X, 
  Sun,
  Moon
} from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Navbar({ darkMode, onToggleTheme, onOpenTerminal, onOpenResume }) {
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
          ? 'bg-white/95 dark:bg-cyber-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-cyber-800/80 shadow-sm py-2.5' 
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 gap-2 sm:gap-4">
          
          {/* Brand Logo & Live SLA Beacon */}
          <div className="flex items-center space-x-3 shrink-0">
            <a href="#hero" className="flex items-center space-x-2.5 group shrink-0">
              <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-cyber-850 border border-cyan-600/40 dark:border-cyanGlow/40 flex items-center justify-center text-cyan-600 dark:text-cyanGlow font-mono font-bold text-base shadow-sm group-hover:border-cyan-500 transition-all shrink-0">
                PS
              </div>
              <div>
                <span className="font-bold text-sm sm:text-base tracking-wide text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyanGlow transition-colors block leading-tight whitespace-nowrap">
                  Partha Biswal
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 dark:text-slate-400 block tracking-wider uppercase whitespace-nowrap">
                  Enterprise Full Stack
                </span>
              </div>
            </a>

            {/* Live Uptime SLA Pill (Visible on xl+ screens) */}
            <div className="hidden xl:flex items-center space-x-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>SLA: 99.9% Uptime</span>
            </div>
          </div>

          {/* Desktop Navigation Links (Visible on lg: 1024px+) */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2 xl:px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyanGlow hover:bg-slate-100 dark:hover:bg-cyber-850 transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons: Theme Toggle, CLI & Resume (lg+) */}
          <div className="hidden lg:flex items-center space-x-2 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              title="Switch Theme (Light / Dark)"
              className="h-9 w-9 rounded-lg border border-slate-300 dark:border-cyber-700 bg-slate-100 dark:bg-cyber-850 text-slate-700 dark:text-amber-400 hover:border-cyan-500 dark:hover:border-cyanGlow transition-all flex items-center justify-center cursor-pointer shrink-0"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* CLI Terminal Button */}
            <button
              onClick={onOpenTerminal}
              title="Launch Developer CLI (Ctrl+K)"
              className="h-9 flex items-center space-x-1.5 px-3 rounded-lg bg-slate-100 dark:bg-cyber-850 border border-slate-300 dark:border-cyber-700 hover:border-cyan-500 dark:hover:border-cyanGlow/60 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyanGlow text-xs font-mono transition-all shrink-0 whitespace-nowrap"
            >
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-600 dark:text-cyanGlow shrink-0" />
              <span className="font-semibold">&gt;_ CLI</span>
            </button>

            {/* Executive CV Button */}
            <button
              onClick={onOpenResume}
              className="h-9 flex items-center space-x-1.5 px-3.5 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white dark:text-cyber-950 font-semibold text-xs tracking-wide shadow-sm hover:shadow transition-all shrink-0 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Resume / CV</span>
            </button>
          </div>

          {/* Mobile & Tablet Controls (< lg) */}
          <div className="flex lg:hidden items-center space-x-2 shrink-0">
            <button
              onClick={onToggleTheme}
              className="h-9 w-9 rounded-lg border border-slate-300 dark:border-cyber-700 bg-slate-100 dark:bg-cyber-850 text-slate-700 dark:text-amber-400 flex items-center justify-center shrink-0"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={onOpenTerminal}
              className="h-9 w-9 rounded-lg bg-slate-100 dark:bg-cyber-850 border border-slate-300 dark:border-cyber-700 text-cyan-600 dark:text-cyanGlow flex items-center justify-center shrink-0"
              aria-label="Open Terminal"
            >
              <TerminalIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9 rounded-lg bg-slate-100 dark:bg-cyber-850 border border-slate-300 dark:border-cyber-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown (< lg) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-cyber-900 border-b border-slate-200 dark:border-cyber-800 px-4 pt-3 pb-6 mt-2 space-y-2 shadow-lg dark:shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-cyber-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-cyber-800 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-lg bg-cyan-600 dark:bg-cyanGlow text-white dark:text-cyber-950 font-bold text-xs text-center flex items-center justify-center space-x-2 shadow-sm"
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
