export const projectsData = [
  {
    id: "adani-security",
    title: "Critical Infrastructure Security Remediation",
    client: "Adani Electricity",
    role: "Lead Developer (Emergency Task Force)",
    category: "Security & Critical Infra",
    status: "Mission Accomplished",
    featured: true,
    highlight: "48-Hour Zero-Downtime Hot-Patch",
    shortDesc: "Led an emergency 48-hour rapid task force to neutralize a high-priority security vulnerability in critical electrical grid systems without a single second of downtime.",
    fullDesc: "When a zero-day/high-severity vulnerability was identified in the core infrastructure systems serving critical metropolitan electrical distribution, Partha was appointed as Lead Developer for the emergency incident task force. The operation required live reverse-engineering, hot-patching vulnerable endpoints, implementing hardened sanitization layers, and conducting automated smoke tests on live clusters while guaranteeing 100% continuous uptime.",
    architecture: [
      "Vulnerability audit & static code analysis across live endpoint clusters",
      "Dynamic input sanitization & parameterized request pipelines in PHP/MySQL",
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
    id: "yas-clinic-ecr",
    title: "CUBE Emergency Call Responder (ECR) Implementation",
    client: "YAS Clinic (Abu Dhabi Stem Cells Center)",
    role: "Implementation & Full Stack Developer",
    category: "Healthcare & Life-Safety",
    status: "Live in Production",
    featured: true,
    highlight: "Centralized Hospital ECR & Voice Broadcast",
    shortDesc: "Implemented the centralized CUBE Emergency Call Responder platform for Abu Dhabi Stem Cells Center, automating voice/SMS alarms with dynamic Audio File Management across hospital floors and departments.",
    fullDesc: "Led the end-to-end implementation of a centralized emergency response system for YAS Clinic / Abu Dhabi Stem Cells Center. The system automates mission-critical call and SMS notifications during medical emergencies, featuring a hierarchy of hospital structures (Floors, Departments, Rooms). Configured high-priority SIP Trunking with Cisco PBX, engineered an Audio File Manager for dynamic emergency speech broadcasts, and managed Oracle Linux 9.X servers with Logical Volume Manager (LVM).",
    architecture: [
      "Configured web-based hospital admin hierarchy (Floors, Departments, Rooms) in PHP/MySQL",
      "Integrated SIP Trunks with Cisco PBX gateways for high-priority outbound voice calls",
      "Engineered dynamic 'Audio File Manager' system to assemble and broadcast emergency messages",
      "Configured Oracle Linux 9.X with Logical Volume Manager (LVM) and HTTPS compliance",
      "Resolved P1-P3 critical production incidents with payload verification and performance tuning"
    ],
    impact: [
      "Automated life-safety medical emergency alerts across entire hospital structure",
      "Achieved formal UAT sign-off and coordinated Go-Live readiness with IT Directors",
      "Sub-second voice call dispatch via dedicated Cisco PBX trunking",
      "Zero failed emergency alert dispatches during live operational drills"
    ],
    tags: ["Healthcare ECR", "Cisco PBX", "SIP/RTP", "Oracle Linux 9.X", "LVM", "PHP/MySQL", "AXIS Reporting", "P1-P3 Support"],
    accentColor: "from-rose-500/20 to-cyan-500/10",
    badgeColor: "border-rose-500/50 text-rose-300 bg-rose-500/10"
  },
  {
    id: "tata-steel-satark",
    title: "SATARK Emergency Call Response (ECR) System",
    client: "Tata Steel",
    role: "Software Engineer / Maintenance Lead",
    category: "Industrial & Telephony",
    status: "Live in Production",
    featured: true,
    highlight: "Automated Life-Safety Voice/SMS Dispatch",
    shortDesc: "Engineered and maintained the life-safety SATARK Emergency Call Response platform across ecsapp1 and ecsapp2 servers, automating instant voice/SMS broadcasts, XLSX reporting, and VAPT compliance.",
    fullDesc: "SATARK is Tata Steel's flagship industrial emergency response system, operating in hazardous steel manufacturing environments where seconds save lives. Partha owned the maintenance, Change Requests (CRs), and high-availability server deployments across ecsapp1 and ecsapp2 servers to ensure plant-wide incident broadcasts, automated SMS emergency closure workflows, and failsafe telecom connectivity.",
    architecture: [
      "Managed CR deployments on ecsapp1 and ecsapp2 high-availability production application servers",
      "Implemented automated SMS triggering for emergency closure workflows and multi-carrier dispatch",
      "Integrated monitoring logic to track health of PRI gateways, API connectivity, and server availability",
      "Engineered 'Report Downloader' functionality generating XLSX reports from system data",
      "Resolved production-critical bugs: SMS character limits, telephony connectivity, and encoding issues",
      "Coordinated with cross-functional infrastructure teams for VAPT compliance and system stability"
    ],
    impact: [
      "Sub-second alert trigger latency during industrial incidents",
      "99.9% uptime SLA across high-hazard production environments",
      "Automated critical code backups, eliminating manual deployment failure risks",
      "Full VAPT closure achieved with zero critical vulnerabilities reported"
    ],
    tags: ["Tata Steel", "SATARK ECR", "ecsapp1/ecsapp2", "Cisco PBX", "SIP Trunking", "PHP/CodeIgniter", "MySQL", "VAPT", "XLSX Reports"],
    accentColor: "from-emerald-500/20 to-cyan-500/10",
    badgeColor: "border-emerald-500/50 text-emerald-300 bg-emerald-500/10"
  },
  {
    id: "sothebys-sfdc",
    title: "Radius Salesforce (SFDC) CRM Integration",
    client: "Sotheby's",
    role: "Tech Lead / Integration Developer",
    category: "CRM & Salesforce",
    status: "Live in Production",
    featured: true,
    highlight: "Telephony-to-Salesforce CTI & Multi-Match UI",
    shortDesc: "Architected the integration of the Radius contact center platform with Salesforce CRM, engineering custom fields (Process_Code__c), CTI Task mapping, and interactive agent multi-match resolution popups.",
    fullDesc: "Executed the mission-critical integration of the Radius contact center platform with Salesforce (SFDC) for Sotheby's to synchronize telephony logs with high-value customer records. Developed custom Salesforce fields such as Process_Code__c to align telephony interactions with active campaign codes, engineered a custom Salesforce pop-up interface to resolve multi-match caller scenarios, and mapped CTI data into SFDC Task objects.",
    architecture: [
      "Developed custom Salesforce fields (e.g. Process_Code__c) aligning telephony logs with CRM campaign codes",
      "Engineered custom Salesforce pop-up interface to handle multi-match scenarios for live call center agents",
      "Streamlined real-time data mapping between CTI systems and SFDC Task objects",
      "Captured Call Duration, Call Disposition, and Call Type logging with high fidelity via REST APIs"
    ],
    impact: [
      "100% accurate call disposition logging across Sotheby's global art auction client base",
      "Eliminated agent ambiguity during multi-match caller identification via custom UI popup",
      "Automated campaign performance tracking in Salesforce via Process_Code__c synchronization"
    ],
    tags: ["Salesforce (SFDC)", "CRM Integration", "CTI Telephony", "REST APIs", "Process_Code__c", "UI/UX", "Data Mapping"],
    accentColor: "from-blue-500/20 to-indigo-500/10",
    badgeColor: "border-blue-500/50 text-blue-300 bg-blue-500/10"
  },
  {
    id: "goindigo-onesupport",
    title: "OneSupport & CDR Call Dump Platform",
    client: "GoIndigo Airlines",
    role: "Full Stack & Integration Developer",
    category: "Aviation & Big Data",
    status: "Live in Production",
    featured: true,
    highlight: "Aviation-Scale Telephony Data Pipeline",
    shortDesc: "Spearheaded end-to-end development of the OneSupport portal, CRM synchronization endpoints, and high-volume Call Detail Record (CDR) dump processing engine with automated Jenkins CI/CD.",
    fullDesc: "GoIndigo operates India's largest domestic aviation fleet, generating millions of customer interactions daily. Partha spearheaded the design and implementation of the 'OneSupport' portal alongside 'CDRCallDump'—a high-throughput telemetry ingestion system capturing real-time telephony data. Built service endpoints for seamless CRM data synchronization, optimized MSSQL database queries for high-volume retrieval, and integrated Jenkins CI/CD across Dev, UAT, and Pre-prod environments.",
    architecture: [
      "Automated multi-stage CI/CD pipelines using Jenkins & Git/SVN across Dev, UAT, Pre-prod",
      "High-throughput Call Detail Record (CDR) dump ingestion and parsing",
      "Built service endpoints for seamless CRM data synchronization and customer journey mapping",
      "Optimized Microsoft SQL Server schema, indexing, and batch ingestion queries",
      "OneSupport unified support dashboard for multi-tier support operations"
    ],
    impact: [
      "Processed millions of airline customer telephony records daily without lag",
      "Reduced deployment cycle times from hours to minutes via automated Jenkins CI/CD",
      "Unified support representative workflows into a single high-performance portal",
      "Zero data loss across critical flight support and CRM operations"
    ],
    tags: ["Aviation", "Jenkins CI/CD", "MSSQL", "Full Stack", "Git/SVN", "Node.js/PHP", "CRM Integration", "Big Data"],
    accentColor: "from-sky-500/20 to-cyan-500/10",
    badgeColor: "border-sky-500/50 text-sky-300 bg-sky-500/10"
  },
  {
    id: "carclub-bethany-his",
    title: "Enterprise Platforms (CarClub & Bethany-HIS)",
    client: "CarClub & Bethany-HIS",
    role: "Full Stack Developer",
    category: "Enterprise Full Stack",
    status: "Live in Production",
    featured: false,
    highlight: "MERN Stack Platforms & Multi-Repo CI/CD",
    shortDesc: "Structured and delivered the full-stack architecture for carclub-ui/service and bethanyhis-ui/service, managing version control protocols across SVN and GitLab for high-traffic operations.",
    fullDesc: "Managed the end-to-end full-stack development and deployment of UI and Service components for high-traffic enterprise platforms. Structured the architecture for both carclub-ui/carclub-service (automotive/fleet platform) and bethanyhis-ui/bethanyhis-service (hospital information system). Established rigorous version control workflows using SVN and GitLab, managing repository permissions and deployment protocols.",
    architecture: [
      "Architected modular frontend components and backend REST service endpoints in MERN and PHP",
      "Engineered decoupled microservice structure (carclub-ui / carclub-service, bethanyhis-ui / bethanyhis-service)",
      "Established repository permissions, branching strategies, and code pushing protocols using GitLab and SVN",
      "Optimized MongoDB and MySQL database persistence layers for low-latency queries"
    ],
    impact: [
      "Delivered reliable, modular UI and backend services for automotive fleet and healthcare domains",
      "Standardized multi-developer repository permissions and streamlined deployment cadences",
      "Maintained zero regressions across continuous feature releases"
    ],
    tags: ["MERN Stack", "React.js", "Node.js", "PHP", "MongoDB", "SVN", "GitLab", "Enterprise Architecture"],
    accentColor: "from-violet-500/20 to-purple-500/10",
    badgeColor: "border-violet-500/50 text-violet-300 bg-violet-500/10"
  },
  {
    id: "sail-zephyr-ecr",
    title: "Industrial & Fleet ECR Systems (SAIL & Zephyr ITS)",
    client: "SAIL (RSP ECR) & Zephyr ITS",
    role: "Full Stack Developer",
    category: "Industrial & Telephony",
    status: "Delivered",
    featured: false,
    highlight: "Steel Plant RSP & Fleet Alert Telematics",
    shortDesc: "Developed event-driven Emergency Call Response (ECR) systems for steel manufacturing plants (SAIL RSP) and Intelligent Transport Systems (Zephyr ITS), guaranteeing 99.9% uptime.",
    fullDesc: "Developed and optimized mission-critical Emergency Call Response (ECR) systems for industrial manufacturing (Steel Authority of India - Rourkela Steel Plant) and Intelligent Transport Systems (Zephyr ITS). Architected backend modules for event-driven emergency alerts, integrated telephony triggers with existing plant/fleet infrastructure, and implemented audit logging and admin activity monitoring for regulatory compliance.",
    architecture: [
      "Architected backend modules for event-driven emergency alerts and telemetry broadcasts",
      "Integrated telephony triggers with industrial plant infrastructure ensuring 99.9% availability",
      "Implemented immutable audit logging and administrator activity monitoring for security compliance",
      "Built real-time fleet telematics dashboards with low-latency data polling"
    ],
    impact: [
      "Sub-second incident alerting across hazardous steel plant zones and transport corridors",
      "Maintained 99.9% operational uptime across high-temperature manufacturing environments",
      "Zero unhandled system exceptions recorded during audit logging streams"
    ],
    tags: ["SAIL RSP", "Zephyr ITS", "Industrial ECR", "PHP", "MySQL", "Cisco PBX", "Audit Logging", "Telematics"],
    accentColor: "from-teal-500/20 to-emerald-500/10",
    badgeColor: "border-teal-500/50 text-teal-300 bg-teal-500/10"
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
    id: "nmc-enterprise-toolkits",
    title: "NMC ECR, NAMA, Webchat & Enterprise Toolkits",
    client: "NMC & Enterprise Clients",
    role: "Full Stack Developer",
    category: "Enterprise Full Stack",
    status: "Delivered",
    featured: false,
    highlight: "Real-Time Webchat & Modular Admin Toolkits",
    shortDesc: "Engineered real-time webchat utilities for enterprise support, civic governance dashboards (NMC, NAMA), and built reusable PHP administrative toolkits to automate deployment configurations.",
    fullDesc: "Contributed to the development and deployment of real-time communication utilities and emergency response modules for municipal governance (NMC) and specialized sectors. Engineered real-time webchat features for enterprise support, built core dashboard UI components for administrative oversight, and developed reusable internal and client-facing toolkits to automate routine configuration and deployment tasks.",
    architecture: [
      "Engineered real-time webchat support utilities with low-latency client-server communication",
      "Developed modular PHP-based toolkits to automate routine configuration and server provisioning tasks",
      "Standardized UI components for enterprise dashboards across municipal and corporate platforms",
      "Maintained secure, high-performance backend services adhering to regulatory compliance"
    ],
    impact: [
      "Streamlined client onboarding and deployment configuration times via standardized toolkits",
      "Enhanced municipal support responsiveness through real-time webchat integration",
      "Zero security compliance violations across civic governance audit inspections"
    ],
    tags: ["Webchat Utility", "PHP Toolkits", "NMC", "NAMA", "Dashboard UI", "MySQL", "Configuration Automation"],
    accentColor: "from-cyan-500/20 to-blue-500/10",
    badgeColor: "border-cyan-500/50 text-cyan-300 bg-cyan-500/10"
  }
];
