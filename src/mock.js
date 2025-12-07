// Mock data for Odisha AI Mission Portal

export const stats = [
  { label: 'AI Use Cases Implemented', value: '47' },
  { label: 'Startups in AI Ecosystem', value: '120+' },
  { label: 'People Trained in AI', value: '15,000+' },
  { label: 'Institutions Onboarded', value: '35' }
];

// Policy Targets 2025 - Statistics Carousel from AI Policy 2025
export const policyTargets = [
  {
    category: 'Infrastructure',
    icon: 'Server',
    targets: [
      { label: 'Internet Penetration', current: '70', target2029: '90', target2036: '130', unit: 'per 100 population' },
      { label: 'Smartphone Penetration', current: '50%', target2029: '65%', target2036: '87%', unit: 'of mobile users' },
      { label: 'Digital Literacy Rate', current: '50%', target2029: '65%', target2036: '75%', unit: 'of population' },
      { label: 'Data Centre Capacity', current: '5', target2029: '10', target2036: '45', unit: 'MW' }
    ]
  },
  {
    category: 'Education & Skills',
    icon: 'GraduationCap',
    targets: [
      { label: 'Schools with AI Curriculum', current: '35%', target2029: '35%', target2036: '90%', unit: 'of schools' },
      { label: 'AI-Skilled Citizens/Year', current: '5,000', target2029: '8,000', target2036: '18,000', unit: 'trained' },
      { label: 'STEM Graduates in AI', current: '5%', target2029: '10%', target2036: '15%', unit: 'specialization' },
      { label: 'Govt Officials AI-Trained', current: '15%', target2029: '75%', target2036: '100%', unit: 'of workforce' }
    ]
  },
  {
    category: 'Innovation Ecosystem',
    icon: 'Lightbulb',
    targets: [
      { label: 'AI Innovation Centres', current: '7', target2029: '7', target2036: '7', unit: 'centers' },
      { label: 'AI Incubation Centres', current: '15', target2029: '20', target2036: '30', unit: 'centers' },
      { label: 'AI Patent Applications', current: '40', target2029: '95', target2036: '300', unit: 'per year' },
      { label: 'NITI Aayog Innovation Rank', current: 'Top 15', target2029: 'Top 15', target2036: 'Top 5', unit: 'nationally' }
    ]
  },
  {
    category: 'Sustainability',
    icon: 'Leaf',
    targets: [
      { label: 'Renewable Energy in AI Infra', current: '50%', target2029: '50%', target2036: '65%', unit: 'of consumption' },
      { label: 'Green Data Centers', current: '2', target2029: '4', target2036: '8', unit: 'facilities' },
      { label: 'Carbon Neutral AI Projects', current: '10', target2029: '30', target2036: '60', unit: 'initiatives' }
    ]
  },
  {
    category: 'Healthcare',
    icon: 'Heart',
    targets: [
      { label: 'AI-Powered Health Screenings', current: '50K', target2029: '5 Lakh', target2036: '20 Lakh', unit: 'annually' },
      { label: 'Telemedicine AI Consultations', current: '10K', target2029: '1 Lakh', target2036: '5 Lakh', unit: 'per month' },
      { label: 'Disease Prediction Models', current: '5', target2029: '15', target2036: '30', unit: 'deployed' }
    ]
  },
  {
    category: 'Agriculture',
    icon: 'Sprout',
    targets: [
      { label: 'Farmers Using AI Tools', current: '50K', target2029: '5 Lakh', target2036: '15 Lakh', unit: 'farmers' },
      { label: 'AI Crop Advisory Coverage', current: '20%', target2029: '50%', target2036: '85%', unit: 'of farmland' },
      { label: 'Precision Irrigation Systems', current: '500', target2029: '5,000', target2036: '15,000', unit: 'installations' },
      { label: 'AI Pest Detection Systems', current: '100', target2029: '1,000', target2036: '3,000', unit: 'deployed' }
    ]
  },
  {
    category: 'Governance',
    icon: 'Building2',
    targets: [
      { label: 'AI-Enabled Public Services', current: '25', target2029: '100', target2036: '200', unit: 'services' },
      { label: 'Citizens Using AI Chatbots', current: '1 Lakh', target2029: '10 Lakh', target2036: '50 Lakh', unit: 'users' },
      { label: 'AI-Powered Surveillance', current: '5', target2029: '20', target2036: '50', unit: 'cities covered' },
      { label: 'Digitized Land Records', current: '60%', target2029: '90%', target2036: '100%', unit: 'of records' }
    ]
  },
  {
    category: 'Disaster Management',
    icon: 'CloudRain',
    targets: [
      { label: 'AI Early Warning Systems', current: '3', target2029: '10', target2036: '20', unit: 'districts' },
      { label: 'Real-time Risk Assessment', current: '40%', target2029: '80%', target2036: '100%', unit: 'coverage' },
      { label: 'AI-Powered Relief Ops', current: '5', target2029: '15', target2036: '30', unit: 'operations' }
    ]
  }
];

export const detailedProjects = [
  {
    id: 1,
    name: 'Social Protection Delivery Platform (SPDP)',
    department: 'Finance Department',
    partner: 'OCAC',
    status: 'Live',
    image: '/odisha-ai_website/Featured_AI_Projects_in_Odisha/spdp.png',
    details: 'Integrated platform for social welfare schemes',
    objective: 'To create a unified platform for efficient delivery of social protection schemes to beneficiaries across Odisha, ensuring transparency, reducing duplication, and streamlining fund disbursement.',
    problem: 'Multiple welfare schemes operated in silos with fragmented databases, leading to duplication of beneficiaries, delayed fund transfers, lack of real-time monitoring, and difficulties in identifying eligible recipients.',
    solution: 'AI-powered beneficiary identification and verification system using data analytics to eliminate duplicates, predictive models to identify eligible beneficiaries, automated fund disbursement through direct benefit transfer (DBT), and real-time dashboard for monitoring scheme performance.',
    impact: [
      'Eliminated duplicate beneficiaries saving \u20b9100+ Cr annually',
      '95% faster fund disbursement through automated DBT',
      'Real-time tracking of 50+ welfare schemes benefiting 2 Cr+ citizens',
      'Reduced administrative overhead by 60%',
      'Enhanced transparency with citizen-facing portal'
    ],
    url: '#'
  },
  {
    id: 2,
    name: 'STATI - AI Powered Chatbot',
    department: 'Directorate of Economics and Statistics',
    partner: 'OCAC',
    status: 'Live',
    image: '/odisha-ai_website/Featured_AI_Projects_in_Odisha/STATI.jpg',
    details: 'Intelligent assistant for statistical data queries',
    objective: 'To provide instant access to statistical data, reports, and economic indicators through an AI-powered conversational interface, making data democratically accessible to citizens, researchers, and policymakers.',
    problem: 'Citizens and researchers faced difficulties in navigating complex statistical portals, understanding data formats, and accessing relevant economic indicators. Manual query resolution was time-consuming and required expert knowledge.',
    solution: 'NLP-powered chatbot trained on Odisha\u2019s statistical databases, understanding natural language queries in English and Odia, providing instant responses with data visualizations, and learning from user interactions to improve accuracy over time.',
    impact: [
      '10,000+ queries resolved monthly with 95% accuracy',
      '80% reduction in manual query handling time',
      'Bilingual support (English & Odia) increasing accessibility',
      'Real-time data access for evidence-based policy making',
      '24x7 availability eliminating office hour constraints'
    ],
    url: 'https://des.odisha.gov.in'
  },
  {
    id: 3,
    name: 'Odisha Livelihood Mission AI Chatbot',
    department: 'Mission Shakti Department',
    partner: 'OCAC',
    status: 'Live',
    image: '/odisha-ai_website/Featured_AI_Projects_in_Odisha/Livelihood.jpg',
    details: 'AI assistant for SHG members and livelihood programs',
    objective: 'To empower Self Help Group (SHG) members with instant access to livelihood schemes, training opportunities, market linkages, and financial assistance through an AI-powered conversational platform.',
    problem: 'SHG members in rural areas lacked awareness about available schemes, struggled with complex application processes, and had limited access to information about market opportunities and skill development programs.',
    solution: 'Multilingual AI chatbot supporting Odia and English, providing scheme information, application guidance, training schedules, market price information, and connecting members with mentors and buyers through intelligent matchmaking.',
    impact: [
      '5 lakh+ SHG members using the platform',
      'Increased scheme awareness by 70% in rural areas',
      'Reduced application processing time by 50%',
      'Facilitated \u20b950 Cr+ in market linkages for SHG products',
      'Improved financial inclusion with instant loan information'
    ],
    url: '#'
  },
  {
    id: 4,
    name: 'AI-Powered Integrated Financial Management System (IFMS)',
    department: 'Finance Department',
    partner: 'NIC Odisha',
    status: 'Concept',
     image: '/odisha-ai_website/Featured_AI_Projects_in_Odisha/indian_logo.jpeg',
    details: 'Next-gen financial management with predictive analytics',
    objective: 'To modernize Odisha\u2019s financial management system with AI-driven budgeting, expenditure tracking, revenue forecasting, and anomaly detection for enhanced fiscal governance and transparency.',
    problem: 'Existing IFMS lacked predictive capabilities for budget planning, manual reconciliation processes were error-prone, delayed detection of financial irregularities, and limited real-time insights for decision-making.',
    solution: 'AI algorithms for revenue forecasting, predictive budget allocation based on historical patterns, automated anomaly detection in transactions, ML-based expenditure optimization, and intelligent reporting with natural language generation.',
    impact: [
      'Expected 15% improvement in budget utilization',
      'Real-time financial insights for 30 departments',
      'Automated fraud detection reducing losses',
      'Faster audit processes with AI-assisted compliance checks',
      'Data-driven policy decisions with predictive modeling'
    ],
    url: '#'
  },
  {
    id: 5,
    name: 'Pensioner Life Certificate - AI Video Verification',
    department: 'Electronics & IT Department',
    partner: 'OCAC',
    status: 'Live',
    image: '/odisha-ai_website/Featured_AI_Projects_in_Odisha/AI_video_verification.png',
    details: 'Contactless life certificate submission using AI',
    objective: 'To enable senior citizens to submit life certificates for pension continuation from home using AI-powered video verification, eliminating the need for physical visits to offices.',
    problem: 'Elderly pensioners, especially those with mobility issues or living in remote areas, faced difficulties traveling to designated offices for annual life certificate submission, causing delays and hardship.',
    solution: 'AI-based facial recognition and liveness detection through mobile app or web portal, verifying pensioner identity through video selfie matched with Aadhaar database, automated certificate generation, and blockchain-secured records for tamper-proof verification.',
    impact: [
      '2 lakh+ pensioners benefited in first year',
      '100% contactless verification during COVID-19',
      'Reduced verification time from days to minutes',
      'Eliminated need for 50,000+ physical office visits',
      'Enhanced dignity and convenience for senior citizens'
    ],
    url: '#'
  },
  {
    id: 6,
    name: 'BLUIS - Bhubaneswar Land Use Intelligence System',
    department: 'Bhubaneswar Development Authority',
    partner: 'OCAC, ISRO',
    status: 'Live',
    image: '/odisha-ai_website/Featured_AI_Projects_in_Odisha/BLUIS.png',
    details: 'Satellite imagery and AI for land monitoring',
    objective: 'To monitor and manage government land assets in Bhubaneswar using satellite imagery and AI, detecting unauthorized constructions, land use changes, and ensuring planned urban development - a first for any state in India.',
    problem: 'Manual land surveys were time-consuming, costly, and could not detect real-time encroachments. Lack of comprehensive land records led to disputes and unauthorized developments going unnoticed for months.',
    solution: 'AI analysis of high-resolution satellite imagery for change detection, ML algorithms identifying unauthorized constructions, automated alerts to enforcement teams, GIS integration for comprehensive land records, and predictive models for urban planning.',
    impact: [
      'First-of-its-kind system in India for municipal land monitoring',
      'Detected 500+ unauthorized constructions in first 6 months',
      '90% reduction in manual survey costs',
      'Real-time monitoring of 15,000+ acres of government land',
      'Data-driven urban planning improving city development'
    ],
    url: '#'
  },
  {
    id: 7,
    name: 'Odisha Assembly Starred Question Drafting System',
    department: 'Odisha Legislative Assembly',
    partner: 'OCAC',
    status: 'Live',
    image: '/odisha-ai_website/Featured_AI_Projects_in_Odisha/Odisha_Assembly_Starred_Question_Drafting_System.png',
    details: 'AI assistant for legislative question drafting',
    objective: 'To assist MLAs and legislative staff in drafting starred questions efficiently by providing relevant background information, past questions on similar topics, and ensuring adherence to parliamentary procedures.',
    problem: 'Drafting starred questions required extensive research, checking past records, ensuring procedural compliance, and maintaining consistency - all of which were manual, time-intensive processes prone to errors.',
    solution: 'NLP-based AI system analyzing historical question database, suggesting relevant topics and templates, auto-checking procedural compliance, providing background briefs on subjects, and intelligent search across debates and answers.',
    impact: [
      'Reduced question drafting time by 60%',
      'Improved quality with automated compliance checking',
      'Enabled data-driven legislative questioning',
      '5000+ questions processed with AI assistance',
      'Enhanced parliamentary productivity and efficiency'
    ],
    url: '#'
  },
  {
    id: 8,
    name: 'E-Pravesh - Facial Recognition Entry System',
    department: 'General Administration Department',
    partner: 'OCAC',
    status: 'Live',
     image: '/odisha-ai_website/Featured_AI_Projects_in_Odisha/indian_logo.jpeg',
    details: 'AI-powered visitor authentication for government buildings',
    objective: 'To streamline and secure visitor entry to key government buildings (LokSeva Bhawan, Rajiv Bhawan, Kharavel Bhawan) using facial recognition technology, enhancing security while reducing wait times.',
    problem: 'Manual visitor registration was time-consuming, creating long queues and security bottlenecks. Lack of digital records made visitor tracking difficult, and verification processes were prone to human error.',
    solution: 'Web and mobile application with facial recognition technology for pre-registration, AI-powered face matching for instant authentication at entry, QR code as alternate verification, real-time visitor logs, and integration with security systems for threat detection.',
    impact: [
      '50,000+ visitors processed monthly',
      '70% reduction in entry wait times',
      'Enhanced security with AI-verified authentication',
      'Digital audit trail for all visitor entries',
      'Contactless entry improving hygiene and convenience'
    ],
    url: '#'
  }
];

export const featuredProjects = [
  {
    id: 1,
    title: 'AI-Powered Citizen Services Chatbot',
    description: 'Integrated AI chatbot on Odisha One Portal providing 24x7 citizen assistance in English and Odia languages.',
    sector: 'Governance',
    impact: '2M+ queries resolved',
    status: 'Live'
  },
  {
    id: 2,
    title: 'Smart Crop Damage Assessment',
    description: 'AI-based satellite imagery analysis for automated crop damage assessment and insurance claim verification.',
    sector: 'Agriculture',
    impact: '12% yield improvement',
    status: 'Pilot'
  },
  {
    id: 3,
    title: 'Cyclone Early Warning System',
    description: 'AI-driven predictive analytics for cyclone tracking and early warning dissemination to vulnerable coastal districts.',
    sector: 'Disaster Management',
    impact: '85% accuracy in prediction',
    status: 'Live'
  },
  {
    id: 4,
    title: 'AI-Based Disease Risk Prediction',
    description: 'Malaria and dengue risk mapping using machine learning for preventive healthcare interventions.',
    sector: 'Healthcare',
    impact: '40% reduction in outbreaks',
    status: 'Ongoing'
  }
];

export const latestUpdates = [
  {
    id: 1,
    title: 'OCAC Launches AI Fellowship Program for 100 Researchers',
    date: '2025-08-10',
    type: 'Announcement'
  },
  {
    id: 2,
    title: 'Odisha Ranked Top 10 in National AI Readiness Index 2026',
    date: '2025-08-05',
    type: 'Achievement'
  },
  {
    id: 3,
    title: 'MoU Signed with Intel India for AI Skilling Initiative',
    date: '2025-07-28',
    type: 'Partnership'
  },
  {
    id: 4,
    title: 'First AI Innovation Centre Inaugurated at IIT Bhubaneswar',
    date: '2025-07-20',
    type: 'Event'
  }
];

export const partners = [
  {
    name: 'NASSCOM',
    logo: 'NASSCOM',
    image: '/odisha-ai_website/Our_Partners_in_Innovation/nasscom-logo.jpg'
  },
  {
    name: 'IndiaAI',
    logo: 'IndiaAI',
    image: '/odisha-ai_website/Our_Partners_in_Innovation/india_AI.png'
  },
  {
    name: 'Intel',
    logo: 'Intel',
    image: '/odisha-ai_website/Our_Partners_in_Innovation/intel.png'
  },
  {
    name: 'IIT Bhubaneswar',
    logo: 'IIT-BBS',
    image: '/odisha-ai_website/Our_Partners_in_Innovation/IIT_Bhubaneswar_Logo.png'
  },
  {
    name: 'IIIT Bhubaneswar',
    logo: 'IIIT-BBS',
    image: '/odisha-ai_website/Our_Partners_in_Innovation/IIIT-logo.jpg'
  },
  {
    name: 'Startup Odisha',
    logo: 'Startup Odisha',
    image: '/odisha-ai_website/Our_Partners_in_Innovation/Startup_Odisha.svg.png'
  },
  {
    name: 'Wadhwani Foundation',
    logo: 'Wadhwani',
    image: '/odisha-ai_website/Our_Partners_in_Innovation/wadhwani-logo.png'
  }
];

export const sectors = [
  {
    id: 'governance',
    name: 'Governance',
    description: 'AI-enabled service chatbots, predictive monitoring, and citizen grievance analytics',
    icon: 'Building2'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Diagnostic AI tools, telemedicine assistants, and disease risk prediction',
    icon: 'Heart'
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    description: 'Precision irrigation, crop forecasting, and AI-based insurance claims',
    icon: 'Sprout'
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Personalized learning systems, AI tutors, and job-matching platforms',
    icon: 'GraduationCap'
  },
  {
    id: 'climate',
    name: 'Climate & Disaster',
    description: 'Cyclone warnings, flood mapping, and wildlife tracking',
    icon: 'CloudRain'
  }
];

export const startups = [
  {
    id: 1,
    name: 'AgriVision AI',
    domain: 'Agriculture',
    location: 'Bhubaneswar',
    description: 'AI-powered crop health monitoring and pest detection',
    stage: 'Seed'
  },
  {
    id: 2,
    name: 'HealthTech Innovations',
    domain: 'Healthcare',
    location: 'Cuttack',
    description: 'Telemedicine platform with AI diagnostic assistance',
    stage: 'Series A'
  },
  {
    id: 3,
    name: 'EduLearn AI',
    domain: 'Education',
    location: 'Bhubaneswar',
    description: 'Personalized learning platform for rural schools',
    stage: 'Seed'
  }
];

export const institutions = [
  {
    name: 'IIT Bhubaneswar',
    focus: 'AI & HPC Centre (AHRC)',
    projects: 12,
    publications: 45
  },
  {
    name: 'IIIT Bhubaneswar',
    focus: 'AI & Data Science Labs',
    projects: 8,
    publications: 32
  },
  {
    name: 'NIT Rourkela',
    focus: 'Machine Learning Centre',
    projects: 10,
    publications: 38
  }
];

export const events = [
  {
    id: 1,
    title: 'AI Innovation Summit 2025',
    date: '2025-09-15',
    location: 'Bhubaneswar',
    type: 'Conference'
  },
  {
    id: 2,
    title: 'AI for Agriculture Workshop',
    date: '2025-08-25',
    location: 'Online',
    type: 'Workshop'
  },
  {
    id: 3,
    title: 'Hackathon: AI for Social Good',
    date: '2025-09-01',
    location: 'IIIT Bhubaneswar',
    type: 'Hackathon'
  }
];

export const detailedSectoralApplications = [
  {
    id: 'governance',
    name: 'Governance & Administration',
    description: 'AI-powered solutions for efficient government operations and citizen services',
    icon: 'Building2',
    applications: [
      {
        name: 'AI-Powered Citizen Service Portal',
        envisagedFor: 'Seamless citizen-government interaction',
        objective: 'Create a unified, intelligent platform that provides 24x7 citizen services, processes requests automatically, and delivers personalized assistance across all government departments.',
        problem: 'Citizens face long wait times, complex processes, and multiple touchpoints to access government services. Information is scattered across departments, leading to confusion and delays.',
        impact: 'Reduce service delivery time by 70%, enable 24x7 access to 200+ services, eliminate need for physical visits for 80% of services, and improve citizen satisfaction by providing instant, accurate responses.'
      },
      {
        name: 'Predictive Policy Analytics',
        envisagedFor: 'Data-driven governance and policy making',
        objective: 'Implement AI models that analyze vast datasets to predict policy outcomes, identify emerging issues, and recommend evidence-based interventions for better governance.',
        problem: 'Policy decisions often rely on historical data and intuition. Lack of predictive insights leads to reactive governance, delayed interventions, and suboptimal resource allocation.',
        impact: 'Enable proactive policy making, improve resource allocation efficiency by 40%, identify potential issues 6 months in advance, and increase policy success rate through data-driven decisions.'
      },
      {
        name: 'Smart Document Processing',
        envisagedFor: 'Automated document handling and verification',
        objective: 'Deploy AI-powered OCR and NLP systems to automatically process, verify, and route documents across government departments, eliminating manual data entry.',
        problem: 'Manual document processing is time-consuming, error-prone, and requires significant manpower. Backlogs in document verification delay critical services.',
        impact: 'Process 100,000+ documents daily, reduce processing time from days to minutes, achieve 99% accuracy in data extraction, and free up 50% of staff time for value-added tasks.'
      }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Wellness',
    description: 'AI-driven healthcare solutions for accessible and quality medical services',
    icon: 'Heart',
    applications: [
      {
        name: 'AI Diagnostic Assistant',
        envisagedFor: 'Early disease detection and diagnosis support',
        objective: 'Deploy AI models trained on medical imaging and patient data to assist doctors in diagnosing diseases early, particularly in rural areas with limited specialist access.',
        problem: 'Rural Odisha faces severe shortage of specialist doctors. Delayed diagnosis of critical conditions leads to poor health outcomes and increased mortality rates.',
        impact: 'Extend specialist-level diagnostics to 1000+ PHCs, enable early detection of 50+ conditions, reduce diagnostic errors by 60%, and save thousands of lives through timely intervention.'
      },
      {
        name: 'Predictive Health Monitoring',
        envisagedFor: 'Preventive healthcare and disease outbreak prediction',
        objective: 'Use AI to analyze health data patterns and predict disease outbreaks, identify high-risk populations, and enable preventive healthcare interventions.',
        problem: 'Disease outbreaks often spread rapidly before detection. Lack of predictive capabilities prevents proactive healthcare planning and resource mobilization.',
        impact: 'Predict disease outbreaks 2-3 weeks in advance, identify high-risk populations for targeted interventions, reduce outbreak severity by 50%, and optimize healthcare resource deployment.'
      },
      {
        name: 'Telemedicine with AI Translation',
        envisagedFor: 'Accessible healthcare consultation for all',
        objective: 'Provide AI-powered telemedicine platform with real-time Odia language translation, symptom analysis, and intelligent appointment scheduling.',
        problem: 'Geographic barriers and language challenges prevent rural population from accessing quality healthcare. Shortage of Odia-speaking specialists limits effective consultation.',
        impact: 'Connect 5 million rural patients with specialist doctors, provide 24x7 medical consultation, eliminate language barriers, and reduce travel costs for patients by ₹500 Cr annually.'
      }
    ]
  },
  {
    id: 'agriculture',
    name: 'Agriculture & Farmer Welfare',
    description: 'Smart farming solutions powered by AI for sustainable agriculture',
    icon: 'Sprout',
    applications: [
      {
        name: 'AI Crop Advisory System',
        envisagedFor: 'Personalized farming guidance',
        objective: 'Deliver AI-powered crop recommendations based on soil health, weather patterns, and market demand, helping farmers make informed decisions for maximum yield and profit.',
        problem: 'Farmers lack access to scientific, personalized farming advice. Traditional methods lead to suboptimal yields, crop failures, and financial losses.',
        impact: 'Increase average crop yield by 25%, reduce input costs by 20%, provide personalized advice to 3 million farmers, and boost farmer income by ₹15,000 per acre annually.'
      },
      {
        name: 'Pest and Disease Detection',
        envisagedFor: 'Early identification and treatment of crop threats',
        objective: 'Use computer vision and AI to identify pest infestations and plant diseases from smartphone photos, providing instant treatment recommendations.',
        problem: 'Farmers often detect crop diseases too late for effective treatment. Lack of expert guidance leads to crop losses worth ₹1000+ Cr annually.',
        impact: 'Detect 100+ pests and diseases with 95% accuracy, provide instant treatment advice, reduce crop losses by 40%, and save ₹400 Cr worth of crops annually.'
      },
      {
        name: 'Smart Irrigation Management',
        envisagedFor: 'Water conservation and optimal irrigation',
        objective: 'Implement AI-driven irrigation systems using IoT sensors and weather data to optimize water usage, reducing waste while maximizing crop health.',
        problem: 'Inefficient irrigation practices lead to water wastage, increased costs, and inconsistent crop growth. Groundwater depletion threatens agricultural sustainability.',
        impact: 'Reduce water consumption by 40%, lower irrigation costs by ₹5000 per acre, improve crop yield consistency, and conserve 500 million liters of water annually.'
      }
    ]
  },
  {
    id: 'education',
    name: 'Education & Skill Development',
    description: 'Personalized learning through AI for enhanced educational outcomes',
    icon: 'GraduationCap',
    applications: [
      {
        name: 'AI-Powered Personalized Learning',
        envisagedFor: 'Adaptive education for every student',
        objective: 'Create AI-driven learning platform that adapts to each student\'s pace, learning style, and knowledge gaps, delivering personalized content and assessments.',
        problem: 'One-size-fits-all education fails to address individual learning needs. Students in rural areas lack access to quality education and personalized attention.',
        impact: 'Improve learning outcomes by 35%, reduce dropout rates by 40%, provide personalized education to 5 million students, and bridge urban-rural education gap.'
      },
      {
        name: 'Virtual AI Tutor',
        envisagedFor: '24x7 learning support and doubt resolution',
        objective: 'Deploy multilingual AI tutors that can answer student queries, explain concepts, and provide practice problems in Odia and English.',
        problem: 'Students lack access to teachers outside school hours for doubt clarification. Rural students have limited access to subject experts and coaching.',
        impact: 'Provide 24x7 learning support to 2 million students, resolve 1 million queries monthly, save ₹200 Cr in coaching fees, and improve exam scores by 20%.'
      },
      {
        name: 'Skill-Job Matching Platform',
        envisagedFor: 'Employment facilitation through AI',
        objective: 'Use AI to match students\' skills with job opportunities, recommend career paths, and provide personalized skill development roadmaps.',
        problem: 'Youth unemployment despite available jobs due to skill mismatch. Students lack career guidance and awareness of suitable opportunities.',
        impact: 'Place 100,000+ youth in suitable jobs annually, reduce skill mismatch by 60%, provide career guidance to 500,000 students, and increase employment rate by 25%.'
      }
    ]
  },
  {
    id: 'climate',
    name: 'Climate & Disaster Management',
    description: 'AI for environmental protection and disaster preparedness',
    icon: 'CloudRain',
    applications: [
      {
        name: 'Advanced Cyclone Prediction',
        envisagedFor: 'Early warning and evacuation planning',
        objective: 'Deploy AI models analyzing satellite data, atmospheric patterns, and historical cyclone data to predict cyclone paths and intensity with higher accuracy.',
        problem: 'Coastal Odisha faces frequent cyclones. Limited prediction accuracy hampers timely evacuation and preparation, leading to loss of life and property.',
        impact: 'Improve cyclone prediction accuracy to 95%, extend warning time to 7 days, enable safer evacuation of 2 million coastal residents, and reduce cyclone-related casualties by 80%.'
      },
      {
        name: 'Flood Risk Assessment',
        envisagedFor: 'Proactive flood management',
        objective: 'Use AI to analyze rainfall patterns, river levels, and terrain data to predict flood-prone areas and enable preventive measures.',
        problem: 'Flash floods cause extensive damage to life and property. Lack of advance warning prevents timely evacuation and mitigation measures.',
        impact: 'Predict flood events 72 hours in advance, identify high-risk zones, enable evacuation of 500,000+ people, reduce flood damage by ₹500 Cr annually.'
      },
      {
        name: 'Wildlife Conservation AI',
        envisagedFor: 'Protection of endangered species',
        objective: 'Implement AI-powered camera systems and pattern analysis to monitor wildlife, detect poaching activities, and track endangered species movements.',
        problem: 'Poaching and habitat loss threaten Odisha\'s rich biodiversity. Manual monitoring of vast forest areas is impractical and ineffective.',
        impact: 'Monitor 10,000 sq km of forest area 24x7, reduce poaching incidents by 70%, track 50+ endangered species, and protect biodiversity hotspots.'
      }
    ]
  },
  {
    id: 'security',
    name: 'Public Safety & Security',
    description: 'AI-enhanced security systems for safer communities',
    icon: 'Shield',
    applications: [
      {
        name: 'Smart Surveillance System',
        envisagedFor: 'Intelligent crime prevention and detection',
        objective: 'Deploy AI-powered video analytics for real-time threat detection, crowd monitoring, and automated alerts to law enforcement agencies.',
        problem: 'Manual monitoring of surveillance feeds is limited and reactive. Critical incidents often go undetected until it\'s too late.',
        impact: 'Monitor 10,000+ cameras in real-time, reduce crime response time by 60%, prevent incidents through proactive alerts, and improve public safety perception by 50%.'
      },
      {
        name: 'Cybercrime Detection',
        envisagedFor: 'Protection against digital threats',
        objective: 'Use AI to detect and prevent cybercrimes, online fraud, and data breaches, protecting citizens and government systems.',
        problem: 'Rising cybercrimes target vulnerable citizens and government infrastructure. Traditional security measures struggle to keep pace with evolving threats.',
        impact: 'Detect cyber threats in real-time, prevent online fraud worth ₹100 Cr annually, protect 1 million citizens from cyber scams, and secure government data.'
      },
      {
        name: 'Emergency Response Optimization',
        envisagedFor: 'Faster emergency services',
        objective: 'Implement AI system that analyzes emergency calls, predicts resource needs, and optimizes dispatch of ambulances, fire services, and police.',
        problem: 'Delayed emergency response costs lives. Inefficient resource allocation and traffic congestion hamper timely assistance.',
        impact: 'Reduce emergency response time by 50%, save 5,000+ lives annually, optimize resource deployment, and improve emergency service efficiency by 40%.'
      }
    ]
  }
];

export const sectoralApplications = [
  {
    title: 'E-Governance Transformation',
    description: 'AI-powered citizen services portal enabling 24x7 assistance, predictive analytics for policy making, and automated grievance redressal.',
    sector: 'Governance',
    icon: 'Building2',
    impact: '5M+ citizens served',
    status: 'Deployed',
    beneficiaries: '30 Districts'
  },
  {
    title: 'Smart Healthcare Network',
    description: 'AI diagnostic tools for early disease detection, telemedicine platforms connecting rural areas, and predictive healthcare analytics.',
    sector: 'Healthcare',
    icon: 'Heart',
    impact: '2M+ diagnoses',
    status: 'Deployed',
    beneficiaries: '500+ PHCs'
  },
  {
    title: 'Precision Agriculture Platform',
    description: 'Satellite-based crop monitoring, AI-driven pest prediction, smart irrigation systems, and automated insurance claim processing.',
    sector: 'Agriculture',
    icon: 'Sprout',
    impact: '15% yield increase',
    status: 'Pilot',
    beneficiaries: '100K+ farmers'
  },
  {
    title: 'Intelligent Education System',
    description: 'Personalized learning paths, AI tutors for rural students, skill-matching platforms, and adaptive assessment systems.',
    sector: 'Education',
    icon: 'GraduationCap',
    impact: '200K+ students',
    status: 'Pilot',
    beneficiaries: '1000+ schools'
  },
  {
    title: 'Climate & Disaster Management',
    description: 'Real-time cyclone tracking, flood prediction models, automated early warning systems, and disaster response coordination.',
    sector: 'Climate',
    icon: 'CloudRain',
    impact: '85% accuracy',
    status: 'Deployed',
    beneficiaries: 'All Coastal Districts'
  },
  {
    title: 'Cyber Security Framework',
    description: 'AI-powered threat detection, automated incident response, fraud prevention systems, and secure digital infrastructure.',
    sector: 'Security',
    icon: 'Shield',
    impact: '99.9% uptime',
    status: 'Deployed',
    beneficiaries: 'Statewide'
  }
];

export const progressMilestones = [
  {
    year: '2023',
    title: 'AI Policy Launch',
    description: 'Odisha became one of the first states to launch a comprehensive AI policy, setting the foundation for systematic AI adoption.',
    icon: 'Award',
    metrics: [
      { label: 'Budget Allocated', value: '₹500 Cr' },
      { label: 'Departments Onboarded', value: '15' }
    ]
  },
  {
    year: '2024',
    title: 'Infrastructure Development',
    description: 'Established 7 AI Innovation Centers and high-performance computing facilities across major cities.',
    icon: 'TrendingUp',
    metrics: [
      { label: 'Innovation Centers', value: '7' },
      { label: 'Computing Capacity', value: '10 PetaFLOPS' }
    ]
  },
  {
    year: '2025',
    title: 'Skill Development Drive',
    description: 'Launched massive AI skilling programs targeting students, professionals, and government officials.',
    icon: 'Users',
    metrics: [
      { label: 'People Trained', value: '15,000+' },
      { label: 'Certification Programs', value: '25' }
    ]
  },
  {
    year: '2026 Target',
    title: 'Full-Scale Deployment',
    description: 'Aim to deploy AI solutions across all 30 districts covering governance, healthcare, agriculture, and education.',
    icon: 'Target',
    metrics: [
      { label: 'Target Use Cases', value: '100+' },
      { label: 'Expected Beneficiaries', value: '10M+' }
    ]
  }
];

export const innovationCentres = [
  {
    id: 1,
    name: 'IIT Bhubaneswar - AI & HPC Research Centre',
    acronym: 'IIT-BBS',
    type: 'Research Institute',
    location: 'Bhubaneswar',
    description: 'Leading research center focusing on AI, High-Performance Computing, and Machine Learning applications for societal impact.',
    focusAreas: ['AI & ML', 'HPC', 'Computer Vision', 'NLP'],
    achievements: {
      projects: 12,
      publications: 45
    }
  },
  {
    id: 2,
    name: 'IIIT Bhubaneswar - AI & Data Science Labs',
    acronym: 'IIIT-BBS',
    type: 'Technical Institute',
    location: 'Bhubaneswar',
    description: 'Specialized labs for AI research, data science education, and industry collaboration in emerging technologies.',
    focusAreas: ['Data Science', 'AI Research', 'Deep Learning', 'IoT'],
    achievements: {
      projects: 8,
      publications: 32
    }
  },
  {
    id: 3,
    name: 'NIT Rourkela - Machine Learning Centre',
    acronym: 'NIT-RKL',
    type: 'Technical Institute',
    location: 'Rourkela',
    description: 'Centre of excellence for machine learning research with focus on industrial applications and smart manufacturing.',
    focusAreas: ['Machine Learning', 'Robotics', 'Smart Manufacturing', 'AI Ethics'],
    achievements: {
      projects: 10,
      publications: 38
    }
  },
  {
    id: 4,
    name: 'OCAC AI Innovation Hub',
    acronym: 'OCAC-AIH',
    type: 'Government Initiative',
    location: 'Bhubaneswar',
    description: 'State-run innovation hub fostering AI startups, providing mentorship, infrastructure, and funding support.',
    focusAreas: ['Startup Incubation', 'AI Training', 'Policy Research', 'Digital Infrastructure'],
    achievements: {
      projects: 25,
      publications: 15
    }
  },
  {
    id: 5,
    name: 'VSSUT Burla - AI Research Lab',
    acronym: 'VSSUT',
    type: 'Technical Institute',
    location: 'Burla',
    description: 'Research laboratory specializing in AI for agriculture, rural development, and sustainable technologies.',
    focusAreas: ['AgriTech AI', 'Rural Innovation', 'Sustainable Tech', 'Healthcare AI'],
    achievements: {
      projects: 6,
      publications: 22
    }
  },
  {
    id: 6,
    name: 'BPUT - AI & Automation Centre',
    acronym: 'BPUT',
    type: 'Technical University',
    location: 'Rourkela',
    description: 'University-wide initiative promoting AI education, research collaborations, and industry partnerships.',
    focusAreas: ['AI Education', 'Automation', 'Industry 4.0', 'Smart Cities'],
    achievements: {
      projects: 15,
      publications: 28
    }
  },
  {
    id: 7,
    name: 'Startup Odisha - AI Accelerator',
    acronym: 'SO-AI',
    type: 'Accelerator Program',
    location: 'Bhubaneswar',
    description: 'Fast-track program for AI startups with mentorship from industry experts and access to funding opportunities.',
    focusAreas: ['Startup Acceleration', 'Funding Support', 'Market Access', 'Mentorship'],
    achievements: {
      projects: 30,
      publications: 10
    }
  }
];

export const quickLinks = {
  'IndiaAI': [
    {
      name: 'IndiaAI Portal',
      url: 'https://indiaai.gov.in',
      icon: 'Globe',
      description: 'National AI portal for resources, policies, and initiatives',
      image: '/odisha-ai_website/Important_Links/India_AI.png'
    },
    {
      name: 'IndiaAI Compute',
      url: 'https://indiaai.gov.in/compute',
      icon: 'Server',
      description: 'Access to AI computing infrastructure and GPU resources',
      image: '/odisha-ai_website/Important_Links/intel.png'
    },
    {
      name: 'IndiaAI Datasets (Kosh)',
      url: 'https://indiaai.gov.in/datasets',
      icon: 'Database',
      description: 'Repository of Indian datasets for AI/ML development',
      image: '/odisha-ai_website/Important_Links/IndiaAI_Datasets_Kosh.png'
    },
    {
      name: 'MeitY',
      url: 'https://www.meity.gov.in',
      icon: 'Building2',
      description: 'Ministry of Electronics and Information Technology',
      image: '/odisha-ai_website/Important_Links/meity-startup-hub-meity-startup-hub-01-01.jpg'
    }
  ],
  'Government': [
    {
      name: 'NIC (National Informatics Centre)',
      url: 'https://www.nic.in',
      icon: 'Server',
      description: 'Technology backbone for e-governance',
      image: '/odisha-ai_website/Important_Links/NIC.png'
    },
    {
      name: 'OCAC',
      url: 'https://www.ocac.in',
      icon: 'Building2',
      description: 'Odisha Computer Application Centre',
      image: '/odisha-ai_website/Important_Links/ocac.png'
    },
    {
      name: 'Government of Odisha',
      url: 'https://www.odisha.gov.in',
      icon: 'Flag',
      description: 'Official portal of Odisha Government',
      image: '/odisha-ai_website/Important_Links/odisha-govt.png'
    },
    {
      name: 'Government of India',
      url: 'https://www.india.gov.in',
      icon: 'Flag',
      description: 'National portal of Government of India',
      image: '/odisha-ai_website/Important_Links/Government_of_India.png'
    }
  ],
  'Organizations': [
    {
      name: 'People+AI',
      url: 'https://peopleplus.ai',
      icon: 'Users',
      description: 'Building AI for Bharat, by Bharat',
      image: '/odisha-ai_website/Important_Links/People_AI.avif'
    },
    {
      name: 'Wadhwani Foundation',
      url: 'https://www.wadhwaniai.org',
      icon: 'Award',
      description: 'AI solutions for social impact and development',
      image: '/odisha-ai_website/Important_Links/wadhwani.png'
    },
    {
      name: 'Intel India',
      url: 'https://www.intel.in',
      icon: 'Server',
      description: 'Technology innovation and AI acceleration',
      image: '/odisha-ai_website/Important_Links/intel.png'
    }
  ]
};

export const partnerLogos = [
  { name: 'IndiaAI', subtitle: 'Gov Initiative' },
  { name: 'MeitY', subtitle: 'Ministry' },
  { name: 'NASSCOM', subtitle: 'Industry Body' },
  { name: 'Intel', subtitle: 'Technology' },
  { name: 'IIT-BBS', subtitle: 'Research' },
  { name: 'IIIT-BBS', subtitle: 'Education' },
  { name: 'NIT-RKL', subtitle: 'Innovation' },
  { name: 'OCAC', subtitle: 'Government' },
  { name: 'NIC', subtitle: 'Infrastructure' },
  { name: 'People+AI', subtitle: 'Community' },
  { name: 'Wadhwani', subtitle: 'Foundation' },
  { name: 'Startup Odisha', subtitle: 'Incubator' }
];

export const aiNews = [
  {
    id: 1,
    title: 'OpenAI Releases GPT-5 with Enhanced Reasoning Capabilities',
    description: 'Latest AI model demonstrates breakthrough in complex problem-solving and multi-step reasoning tasks, setting new benchmarks across various domains.',
    date: '2025-08-15',
    type: 'International',
    source: 'OpenAI',
    url: '#',
    tags: ['GPT-5', 'LLM', 'Reasoning']
  },
  {
    id: 2,
    title: 'India Launches National AI Mission with ₹10,000 Cr Investment',
    description: 'Government announces comprehensive AI mission focusing on compute infrastructure, innovation, and skill development across the nation.',
    date: '2025-08-12',
    type: 'National',
    source: 'MeitY',
    url: '#',
    tags: ['Policy', 'IndiaAI', 'Investment']
  },
  {
    id: 3,
    title: 'Google DeepMind Achieves Breakthrough in Protein Folding',
    description: 'AlphaFold 3 predicts protein structures with unprecedented accuracy, opening new possibilities for drug discovery and biological research.',
    date: '2025-08-10',
    type: 'International',
    source: 'DeepMind',
    url: '#',
    tags: ['AlphaFold', 'Biotech', 'Research']
  },
  {
    id: 4,
    title: 'IIT Madras Develops AI Tool for Indian Language Processing',
    description: 'New NLP framework supports 22 Indian languages with improved accuracy for low-resource language translation and understanding.',
    date: '2025-08-08',
    type: 'National',
    source: 'IIT Madras',
    url: '#',
    tags: ['NLP', 'Indian Languages', 'Research']
  },
  {
    id: 5,
    title: 'EU Passes Comprehensive AI Regulation Framework',
    description: 'European Union finalizes AI Act establishing guidelines for ethical AI development, deployment, and governance across member states.',
    date: '2025-08-05',
    type: 'International',
    source: 'EU Commission',
    url: '#',
    tags: ['Regulation', 'Ethics', 'Policy']
  },
  {
    id: 6,
    title: 'NITI Aayog Partners with Tech Giants for AI Skilling',
    description: 'Initiative aims to train 1 million Indians in AI/ML technologies through industry partnerships and certification programs.',
    date: '2025-08-03',
    type: 'National',
    source: 'NITI Aayog',
    url: '#',
    tags: ['Skilling', 'Partnership', 'Education']
  },
  {
    id: 7,
    title: 'Meta Announces Open-Source Llama 4 Model',
    description: 'Latest iteration of Llama series offers improved performance while maintaining commitment to open-source AI development.',
    date: '2025-08-01',
    type: 'International',
    source: 'Meta AI',
    url: '#',
    tags: ['Llama', 'Open Source', 'LLM']
  },
  {
    id: 8,
    title: 'Indian Startups Raise $2B in AI Funding in 2025',
    description: 'Venture capital investment in Indian AI companies reaches record high, focusing on healthcare, agriculture, and fintech applications.',
    date: '2025-07-30',
    type: 'National',
    source: 'NASSCOM',
    url: '#',
    tags: ['Funding', 'Startups', 'Investment']
  },
  {
    id: 9,
    title: 'Anthropic Introduces Constitutional AI Framework',
    description: 'New approach to AI safety ensures models align with human values through constitutional principles and oversight.',
    date: '2025-07-28',
    type: 'International',
    source: 'Anthropic',
    url: '#',
    tags: ['AI Safety', 'Ethics', 'Claude']
  }
];

export const aiTools = [
  {
    id: 1,
    name: 'Bhashini (भाषिणी)',
    description: 'National Language Translation Mission providing AI-powered translation and speech recognition for all Indian languages including Odia.',
    url: 'https://bhashini.gov.in',
    category: 'language',
    image: '/odisha-ai_website/AI_Tools_Resources/Bhasin.png',
    gradient: 'from-blue-400 to-indigo-500',
    featured: true,
    provider: 'MeitY, Govt of India',
    tags: ['Translation', 'Speech-to-Text', 'Odia Support'],
    buttonText: 'Try Bhashini',
    importance: 'Critical tool for Odia language preservation and making technology accessible to Odia speakers through native language interfaces.'
  },
  {
    id: 2,
    name: 'Odia Virtual Academy',
    description: 'Digital platform for Odia language learning, literature, and AI-powered language tools. Building Odia LLM to preserve and promote Odia language in the digital age.',
    url: 'https://odia.nic.in',
    category: 'language',
    image: '/odisha-ai_website/AI_Tools_Resources/Odia_virtual_academy.png',
    gradient: 'from-orange-400 to-red-500',
    featured: true,
    provider: 'Govt of Odisha',
    tags: ['Odia LLM', 'Language Preservation', 'Education'],
    buttonText: 'Visit Academy',
    importance: 'Pioneering initiative to develop Odia LLM ensuring the language thrives in AI era while preserving cultural heritage through digital means.'
  },
  {
    id: 3,
    name: 'IndiaAI Compute Portal',
    description: 'Access to high-performance computing infrastructure, GPUs, and cloud resources for AI research and development.',
    url: 'https://indiaai.gov.in/compute',
    category: 'infrastructure',
    image: '/odisha-ai_website/AI_Tools_Resources/India_AI_compute_portal.png',
    gradient: 'from-purple-400 to-pink-500',
    provider: 'IndiaAI',
    tags: ['GPU Access', 'Cloud Computing', 'HPC'],
    buttonText: 'Request Access'
  },
  {
    id: 4,
    name: 'IndiaAI Datasets (Kosh)',
    description: 'Repository of curated Indian datasets for AI/ML training including Odia language datasets and regional data.',
    url: 'https://indiaai.gov.in/datasets',
    category: 'infrastructure',
    image: '/odisha-ai_website/AI_Tools_Resources/IndiaAI_Datasets_Kosh.png',
    gradient: 'from-green-400 to-teal-500',
    provider: 'IndiaAI',
    tags: ['Datasets', 'Open Data', 'Indian Languages'],
    buttonText: 'Browse Datasets'
  },
  {
    id: 5,
    name: 'GitHub Model Portal',
    description: 'Test and experiment with various AI models including GPT, Llama, Gemini, and more in an interactive playground.',
    url: 'https://github.com/marketplace/models',
    category: 'models',
    image: '/odisha-ai_website/AI_Tools_Resources/Github.png',
    gradient: 'from-gray-400 to-gray-600',
    provider: 'GitHub',
    tags: ['Model Testing', 'Playground', 'LLMs'],
    buttonText: 'Try Models'
  },
  {
    id: 6,
    name: 'EkStep Foundation - DIGIT',
    description: 'Open-source Digital Public Infrastructure (DPI) platform for governance and citizen services with AI integration.',
    url: 'https://www.digit.org',
    category: 'opensource',
    image: '/odisha-ai_website/AI_Tools_Resources/Digit.png',
    gradient: 'from-yellow-400 to-orange-500',
    featured: true,
    provider: 'EkStep Foundation',
    tags: ['DPI', 'Open Source', 'Governance'],
    buttonText: 'Explore DIGIT',
    importance: 'Foundational digital infrastructure enabling AI-powered citizen services and scalable governance solutions.'
  },
  {
    id: 7,
    name: 'People+AI Projects',
    description: 'Open-source AI projects and tools built for Indian context, focusing on healthcare, agriculture, and education.',
    url: 'https://github.com/people-plus-ai',
    category: 'opensource',
    image: '/odisha-ai_website/AI_Tools_Resources/Hugging_face.png',
    gradient: 'from-teal-400 to-blue-500',
    provider: 'People+AI',
    tags: ['Open Source', 'AI for Good', 'Indian Context'],
    buttonText: 'View Projects'
  },
  {
    id: 8,
    name: 'Digital India Portal',
    description: 'Central platform for all digital governance initiatives, e-services, and technology programs across India.',
    url: 'https://www.digitalindia.gov.in',
    category: 'government',
    image: '/odisha-ai_website/AI_Tools_Resources/Digital-india.jpg',
    gradient: 'from-blue-500 to-indigo-600',
    provider: 'Govt of India',
    tags: ['Digital Governance', 'e-Services', 'Digital India'],
    buttonText: 'Visit Portal'
  },
  {
    id: 9,
    name: 'NeGD (National e-Governance Division)',
    description: 'Implementing e-governance projects and providing technology support for government digital transformation.',
    url: 'https://negd.gov.in',
    category: 'government',
    image: '/odisha-ai_website/AI_Tools_Resources/NeGD.png',
    gradient: 'from-orange-500 to-red-600',
    provider: 'MeitY',
    tags: ['e-Governance', 'Digital Services', 'Policy'],
    buttonText: 'Learn More'
  },
  {
    id: 10,
    name: 'Hugging Face',
    description: 'Platform for open-source AI models, datasets, and tools. Access thousands of pre-trained models.',
    url: 'https://huggingface.co',
    category: 'opensource',
    image: '/odisha-ai_website/AI_Tools_Resources/Hugging_face.png',
    gradient: 'from-yellow-300 to-orange-400',
    provider: 'Hugging Face',
    tags: ['Models', 'Datasets', 'Transformers'],
    buttonText: 'Explore Models'
  },
  {
    id: 11,
    name: 'TensorFlow',
    description: 'End-to-end open-source platform for machine learning with comprehensive tools and libraries.',
    url: 'https://www.tensorflow.org',
    category: 'opensource',
    image: '/odisha-ai_website/AI_Tools_Resources/tensorflow.webp',
    gradient: 'from-orange-400 to-red-500',
    provider: 'Google',
    tags: ['ML Framework', 'Deep Learning', 'Python'],
    buttonText: 'Get Started'
  },
  {
    id: 12,
    name: 'PyTorch',
    description: 'Open-source machine learning framework for research and production with dynamic computation graphs.',
    url: 'https://pytorch.org',
    category: 'opensource',
    image: '/odisha-ai_website/AI_Tools_Resources/Pytorch.png',
    gradient: 'from-red-400 to-orange-500',
    provider: 'Meta',
    tags: ['ML Framework', 'Research', 'Python'],
    buttonText: 'Start Learning'
  }
];

export const visionGoals = [
  {
    title: 'AI-First Governance',
    description: 'Transform Odisha into an AI-first state where every citizen service is enhanced by intelligent automation and predictive analytics.',
    timeline: '2025-2027',
    icon: 'Brain',
    objectives: [
      'Automate 80% of citizen services',
      'Reduce processing time by 70%',
      'Achieve 95% citizen satisfaction'
    ]
  },
  {
    title: 'Healthcare Revolution',
    description: 'Build a world-class AI-powered healthcare ecosystem ensuring quality medical care reaches every corner of the state.',
    timeline: '2025-2028',
    icon: 'Sparkles',
    objectives: [
      'AI diagnostics in all PHCs',
      'Telemedicine coverage statewide',
      'Predictive health monitoring'
    ]
  },
  {
    title: 'Agricultural Excellence',
    description: 'Empower farmers with AI-driven insights for sustainable farming, maximizing yields while minimizing environmental impact.',
    timeline: '2025-2027',
    icon: 'Rocket',
    objectives: [
      'Precision farming for all crops',
      'Real-time market intelligence',
      'Climate-resilient practices'
    ]
  },
  {
    title: 'Education Transformation',
    description: 'Create personalized learning experiences for every student, bridging urban-rural divide through AI-powered education.',
    timeline: '2025-2029',
    icon: 'Globe',
    objectives: [
      'AI tutors in all schools',
      'Skill-based curriculum',
      'Industry-ready workforce'
    ]
  },
  {
    title: 'Innovation Ecosystem',
    description: 'Foster a thriving startup ecosystem making Odisha a preferred destination for AI innovation and entrepreneurship.',
    timeline: '2025-2030',
    icon: 'Network',
    objectives: [
      'Support 500+ AI startups',
      'Create 50,000+ jobs',
      'Attract ₹5000 Cr investment'
    ]
  },
  {
    title: 'Sustainable Development',
    description: 'Leverage AI for environmental conservation, climate action, and achieving UN Sustainable Development Goals.',
    timeline: '2025-2030',
    icon: 'Zap',
    objectives: [
      'Carbon-neutral operations',
      'Wildlife protection systems',
      'Smart waste management'
    ]
  }
];
// FAQ Section
export const faqs = [
  {
    question: "What is the Odisha AI Mission?",
    answer: "The Odisha AI Mission is a flagship initiative under the Odisha Artificial Intelligence Policy 2025, aimed at fostering an AI-driven ecosystem for governance, industry, and citizens. It focuses on empowering innovation, inclusion, and intelligence across various sectors."
  },
  {
    question: "Who can participate in AI training programs?",
    answer: "AI training programs are open to students, working professionals, government officials, entrepreneurs, and anyone interested in learning AI. Programs range from beginner to advanced levels, with certifications from recognized institutions like OCAC and industry partners."
  },
  {
    question: "How can startups get support under the AI Mission?",
    answer: "Startups can access mentorship, incubation facilities, funding opportunities, and market linkages through AI Innovation Centres and Incubation Centres across Odisha. Register through the portal to connect with the startup ecosystem and explore various support schemes."
  },
  {
    question: "What sectors are prioritized for AI implementation?",
    answer: "Key priority sectors include Healthcare, Agriculture, Education, Governance, Disaster Management, Manufacturing, Transportation, and Financial Services. AI solutions are being deployed to transform service delivery and improve citizen welfare across these domains."
  },
  {
    question: "How can I submit an innovative AI project idea?",
    answer: "You can submit your innovative AI project idea through the 'AI Project Idea' form on this portal. Selected projects may receive mentorship, funding, and implementation support from the government and partner organizations."
  },
  {
    question: "What is the role of OCAC in the AI Mission?",
    answer: "Odisha Computer Application Centre (OCAC) is the nodal agency for implementing AI initiatives. OCAC provides certification for training programs, develops AI solutions for government departments, and manages the overall AI ecosystem in collaboration with various stakeholders."
  },
  {
    question: "Are there any AI-powered citizen services available?",
    answer: "Yes! Several AI-powered services are live, including STATI chatbot for statistical queries, AI-based life certificate verification for pensioners, social welfare scheme delivery platforms, and chatbots for livelihood missions. More services are being added regularly."
  },
  {
    question: "How is Odisha ensuring ethical and responsible AI adoption?",
    answer: "The AI Policy 2025 emphasizes ethical AI principles including transparency, fairness, accountability, and privacy protection. An AI Ethics Committee oversees implementations, and all projects undergo ethical review to ensure responsible and inclusive AI deployment."
  }
];

// AI Training Programs
export const aiTrainingPrograms = [
  {
    name: "OKCL AI Training Program",
    provider: "Odisha Knowledge Corporation Limited (OKCL)",
    certification: "Certified by Odisha Computer Application Centre (OCAC)",
    description: "Comprehensive AI and Machine Learning courses designed for students and professionals, covering fundamentals to advanced topics with hands-on projects.",
    duration: "3-6 months",
    level: "Beginner to Advanced",
    icon: "GraduationCap",
    color: "blue",
    image: "/odisha-ai_website/Skilling_on_Artificial_Intelligence/okcl.png",
    highlights: ["Government Certified", "Industry Projects", "Job Assistance"]
  },
  {
    name: "Future Skill Prime",
    provider: "Ministry of Electronics & IT (MeitY)",
    certification: "National Certification",
    description: "A national initiative to reskill and upskill IT professionals in emerging technologies including AI, ML, IoT, and Cloud Computing.",
    duration: "Self-paced",
    level: "Intermediate to Advanced",
    icon: "Rocket",
    color: "purple",
    image: "/odisha-ai_website/Skilling_on_Artificial_Intelligence/future_skill_prime.webp",
    highlights: ["Free Courses", "Industry-Recognized", "Flexible Learning"]
  },
  {
    name: "NTELP (National Technology Enhanced Learning Programme)",
    provider: "AICTE & Industry Partners",
    certification: "AICTE Certification",
    description: "Technology-enhanced learning program offering AI, Data Science, and emerging tech courses with virtual labs and industry mentorship.",
    duration: "4-8 weeks",
    level: "All Levels",
    icon: "BookOpen",
    color: "green",
    image: "/odisha-ai_website/Skilling_on_Artificial_Intelligence/NPTEL.jpg",
    highlights: ["Virtual Labs", "Mentorship", "Certificate of Excellence"]
  },
  {
    name: "ALL For ALL YUVA AI",
    provider: "Government of Odisha",
    certification: "State Government Certified",
    description: "Youth-focused AI literacy program aimed at making AI accessible to all young minds in Odisha, with special focus on rural and underprivileged communities.",
    duration: "2-4 months",
    level: "Beginner to Intermediate",
    icon: "Users",
    color: "orange",
    image: "/odisha-ai_website/Skilling_on_Artificial_Intelligence/YUVA_AI.png",
    highlights: ["Youth Focused", "Rural Outreach", "Free Training"]
  },
  {
    name: "AI for Government Officials",
    provider: "OCAC & OKCL",
    certification: "Government Certification",
    description: "Specialized training program for government officials to understand AI applications in public service delivery and policy formulation.",
    duration: "1-2 months",
    level: "Beginner",
    icon: "Building2",
    color: "red",
    image: "/odisha-ai_website/Skilling_on_Artificial_Intelligence/ocac-okcllogo.png",
    highlights: ["Government Officials", "Policy Focus", "Practical Applications"]
  },
  {
    name: "AI Startup Accelerator Program",
    provider: "Innovation Centres Network",
    certification: "Industry Partnership Certificate",
    description: "Intensive program for AI startups covering product development, business strategy, funding, and market access with mentorship from industry leaders.",
    duration: "6 months",
    level: "Advanced",
    icon: "Zap",
    color: "yellow",
     image: "/odisha-ai_website/Skilling_on_Artificial_Intelligence/Startup_Odisha.svg.png",
    highlights: ["Startup Focused", "Funding Support", "Industry Mentors"]
  }
];

// Hero Section Targets - Replace stats
export const heroTargets2029 = [
  { label: 'AI Use Cases Target', value: '100', color: 'blue' },
  { label: 'AI Startups Target', value: '300', color: 'purple' },
  { label: 'People to be Trained', value: '50,000', color: 'green' },
  { label: 'Institutions Target', value: '75', color: 'orange' }
];

export const heroTargets2036 = [
  { label: 'AI Use Cases Vision', value: '200', color: 'blue' },
  { label: 'AI Startups Vision', value: '500', color: 'purple' },
  { label: 'People to be Trained', value: '2,00,000', color: 'green' },
  { label: 'Institutions Vision', value: '150', color: 'orange' }
];

// Acts, Notifications, Govt Orders and Guidelines
export const actsNotifications = [
  {
    type: 'Act',
    title: 'Odisha Artificial Intelligence Policy 2025',
    date: '2025-01-15',
    description: 'Comprehensive policy framework for AI adoption in Odisha',
    fileUrl: '#',
    icon: 'FileText'
  },
  {
    type: 'Notification',
    title: 'AI Ethics Guidelines Notification',
    date: '2025-02-01',
    description: 'Guidelines for ethical AI implementation across government departments',
    fileUrl: '#',
    icon: 'Shield'
  },
  {
    type: 'Govt Order',
    title: 'Establishment of AI Innovation Centres',
    date: '2024-12-10',
    description: 'Government order for setting up 7 AI Innovation Centres across Odisha',
    fileUrl: '#',
    icon: 'Building2'
  },
  {
    type: 'Guideline',
    title: 'Data Privacy and Security Guidelines for AI Projects',
    date: '2025-01-20',
    description: 'Mandatory guidelines for data handling in AI implementations',
    fileUrl: '#',
    icon: 'Lock'
  },
  {
    type: 'Act',
    title: 'Odisha Digital Infrastructure Act',
    date: '2024-11-15',
    description: 'Legal framework for digital infrastructure development',
    fileUrl: '#',
    icon: 'FileText'
  },
  {
    type: 'Notification',
    title: 'AI Startup Incentive Scheme Notification',
    date: '2025-02-15',
    description: 'Financial incentives and benefits for AI startups registered in Odisha',
    fileUrl: '#',
    icon: 'Gift'
  },
  {
    type: 'Govt Order',
    title: 'Mandatory AI Training for Government Officials',
    date: '2025-01-05',
    description: 'Order mandating AI awareness training for all state government employees',
    fileUrl: '#',
    icon: 'GraduationCap'
  },
  {
    type: 'Guideline',
    title: 'AI Procurement Guidelines',
    date: '2024-12-20',
    description: 'Standard procedures for procuring AI solutions and services',
    fileUrl: '#',
    icon: 'ShoppingCart'
  }
];

// Tenders
export const tenders = [
  {
    id: 'TND-2025-001',
    title: 'Development of AI-Powered Healthcare Diagnostic System',
    department: 'Health & Family Welfare Department',
    publishDate: '2025-02-01',
    closingDate: '2025-03-15',
    estimatedValue: '₹5.5 Crore',
    status: 'Open',
    category: 'Healthcare'
  },
  {
    id: 'TND-2025-002',
    title: 'Implementation of Smart Agriculture Advisory Platform',
    department: 'Agriculture & Farmers Empowerment Department',
    publishDate: '2025-01-25',
    closingDate: '2025-03-10',
    estimatedValue: '₹3.2 Crore',
    status: 'Open',
    category: 'Agriculture'
  },
  {
    id: 'TND-2025-003',
    title: 'AI-Based Traffic Management System for Smart Cities',
    department: 'Housing & Urban Development Department',
    publishDate: '2025-02-05',
    closingDate: '2025-03-20',
    estimatedValue: '₹8.7 Crore',
    status: 'Open',
    category: 'Smart Cities'
  },
  {
    id: 'TND-2025-004',
    title: 'Natural Language Processing Chatbot for Citizen Services',
    department: 'Electronics & IT Department',
    publishDate: '2025-01-20',
    closingDate: '2025-03-05',
    estimatedValue: '₹2.8 Crore',
    status: 'Open',
    category: 'E-Governance'
  },
  {
    id: 'TND-2025-005',
    title: 'AI-Powered Early Warning System for Disaster Management',
    department: 'Revenue & Disaster Management Department',
    publishDate: '2025-02-10',
    closingDate: '2025-03-25',
    estimatedValue: '₹6.5 Crore',
    status: 'Open',
    category: 'Disaster Management'
  },
  {
    id: 'TND-2025-006',
    title: 'Computer Vision System for Wildlife Conservation',
    department: 'Forest & Environment Department',
    publishDate: '2025-01-30',
    closingDate: '2025-03-12',
    estimatedValue: '₹4.2 Crore',
    status: 'Open',
    category: 'Environment'
  }
];

// Event Gallery - Photos and Videos
export const eventGallery = [
  {
    id: 1,
    eventName: 'AI Mission Flagship Summit 2025',
    date: '2025-01-20',
    location: 'Bhubaneswar',
    description: 'Leaders from government, academia, and industry outlined flagship initiatives for the Odisha AI Mission.',
    thumbnail: '/odisha-ai_website/Gallery/1.jpg',
    media: [
      { type: 'photo', url: '/odisha-ai_website/Gallery/1.jpg', caption: 'Dignitaries inaugurating the flagship summit' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/2.jpg', caption: 'Panel on responsible and inclusive AI policies' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/3.jpg', caption: 'Delegates networking with startup founders' }
    ]
  },
  {
    id: 2,
    eventName: 'Innovation Lab Inauguration',
    date: '2025-02-05',
    location: 'IIT Bhubaneswar',
    description: 'Launch of the state-of-the-art AI Innovation Lab with experiential demos and lab tours.',
    thumbnail: '/odisha-ai_website/Gallery/4.jpg',
    media: [
      { type: 'photo', url: '/odisha-ai_website/Gallery/4.jpg', caption: 'Ribbon cutting to open the new innovation lab' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/5.jpg', caption: 'Hands-on demonstrations with AI hardware' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/6.jpg', caption: 'Researchers showcasing collaborative workspaces' }
    ]
  },
  {
    id: 3,
    eventName: 'AI for Youth Bootcamp',
    date: '2025-02-18',
    location: 'Cuttack',
    description: 'Two-day bootcamp empowering students with practical AI skills, design thinking, and mentorship.',
    thumbnail: '/odisha-ai_website/Gallery/7.jpg',
    media: [
      { type: 'photo', url: '/odisha-ai_website/Gallery/7.jpg', caption: 'Students collaborating on real-world AI challenges' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/8.jpg', caption: 'Interactive mentoring session with AI experts' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/9.jpg', caption: 'Teams presenting prototypes to the jury' }
    ]
  },
  {
    id: 4,
    eventName: 'Smart Governance Hackathon',
    date: '2025-03-02',
    location: 'Rourkela',
    description: '24-hour hackathon co-creating AI solutions for smarter citizen services and digital governance.',
    thumbnail: '/odisha-ai_website/Gallery/10.jpg',
    media: [
      { type: 'photo', url: '/odisha-ai_website/Gallery/10.jpg', caption: 'Participants outlining ideas for smart governance' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/11.jpg', caption: 'Multidisciplinary teams refining their prototypes' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/12.jpg', caption: 'Celebration of the winning governance technology' }
    ]
  },
  {
    id: 5,
    eventName: 'Healthcare AI Workshop',
    date: '2025-03-18',
    location: 'AIIMS Bhubaneswar',
    description: 'Clinicians and technologists explored AI-assisted diagnostics and hospital automation workflows.',
    thumbnail: '/odisha-ai_website/Gallery/2.jpg',
    media: [
      { type: 'photo', url: '/odisha-ai_website/Gallery/2.jpg', caption: 'Panel discussion on AI-assisted diagnostics' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/6.jpg', caption: 'Showcase of AI-powered medical devices' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/11.jpg', caption: 'Healthcare leaders mapping patient impact journeys' }
    ]
  },
  {
    id: 6,
    eventName: 'AI Leadership Roundtable',
    date: '2025-03-25',
    location: 'Bhubaneswar',
    description: 'Secretaries, industry partners, and researchers aligned on Odisha’s AI policy roadmap and governance model.',
    thumbnail: '/odisha-ai_website/Gallery/5.jpg',
    media: [
      { type: 'photo', url: '/odisha-ai_website/Gallery/5.jpg', caption: 'Leadership dialogue on scaling Odisha’s AI roadmap' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/8.jpg', caption: 'Breakout discussion on public-private partnerships' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/10.jpg', caption: 'Collective sign-off on the next milestones' }
    ]
  },
  {
    id: 7,
    eventName: 'Startup Odisha AI Showcase',
    date: '2025-04-05',
    location: 'O-Hub, Bhubaneswar',
    description: 'AI startups demonstrated prototypes across agritech, fintech, and civic innovation to investors and mentors.',
    thumbnail: '/odisha-ai_website/Gallery/9.jpg',
    media: [
      { type: 'photo', url: '/odisha-ai_website/Gallery/9.jpg', caption: 'Founders pitching their AI products to mentors' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/4.jpg', caption: 'Visitors experiencing live product demos' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/12.jpg', caption: 'Networking between startups and ecosystem partners' }
    ]
  },
  {
    id: 8,
    eventName: 'Digital Inclusion Roadshow',
    date: '2025-04-12',
    location: 'Berhampur',
    description: 'Grassroots workshops highlighting citizen-facing AI services and digital skilling opportunities.',
    thumbnail: '/odisha-ai_website/Gallery/8.jpg',
    media: [
      { type: 'photo', url: '/odisha-ai_website/Gallery/8.jpg', caption: 'Community volunteers guiding citizens through AI services' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/3.jpg', caption: 'Awareness sessions on AI-driven public benefits' },
      { type: 'photo', url: '/odisha-ai_website/Gallery/7.jpg', caption: 'Local youth demonstrating digital assistance tools' }
    ]
  }
];

// AI Startups in Odisha
export const aiStartups = [
  {
    id: 1,
    name: 'MediAI Solutions',
    logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=100&h=100&fit=crop',
    tagline: 'AI-powered healthcare diagnostics',
    founded: '2023',
    location: 'Bhubaneswar',
    category: 'Healthcare',
    employees: '15-20',
    funding: 'Seed Funded',
    product: {
      name: 'DiagnoAI',
      description: 'AI-powered diagnostic platform that analyzes medical images and provides preliminary diagnosis with 95% accuracy. Supports X-rays, CT scans, and MRIs.',
      features: ['Radiology AI', 'Pathology Analysis', 'Real-time Reports', 'Multi-language Support'],
      customers: '25+ Hospitals',
      website: 'https://mediai-solutions.com'
    }
  },
  {
    id: 2,
    name: 'AgriTech Innovators',
    logo: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=100&h=100&fit=crop',
    tagline: 'Smart farming with AI precision',
    founded: '2022',
    location: 'Cuttack',
    category: 'Agriculture',
    employees: '25-30',
    funding: 'Series A',
    product: {
      name: 'FarmSmart AI',
      description: 'Comprehensive AI platform for precision agriculture including crop health monitoring, pest detection, yield prediction, and market intelligence.',
      features: ['Crop Disease Detection', 'Weather Forecasting', 'Soil Analysis', 'Market Price Prediction'],
      customers: '5,000+ Farmers',
      website: 'https://agritech-innovators.com'
    }
  },
  {
    id: 3,
    name: 'EduLearn AI',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop',
    tagline: 'Personalized learning powered by AI',
    founded: '2023',
    location: 'Bhubaneswar',
    category: 'Education',
    employees: '10-15',
    funding: 'Pre-seed',
    product: {
      name: 'SmartTutor',
      description: 'AI-driven personalized learning platform that adapts to each student\'s pace and learning style. Supports multiple languages including Odia.',
      features: ['Adaptive Learning', 'AI Tutoring', 'Progress Analytics', 'Gamification'],
      customers: '50+ Schools',
      website: 'https://edulearn-ai.com'
    }
  },
  {
    id: 4,
    name: 'SecureOdisha AI',
    logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=100&fit=crop',
    tagline: 'AI-powered security and surveillance',
    founded: '2022',
    location: 'Bhubaneswar',
    category: 'Security',
    employees: '20-25',
    funding: 'Seed Funded',
    product: {
      name: 'VisionGuard AI',
      description: 'Intelligent video surveillance system with face recognition, anomaly detection, and real-time alerts for smart city security.',
      features: ['Face Recognition', 'Crowd Analysis', 'Threat Detection', 'Smart Alerts'],
      customers: '10+ Smart Cities',
      website: 'https://secureodisha-ai.com'
    }
  },
  {
    id: 5,
    name: 'FinTech Odisha',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop',
    tagline: 'AI-driven financial inclusion',
    founded: '2023',
    location: 'Cuttack',
    category: 'FinTech',
    employees: '15-20',
    funding: 'Angel Funded',
    product: {
      name: 'SmartCredit AI',
      description: 'AI-based credit scoring and lending platform for underserved communities. Uses alternative data for credit assessment.',
      features: ['Credit Scoring', 'Fraud Detection', 'Risk Assessment', 'Instant Approval'],
      customers: '10,000+ Users',
      website: 'https://fintech-odisha.com'
    }
  },
  {
    id: 6,
    name: 'ClimateAI Odisha',
    logo: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=100&h=100&fit=crop',
    tagline: 'AI for climate resilience',
    founded: '2023',
    location: 'Bhubaneswar',
    category: 'Climate Tech',
    employees: '10-15',
    funding: 'Grant Funded',
    product: {
      name: 'ClimateWatch',
      description: 'AI-powered climate monitoring and disaster prediction system for Odisha. Provides early warnings for cyclones, floods, and droughts.',
      features: ['Weather Prediction', 'Disaster Alerts', 'Risk Mapping', 'Community Alerts'],
      customers: '5 Districts',
      website: 'https://climate-ai-odisha.com'
    }
  }
];

// Hero Carousel Slides with Videos/Images
export const heroSlides = [
  {
    id: 1,
    type: 'image',
    imageUrl: '/odisha-ai_website/images/1.png',
    title: 'Welcome to Odisha AI Mission',
    subtitle: 'India\'s First State with Comprehensive AI Policy 2025',
    description: 'Pioneering AI-driven governance, innovation, and inclusive growth for every Odia citizen',
    logos: ['Govt of Odisha', 'E&IT Dept', 'OCAC', 'IndiaAI'],
    event: 'AI Policy 2025 Launched - May 2025'
  },
  {
    id: 2,
    type: 'image',
    imageUrl: '/odisha-ai_website/images/1.png',
    title: 'AI for Healthcare',
    subtitle: 'Transforming Medical Services with Intelligent Solutions',
    description: 'Deploying AI-powered disease prediction and screening across Odisha',
    logos: ['Govt of Odisha', 'OCAC'],
    event: '20 Lakh Screenings Target by 2036'
  },
  { 
    id: 3,
    type: 'image',
    imageUrl: '/odisha-ai_website/images/1.png',
    title: 'Smart Agriculture Revolution',
    subtitle: 'AI-Powered Precision Farming for Odisha Farmers',
    description: 'Empowering 15 lakh farmers with intelligent crop advisory and precision irrigation',
    logos: ['Govt of Odisha', 'IndiaAI'],
    event: 'AI Crop Advisory for 85% Farmland by 2036'
  },
  {
    id: 4,
    type: 'image',
    imageUrl: '/odisha-ai_website/images/1.png',
    title: 'AI Training for All',
    subtitle: 'Mandatory AI Training for Government Officers',
    description: 'Building Odisha\'s AI workforce - Training 18,000 citizens annually',
    logos: ['E&IT Dept', 'OCAC'],
    event: '3-Month AI Training Program Launched - 2024'
  },
  {
    id: 5,
    type: 'image',
    imageUrl: '/odisha-ai_website/images/first.jpg',
    title: '',
    subtitle: '',
    description: '',
    logos: [],
    event: ''
  },
  {
    id: 6,
    type: 'image',
    imageUrl: '/odisha-ai_website/images/1.png',
    title: 'AI Innovation Ecosystem',
    subtitle: 'Supporting AI Startups & Research',
    description: 'Building Centers of Excellence in AI for healthcare, agriculture, and sustainable cities',
    logos: ['Govt of Odisha', 'OCAC'],
    event: 'Apurva AI Workshop Series - Ongoing'
  }
];
// Contact Us and Map Section
export const contactInfo = {
  address: 'Odisha Computer Application Centre (OCAC)',
  fullAddress: 'N-1/7, Acharya Vihar, IRC Village, Bhubaneswar, Odisha 751015',
  phone: '+91-674-2567892',
  email: 'contact@odisha-ai-mission.gov.in',
  mapCoordinates: { lat: 20.2961, lng: 85.8245 },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.196748844831!2d85.82228931490087!3d20.296153086404562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7d9f9c7d7d7%3A0x9c0c0c0c0c0c0c0c!2sOdisha%20Computer%20Application%20Centre!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin'
};
