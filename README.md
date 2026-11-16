# Partha Sarathi Biswal — Enterprise Portfolio

> **Full Stack Developer (MERN & Enterprise PHP Specialist)**  
> 5+ Years of Experience in Enterprise Applications & Mission-Critical Infrastructure  
> High Availability (99.9% SLA) • Aviation • Steel Manufacturing • Power Grid Security • Conversational AI

---

## 🚀 Quick Launch Options

### Option 1: Instant Browser Preview (Zero Installation Needed)
Simply open **`preview.html`** in any modern web browser (Google Chrome, Edge, Firefox, Safari) or double-click it from your File Explorer in `D:\Portfolio\preview.html`.
- Full interactive modals
- Interactive developer terminal (`Ctrl+K`)
- Direct copy buttons for email, phone, and links
- Printable / downloadable Executive CV
- Live incident response case study

### Option 2: React + Vite Development Server
To run the full modular React application:
```bash
# 1. Install dependencies
npm install

# 2. Start the local Vite development server
npm run dev

# 3. Build optimized production bundle
npm run build
```

---

## 📁 Project Architecture

```
d:/Portfolio/
├── preview.html               # Instant zero-dependency standalone production preview
├── index.html                 # Vite HTML entry point
├── package.json               # NPM dependencies & scripts (React 18, Vite, Tailwind CSS, Lucide)
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Cyber-industrial theme configuration
├── postcss.config.js          # PostCSS configuration
│
└── src/
    ├── main.jsx               # React DOM entry point
    ├── App.jsx                # Main application orchestrator & modal states
    ├── index.css              # Custom Tailwind directives & glassmorphism
    │
    ├── data/                  # 🛠️ Centralized Data Stores (Easy to edit)
    │   ├── profileData.js     # Contact, Degree, Certifications, Bio, Stats
    │   ├── projectsData.js    # Tata Steel, GoIndigo, Adani, Sime Darby, MOCI, SAIL
    │   ├── skillsData.js      # Categorized technical capabilities & levels
    │   └── timelineData.js    # Career journey & full-cycle SDLC milestones
    │
    └── components/            # Modular React Components
        ├── Navbar.jsx         # Sticky header with live 99.9% uptime beacon
        ├── Hero.jsx           # Command-center hero with quick links (Phone, Email, LinkedIn, GitHub)
        ├── TelemetryStats.jsx # Operational metrics bar (5+ YOE, 99.9% SLA, 48h patch)
        ├── IncidentSpotlight.jsx # Adani Electricity 48-Hour Zero-Downtime Incident Room
        ├── ProjectsSection.jsx # Category filters & interactive case study cards
        ├── ProjectDetailModal.jsx # Deep-dive architectural modal with problem/solution/impact
        ├── SkillsMatrix.jsx   # Tabbed technical capabilities matrix
        ├── ExperienceTimeline.jsx # Career milestones & SDLC lifecycle ownership
        ├── CredentialsSection.jsx # Dedicated Degree & Professional Certifications section
        ├── ContactSection.jsx # Direct contact cards, copy buttons & inquiry transmission form
        ├── TerminalDrawer.jsx # Developer CLI emulator (`help`, `skills`, `projects`, etc.)
        ├── ResumeModal.jsx    # Executive CV preview with print/PDF capability
        └── Footer.jsx         # Server heartbeat, copyright, and quick navigation
```

---

## ✏️ How to Customize Your Details

All your customizable data is cleanly centralized in **`src/data/profileData.js`**:

### 1. Degree & Academic Credentials
Edit `education` in `src/data/profileData.js`:
```javascript
education: [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "Your University Name",
    year: "2015 – 2019",
    grade: "First Class with Distinction",
    highlights: "Distributed Systems, Data Structures & Algorithms, Network Protocols (TCP/IP & SIP)",
    status: "Verified Degree"
  }
]
```

### 2. Certifications
Add or modify certificates in `certifications` in `src/data/profileData.js`:
```javascript
certifications: [
  {
    name: "Enterprise Full Stack Architecture & Microservices",
    issuer: "AWS / Industry Credential",
    year: "2023",
    credentialId: "CERT-FS-8842",
    link: "#"
  },
  // Add more certifications here
]
```

### 3. Contact Coordinates
Update your direct links in `contact` in `src/data/profileData.js`:
```javascript
contact: {
  email: "partha.biswal.dev@example.com",
  phone: "+91 98765 43210",
  linkedin: "https://linkedin.com/in/partha-sarathi-biswal",
  github: "https://github.com/parthasarathibiswal",
}
```

---

## 🌐 Deployment Guidelines

- **GitHub Pages / Vercel / Netlify**: Simply link your Git repository or drag-and-drop the directory.
- **Apache / Nginx / Linux Server (e.g. ECSAPP1)**: Upload `preview.html` as `index.html` to `/var/www/html/` or deploy the `dist/` directory after running `npm run build`.
