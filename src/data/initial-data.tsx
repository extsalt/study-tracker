
import type { SubjectData } from "@/types";

export const initialData: SubjectData[] = [
  {
    id: "history",
    name: "History, Art & Culture",
    icon: "ScrollText",
    topics: [
      { 
        id: "hist-1", 
        name: "Ancient History: Prehistoric Cultures in India", 
        completed: false,
        subTopics: [
          { id: "hist-1-1", name: "Palaeolithic Period: Tools, Society, Sites", completed: false },
          { id: "hist-1-2", name: "Mesolithic Period: Tools, Paintings, Sites", completed: false },
          { id: "hist-1-3", name: "Neolithic Period: Agriculture, Pottery, Dwellings", completed: false },
          { id: "hist-1-4", name: "Chalcolithic Cultures: Ahar, Malwa, Jorwe", completed: false },
        ]
      },
      { 
        id: "hist-2", 
        name: "Ancient History: Indus Valley Civilization", 
        completed: false,
        subTopics: [
            { id: "hist-2-1", name: "Geographical extent and major sites", completed: false },
            { id: "hist-2-2", name: "Town planning and structures", completed: false },
            { id: "hist-2-3", name: "Agriculture, economy, and trade", completed: false },
            { id: "hist-2-4", name: "Society, religion, and culture (seals, script)", completed: false },
            { id: "hist-2-5", name: "Decline of the IVC", completed: false },
        ]
      },
      { 
        id: "hist-3", 
        name: "Ancient History: Vedic Society (Early and Later)", 
        completed: false,
        subTopics: [
          { id: "hist-3-1", name: "Early Vedic Period (Rigvedic): Polity, Society, Economy, Religion", completed: false },
          { id: "hist-3-2", name: "Later Vedic Period: Changes in Polity, Society, Economy, Religion", completed: false },
          { id: "hist-3-3", name: "Vedic Literature: Vedas, Brahmanas, Aranyakas, Upanishads", completed: false },
        ]
      },
      { 
        id: "hist-4", 
        name: "Ancient History: Mahajanapadas, Rise of Magadha", 
        completed: false,
        subTopics: [
          { id: "hist-4-1", name: "The 16 Mahajanapadas", completed: false },
          { id: "hist-4-2", name: "Factors for the Rise of Magadha", completed: false },
          { id: "hist-4-3", name: "Haryanka, Shishunaga, and Nanda Dynasties", completed: false },
        ]
      },
      { 
        id: "hist-5", 
        name: "Ancient History: Buddhism and Jainism", 
        completed: false,
        subTopics: [
          { id: "hist-5-1", name: "Causes for the rise of new religions", completed: false },
          { id: "hist-5-2", name: "Doctrines, Teachings, and Philosophy of Jainism", completed: false },
          { id: "hist-5-3", name: "Doctrines, Teachings, and Philosophy of Buddhism", completed: false },
          { id: "hist-5-4", name: "Spread and Impact on Indian society", completed: false },
        ]
      },
      { 
        id: "hist-6", 
        name: "Ancient History: Mauryan Empire", 
        completed: false,
        subTopics: [
          { id: "hist-6-1", name: "Sources: Kautilya's Arthashastra, Megasthenes' Indica", completed: false },
          { id: "hist-6-2", name: "Chandragupta Maurya and Bindusara", completed: false },
          { id: "hist-6-3", name: "Ashoka and his Dhamma", completed: false },
          { id: "hist-6-4", name: "Mauryan Administration, Economy, and Society", completed: false },
          { id: "hist-6-5", name: "Mauryan Art and Architecture", completed: false },
        ]
      },
      { id: "hist-7", name: "Ancient History: Post-Mauryan India (Sungas, Kanvas, Satavahanas)", completed: false, subTopics: [
        { id: "hist-7-1", name: "Sunga, Kanva, and Satavahana Dynasties", completed: false },
        { id: "hist-7-2", name: "Central Asian Contact: Indo-Greeks, Shakas, Parthians, Kushans", completed: false },
      ]},
      { id: "hist-8", name: "Ancient History: Sangam Period", completed: false, subTopics: [
        { id: "hist-8-1", name: "Sangam Literature", completed: false },
        { id: "hist-8-2", name: "Polity, Society, and Economy of South India (Cheras, Cholas, Pandyas)", completed: false },
      ]},
      { id: "hist-9", name: "Ancient History: Gupta & Post-Gupta Period (Harshavardhana)", completed: false, subTopics: [
        { id: "hist-9-1", name: "Gupta Rulers and their administration", completed: false },
        { id: "hist-9-2", name: "Developments in Science, Art, and Literature", completed: false },
        { id: "hist-9-3", name: "Harshavardhana's Kingdom and Administration", completed: false },
      ]},
      { id: "hist-10", name: "Medieval History: Early Medieval India and the Cholas", completed: false, subTopics: [
        { id: "hist-10-1", name: "The Tripartite Struggle: Palas, Pratiharas, Rashtrakutas", completed: false },
        { id: "hist-10-2", name: "Chola Empire: Administration, Society, Art (Local Self-Govt)", completed: false },
      ]},
      { id: "hist-11", name: "Medieval History: Delhi Sultanate", completed: false, subTopics: [
        { id: "hist-11-1", name: "Slave, Khilji, Tughlaq, Sayyid, and Lodi Dynasties", completed: false },
        { id: "hist-11-2", name: "Administration, Economy, and Society under the Sultanate", completed: false },
      ]},
      { id: "hist-12", name: "Medieval History: Vijayanagara & Bahmani Kingdoms", completed: false, subTopics: [
        { id: "hist-12-1", name: "Polity and Culture of Vijayanagara Empire", completed: false },
        { id: "hist-12-2", name: "Polity and Culture of Bahmani Kingdom", completed: false },
      ]},
      { id: "hist-13", name: "Medieval History: Mughal Empire", completed: false, subTopics: [
        { id: "hist-13-1", name: "Mughal Rulers: Babur to Aurangzeb", completed: false },
        { id: "hist-13-2", name: "Mughal Administration, Economy, and Society", completed: false },
        { id: "hist-13-3", name: "Mughal Art, Architecture, and Literature", completed: false },
      ]},
      { id: "hist-14", name: "Medieval History: Bhakti and Sufi Movements", completed: false, subTopics: [
        { id: "hist-14-1", name: "Key saints and their teachings (Bhakti Movement)", completed: false },
        { id: "hist-14-2", name: "Key saints and their teachings (Sufi Movement)", completed: false },
        { id: "hist-14-3", name: "Impact on society and culture", completed: false },
      ]},
      { id: "hist-15", name: "Modern History: Advent of Europeans", completed: false, subTopics: [
        { id: "hist-15-1", name: "Portuguese, Dutch, English, and French in India", completed: false },
        { id: "hist-15-2", name: "Carnatic Wars and Anglo-French Rivalry", completed: false },
      ]},
      { id: "hist-16", name: "Modern History: British Expansion & Consolidation", completed: false, subTopics: [
        { id: "hist-16-1", name: "Conquest of Bengal, Mysore, Marathas", completed: false },
        { id: "hist-16-2", name: "Policies: Subsidiary Alliance, Doctrine of Lapse", completed: false },
      ]},
      { id: "hist-17", name: "Modern History: Economic Impact of British Rule", completed: false, subTopics: [
        { id: "hist-17-1", name: "Land Revenue Systems: Zamindari, Ryotwari, Mahalwari", completed: false },
        { id: "hist-17-2", name: "De-industrialization and Drain of Wealth", completed: false },
        { id: "hist-17-3", name: "Development of Railways, Communication", completed: false },
      ]},
      { id: "hist-18", name: "Modern History: Revolt of 1857", completed: false, subTopics: [
        { id: "hist-18-1", name: "Causes, Nature, and Consequences", completed: false },
        { id: "hist-18-2", name: "Major centers and leaders", completed: false },
      ]},
      { id: "hist-19", name: "Modern History: Socio-Religious Reform Movements", completed: false, subTopics: [
        { id: "hist-19-1", name: "Brahmo Samaj, Arya Samaj, Theosophical Society", completed: false },
        { id: "hist-19-2", name: "Movements among Muslims, Sikhs, and Parsis", completed: false },
        { id: "hist-19-3", name: "Impact on Women, Caste, and Education", completed: false },
      ]},
      { id: "hist-20", name: "Modern History: Indian National Movement (1885-1915)", completed: false, subTopics: [
        { id: "hist-20-1", name: "Foundation of INC, Moderate Phase", completed: false },
        { id: "hist-20-2", name: "Partition of Bengal and Swadeshi Movement", completed: false },
        { id: "hist-20-3", name: "Rise of Extremism and Surat Split", completed: false },
      ]},
      { id: "hist-21", name: "Modern History: Indian National Movement (1916-1947)", completed: false, subTopics: [
        { id: "hist-21-1", name: "Gandhian Era: Non-Cooperation, Civil Disobedience, Quit India Movements", completed: false },
        { id: "hist-21-2", name: "Revolutionary Movements", completed: false },
        { id: "hist-21-3", name: "Growth of Communalism & Partition of India", completed: false },
      ]},
      { id: "hist-22", name: "Modern History: Post-Independence Consolidation", completed: false, subTopics: [
        { id: "hist-22-1", name: "Integration of Princely States", completed: false },
        { id: "hist-22-2", name: "Linguistic Reorganization of States", completed: false },
      ]},
      { id: "hist-23", name: "Art & Culture: Indian Architecture, Sculpture & Pottery", completed: false, subTopics: [
        { id: "hist-23-1", name: "Harappan, Mauryan, Gupta, Temple, and Indo-Islamic Architecture", completed: false },
        { id: "hist-23-2", name: "Major Schools of Sculpture and Pottery traditions", completed: false },
      ]},
      { id: "hist-24", name: "Art & Culture: Indian Paintings, Music & Dance Forms", completed: false, subTopics: [
        { id: "hist-24-1", name: "Mural traditions, Miniature Paintings (Mughal, Rajput, etc.)", completed: false },
        { id: "hist-24-2", name: "Hindustani and Carnatic Music", completed: false },
        { id: "hist-24-3", name: "Classical and Folk Dance forms", completed: false },
      ]},
      { id: "hist-25", name: "Art & Culture: Indian Literature, Philosophy & Thinkers", completed: false, subTopics: [
        { id: "hist-25-1", name: "Ancient, Medieval, and Modern Indian Literature", completed: false },
        { id: "hist-25-2", name: "Schools of Indian Philosophy", completed: false },
        { id: "hist-25-3", name: "Contributions of major thinkers", completed: false },
      ]},
    ],
  },
  {
    id: "polity",
    name: "Polity & Constitution",
    icon: "Landmark",
    topics: [
      { id: "pol-1", name: "Evolution & Making of the Constitution", completed: false, subTopics: [
        { id: "pol-1-1", name: "Historical Underpinnings and Regulating Acts", completed: false },
        { id: "pol-1-2", name: "Constituent Assembly: Composition, Working, and Committees", completed: false },
      ]},
      { id: "pol-2", name: "Preamble, Union & its Territory, Citizenship", completed: false, subTopics: [
        { id: "pol-2-1", name: "Philosophy of the Preamble", completed: false },
        { id: "pol-2-2", name: "Article 1-4: Union and its Territory", completed: false },
        { id: "pol-2-3", name: "Article 5-11: Citizenship Act and related issues", completed: false },
      ]},
      { id: "pol-3", name: "Fundamental Rights & Fundamental Duties", completed: false, subTopics: [
        { id: "pol-3-1", name: "Articles 12-35: Detailed analysis of all FRs", completed: false },
        { id: "pol-3-2", name: "Writs: Habeas Corpus, Mandamus, etc.", completed: false },
        { id: "pol-3-3", name: "Article 51A: Fundamental Duties", completed: false },
      ]},
      { id: "pol-4", name: "Directive Principles of State Policy (DPSP)", completed: false, subTopics: [
        { id: "pol-4-1", name: "Socialistic, Gandhian, and Liberal-Intellectual Principles", completed: false },
        { id: "pol-4-2", name: "Conflict between FRs and DPSP", completed: false },
      ]},
      { id: "pol-5", name: "System of Government: Parliamentary & Federal Systems", completed: false, subTopics: [
        { id: "pol-5-1", name: "Features of Parliamentary & Presidential systems", completed: false },
        { id: "pol-5-2", name: "Features of Federal & Unitary systems", completed: false },
        { id: "pol-5-3", name: "Centre-State Relations: Legislative, Administrative, Financial", completed: false },
      ]},
      { id: "pol-6", name: "Union Executive: President, Vice-President, PM, Council of Ministers", completed: false, subTopics: [
        { id: "pol-6-1", name: "President: Election, Powers, Impeachment", completed: false },
        { id: "pol-6-2", name: "Vice-President, Prime Minister, Council of Ministers", completed: false },
        { id: "pol-6-3", name: "Cabinet Committees, Attorney General", completed: false },
      ]},
      { id: "pol-7", name: "Parliament: Organization, Powers & Functioning", completed: false, subTopics: [
        { id: "pol-7-1", name: "Rajya Sabha & Lok Sabha: Composition, Duration", completed: false },
        { id: "pol-7-2", name: "Parliamentary Proceedings, Devices, and Committees", completed: false },
        { id: "pol-7-3", name: "Legislative Procedure and Budget in Parliament", completed: false },
      ]},
      { id: "pol-8", name: "State Executive: Governor, CM, Council of Ministers", completed: false, subTopics: [
        { id: "pol-8-1", name: "Governor: Appointment, Powers, Role", completed: false },
        { id: "pol-8-2", name: "Chief Minister and State Council of Ministers", completed: false },
        { id: "pol-8-3", name: "Advocate General of the State", completed: false },
      ]},
      { id: "pol-9", name: "State Legislature: Organization, Powers & Functioning", completed: false, subTopics: [
        { id: "pol-9-1", name: "State Legislative Assembly and Council", completed: false },
        { id: "pol-9-2", name: "Legislative procedure in states", completed: false },
      ]},
      { id: "pol-10", name: "Judiciary: Supreme Court & High Courts", completed: false, subTopics: [
        { id: "pol-10-1", name: "Supreme Court: Composition, Jurisdiction, Powers", completed: false },
        { id: "pol-10-2", name: "High Courts: Composition, Jurisdiction, Powers", completed: false },
        { id: "pol-10-3", name: "Judicial Review, Judicial Activism, PIL", completed: false },
        { id: "pol-10-4", name: "Subordinate Courts, Tribunals", completed: false },
      ]},
      { id: "pol-11", name: "Local Government: Panchayati Raj & Urban Local Bodies", completed: false, subTopics: [
        { id: "pol-11-1", name: "73rd Amendment Act: Panchayati Raj Institutions", completed: false },
        { id: "pol-11-2", name: "74th Amendment Act: Urban Local Bodies", completed: false },
      ]},
      { id: "pol-12", name: "Constitutional Bodies", completed: false, subTopics: [
        { id: "pol-12-1", name: "Election Commission, UPSC, SPSC, Finance Commission", completed: false },
        { id: "pol-12-2", name: "National Commissions (SC, ST, BC), CAG, etc.", completed: false },
      ]},
      { id: "pol-13", name: "Non-Constitutional Bodies", completed: false, subTopics: [
        { id: "pol-13-1", name: "NITI Aayog, NHRC, SHRC, CIC, CVC, Lokpal", completed: false },
      ]},
      { id: "pol-14", name: "Governance Issues: Transparency, Accountability, e-Governance", completed: false, subTopics: [
        { id: "pol-14-1", name: "Citizen Charters, RTI", completed: false },
        { id: "pol-14-2", name: "Role of Civil Services in a Democracy", completed: false },
        { id: "pol-14-3", name: "E-governance models and applications", completed: false },
      ]},
    ],
  },
  {
    id: "geography",
    name: "Geography",
    icon: "Globe",
    topics: [
      { id: "geo-1", name: "Physical Geo: Origin of Earth, Interior & Earthquakes", completed: false, subTopics: [
        { id: "geo-1-1", name: "Theories on origin of Earth", completed: false },
        { id: "geo-1-2", name: "Structure of Earth's Interior (Crust, Mantle, Core)", completed: false },
        { id: "geo-1-3", name: "Earthquakes and Volcanoes", completed: false },
        { id: "geo-1-4", name: "Plate Tectonics Theory", completed: false },
      ]},
      { id: "geo-2", name: "Physical Geo: Geomorphology - Landforms & evolution", completed: false, subTopics: [
        { id: "geo-2-1", name: "Rocks and Minerals", completed: false },
        { id: "geo-2-2", name: "Weathering, Mass Wasting, Erosion, Deposition", completed: false },
        { id: "geo-2-3", name: "Fluvial, Glacial, Aeolian, Karst, and Coastal landforms", completed: false },
      ]},
      { id: "geo-3", name: "Physical Geo: Climatology - Atmosphere, Temp, Winds", completed: false, subTopics: [
        { id: "geo-3-1", name: "Composition and Structure of Atmosphere", completed: false },
        { id: "geo-3-2", name: "Insolation, Heat Budget, Temperature Distribution", completed: false },
        { id: "geo-3-3", name: "Atmospheric Pressure, Wind Systems, Jet Streams", completed: false },
        { id: "geo-3-4", name: "Humidity, Condensation, Clouds, Precipitation", completed: false },
        { id: "geo-3-5", name: "Air Masses, Fronts, Cyclones, Anticyclones", completed: false },
        { id: "geo-3-6", name: "World Climatic Types (Koeppen's Classification)", completed: false },
      ]},
      { id: "geo-4", name: "Physical Geo: Oceanography - Ocean Floor, Currents, Tides", completed: false, subTopics: [
        { id: "geo-4-1", name: "Ocean Bottom Relief", completed: false },
        { id: "geo-4-2", name: "Temperature and Salinity of Oceans", completed: false },
        { id: "geo-4-3", name: "Waves, Tides, and Ocean Currents", completed: false },
        { id: "geo-4-4", name: "Marine Resources and Coral Reefs", completed: false },
      ]},
      { id: "geo-5", name: "Indian Geography: Physiography - Mountains, Plains, Plateau", completed: false, subTopics: [
        { id: "geo-5-1", name: "Himalayan Mountains", completed: false },
        { id: "geo-5-2", name: "Northern Plains", completed: false },
        { id: "geo-5-3", name: "Peninsular Plateau", completed: false },
        { id: "geo-5-4", name: "Indian Desert, Coastal Plains, and Islands", completed: false },
      ]},
      { id: "geo-6", name: "Indian Geography: River Systems & Drainage Patterns", completed: false, subTopics: [
        { id: "geo-6-1", name: "Himalayan River Systems (Indus, Ganga, Brahmaputra)", completed: false },
        { id: "geo-6-2", name: "Peninsular River Systems (East and West flowing)", completed: false },
      ]},
      { id: "geo-7", name: "Indian Geography: Climate, Monsoons & Seasons", completed: false, subTopics: [
        { id: "geo-7-1", name: "Factors influencing India's climate", completed: false },
        { id: "geo-7-2", name: "Mechanism of Indian Monsoon", completed: false },
        { id: "geo-7-3", name: "Seasons in India", completed: false },
      ]},
      { id: "geo-8", name: "Indian Geography: Soils & Natural Vegetation", completed: false, subTopics: [
        { id: "geo-8-1", name: "Major Soil Types in India", completed: false },
        { id: "geo-8-2", name: "Types of Natural Vegetation and Forests in India", completed: false },
      ]},
      { id: "geo-9", name: "Economic Geography: Resources - Land, Water, Minerals", completed: false, subTopics: [
        { id: "geo-9-1", name: "Distribution of key natural resources (World and India)", completed: false },
        { id: "geo-9-2", name: "Mineral and Energy Resources", completed: false },
      ]},
      { id: "geo-10", name: "Economic Geography: Agriculture & Cropping Patterns", completed: false, subTopics: [
        { id: "geo-10-1", name: "Major crops and cropping patterns in India", completed: false },
        { id: "geo-10-2", name: "Primary, Secondary, Tertiary, Quaternary Activities", completed: false },
        { id: "geo-10-3", name: "Major Industries and their location factors", completed: false },
      ]},
      { id: "geo-11", name: "Human Geography: Population, Migration, Human Development", completed: false, subTopics: [
        { id: "geo-11-1", name: "Population distribution, density, growth", completed: false },
        { id: "geo-11-2", name: "Migration types, causes and consequences", completed: false },
        { id: "geo-11-3", name: "Human Development concepts", completed: false },
      ]},
      { id: "geo-12", name: "World Geography: Mapping - Continents, Countries, Physical Features", completed: false, subTopics: [
        { id: "geo-12-1", name: "Important Physical and Political features of all continents", completed: false },
        { id: "geo-12-2", name: "Places in News", completed: false },
      ]},
    ],
  },
  {
    id: "economy",
    name: "Economy",
    icon: "Scale",
    topics: [
      { id: "eco-1", name: "Indian Economy & Planning", completed: false, subTopics: [
        { id: "eco-1-1", name: "Types of Economies", completed: false },
        { id: "eco-1-2", name: "History of Planning in India, NITI Aayog", completed: false },
      ]},
      { id: "eco-2", name: "National Income Accounting", completed: false, subTopics: [
        { id: "eco-2-1", name: "Concepts: GDP, GNP, NNP, etc.", completed: false },
        { id: "eco-2-2", name: "Methods of calculating National Income", completed: false },
      ]},
      { id: "eco-3", name: "Money and Banking", completed: false, subTopics: [
        { id: "eco-3-1", name: "Functions of Money, Monetary Aggregates", completed: false },
        { id: "eco-3-2", name: "RBI: Functions and Monetary Policy Tools (Repo, CRR, etc.)", completed: false },
        { id: "eco-3-3", name: "Banking Sector Reforms, NPAs", completed: false },
      ]},
      { id: "eco-4", name: "Inflation and Business Cycle", completed: false, subTopics: [
        { id: "eco-4-1", name: "Types and Causes of Inflation", completed: false },
        { id: "eco-4-2", name: "Measures of Inflation (CPI, WPI)", completed: false },
        { id: "eco-4-3", name: "Phillips Curve, Business Cycle Phases", completed: false },
      ]},
      { id: "eco-5", name: "Government Budgeting and Fiscal Policy", completed: false, subTopics: [
        { id: "eco-5-1", name: "Components of Budget (Revenue & Capital Account)", completed: false },
        { id: "eco-5-2", name: "Fiscal Deficit, Revenue Deficit, etc.", completed: false },
        { id: "eco-5-3", name: "Taxation in India, GST, Finance Commission", completed: false },
      ]},
      { id: "eco-6", name: "Financial Markets", completed: false, subTopics: [
        { id: "eco-6-1", name: "Money Market vs Capital Market", completed: false },
        { id: "eco-6-2", name: "SEBI and regulation of Capital Market", completed: false },
      ]},
      { id: "eco-7", name: "External Sector", completed: false, subTopics: [
        { id: "eco-7-1", name: "Balance of Payments (BoP)", completed: false },
        { id: "eco-7-2", name: "Foreign Trade Policy, FDI, FPI", completed: false },
        { id: "eco-7-3", name: "Exchange Rate Management", completed: false },
      ]},
      { id: "eco-8", name: "Agriculture", completed: false, subTopics: [
        { id: "eco-8-1", name: "Cropping Patterns, MSP, PDS", completed: false },
        { id: "eco-8-2", name: "Agricultural marketing and reforms", completed: false },
        { id: "eco-8-3", name: "Food Processing Industry", completed: false },
      ]},
      { id: "eco-9", name: "Industrial Policy & Services Sector", completed: false, subTopics: [
        { id: "eco-9-1", name: "Industrial Policies since independence", completed: false },
        { id: "eco-9-2", name: "Make in India, MSMEs", completed: false },
        { id: "eco-9-3", name: "Growth and importance of Services Sector", completed: false },
      ]},
      { id: "eco-10", name: "Infrastructure", completed: false, subTopics: [
        { id: "eco-10-1", name: "Energy, Ports, Roads, Airports, Railways", completed: false },
        { id: "eco-10-2", name: "National Infrastructure Pipeline", completed: false },
      ]},
      { id: "eco-11", name: "International Economic Organizations", completed: false, subTopics: [
        { id: "eco-11-1", name: "IMF, World Bank, WTO", completed: false },
        { id: "eco-11-2", name: "BRICS, ASEAN, etc.", completed: false },
      ]},
    ],
  },
  {
    id: "ir",
    name: "International Relations",
    icon: "Globe",
    topics: [
        { id: "ir-1", name: "India and its Neighborhood Relations", completed: false, subTopics: [
          { id: "ir-1-1", name: "India-Pakistan", completed: false },
          { id: "ir-1-2", name: "India-China", completed: false },
          { id: "ir-1-3", name: "India-Nepal, India-Bhutan, India-Bangladesh", completed: false },
          { id: "ir-1-4", name: "India-Sri Lanka, India-Maldives, India-Afghanistan, India-Myanmar", completed: false },
        ]},
        { id: "ir-2", name: "Bilateral, Regional and Global Groupings", completed: false, subTopics: [
          { id: "ir-2-1", name: "Major Powers: USA, Russia, Japan, EU", completed: false },
          { id: "ir-2-2", name: "Regional Groupings: SAARC, BIMSTEC, SCO, ASEAN", completed: false },
          { id: "ir-2-3", name: "Global Groupings: G20, G7, BRICS, NAM", completed: false },
        ]},
        { id: "ir-3", name: "Effect of Policies of Developed & Developing Countries", completed: false, subTopics: [
          { id: "ir-3-1", name: "US Policies and their impact on India", completed: false },
          { id: "ir-3-2", name: "China's policies (e.g., BRI) and their impact", completed: false },
        ]},
        { id: "ir-4", name: "Indian Diaspora", completed: false, subTopics: [
          { id: "ir-4-1", name: "Role and contribution of Indian Diaspora", completed: false },
        ]},
        { id: "ir-5", name: "Important International Institutions", completed: false, subTopics: [
          { id: "ir-5-1", name: "UN and its agencies", completed: false },
          { id: "ir-5-2", name: "WTO, IMF, World Bank", completed: false },
        ]},
    ],
  },
  {
    id: "is",
    name: "Internal Security",
    icon: "Shield",
    topics: [
        { id: "is-1", name: "Linkages between Development and Spread of Extremism", completed: false, subTopics: [
          { id: "is-1-1", name: "Left-Wing Extremism (Naxalism)", completed: false },
          { id: "is-1-2", name: "Insurgency in North-East", completed: false },
          { id: "is-1-3", name: "Terrorism in Jammu & Kashmir", completed: false },
        ]},
        { id: "is-2", name: "Role of External State and Non-state Actors", completed: false, subTopics: [
          { id: "is-2-1", name: "Cross-border terrorism", completed: false },
          { id: "is-2-2", name: "State-sponsored terrorism", completed: false },
        ]},
        { id: "is-3", name: "Challenges from Communication Networks & Social Media", completed: false, subTopics: [
          { id: "is-3-1", name: "Radicalization through social media", completed: false },
          { id: "is-3-2", name: "Misinformation and fake news", completed: false },
        ]},
        { id: "is-4", name: "Basics of Cyber Security; Money-Laundering", completed: false, subTopics: [
          { id: "is-4-1", name: "Cyber warfare and cyber terrorism", completed: false },
          { id: "is-4-2", name: "Money-Laundering and its prevention (PMLA)", completed: false },
        ]},
        { id: "is-5", name: "Security Challenges and their Management in Border Areas", completed: false, subTopics: [
          { id: "is-5-1", name: "Border infrastructure and management", completed: false },
          { id: "is-5-2", name: "Coastal Security", completed: false },
        ]},
        { id: "is-6", name: "Linkages of Organized Crime with Terrorism", completed: false, subTopics: [
          { id: "is-6-1", name: "Narco-terrorism, arms smuggling", completed: false },
        ]},
        { id: "is-7", name: "Various Security Forces and Agencies and their Mandate", completed: false, subTopics: [
          { id: "is-7-1", name: "Central Armed Police Forces (CAPF)", completed: false },
          { id: "is-7-2", name: "Intelligence agencies: IB, RAW, NIA", completed: false },
        ]},
    ],
  },
  {
    id: "ethics",
    name: "Ethics, Integrity & Aptitude",
    icon: "ScrollText",
    topics: [
      {
        id: "ethics-1",
        name: "Ethics and Human Interface",
        completed: false,
        subTopics: [
          { id: "ethics-1-1", name: "Essence, determinants and consequences of Ethics in human actions", completed: false },
          { id: "ethics-1-2", name: "Dimensions of ethics", completed: false },
          { id: "ethics-1-3", name: "Ethics in private and public relationships", completed: false },
          { id: "ethics-1-4", name: "Human Values – lessons from lives and teachings of great leaders, reformers and administrators", completed: false },
          { id: "ethics-1-5", name: "Role of family, society and educational institutions in inculcating values", completed: false },
        ]
      },
      {
        id: "ethics-2",
        name: "Attitude",
        completed: false,
        subTopics: [
          { id: "ethics-2-1", name: "Content, structure, function of attitude", completed: false },
          { id: "ethics-2-2", name: "Influence of attitude on thought and behaviour", completed: false },
          { id: "ethics-2-3", name: "Relation of attitude to thought and behaviour", completed: false },
          { id: "ethics-2-4", name: "Moral and political attitudes", completed: false },
          { id: "ethics-2-5", name: "Social influence and persuasion", completed: false },
        ]
      },
      {
        id: "ethics-3",
        name: "Aptitude and Foundational Values for Civil Service",
        completed: false,
        subTopics: [
          { id: "ethics-3-1", name: "Integrity, impartiality and non-partisanship", completed: false },
          { id: "ethics-3-2", name: "Objectivity, dedication to public service", completed: false },
          { id: "ethics-3-3", name: "Empathy, tolerance and compassion towards the weaker sections", completed: false },
        ]
      },
      {
        id: "ethics-4",
        name: "Emotional Intelligence",
        completed: false,
        subTopics: [
          { id: "ethics-4-1", name: "Concepts of Emotional Intelligence", completed: false },
          { id: "ethics-4-2", name: "Utilities and application of emotional intelligence in administration and governance", completed: false },
        ]
      },
      {
        id: "ethics-5",
        name: "Contributions of Moral Thinkers and Philosophers",
        completed: false,
        subTopics: [
          { id: "ethics-5-1", name: "Contributions of moral thinkers and philosophers from India", completed: false },
          { id: "ethics-5-2", name: "Contributions of moral thinkers and philosophers from the world", completed: false },
        ]
      },
      {
        id: "ethics-6",
        name: "Public/Civil Service Values and Ethics in Public Administration",
        completed: false,
        subTopics: [
          { id: "ethics-6-1", name: "Status and problems of public/civil service values", completed: false },
          { id: "ethics-6-2", name: "Ethical concerns and dilemmas in government and private institutions", completed: false },
          { id: "ethics-6-3", name: "Laws, rules, regulations and conscience as sources of ethical guidance", completed: false },
          { id: "ethics-6-4", name: "Accountability and ethical governance", completed: false },
          { id: "ethics-6-5", name: "Strengthening of ethical and moral values in governance", completed: false },
          { id: "ethics-6-6", name: "Ethical issues in international relations and funding", completed: false },
          { id: "ethics-6-7", name: "Corporate governance", completed: false },
        ]
      },
      {
        id: "ethics-7",
        name: "Probity in Governance",
        completed: false,
        subTopics: [
          { id: "ethics-7-1", name: "Concept of public service", completed: false },
          { id: "ethics-7-2", name: "Philosophical basis of governance and probity", completed: false },
          { id: "ethics-7-3", name: "Information sharing and transparency in government, Right to Information", completed: false },
          { id: "ethics-7-4", name: "Codes of Ethics, Codes of Conduct", completed: false },
          { id: "ethics-7-5", name: "Citizen's Charters", completed: false },
          { id: "ethics-7-6", name: "Work culture, Quality of service delivery", completed: false },
          { id: "ethics-7-7", name: "Utilization of public funds", completed: false },
          { id: "ethics-7-8", name: "Challenges of corruption", completed: false },
        ]
      },
      {
        id: "ethics-8",
        name: "Case Studies on Above Issues",
        completed: false,
        subTopics: [
          { id: "ethics-8-1", name: "Practice analyzing and solving case studies related to ethical dilemmas", completed: false },
        ]
      },
    ]
  },
  {
    id: "csat",
    name: "CSAT",
    icon: "BookOpen",
    topics: [
        { id: "csat-1", name: "Reading Comprehension Passages", completed: false, subTopics: [
          { id: "csat-1-1", name: "Practice with previous year papers", completed: false },
          { id: "csat-1-2", name: "Strategies for different passage types", completed: false },
        ]},
        { id: "csat-2", name: "Interpersonal & Communication Skills", completed: false, subTopics: [
          { id: "csat-2-1", name: "Theory and concepts", completed: false },
        ]},
        { id: "csat-3", name: "Logical Reasoning", completed: false, subTopics: [
          { id: "csat-3-1", name: "Syllogism, Seating Arrangement", completed: false },
          { id: "csat-3-2", name: "Puzzles, Blood Relations, Direction Sense", completed: false },
          { id: "csat-3-3", name: "Statement & Assumption/Conclusion", completed: false },
        ]},
        { id: "csat-4", name: "Decision Making and Problem Solving", completed: false, subTopics: [
          { id: "csat-4-1", name: "Practice questions based on ethical dilemmas and situations", completed: false },
        ]},
        { id: "csat-5", name: "General Mental Ability", completed: false, subTopics: [
          { id: "csat-5-1", name: "Number Series, Coding-Decoding", completed: false },
          { id: "csat-5-2", name: "Clocks, Calendars, Venn Diagrams", completed: false },
        ]},
        { id: "csat-6", name: "Basic Numeracy", completed: false, subTopics: [
          { id: "csat-6-1", name: "Number System, HCF/LCM, Simplification", completed: false },
          { id: "csat-6-2", name: "Percentage, Average, Ratio & Proportion", completed: false },
          { id: "csat-6-3", name: "Profit & Loss, Time & Work, Time, Speed & Distance", completed: false },
        ]},
        { id: "csat-7", name: "Data Interpretation", completed: false, subTopics: [
          { id: "csat-7-1", name: "Charts, Graphs, Tables", completed: false },
          { id: "csat-7-2", name: "Data Sufficiency", completed: false },
        ]},
    ],
  },
  {
    id: "sociology",
    name: "Sociology",
    icon: "BookOpen",
    topics: [
      { 
        id: "soc-1", 
        name: "Sociology - The Discipline", 
        completed: false,
        subTopics: [
          { id: "soc-1-1", name: "Modernity and social changes in Europe and emergence of sociology", completed: false },
          { id: "soc-1-2", name: "Scope of the subject and comparison with other social sciences", completed: false },
          { id: "soc-1-3", name: "Sociology and common sense", completed: false },
        ]
      },
      { 
        id: "soc-2", 
        name: "Sociology as Science", 
        completed: false,
        subTopics: [
            { id: "soc-2-1", name: "Science, scientific method and critique", completed: false },
            { id: "soc-2-2", name: "Major theoretical strands of research methodology", completed: false },
            { id: "soc-2-3", name: "Positivism and its critique", completed: false },
            { id: "soc-2-4", name: "Fact value and objectivity", completed: false },
            { id: "soc-2-5", name: "Non-positivist methodologies", completed: false },
        ]
      },
      { 
        id: "soc-3", 
        name: "Research Methods and Analysis", 
        completed: false,
        subTopics: [
          { id: "soc-3-1", name: "Qualitative and quantitative methods", completed: false },
          { id: "soc-3-2", name: "Techniques of data collection", completed: false },
          { id: "soc-3-3", name: "Variables, sampling, hypothesis, reliability and validity", completed: false },
        ]
      },
      { 
        id: "soc-4", 
        name: "Sociological Thinkers", 
        completed: false,
        subTopics: [
          { id: "soc-4-1", name: "Karl Marx: Historical materialism, mode of production, alienation, class struggle", completed: false },
          { id: "soc-4-2", name: "Emile Durkheim: Division of labour, social fact, suicide, religion and society", completed: false },
          { id: "soc-4-3", name: "Max Weber: Social action, ideal types, authority, bureaucracy, protestant ethic and the spirit of capitalism", completed: false },
          { id: "soc-4-4", name: "Talcott Parsons: Social system, pattern variables", completed: false },
          { id: "soc-4-5", name: "Robert K. Merton: Latent and manifest functions, conformity and deviance, reference groups", completed: false },
          { id: "soc-4-6", name: "Mead: Self and identity", completed: false },
        ]
      },
      { 
        id: "soc-5", 
        name: "Stratification and Mobility", 
        completed: false,
        subTopics: [
          { id: "soc-5-1", name: "Concepts: equality, inequality, hierarchy, exclusion, poverty and deprivation", completed: false },
          { id: "soc-5-2", name: "Theories of social stratification: Structural functionalist theory, Marxist theory, Weberian theory", completed: false },
          { id: "soc-5-3", name: "Dimensions: social stratification of class, status groups, gender, ethnicity and race", completed: false },
          { id: "soc-5-4", name: "Social mobility: open and closed systems, types of mobility, sources and causes of mobility", completed: false },
        ]
      },
      { 
        id: "soc-6", 
        name: "Works and Economic Life", 
        completed: false,
        subTopics: [
          { id: "soc-6-1", name: "Social organization of work in different types of society", completed: false },
          { id: "soc-6-2", name: "Formal and informal organization of work", completed: false },
          { id: "soc-6-3", name: "Labour and society", completed: false },
        ]
      },
      { id: "soc-7", name: "Politics and Society", completed: false, subTopics: [
        { id: "soc-7-1", name: "Sociological theories of power", completed: false },
        { id: "soc-7-2", name: "Power elite, bureaucracy, pressure groups, and political parties", completed: false },
        { id: "soc-7-3", name: "Nation, state, citizenship, democracy, civil society, ideology", completed: false },
        { id: "soc-7-4", name: "Protest, agitation, social movements, collective action, revolution", completed: false },
      ]},
      { id: "soc-8", name: "Religion and Society", completed: false, subTopics: [
        { id: "soc-8-1", name: "Sociological theories of religion", completed: false },
        { id: "soc-8-2", name: "Types of religious practices: animism, monism, pluralism, sects, cults", completed: false },
        { id: "soc-8-3", name: "Religion in modern society: religion and science, secularization, religious revivalism, fundamentalism", completed: false },
      ]},
      { id: "soc-9", name: "Systems of Kinship", completed: false, subTopics: [
        { id: "soc-9-1", name: "Family, household, marriage", completed: false },
        { id: "soc-9-2", name: "Types and forms of family", completed: false },
        { id: "soc-9-3", name: "Lineage and descent", completed: false },
        { id: "soc-9-4", name: "Patriarchy and sexual division of labour", completed: false },
        { id: "soc-9-5", name: "Contemporary trends", completed: false },
      ]},
      { id: "soc-10", name: "Social Change in Modern Society", completed: false, subTopics: [
        { id: "soc-10-1", name: "Sociological theories of social change", completed: false },
        { id: "soc-10-2", name: "Development and dependency", completed: false },
        { id: "soc-10-3", name: "Agents of social change", completed: false },
        { id: "soc-10-4", name: "Education and social change", completed: false },
        { id: "soc-10-5", name: "Science, technology and social change", completed: false },
      ]},
    ],
  },
];
