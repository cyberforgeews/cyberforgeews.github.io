const IMG = "images/";

window.EWS_CONTENT = {
  home: {
    title: "About the Project",
    paragraphs: [
      "<p style='text-indent: 2em;'>This website serves as a practical presentation for a proposed multi-layered early warning system for Saibai Island. The main objective is to provide an efficient and responsive warning mechanism that addresses the unique environmental and infrastructural challenges faced by the island community.</p>",
      "<h2>System Overview</h2> <p style='text-indent: 2em;'>The system integrates three key layers that work together to enhance community safety and preparedness.</p>"
    ],
    bullets: [
      "Sensing - Continuous monitoring of environmental indicators such as tides, weather, and sea levels.",
      "Intelligence - Data processing and analysis to predict risks and generate actionable insights.",
      "Notification - Timely alerts and communication channels to inform and prepare the local community."
    ],
    image: { 
      src: "https://ewb.org.au/wp-content/uploads/2024/06/DJI_0601-scaled.jpg", 
      caption: "Saibai Island.", 
      alt: "Overview",
      citationAPA: "Engineers Without Borders Australia. (2024, June). Saibai Island [Photograph]. EWB Challenge. https://ewb.org.au/wp-content/uploads/2024/06/DJI_0601-scaled.jpg"
    }
  },

  // New: Group Information (placed near the top)
  group: {
    title: "Group Information",
    members: [
      { name: "Kenneth Gosal", role: "Project Coordinator / Risk Mapping", id: "26154512" },
      { name: "Chichang Zhong", role: "Technical Designer (Solar Siren System)", id: "26143735" },
      { name: "Myeongjae (MJ) Choe", role: "Digital Alert Developer (SNS Platform)", id: "14592543" },
      { name: "Lingyu Wu", role: "Cultural Integration / Bilingual Poster Design", id: "26151744" },
      { name: "Prayash Adhikari", role: "Community Research / User Testing", id: "26170353" },
      { name: "Bin Wei", role: "Documentation / Report Production", id: "26142861" }
    ],
    goals: [
      "Multilingual alerts",
      "Power-independent operation",
      "Local maintenance & ownership",
      "TEK + BoM integration"
    ],
    ack: "<p style='text-indent: 2em;'>We acknowledge the Traditional Owners of Saibai Island and pay our respects to Elders past, present, and emerging. We recognise the importance of Traditional Ecological Knowledge (TEK) in guiding preparedness, warnings, and recovery.</p>"
  },

  // Teamwork Declaration
  declaration: {
    title: "Teamwork Declaration",
    declarationText: "We, the members of Group 1, declare that this website and the accompanying report are the result of our own collective work. All team members listed have contributed equitably to the research, design, prototyping, and production of this assessment task. We understand the university's policies on academic integrity and confirm that any non-contributing members have not been listed."
  },

  summary: {
    paragraphs: [
      "Purpose: <p style='text-indent: 2em;'>To deliver a community-trusted, multilingual early warning system that remains operational during power outages and network disruptions. Saibai's low elevation (~1.7 m) and exposure to king tides, cyclones, and flooding highlight the need for reliable, redundant, and community-owned alert solutions.</p>",
      "Approach: <p style='text-indent: 2em;'>A hybrid model combining Solar-Powered Sirens (audible tones with optional voice messages), Community Radio and VHF kits (for local voice guidance), and digital notifications (SMS and social media). Traditional Ecological Knowledge (TEK) is integrated into timing and message phrasing to strengthen credibility and community engagement.</p>",
      "Governance: <p style='text-indent: 2em;'>Roles are aligned with NEMA, QRA, and TSIRC frameworks, as well as the Sendai Framework for Disaster Risk Reduction. Data ownership rests with TSIRC, supported by clear access and retention policies. Regular community drills and training sessions enhance local capacity and build sustained trust.</p>",
      "Outcomes: <p style='text-indent: 2em;'>Enables faster and clearer alerts, ensures bilingual accessibility, reduces false alarms, and improves coordination across multiple hazards — including king tides, coastal flooding, cyclones, and severe weather events.</p>"
    ],
    outcome: "Community Benefits: Trusted alerts even during blackouts, inclusive communication across languages and age groups, development of local skills and employment, and a scalable model for island-wide deployment."
  },

  // Design Context
  context: {
    title: "Design Context",
    community: {
      title: "Community & Demographics",
      text: "Saibai is a small, multilingual community of around 340 residents, with 85% identifying as Indigenous. Communication preferences vary: younger people often use phones and social media, while Elders may prefer radio or word-of-mouth from local leaders. This highlights that trust in local leadership is essential for effective communication, requiring a design that connects modern technology with traditional community networks.",
      image: { src: "https://www.tsra.gov.au/wp-content/uploads/2024/06/0009-25200-varieties-w720.jpg", caption: "Saibai community members", alt: "Saibai community", citationAPA: "Add APA 7th reference for TSRA image (organisation, year, title/description, site, URL)." }
    },
    cultural: {
      title: "Cultural & Traditional Knowledge",
      text: "Warnings must be bilingual (English and Yumplatok), using both text and voice. Recordings from community Elders and leaders build trust. Traditional Ecological Knowledge (TEK)—observing winds, tides, and animal behaviours—is a major part of disaster awareness. Integrating TEK into warning messages makes them culturally relevant and credible.",
      image: { src: "https://oxfordhousebcn.com/wp-content/uploads/renderedbilingual.jpg", citationAPA: "Oxford House. (n.d.). Bilingual poster example [Image]. Oxford House. https://oxfordhousebcn.com/... (verify)" }
    },
    economic: {
      title: "Economic Context",
      text: "The average family income on Saibai is significantly lower than the Queensland average. This means any design solution must be affordable, durable, and simple to maintain. Funding opportunities exist via TSIRC, QRA, and the NEMA Disaster Ready Fund. Using solar power and open-source tools ensures low running costs and long-term sustainability.",
      image: { src: "https://www.indigenoushpf.gov.au/getmedia/f9dd0f56-9e21-4252-af8c-ef81845bde63/2-08-8-July-23.png?height=406&width=794&mode=crop", citationAPA: "Australian Institute of Health and Welfare. (2023). Indigenous health performance framework chart [Figure]. https://www.indigenoushpf.gov.au/... (verify)"}
    },
    governance: {
      title: "Governance & Policy",
      text: "The governance framework is multi-layered, involving NEMA (Federal), QRA (State), and TSIRC (Local). Our design aligns with the Sendai Framework for 'people-centred, multi-hazard' warning systems. We recommend stronger data-sharing agreements and local autonomy to reduce communication delays.",
      image: { src: "https://upload.wikimedia.org/wikipedia/en/5/57/Torres_Strait_Regional_Authority_logo.png", caption: "Torres Strait Island Regional Council logo", alt: "TSIRC Logo", citationAPA: "Torres Strait Regional Authority. (n.d.). TSRA logo [Logo]. Wikipedia. https://upload.wikimedia.org/..." }
    }
  },

  problem: {
    hazards: [
      "King tides and storm surge causing coastal inundation and erosion.",
      "Cyclones and severe weather impacting homes, clinics, jetties, and roads.",
      "Sea-level rise (~6 mm/yr) raising baseline flood risk and groundwater salinity.",
      "Coverage variability; email/SMS delays; mains power outages during events."
    ],
    hazardsImage: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/CSIRO_ScienceImage_10726_The_effects_of_a_king_tide_on_Queenslands_Gold_Coast.jpg", caption: "King Tides", alt: "Island hazards 1", citationAPA: "CSIRO. (n.d.). The effects of a king tide on Queensland’s Gold Coast [Photograph]. Wikimedia Commons. https://upload.wikimedia.org/..." },
      { src: "https://live-production.wcms.abc-cdn.net.au/b9a7982a760fbbe7a92399f23765df28?impolicy=wcms_crop_resize&cropH=1152&cropW=2048&xPos=0&yPos=0&width=862&height=485", caption: "Floods", alt: "Island hazards 2", citationAPA: "ABC News. (n.d.). Flooding in Queensland [Photograph]. ABC. https://www.abc.net.au/ (replace with exact URL)" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Low_pressure_system_over_Iceland.jpg/1200px-Low_pressure_system_over_Iceland.jpg", caption: "Cyclone", alt: "Island hazards 3", citationAPA: "NASA/NOAA. (n.d.). Low pressure system over Iceland [Satellite image]. Wikimedia Commons. https://upload.wikimedia.org/..." }
    ],
    gaps: [
      "Single-channel dependency (email/SMS) and fragmented responsibility — uneven delivery and late warnings.",
      "Lack of audible alerts when power/internet fail; limited redundancy.",
      "Inconsistent drills and unclear roles; some messages not accessible to elders/children.",
      "Data ownership not always local; limited feedback loops to improve accuracy."
    ],
    gapsImage: [
      { src: "https://birrraus.com/wp-content/uploads/2015/11/12242220_10153802145913417_312432833_n.jpg", caption: "Black spot map", alt: "System gaps 1" },
      { src: "https://territorygeneration.com.au/wp-content/uploads/2022/09/CIPS_8726-300x200.jpg", caption: "Current Power Stations", alt: "System gaps 2" }
    ]
  },

  principles: [
    "Community-led: Elders, wardens, and councils co-design triggers and actions.",
    "Redundancy: Multiple ways to sense, decide, and notify; graceful degradation.",
    "Data sovereignty: TSIRC controls data, access, retention, and audit.",
    "Accessibility: Multilingual, plain language, audio + visual + text formats.",
    "Low-power resilience: Solar + battery (+ RF/satellite fallback).",
    "Interoperability: Align with BoM, QFES, and State Disaster protocols."
  ],

  // Core layers (context)
  solution: {
    layers: [
      {
        title: "Layer 1 - Sensing (Network of Eyes and Ears)",
        bullets: [
          "Integrated Sensors + TEK: tide gauges, anemometers, rain gauges + observed indicators (wind shifts, tide cues, animal behaviour) documented with Elders as model features.",
          "Power & Resilience: ~30 W PV + 12 V LiFePO4 > 48 h autonomy; local data buffer (~72 h).",
          "Low-Power Telemetry: LoRa/RF to council gateway; auto-fallback when 4G fails; optional satellite uplink.",
          "Coverage & Siting: Initial stations at clinic jetty + western wetland sites; quarterly maintenance by wardens."
        ],
        image: { caption: "Solar-powered sensing nodes with local buffering.", alt: "Sensing infrastructure" }
      },
      {
        title: "Layer 2 - Intelligence (Decide & Trigger)",
        bullets: [
          "Hybrid Decision Engine: combines BoM feeds, sensor thresholds, and TEK indicators in a transparent, rule-based model (Watch / Warning / Emergency).",
          "Risk Scoring & Thresholds: weighted inputs (tide height, wind speed, rain rate, coverage risk); community-validated threshold reduces false alarms (~40%).",
          "Human-in-the-Loop: officer confirms automated triggers; bilingual templates; dashboard shows maps, 24–72 h trends, checklists.",
          "Governance & Audit: broadcast/decision logs to TSIRC server (with offline mirror) for transparency and learning."
        ],
        image: { caption: "Decision dashboard with BoM + TEK inputs.", alt: "Decision engine" }
      },
      {
        title: "Layer 3 - Notification (Reaching Everyone)",
        bullets: [
          'Digital Alerts: SMS + Facebook + WhatsApp templates; icons/maps for low literacy; two-way SMS ("SAFE"/"HELP") creates a live status map.',
          "Feedback & Prioritisation: dashboard flags non-responders and generates wardens’ priority lists (e.g., elders living alone)."
        ],
        image: { caption: "Bilingual alerts across sirens, radio, and digital channels.", alt: "Notification system" }
      }
    ],

    // Three Main Prototypes
    prototypes: [
      {
        name: "Solar Siren Network",
        details: [
          "Hardware: 40 W PV, 20 Ah LiFePO4 (72 h autonomy), 120 dB siren + beacon light; optional voice module with bilingual audio.",
          "Triggering: LoRa command from council gateway or manual VHF cue; works during internet outage.",
          "Siting: near clinic, council office, jetty; each covers ~300–400 m radius; acoustic tests annually.",
          "Maintenance: quarterly inspection (PV clean, battery health), local spare drivers & horns stored at council."
        ],
        impact: "Provides audible, power-independent alerts; highly trusted by elders and outdoor workers during blackouts.",
        image: { src: "https://github.com/trollbox344/image-for-assignment/blob/main/solarsystemalert.png?raw=true", alt: "Solar Siren Blueprint" }
      },
      {
        name: "SNS Alert System",
        details: [
          "Templates: pre-approved, bilingual (English + Yumplatok) with action icons for Watch/Warning/Emergency.",
          "Distribution: SMS, Facebook, WhatsApp in one click from TSIRC console; post scheduling for multi-day events.",
          'Feedback: two-way SMS ("SAFE"/"HELP") feeds a live map; prioritises response for clinics and wardens.',
          "Resilience: messages cached locally; when network returns, queued posts auto-send; minimal personal data retained."
        ],
        impact: "Fast, consistent messaging for connected users; integrates youth and diaspora while respecting privacy.",
        image: { src: "https://github.com/trollbox344/image-for-assignment/blob/main/smsalersystem2.png?raw=true", alt: "SNS Alert System" }
      },
      {
        name: "Bilingual Poster System",
        details: [
          "Design: laminated, waterproof A2 posters; colour-coded by severity; pictograms co-created with school students and Elders.",
          "Workflow: auto-generate printable posters from console; small UPS keeps printers online in clinics/schools.",
          "Placement: clinics, stores, churches, jetty boards; doubles as preparedness education between events.",
          "Care: monthly refresh; damage replacement stock stored locally; templates updated after drills."
        ],
        impact: "Culturally owned, low-tech redundancy that remains visible when power or phones fail; bridges literacy gaps.",
        image: { src: "https://github.com/trollbox344/image-for-assignment/blob/main/poster%20.png?raw=true", alt: "Bilingual Poster" }
      }
    ]
  },

  journeys: [
    {
      title: "Scenario 1 - King Tide Watch",
      steps: [
        "Sensors + BoM forecast show elevated risk over next 24–48 h.",
        'Officer reviews dashboard; issues "Watch" in English + Yumplatok.',
        "SMS + posters + LED boards inform residents; wardens check hotspots.",
        "Event passes with minor impacts; quick debrief and log."
      ]
    },
    {
      title: "Scenario 2 - Cyclone Warning",
      steps: [
        'Severe weather alerts arrive; thresholds trigger "Warning".',
        "Sirens + SMS instruct protective actions; clinics/schools follow checklists.",
        'Evacuation signage and LED boards guide movement; wardens track "HELP" replies.',
        "Post-event checks and rapid needs assessment; decisions and outcomes recorded for review."
      ]
    },
    {
      title: "Scenario 3 - Flood Warning",
      steps: [
        "Heavy rain and tide sensors detect inland flooding risk within 12 hours.",
        'Council confirms data with TEK signs and issues a bilingual "Flood Warning".',
        "Solar sirens, LED boards, and SMS urge residents to avoid low areas and secure valuables.",
        "Wardens assist vulnerable households and relay updates via VHF.",
        "After water recedes, depth and damage data are logged for future planning."
      ]
    }
  ],

  community: {
    safetyTrust: "Clear, timely alerts build confidence and reduce harm during blackouts.",
    inclusion: "Bilingual, multi-format communication supports elders, youth, and people with disability.",
    jobs: "Training wardens/maintainers keeps skills and budgets local; builds community ownership.",
    image: [ 
      { src: "https://www.tsra.gov.au/wp-content/uploads/2024/06/0009-25200-varieties-w720.jpg",  
        caption: "Saibai Island Community",  
        alt: "Saibai community",
        citationAPA: "Torres Strait Regional Authority. (2024, June). Saibai community members [Photograph]. TSRA. https://www.tsra.gov.au/wp-content/uploads/2024/06/0009-25200-varieties-w720.jpg"
      } 
    ] 
  },

  concerns: [
    { title: "Cost & value", text: "Phased rollout with a pilot (2 sirens + 2 radio kits + 1 micro-station + 1 digital board). Prioritise serviceable gear and local maintenance to lower lifetime costs." },
    { title: "Privacy & data sovereignty", text: "TSIRC owns data; minimise personal data; opt-in lists with retention policy; role-based access and full audit trail." },
    { title: "Reliability in outages", text: "Solar + battery autonomy (>48 h), local buffering, and RF/satellite fallback keep signals and alerts flowing." },
    { title: "False alarms", text: "Community-validated thresholds + human-in-the-loop reduce false triggers; post-event reviews recalibrate rules." },
    { title: "Language & accessibility", text: "English + Yumplatok audio; icons and colour codes; printed materials for offline contexts." }
  ],

  plan: {
    phase1: [
      "Confirm hazards, sites, and assets; co-design governance and data policy with TSIRC.",
      "Elder workshops to formalise TEK indicators and validate templates.",
      "Procure pilot hardware; prepare installation and training schedule."
    ],
    phase2: [
      "Install sensing stations and sirens; commission RF/4G/satellite fallback.",
      "Configure dashboard thresholds and bilingual templates; run test broadcasts.",
      "Train wardens and operators; dry-run drills with schools/clinics."
    ],
    phase3: [
      "Pilot evaluation (technical KPIs + community feedback); refine thresholds and scripts.",
      "Scale to additional sites; formalise O&M routines and spares on-island.",
      "Annual multi-agency exercise; quarterly metrics and lessons learned cycle."
    ],
    responsibilities: [
      "TSIRC: Governance, data, staffing, stakeholder coordination.",
      "Vendors/Partners: Install, integrate, train, warranty, documentation.",
      "Wardens: Drills, maintenance checks, and feedback to improve design."
    ],

    costs: [
      {
        name: "Solar-Powered Siren (Outdoor Warning System)",
        example: "Klaxon Mono 72 (120 dB IP65), BNR Industrial",
        basePrice: "AUD 550–750 per unit (range/power dependent) + Solar/Battery: AUD 400–700",
        operatingCost: "Low (annual panel clean & speaker check; battery every 4–6 years)",
        shipping: "AUD 250–300 per unit (Cairns – Saibai via barge/air; ~1,000 km)",
        install: "Local install AUD 150–200 (pole mount + wiring)",
        maintenance: [
          "Annual clean/check",
          "Battery replacement cycle 4–6 years (local techs can be trained in half a day)"
        ],
        lifespan: "Siren 8–10 yrs; Solar panel 15+ yrs",
        estimate: "Installed per unit: AUD 1,200–1,500"
      },
      {
        name: "SMS Alert System (Software / SMS Delivery)",
        example: "Kg02 Smart SMS Portal or Twilio/SMS comparison service",
        basePrice: "AUD 250 one-time setup for a small gateway (or $0 using cloud only)",
        operatingCost: "AUD 0.03–0.05 per SMS — ~AUD 30–50/month for 1,000 messages",
        shipping: "Minimal (cloud-based service, no physical freight)",
        maintenance: [
          "Monthly performance checks only",
          "Local operators trained in 1–2 hours (contacts + test alerts)"
        ],
        lifespan: "5–10 years (gateway device); indefinite for cloud software",
        estimate: "Estimated Year-1 Total: AUD 300–350 (incl. setup + SMS fees)"
      },
      {
        name: "Bilingual Warning Posters (Laminated Outdoor Display)",
        example: "A2 laminated posters (Kwik Kopy / Officeworks / CopyShop)",
        basePrice: "AUD 40–60 per poster (bulk ≥10)",
        operatingCost: "None (replacement cycle 3–5 years)",
        shipping: "AUD 50–100 per batch (10–20 posters) from Cairns/Brisbane",
        maintenance: [
          "Simple replacement by local staff/volunteers",
          "UV-protected laminate extends life"
        ],
        lifespan: "3–5 years",
        estimate: "10 posters (incl. freight): AUD 500–700"
      }
    ]
  },

  references: {
    title: "References",
    aiPrompt: ``,
    notes: [ 
      "ABC News. (n.d.). Flooding in Queensland [Photograph]. https://www.abc.net.au/ (source image: https://live-production.wcms.abc-cdn.net.au/b9a7982a760fbbe7a92399f23765df28?impolicy=wcms_crop_resize&width=862&height=485)", 
      "Australia Post. (2025). Domestic parcel and freight delivery calculator. https://auspost.com.au/parcels-mail/calculate-postage", 
      "Australian Institute of Health and Welfare. (2023). Indigenous health performance framework chart [Figure]. https://www.indigenoushpf.gov.au/getmedia/f9dd0f56-9e21-4252-af8c-ef81845bde63/2-08-8-July-23.png", 
      "BNR Industrial. (2025). Motorised sirens – Klaxon Mono 72 120 dB outdoor series. https://www.bnrindustrial.com.au/collections/motorised-sirens", 
      "CopyShop Print & Signs. (2024). Budget posters A2 size laminated. https://copyshop.com.au/product/budget-posters-a2-size-laminated", 
      "CSIRO. (n.d.). The effects of a king tide on Queensland’s Gold Coast [Photograph]. Wikimedia Commons. https://upload.wikimedia.org/wikipedia/commons/2/2f/CSIRO_ScienceImage_10726_The_effects_of_a_king_tide_on_Queenslands_Gold_Coast.jpg", 
      "Engineers Without Borders Australia. (2024). Saibai Island [Photograph]. EWB Challenge. https://ewb.org.au/wp-content/uploads/2024/06/DJI_0601-scaled.jpg", 
      "Kwik Kopy Australia. (2024). Poster & laminated print services. https://www.kwikkopy.com.au/services/poster-printing", 
      "NASA/NOAA. (n.d.). Low pressure system over Iceland [Satellite image]. Wikimedia Commons. https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Low_pressure_system_over_Iceland.jpg/1200px-Low_pressure_system_over_Iceland.jpg", 
      "Officeworks. (2024). Poster printing services – A2 size pricing. https://www.officeworks.com.au/printing/posters", 
      "Oxford House. (n.d.). Bilingual poster example [Image]. Oxford House. https://oxfordhousebcn.com/wp-content/uploads/renderedbilingual.jpg", 
      "SMS Comparison. (2025). Bulk SMS Australia providers & pricing. https://www.smscomparison.com.au/bulk-sms-australia", 
      "The Cyber Forge — Group 1. (2025). Bilingual Poster [Image]. GitHub. https://github.com/trollbox344/image-for-assignment/blob/main/poster%20.png?raw=true", 
      "The Cyber Forge — Group 1. (2025). SNS Alert System [Composite image]. GitHub. https://github.com/trollbox344/image-for-assignment/blob/main/smsalersystem2.png?raw=true", 
      "The Cyber Forge — Group 1. (2025). Solar Siren Blueprint [Diagram]. GitHub. https://github.com/trollbox344/image-for-assignment/blob/main/solarsystemalert.png?raw=true", 
      "Torres Strait Regional Authority. (2024). Saibai community members [Photograph]. TSRA. https://www.tsra.gov.au/wp-content/uploads/2024/06/0009-25200-varieties-w720.jpg", 
      "Torres Strait Regional Authority. (n.d.). TSRA logo [Logo]. Wikipedia. https://upload.wikimedia.org/wikipedia/en/5/57/Torres_Strait_Regional_Authority_logo.png" 
    ], 
    links: []
  },

  recommendations: [
    "Publish a plain-language EWS guide (bilingual) with diagrams and drill calendar.",
    "Adopt a lightweight incident log and dashboard analytics for transparency.",
    "Create a youth tech program to maintain sensors and digital channels.",
    "Establish data-sharing MoUs with BoM/QFES to streamline alerts.",
    "Secure blended funding (TSIRC/QRA/NEMA + philanthropy) for scale-up."
  ]
};
