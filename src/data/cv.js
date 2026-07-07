// All content sourced from AyeshaErum_CV.pdf — keep in sync with the CV.
// This file is the ONLY place site content lives. See HOW_TO_ADD_CONTENT.md
// at the project root for plain-language editing instructions.

export const profile = {
  name: 'Ayesha Erum',
  tagline: 'Cybersecurity Student  |  Threat Intelligence & AI Security',
  location: 'Doha, Qatar',
  email: 'ayeshaerum2006@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ayeshaerum/',
  github: 'https://github.com/AyeshaErum',
  summary:
    'Cybersecurity student at UDST (GPA: 3.98) with experience in threat intelligence, AI security research, web application security, and secure application development. Contributing to LLM vulnerability research at QCRI and threat intelligence operations within CYBER+MDR environments at Digibit. Skilled in SIEM analysis, penetration testing methodologies, and security automation workflows.',
}

export const education = {
  degree: 'B.Sc. Data and Cyber Security',
  university: 'University of Doha for Science and Technology (UDST)',
  gpa: '3.98',
  expected: '2027',
  progress: 84,
  honors: ["Dean's List (2025)", 'Academic Excellence Award (2024)'],
  coursework: [
    'Red Teaming & Penetration Testing',
    'Digital Forensics & Incident Investigation',
    'Advanced Network Security',
    'Secure Application Development',
  ],
}

// LOGOS: each experience entry points at an image in public/assets/logos/.
// The files there are neutral placeholders — to use a real company logo,
// simply replace the file (keep the same filename) with the real image:
//   QCRI          -> public/assets/logos/qcri.svg   (or .png, then update the path below)
//   Digibit       -> public/assets/logos/digibit.svg
//   UDST          -> public/assets/logos/udst.svg
//   Be My Sense   -> public/assets/logos/bemysense.svg
// No layout code needs to change — the badge sizes the image automatically.
export const experience = [
  // TEMPLATE: duplicate the block below (from `{` to `},`) to add a new
  // experience entry, then edit every field. `note` is optional — delete the
  // line if not needed. Newest job goes first in this list.
  {
    role: 'Cybersecurity Research Intern',
    org: 'Qatar Computing Research Institute (QCRI)',
    period: 'May 2026 – Ongoing',
    logo: '/assets/logos/qcri.svg',
    note: 'Project: Understanding LLM-Generated Vulnerability Reports in Open-Source Ecosystems',
    bullets: [
      'Researching security implications of LLM-generated vulnerability reports across open-source ecosystems and AI-assisted security workflows',
      'Analyzing vulnerability reporting patterns, AI-generated security findings, and scalability challenges in modern vulnerability management pipelines',
      'Collaborating with cybersecurity researchers on large-scale analysis of AI-generated vulnerability reporting workflows across open-source ecosystems',
    ],
  },
  {
    role: 'Network Threat Intelligence Analyst Intern',
    org: 'Digibit – Beyond Technology',
    period: 'May 2026 – Ongoing',
    logo: '/assets/logos/digibit.svg',
    bullets: [
      'Investigating threat indicators, attack patterns and emerging cyber risks within CYBER+MDR operational environments',
      'Correlating security telemetry and threat intelligence feeds to support detection workflows and operational threat analysis using SIEM-driven processes',
      'Contributing to operational threat analysis, intelligence reporting, and managed detection and response (MDR) workflows within enterprise security environments',
    ],
  },
  {
    role: 'Applied AI & NLP Researcher',
    org: 'UDST',
    period: 'January 2026 – Present',
    logo: '/assets/logos/udst.svg',
    bullets: [
      'Developing LLM-powered referral categorization system for healthcare triage and workflow automation',
      'Performing data preprocessing, prompt engineering, model evaluation, and NLP pipeline optimization',
      'Conducting literature reviews and benchmarking applied AI/NLP approaches for real-world deployment',
      'Collaborating on machine learning workflow design and deployment-focused optimization strategies',
    ],
  },
  {
    role: 'Operations & Marketing Lead Intern',
    org: 'Be My Sense',
    period: 'Jul 2025 – April 2026',
    logo: '/assets/logos/bemysense.svg',
    bullets: [
      'Led a 16-member cross-functional team driving 140% LinkedIn growth through analytics-driven outreach',
      'Coordinated digital operations and external representation during Web Summit Qatar 2026',
    ],
  },
  {
    role: 'Peer Tutor – Computer Programming',
    org: 'UDST',
    period: 'Jan 2024 – April 2026',
    logo: '/assets/logos/udst.svg',
    bullets: [
      'Delivered technical tutoring in Python, Java, cybersecurity, and AI concepts, supporting 20+ students across programming and technical coursework',
    ],
  },
]

// Shown on the Achievements page under "Leadership".
export const leadership = {
  role: 'College of Computing and IT Representative — Student Council, UDST',
  bullets: [
    'Represent student interests and participate in student engagement and university initiatives',
    'Supported university outreach and operational coordination during major campus events',
  ],
}

// Skill tree branches (About Me page). Content from my-docs/skills.txt / the CV.
// TEMPLATE: duplicate a `{ label: ..., items: [...] },` block to add a new
// branch — the tree lays out up to 8 branches automatically.
export const skills = [
  {
    label: 'Core Security Competencies',
    items: [
      'Threat Intelligence', 'Threat Detection', 'Vulnerability Assessment', 'SIEM Analysis',
      'Telemetry Correlation', 'Security Monitoring', 'Incident Investigation', 'Penetration Testing', 'Web Security',
    ],
  },
  {
    label: 'Security Tools',
    items: ['Wireshark', 'Burp Suite', 'Nmap', 'Metasploit', 'Splunk SIEM'],
  },
  {
    label: 'Programming',
    items: ['Python', 'JavaScript', 'Node.js', 'PHP', 'Bash', 'MySQL'],
  },
  {
    label: 'Networking & Infrastructure',
    items: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'VPNs', 'NGFW Concepts', 'IDPS', 'Network Architecture'],
  },
  {
    label: 'Cloud & Automation',
    items: ['n8n', 'Railway', 'REST APIs', 'GitHub', 'Workflow Automation'],
  },
  {
    label: 'Cryptography & Security Concepts',
    items: ['AES-256', 'RSA-2048', 'SHA-256', 'PKI', 'Secure Session Management'],
  },
]

export const certifications = [
  // TEMPLATE: duplicate the line below to add a new certification, then edit
  // both fields.
  { name: 'Network Security Fundamentals', issuer: 'Palo Alto Networks' },
  { name: 'Cybersecurity Foundation', issuer: 'Palo Alto Networks' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco NetAcad' },
  { name: 'Introduction to IoT and Digital Transformation', issuer: 'Cisco NetAcad' },
  { name: 'Splunk Core Certified User (2026)', issuer: 'Splunk' },
]

export const training = [
  // TEMPLATE: add a new line in quotes, ending with a comma, for each new
  // training item.
  'NetWitness Incident Forensics Workshop',
  'Tata Cybersecurity Analyst Simulation',
  'Mastercard Cybersecurity Virtual Experience',
  'Web Development Vocational Training',
]

export const projects = [
  // TEMPLATE: duplicate the block below (from `{` to `},`) to add a new
  // project. `file` is the decorative folder-tab filename shown on the card;
  // `tags` are the small labels under the description.
  {
    name: 'Secure Email Application with Multi-Layer Encryption',
    file: 'secure_mail.py',
    tags: ['Python', 'Node.js', 'AES-256', 'RSA-2048', 'PKI'],
    bullets: [
      'Engineered a secure email platform using Python and Node.js implementing AES-256 encryption, RSA-2048 key exchange, SHA-256 hashing, and PKI-based authentication for encrypted communications and secure file transfer',
    ],
  },
  {
    name: 'Real-Time XSS Vulnerability Scanner (Browser Extension)',
    file: 'xss_scanner.crx',
    tags: ['JavaScript', 'Web Security'],
    bullets: [
      'Developed a browser extension for real-time XSS vulnerability detection and client-side attack surface analysis',
      'Implemented client-side input inspection and vulnerability severity classification workflows',
    ],
  },
  {
    name: 'Cloud-Based Security Automation Pipeline',
    file: 'autopipeline.n8n',
    tags: ['n8n', 'Railway', 'APIs', 'Automation'],
    bullets: [
      'Built a cloud-based multi-agent automation pipeline integrating Reddit API, Google Gemini AI, Gmail, Google Drive, and Pexels APIs',
      'Automated data processing, execution logging, alerting workflows, and cloud task orchestration using n8n and Railway',
    ],
  },
  {
    name: 'Secure E-Commerce Web Application',
    file: 'shop_secure.php',
    tags: ['PHP', 'MySQL', 'Session Security'],
    bullets: [
      'Developed a secure full-stack e-commerce application using PHP and MySQL implementing SQL injection prevention, session security controls, and input validation mechanisms',
    ],
  },
]

export const achievements = [
  // TEMPLATE: duplicate the line below to add a new achievement. `place` shows
  // in the medal circle ('1st', '2nd', '3rd', or '—' for a star). Leave `year`
  // as '' to hide it.
  { place: '2nd', title: 'LifeLines Hackathon', year: '2026' },
  { place: '3rd', title: 'Capture The Flag Competition', year: '' },
  { place: '3rd', title: 'Mobile App Development Competition', year: '2025' },
  { place: '—', title: "Dean's List", year: '2025' },
  { place: '—', title: 'Academic Excellence Award', year: '2024' },
  { place: '1st', title: 'Mathematics Competition', year: '2024' },
]

export const volunteering = [
  // TEMPLATE: duplicate the block below to add a new volunteering entry, then
  // edit both fields.
  {
    title: 'Web Summit Qatar 2025',
    role: 'Event Volunteer (Registration & Logistics)',
  },
  {
    title: 'University Open Day 2026',
    role: 'College of IT Student Representative',
  },
]

export const folders = [
  { label: 'About Me', path: '/about' },
  { label: 'Education', path: '/education' },
  { label: 'Experience', path: '/experience' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Volunteering', path: '/volunteering' },
  { label: 'DM', path: '/dm' },
]

export const windowTitles = {
  '/about': 'about_me.txt',
  '/education': 'education.exe',
  '/experience': 'experience.log',
  '/achievements': 'achievements.zip',
  '/projects': 'projects.dir',
  '/certifications': 'certifications.pem',
  '/volunteering': 'volunteering.md',
  '/dm': 'dm_ayesha.msg',
}
