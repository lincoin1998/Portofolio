export const projectsData = [
  {
    id: "adani-security",
    title: "Critical Infrastructure Security Remediation",
    client: "Adani Electricity",
    role: "Lead Developer",
    category: "Security & Critical Infra",
    status: "Mission Accomplished",
    featured: true,
    highlight: "48-Hour Zero-Downtime Hot-Patch",
    shortDesc: "Led an emergency 48-hour rapid task force to neutralize a high-priority security vulnerability in critical electrical grid systems without a single second of downtime.",
    fullDesc: "When a zero-day/high-severity vulnerability was identified in the core infrastructure systems serving critical metropolitan electrical distribution, Partha was appointed as Lead Developer for the emergency incident task force. The operation required live reverse-engineering, hot-patching vulnerable endpoints, implementing hardened sanitization layers, and conducting automated smoke tests on live clusters while guaranteeing 100% continuous uptime.",
    architecture: [
      "Vulnerability audit & static code analysis across live endpoint clusters",
      "Dynamic input sanitization & parameterized request pipelines",
      "Blue/Green canary deployment across redundant Linux nodes",
      "Live traffic diversion with zero packet loss and zero service degradation"
    ],
    impact: [
      "100% vulnerability remediation achieved within 48 hours",
      "Zero minutes of system downtime for millions of power consumers",
      "Full compliance with enterprise security & data privacy mandates",
      "Commended by executive infrastructure security leadership"
    ],
    tags: ["Security Patching", "Zero-Downtime", "Linux", "High Availability", "Incident Response", "PHP/MySQL"],
    accentColor: "from-amber-500/20 to-rose-500/10",
    badgeColor: "border-amber-500/50 text-amber-300 bg-amber-500/10"
  },
  {
    id: "tata-steel-satark",
    title: "SATARK Emergency Call Response (ECR)",
    client: "Tata Steel",
    role: "Software Engineer / Maintenance Lead",
    category: "Industrial & Telephony",
    status: "Live in Production",
    featured: true,
    highlight: "Automated Life-Safety Voice/SMS Dispatch",
    shortDesc: "Engineered and maintained the life-safety SATARK Emergency Call Response platform for steel manufacturing plants, automating instant voice/SMS broadcasts and high-priority call routing.",
    fullDesc: "SATARK is Tata Steel's flagship industrial emergency response system, operating in hazardous steel manufacturing environments where seconds save lives. Partha owned the maintenance, feature engineering, and high-availability server deployments (ECSAPP1) to ensure plant-wide incident broadcasts, multi-channel voice/SMS escalations, and failsafe telecom connectivity.",
    architecture: [
      "ECSAPP1 high-availability production application server management",
      "Automated multi-carrier SMS gateway & automated voice broadcast triggers",
      "Failsafe telephony integration with Cisco PBX and PRI lines",
      "Automated database snapshots and failover disaster recovery pipelines"
    ],
    impact: [
      "Sub-second alert trigger latency during industrial incidents",
      "99.9% uptime SLA across high-hazard production environments",
      "Automated critical code backups, eliminating manual deployment failure risks",
      "Zero telephony blackout incidents recorded during active tenure"
    ],
    tags: ["Telephony (SIP/PRI)", "Tata Steel", "PHP/CodeIgniter", "MySQL", "ECSAPP1", "Emergency Workflows", "Linux"],
    accentColor: "from-emerald-500/20 to-cyan-500/10",
    badgeColor: "border-emerald-500/50 text-emerald-300 bg-emerald-500/10"
  },
  {
    id: "goindigo-onesupport",
    title: "OneSupport & CDR Call Dump Platform",
    client: "GoIndigo Airlines",
    role: "Full Stack Developer",
    category: "Aviation & Big Data",
    status: "Live in Production",
    featured: true,
    highlight: "Aviation-Scale Telephony Data Pipeline",
    shortDesc: "Spearheaded end-to-end development of the OneSupport portal and high-volume Call Detail Record (CDR) dump processing engine with automated Jenkins CI/CD pipelines.",
    fullDesc: "GoIndigo operates India's largest domestic aviation fleet, generating millions of customer interactions daily. Partha spearheaded the design and implementation of the 'OneSupport' portal alongside 'CDRCallDump'—a high-throughput telemetry ingestion system capturing real-time telephony data. Integrated Jenkins CI/CD across Dev, UAT, and Pre-prod environments with MSSQL optimization.",
    architecture: [
      "Automated multi-stage CI/CD pipelines using Jenkins & Git/SVN",
      "High-throughput Call Detail Record (CDR) dump ingestion and parsing",
      "Optimized Microsoft SQL Server schema, indexing, and batch ingestion",
      "OneSupport unified support dashboard for multi-tier support operations"
    ],
    impact: [
      "Processed millions of airline customer telephony records daily without lag",
      "Reduced deployment deployment cycle times from hours to minutes via Jenkins",
      "Unified support representative workflows into a single high-performance portal",
      "Zero data loss across critical flight support operations"
    ],
    tags: ["Aviation", "Jenkins CI/CD", "MSSQL", "Full Stack", "Git/SVN", "Node.js/PHP", "Big Data Telecom"],
    accentColor: "from-blue-500/20 to-cyan-500/10",
    badgeColor: "border-blue-500/50 text-blue-300 bg-blue-500/10"
  },
  {
    id: "sime-darby-ai",
    title: "Conversational AI & Virtual Assistant",
    client: "Sime Darby",
    role: "Backend Architect / Prompt Engineer",
    category: "AI & Automation",
    status: "Live in Production",
    featured: true,
    highlight: "Enterprise Bot Logic & Agent Handoff",
    shortDesc: "Architected enterprise bot instructions, prompt logic, and backend intent processing for sales enquiries, property defect reporting, and seamless live-agent handoffs.",
    fullDesc: "Sime Darby required a production-ready conversational AI platform to handle thousands of concurrent customer interactions across sales, warranty, and defect tracking. Partha architected system prompts, contextual state management, and resilient webhook backends that bridged natural language intent with enterprise ERP and CRM systems, featuring graceful fallback to human operators.",
    architecture: [
      "Dynamic prompt engineering & system instructions with guardrails",
      "Multi-turn conversational state machine with intent classification",
      "RESTful webhook middleware integrating with backend CRM databases",
      "Real-time live agent handoff protocol preserving conversation context"
    ],
    impact: [
      "65% reduction in Tier-1 support call volume through self-service bot",
      "Zero-friction handover to live agents with complete historical transcript injection",
      "High customer satisfaction score on automated defect reporting workflows",
      "Robust prompt guardrails preventing hallucinations and unauthorized queries"
    ],
    tags: ["Conversational AI", "Prompt Engineering", "Node.js", "REST APIs", "CRM Integration", "Chatbots"],
    accentColor: "from-purple-500/20 to-pink-500/10",
    badgeColor: "border-purple-500/50 text-purple-300 bg-purple-500/10"
  },
  {
    id: "moci-call-center",
    title: "Enterprise Call Center Tender Architecture",
    client: "Ministry of Commerce and Industry (MOCI)",
    role: "Solution Architect / Technical Lead",
    category: "GovTech & Architecture",
    status: "Tender Awarded / Architected",
    featured: false,
    highlight: "Scalable Government-Grade Call Center",
    shortDesc: "Led technical assessment and designed a high-concurrency, fault-tolerant call center architecture to meet rigorous government-grade specifications and SLAs.",
    fullDesc: "Conducted technical reviews, architectural feasibility assessments, and compliance audits for the prestigious Ministry of Commerce and Industry (MOCI) Call Center tender. Proposed a distributed, scalable microservices and telephony architecture capable of handling national public inquiries with stringent security standards.",
    architecture: [
      "High-availability telephony infrastructure with carrier redundancy",
      "Secure role-based access control (RBAC) and audit trail logging",
      "Multi-tiered database replication strategy for disaster recovery",
      "Compliance mapping with national data residency regulations"
    ],
    impact: [
      "Comprehensive architectural proposal recognized as technically superior",
      "Engineered for 99.99% operational availability and carrier failover",
      "Scalable capacity planned for peak public inquiry surges"
    ],
    tags: ["Solution Architecture", "Government", "Telephony (PBX)", "Compliance", "High Availability", "Security"],
    accentColor: "from-emerald-500/20 to-teal-500/10",
    badgeColor: "border-emerald-500/50 text-emerald-300 bg-emerald-500/10"
  },
  {
    id: "enterprise-portfolio",
    title: "Multi-Sector Real-Time Modules & ITS",
    client: "NMC, SAIL, Zephyr ITS, GoIndigo CRM",
    role: "Full Stack Developer",
    category: "Enterprise Full Stack",
    status: "Delivered",
    featured: false,
    highlight: "Real-Time Telemetry & Transport Systems",
    shortDesc: "Developed real-time communication modules, ECR dashboards, and audit-logging infrastructure for steel manufacturing (SAIL), Intelligent Transport Systems (Zephyr ITS), and civic governance (NMC).",
    fullDesc: "A cross-industry portfolio of mission-critical full-stack applications. Engineered custom RESTful APIs, dashboard UI components, and rigorous audit trails for municipal governance (NMC), industrial steel manufacturing (SAIL), and intelligent transport telematics (Zephyr ITS), as well as aviation CRM extensions for GoIndigo.",
    architecture: [
      "Real-time telematics ingestion and interactive dashboard visualization",
      "Immutable system audit logging modules for regulatory compliance",
      "Optimized PHP/CodeIgniter and MySQL microservices",
      "Custom UI components with low-latency data polling and WebSockets"
    ],
    impact: [
      "Successfully deployed across 4 distinct enterprise sectors",
      "Enhanced situational awareness for fleet dispatch and plant operators",
      "Zero unhandled system exceptions across high-frequency audit streams"
    ],
    tags: ["PHP", "CodeIgniter", "MySQL", "Zephyr ITS", "SAIL", "NMC", "WebSockets", "Audit Logging"],
    accentColor: "from-cyan-500/20 to-blue-500/10",
    badgeColor: "border-cyan-500/50 text-cyan-300 bg-cyan-500/10"
  }
];
