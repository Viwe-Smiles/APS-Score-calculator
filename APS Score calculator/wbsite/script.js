const subjects = [
  "English Home Language", "English FAL",
  "Afrikaans Home Language", "Afrikaans FAL",
  "isiZulu Home Language", "isiZulu FAL", 
  "isiXhosa Home Language", "isiXhosa FAL", 
  "Sesotho Home Language", "Sesotho FAL", 
  "Sepedi Home Language", "Sepedi FAL", 
  "Setswana Home Language", "Setswana FAL",
  "Xitsonga Home Language", "Xitsonga FAL", 
  "Tshivenda Home Language", "Tshivenda FAL", 
  "isiNdebele Home Language", "isiNdebele FAL",
  "isiSwati Home Language", "isiSwati FAL",
  "Sign Language Home", "Sign Language FAL",
  "Life Orientation", "Mathematics", "Mathematical Literacy", "Technical Mathematics",
  "Physical Sciences", "Life Sciences", "Accounting", "Business Studies", "Economics",
  "History", "Geography", "Religion Studies", "Computer Applications Technology",
  "Information Technology", "Visual Arts", "Design", "Dramatic Arts", "Music", "Dance Studies",
  "Engineering Graphics and Design", "Civil Technology", "Electrical Technology",
  "Mechanical Technology", "Technical Sciences", "Hospitality Studies", "Tourism",
  "Consumer Studies", "Agricultural Sciences", "Agricultural Management Practices", "Agricultural Technology"
];

const universities = [
  {
    name: "University of Johannesburg",
    faculties: [
      {
        name: "Art, Design and Architecture",
        streams: [
          { name: "BACHELOR OF ARCHITECTURE", minAPS: 30 },
          { name: "BACHELOR IN COMMUNICATION DESIGN", minAPS: 26 },
          { name: "BACHELOR IN DIGITAL MEDIA DESIGN", minAPS: 26 },
          { name: "BACHELOR IN INDUSTRIAL DESIGN", minAPS: 26 },
          { name: "BACHELOR IN INTERIOR DESIGN", minAPS: 26 },
          { name: "BACHELOR IN FASHION DESIGN", minAPS: 26 },
          { name: "BACHELOR IN VISUAL ART", minAPS: 26 },
          { name: "DIPLOMA IN ARCHITECTURE", minAPS: 26 },
          { name: "DIPLOMA IN FASHION PRODUCTION", minAPS: 23 },
          { name: "JEWELLERY DESIGN AND MANUFACTURE", minAPS: 22 }
        ]
      },
      {
        name: "College Of Business And Economics",
        streams: [
          { name: "BACHELOR IN ACCOUNTING (CA)", minAPS: 33 },
          { name: "BACHELOR IN HOSPITALITY MANAGEMENT", minAPS: 28 },
          { name: "BACHELOR IN HUMAN RESOURCE MANAGEMENT", minAPS: 28 },
          { name: "BACHELOR IN TOURISM DEVELOPMENT AND MANAGEMENT", minAPS: 28 },
          { name: "BACHELOR IN PUBLIC MANAGEMENT AND GOVERNANCE", minAPS: 28 },
          { name: "BACHELOR IN ACCOUNTING", minAPS: 28 },
          { name: "BACHELOR IN BUSINESS MANAGEMENT", minAPS: 26 },
          { name: "BACHELOR IN ECONOMICS AND ECONOMETRICS", minAPS: 28 },
          { name: "BACHELOR IN ENTREPRENEURIAL MANAGEMENT", minAPS: 26 },
          { name: "BACHELOR IN FINANCE", minAPS: 28 },
          { name: "BACHELOR IN INDUSTRIAL PSYCHOLOGY", minAPS: 26 },
          { name: "BACHELOR IN INFORMATION MANAGEMENT", minAPS: 28 },
          { name: "BACHELOR IN INFORMATION SYSTEMS", minAPS: 26 },
          { name: "BACHELOR IN MARKETING MANAGEMENT", minAPS: 26 },
          { name: "BACHELOR IN TRANSPORT AND LOGISTICS MANAGEMENT", minAPS: 27 }
        ]
      },
      {
        name: "Engineering And The Built Environment",
        streams: [
          { name: "BACHELOR OF ENGINEERING IN CIVIL ENGINEERING", minAPS: 32 },
          { name: "BACHELOR OF ENGINEERING IN ELECTRICAL AND ELECTRONIC ENGINEERING", minAPS: 32 },
          { name: "BACHELOR OF ENGINEERING IN MECHANICAL ENGINEERING", minAPS: 32 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN CHEMICAL ENGINEERING", minAPS: 30 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN CIVIL ENGINEERING", minAPS: 28 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN ELECTRICAL ENGINEERING", minAPS: 30 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN EXTRACTION METALLURGY", minAPS: 30 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN INDUSTRIAL ENGINEERING", minAPS: 30 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN MECHANICAL ENGINEERING", minAPS: 30 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN MINING ENGINEERING", minAPS: 23 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN PHYSICAL METALLURGY", minAPS: 30 },
          { name: "BACHELOR IN MINE SURVEYING", minAPS: 23 },
          { name: "BACHELOR OF SCIENCE IN CONSTRUCTION", minAPS: 30 }
        ]
      },
      {
        name: "Health Science",
        streams: [
          { name: "BACHELOR IN BIOKINETICS", minAPS: 33 },
          { name: "BACHELOR IN DIAGNOSTIC RADIOGRAPHY", minAPS: 31 },
          { name: "BACHELOR IN DIAGNOSTIC ULTRASOUND", minAPS: 31 },
          { name: "BACHELOR IN NUCLEAR MEDICINE", minAPS: 31 },
          { name: "BACHELOR IN RADIATION THERAPY", minAPS: 31 },
          { name: "BACHELOR OF HEALTH SCIENCE IN CHIROPRACTIC", minAPS: 28 },
          { name: "BACHELOR OF HEALTH SCIENCE IN COMPLEMENTARY MEDICINE", minAPS: 28 },
          { name: "BACHELOR OF HEALTH SCIENCE IN EMERGENCY MEDICAL CARE", minAPS: 27 },
          { name: "BACHELOR OF HEALTH SCIENCE IN MEDICAL LABORATORY SCIENCE", minAPS: 30 },
          { name: "BACHELOR OF HEALTH SCIENCE IN PODIATRY", minAPS: 28 },
          { name: "BACHELOR IN ENVIRONMENTAL HEALTH", minAPS: 24 },
          { name: "BACHELOR IN NURSING", minAPS: 30 },
          { name: "BACHELOR IN OPTOMETRY", minAPS: 34 },
          { name: "BACHELOR IN SPORT MANAGEMENT", minAPS: 23 },
          { name: "BACHELOR OF HEALTH SCIENCE IN SPORT AND EXERCISE SCIENCES", minAPS: 28 },
          { name: "DIPLOMA IN SPORT MANAGEMENT", minAPS: 23 }
        ]
      },
      {
        name: "Humanities",
        streams: [
          { name: "BACHELOR OF SOCIAL WORK", minAPS: 33 },
          { name: "BACHELOR OF ARTS", minAPS: 27 }
        ]
      },
      {
        name: "Science",
        streams: [
          { name: "BACHELOR IN INFORMATION TECHNOLOGY", minAPS: 30 },
          { name: "BACHELOR IN COMPUTER SCIENCE AND INFORMATICS", minAPS: 30 },
          { name: "BACHELOR IN COMPUTER SCIENCE AND INFORMATICS SPECIALISING IN AI", minAPS: 34 },
          { name: "BACHELOR IN BIOCHEMISTRY AND BOTANY", minAPS: 30 },
          { name: "BACHELOR IN BOTANY AND CHEMISTRY", minAPS: 30 },
          { name: "BACHELOR IN BOTANY AND ZOOLOGY", minAPS: 30 },
          { name: "BACHELOR IN ZOOLOGY AND BIOCHEMISTRY", minAPS: 30 },
          { name: "BACHELOR IN ZOOLOGY AND CHEMISTRY", minAPS: 30 },
          { name: "BACHELOR IN ZOOLOGY AND ENVIRONMENTAL MANAGEMENT", minAPS: 30 },
          { name: "BACHELOR IN ZOOLOGY AND GEOGRAPHY", minAPS: 30 },
          { name: "BACHELOR IN ZOOLOGY AND PHYSIOLOGY", minAPS: 30 },
          { name: "BACHELOR IN PHYSIOLOGY AND BIOCHEMISTRY", minAPS: 30 },
          { name: "BACHELOR IN PHYSIOLOGY AND PSYCHOLOGY", minAPS: 30 },
          { name: "BACHELOR IN GEOGRAPHY AND ENVIRONMENTAL MANAGEMENT", minAPS: 30 },
          { name: "BACHELOR IN GEOLOGY AND ENVIRONMENTAL MANAGEMENT", minAPS: 30 },
          { name: "BACHELOR IN GEOLOGY AND GEOGRAPHY", minAPS: 30 },
          { name: "BACHELOR IN APPLIED MATHEMATICS AND COMPUTER SCIENCE", minAPS: 31 },
          { name: "BACHELOR IN APPLIED MATHEMATICS AND MATHEMATICAL STATISTICS", minAPS: 31 },
          { name: "BACHELOR IN APPLIED MATHEMATICS AND MATHEMATICS", minAPS: 31 },
          { name: "BACHELOR IN COMPUTATIONAL SCIENCE", minAPS: 33 },
          { name: "BACHELOR IN MATHEMATICAL STATISTICS AND COMPUTER SCIENCE", minAPS: 31 },
          { name: "BACHELOR IN MATHEMATICS AND COMPUTER SCIENCE", minAPS: 31 },
          { name: "BACHELOR IN MATHEMATICS AND INFORMATICS", minAPS: 31 },
          { name: "BACHELOR IN MATHEMATICS AND MATHEMATICAL STATISTICS", minAPS: 31 },
          { name: "BACHELOR IN MATHEMATICS AND PSYCHOLOGY", minAPS: 30 },
          { name: "BACHELOR IN ACTUARIAL SCIENCE", minAPS: 33 },
          { name: "BACHELOR IN BIOCHEMISTRY AND CHEMISTRY", minAPS: 31 },
          { name: "BACHELOR IN CHEMISTRY AND MATHEMATICS", minAPS: 33 },
          { name: "BACHELOR IN CHEMISTRY AND PHYSICS", minAPS: 31 },
          { name: "BACHELOR IN GEOLOGY AND CHEMISTRY", minAPS: 31 },
          { name: "BACHELOR IN GEOLOGY AND MATHEMATICS", minAPS: 31 },
          { name: "BACHELOR IN GEOLOGY AND PHYSICS", minAPS: 31 },
          { name: "BACHELOR IN PHYSICS AND APPLIED MATHEMATICS", minAPS: 31 },
          { name: "BACHELOR IN PHYSICS AND MATHEMATICS", minAPS: 31 }
        ]
      },
      {
        name: "Law",
        streams: [
          { name: "BA (LAW)", minAPS: 32 },
          { name: "BCOM (LAW)", minAPS: 31 },
          { name: "LLB", minAPS: 32 }
        ]
      }
    ]
  },
  {
    name: "Tshwane University of Technology",
    faculties: [
      {
        name: "Science",
        streams: [
          { name: "BACHELOR IN NURSING", minAPS: 27 },
          { name: "DIPLOMA IN ANIMAL SCIENCE", minAPS: 20 },
          { name: "DIPLOMA IN EQUINE SCIENCE", minAPS: 20 },
          { name: "BACHELOR OF HEALTH SCIENCE IN CLINICAL TECHNOLOGY", minAPS: 24 },
          { name: "BACHELOR OF HEALTH SCIENCE IN MEDICAL LABORATORY SCIENCE", minAPS: 24 },
          { name: "BACHELOR OF HEALTH SCIENCE IN VETERINARY TECHNOLOGY", minAPS: 24 },
          { name: "BACHELOR IN RADIOGRAPHY AND DIAGNOSTICS", minAPS: 24 },
          { name: "DIPLOMA IN BIOTECHNOLOGY", minAPS: 21 },
          { name: "DIPLOMA IN FOOD TECHNOLOGY", minAPS: 21 },
          { name: "BACHELOR OF SCIENCE IN INDUSTRIAL CHEMISTRY", minAPS: 24 },
          { name: "DIPLOMA IN ANALYTICAL CHEMISTRY", minAPS: 21 },
          { name: "HIGHER CERTIFICATE IN FORESTRY MANAGEMENT", minAPS: 18 },
          { name: "DIPLOMA IN CROP PRODUCTION", minAPS: 20 },
          { name: "BACHELOR IN ENVIRONMENTAL HEALTH", minAPS: 24 },
          { name: "DIPLOMA IN GEOLOGY", minAPS: 21 },
          { name: "HIGHER CERTIFICATE IN RESOURCES AND WASTE MANAGEMENT", minAPS: 21 },
          { name: "HIGHER CERTIFICATE IN WATER TREATMENT", minAPS: 21 },
          { name: "DIPLOMA IN WATER SCIENCE AND TECHNOLOGY", minAPS: 21 },
          { name: "DIPLOMA IN HORTICULTURE", minAPS: 24 },
          { name: "DIPLOMA IN LANDSCAPE TECHNOLOGY", minAPS: 26 },
          { name: "DIPLOMA IN NATURE CONSERVATION", minAPS: 25 },
          { name: "DIPLOMA IN WILDLIFE MANAGEMENT", minAPS: 25 },
          { name: "BACHELOR IN PHARMACY", minAPS: 24 },
          { name: "DIPLOMA IN SOMATIC THERAPY", minAPS: 23 },
          { name: "DIPLOMA IN FIRE TECHNOLOGY", minAPS: 20 },
          { name: "DIPLOMA IN INDUSTRIAL PHYSICS", minAPS: 21 },
          { name: "BACHELOR OF HEALTH SCIENCE IN BIOKINETICS", minAPS: 24 },
          { name: "BACHELOR OF HEALTH SCIENCE IN MEDICAL ORTHOTICS AND PROSTHETICS", minAPS: 24 },
          { name: "HIGHER CERTIFICATE IN DENTAL ASSISTING", minAPS: 18 },
          { name: "DIPLOMA IN DENTAL TECHNOLOGY", minAPS: 20 },
          { name: "DIPLOMA IN KINESIOLOGY AND COACHING SCIENCE", minAPS: 24 }
        ]
      },
      {
        name: "Information and Communication Technology",
        streams: [
          { name: "DIPLOMA IN COMPUTER SCIENCE", minAPS: 27 },
          { name: "DIPLOMA IN COMPUTER SCIENCE EXTENDED", minAPS: 25 },
          { name: "DIPLOMA IN MULTIMEDIA COMPUTING", minAPS: 28 },
          { name: "DIPLOMA IN MULTIMEDIA COMPUTING EXTENDED", minAPS: 25 },
          { name: "DIPLOMA IN COMPUTER SYSTEMS ENGINEERING", minAPS: 26 },
          { name: "DIPLOMA IN COMPUTER SYSTEMS ENGINEERING EXTENDED", minAPS: 23 },
          { name: "DIPLOMA IN INFORMATICS", minAPS: 28 },
          { name: "DIPLOMA IN INFORMATICS EXTENDED", minAPS: 25 },
          { name: "DIPLOMA IN INFORMATION TECHNOLOGY", minAPS: 28 },
          { name: "DIPLOMA IN INFORMATION TECHNOLOGY EXTENDED", minAPS: 25 }
        ]
      },
      {
        name: "Engineering And The Built Environment",
        streams: [
          { name: "BACHELOR IN ARCHITECTURE", minAPS: 25 },
          { name: "BACHELOR IN ARCHITECTURE EXTENDED", minAPS: 25 },
          { name: "DIPLOMA IN INDUSTRIAL DESIGN", minAPS: 21 },
          { name: "DIPLOMA IN BUILDING SCIENCE", minAPS: 26 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN CHEMICAL ENGINEERING", minAPS: 28 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN MATERIALS ENGINEERING IN POLYMER TECHNOLOGY", minAPS: 28 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN METALLURGICAL ENGINEERING", minAPS: 28 },
          { name: "HIGHER CERTIFICATE IN CONSTRUCTION ENGINEERING", minAPS: 20 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN CIVIL ENGINEERING", minAPS: 28 },
          { name: "HIGHER CERTIFICATE IN ELECTRICAL ENGINEERING", minAPS: 20 },
          { name: "DIPLOMA IN ELECTRICAL ENGINEERING", minAPS: 26 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN ELECTRICAL ENGINEERING", minAPS: 30 },
          { name: "DIPLOMA IN GEOMATICS", minAPS: 23 },
          { name: "BACHELOR IN GEOMATICS", minAPS: 25 },
          { name: "HIGHER CERTIFICATE IN INDUSTRIAL ENGINEERING", minAPS: 20 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN INDUSTRIAL ENGINEERING", minAPS: 28 },
          { name: "HIGHER CERTIFICATE IN MECHANICAL ENGINEERING", minAPS: 20 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN MECHANICAL ENGINEERING", minAPS: 28 },
          { name: "BACHELOR OF ENGINEERING TECHNOLOGY IN MECHATRONIC ENGINEERING", minAPS: 28 }
        ]
      },
      {
        name: "Economics And Finance",
        streams: [
          { name: "HIGHER CERTIFICATE IN ACCOUNTING", minAPS: 22 },
          { name: "DIPLOMA IN ACCOUNTING", minAPS: 24 },
          { name: "DIPLOMA IN INTERNAL AUDITING", minAPS: 24 },
          { name: "DIPLOMA IN ECONOMICS", minAPS: 22 },
          { name: "DIPLOMA IN FINANCIAL MANAGEMENT", minAPS: 24 },
          { name: "DIPLOMA IN FINANCIAL PLANNING", minAPS: 24 },
          { name: "DIPLOMA IN PUBLIC FINANCE", minAPS: 24 }
        ]
      },
      {
        name: "Arts And Design",
        streams: [
          { name: "DIPLOMA IN FASHION DESIGN AND TECHNOLOGY", minAPS: 20 },
          { name: "DIPLOMA IN FINE AND APPLIED ARTS", minAPS: 20 },
          { name: "DIPLOMA IN JEWELLERY DESIGN AND MANUFACTURE", minAPS: 20 },
          { name: "DIPLOMA IN INTERIOR DESIGN", minAPS: 22 },
          { name: "HIGHER CERTIFICATE IN MUSIC", minAPS: 18 },
          { name: "DIPLOMA IN PERFORMING ARTS", minAPS: 20 },
          { name: "DIPLOMA IN COMMERCIAL PHOTOGRAPHY", minAPS: 22 },
          { name: "DIPLOMA IN INTEGRATED COMMUNICATION DESIGN", minAPS: 24 },
          { name: "DIPLOMA IN MOTION PICTURE PRODUCTION", minAPS: 22 }
        ]
      },
      {
        name: "Management Sciences",
        streams: [
          { name: "HIGHER CERTIFICATE IN ADMINISTRATIVE INFORMATION MANAGEMENT", minAPS: 20 },
          { name: "DIPLOMA IN ADMINISTRATIVE INFORMATION MANAGEMENT", minAPS: 20 },
          { name: "HIGHER CERTIFICATE IN CONTACT CENTRE MANAGEMENT", minAPS: 20 },
          { name: "DIPLOMA IN CONTACT CENTRE MANAGEMENT", minAPS: 20 },
          { name: "DIPLOMA IN FOOD OPERATIONS MANAGEMENT", minAPS: 20 },
          { name: "DIPLOMA IN HOSPITALITY MANAGEMENT", minAPS: 20 },
          { name: "DIPLOMA IN ADMINISTRATIVE MANAGEMENT", minAPS: 24 },
          { name: "DIPLOMA IN CREDIT MANAGEMENT", minAPS: 24 },
          { name: "DIPLOMA IN ENTREPRENEURSHIP", minAPS: 24 },
          { name: "DIPLOMA IN MARKETING", minAPS: 24 },
          { name: "DIPLOMA IN RETAIL BUSINESS MANAGEMENT", minAPS: 24 },
          { name: "DIPLOMA IN SPORT MANAGEMENT", minAPS: 24 },
          { name: "DIPLOMA IN OPERATIONS MANAGEMENT", minAPS: 24 },
          { name: "DIPLOMA IN WORK STUDY", minAPS: 24 },
          { name: "DIPLOMA IN HUMAN RESOURCE MANAGEMENT", minAPS: 24 },
          { name: "DIPLOMA IN ADVENTURE TOURISM MANAGEMENT", minAPS: 20 },
          { name: "DIPLOMA IN CASINO RESORT MANAGEMENT", minAPS: 20 },
          { name: "DIPLOMA IN ECOTOURISM MANAGEMENT", minAPS: 20 },
          { name: "DIPLOMA IN EVENT MANAGEMENT", minAPS: 20 },
          { name: "DIPLOMA IN TOURISM MANAGEMENT", minAPS: 20 }
        ]
      },
      {
        name: "Humanities",
        streams: [
          { name: "DIPLOMA IN LANGUAGE PRACTICE", minAPS: 20 },
          { name: "DIPLOMA IN INTEGRATED COMMUNICATION", minAPS: 21 },
          { name: "DIPLOMA IN JOURNALISM", minAPS: 24 },
          { name: "DIPLOMA IN CORRECTIONAL AND REHABILITATION STUDIES", minAPS: 20 },
          { name: "DIPLOMA IN LAW", minAPS: 20 },
          { name: "DIPLOMA IN LEGAL SUPPORT", minAPS: 20 },
          { name: "DIPLOMA IN POLICING", minAPS: 20 },
          { name: "DIPLOMA IN TRAFFIC SAFETY AND MUNICIPAL POLICE MANAGEMENT", minAPS: 20 },
          { name: "DIPLOMA IN PUBLIC AFFAIRS", minAPS: 20 },
          { name: "BACHELOR OF EDUCATION IN FOUNDATION PHASE TEACHING", minAPS: 25 },
          { name: "BACHELOR OF EDUCATION IN INTERMEDIATE PHASE TEACHING", minAPS: 25 },
          { name: "BACHELOR OF EDUCATION IN SENIOR PHASE TEACHING (Agriculture)", minAPS: 24 },
          { name: "BACHELOR OF EDUCATION IN SENIOR PHASE TEACHING (Consumer Sciences)", minAPS: 24 },
          { name: "BACHELOR OF EDUCATION IN SENIOR PHASE TEACHING (Economic and Management Sciences)", minAPS: 24 },
          { name: "BACHELOR OF EDUCATION IN SENIOR PHASE TEACHING (Information Technology)", minAPS: 24 },
          { name: "BACHELOR OF EDUCATION IN SENIOR PHASE TEACHING (Languages)", minAPS: 24 },
          { name: "BACHELOR OF EDUCATION IN SENIOR PHASE TEACHING (Mathematics)", minAPS: 24 },
          { name: "BACHELOR OF EDUCATION IN SENIOR PHASE TEACHING (Physical Education)", minAPS: 24 },
          { name: "BACHELOR OF EDUCATION IN SENIOR PHASE TEACHING (Sciences)", minAPS: 24 },
          { name: "BACHELOR OF EDUCATION IN SENIOR PHASE TEACHING (Social Sciences)", minAPS: 24 },
          { name: "BACHELOR OF EDUCATION IN SENIOR PHASE TEACHING (Technology)", minAPS: 24 }
        ]
      }
    ]
  }
];

// Levenshtein distance for string similarity
function levenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1).toLowerCase() === a.charAt(j - 1).toLowerCase()) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function populateDropdown(selectElement, filter = "") {
  selectElement.innerHTML = '<option value="" disabled selected>Select Subject</option>';
  let filteredSubjects = subjects;
  
  if (filter) {
    filteredSubjects = subjects
      .map(s => ({
        name: s,
        score: levenshtein(filter.toLowerCase(), s.toLowerCase())
      }))
      .filter(s => 
        s.name.toLowerCase().includes(filter.toLowerCase()) || 
        s.score <= Math.max(2, Math.floor(filter.length / 2))
      )
      .sort((a, b) => a.score - b.score)
      .slice(0, 10)
      .map(s => s.name);
  }
  
  filteredSubjects.forEach(s => {
    const option = document.createElement('option');
    option.value = s.toLowerCase();
    option.textContent = s;
    selectElement.appendChild(option);
  });
  
  if (filter && filteredSubjects.length > 0) {
    selectElement.selectedIndex = 1;
  } else {
    selectElement.selectedIndex = 0;
  }
}

function addRow() {
  const currentRows = document.querySelectorAll('.subject-row').length;
  if (currentRows >= 7) { 
    alert("Maximum 7 subjects allowed"); 
    return; 
  }

  const div = document.createElement('div');
  div.className = 'subject-row';
  div.innerHTML = `
    <input type="text" name="subjectSearch" placeholder="Type to search subject..." />
    <select name="subject" required></select>
    <select name="level" required>
      <option value="" disabled selected>Level</option>
      <option value="7">7</option>
      <option value="6">6</option>
      <option value="5">5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1">1</option>
    </select>
    <input type="number" name="percentage" placeholder="Percentage (%)" min="0" max="100" required />
  `;
  
  const select = div.querySelector('select[name="subject"]');
  const search = div.querySelector('input[name="subjectSearch"]');
  populateDropdown(select);
  search.addEventListener('input', e => populateDropdown(select, e.target.value));
  document.getElementById('moreSubjects').appendChild(div);
}

function initializeSubjectLevels() {
  return {
    englishLevel: 0,
    mathLevel: 0,
    mathLitLevel: 0,
    techMathLevel: 0,
    phyScienceLevel: 0,
    techScienceLevel: 0,
    lifeScienceLevel: 0,
    geoLevel: 0,
    histLevel: 0,
    accountingLevel: 0,
    businessLevel: 0,
    ecoLevel: 0,
    infoLevel: 0,
    tourLevel: 0,
    consumerLevel: 0,
    hospLevel: 0,
    agriScienceLevel: 0,
    agriTechLevel: 0,
    agriManageLevel: 0,
    civilTechLevel: 0,
    elecTechLevel: 0,
    mechTechLevel: 0,
    enginLevel: 0
  };
}

function updateSubjectLevels(subject, level, levels) {
  subject = subject.toLowerCase();
  
  if (subject.includes("english")) {
    if (level > levels.englishLevel) levels.englishLevel = level;
  }
  if (subject === "mathematics") {
    if (level > levels.mathLevel) levels.mathLevel = level;
  }
  if (subject === "mathematical literacy") {
    if (level > levels.mathLitLevel) levels.mathLitLevel = level;
  }
  if (subject === "technical mathematics") {
    if (level > levels.techMathLevel) levels.techMathLevel = level;
  }
  if (subject === "physical sciences") {
    if (level > levels.phyScienceLevel) levels.phyScienceLevel = level;
  }
  if (subject === "technical sciences") {
    if (level > levels.techScienceLevel) levels.techScienceLevel = level;
  }
  if (subject === "life sciences") {
    if (level > levels.lifeScienceLevel) levels.lifeScienceLevel = level;
  }
  if (subject === "geography") {
    if (level > levels.geoLevel) levels.geoLevel = level;
  }
  if (subject === "history") {
    if (level > levels.histLevel) levels.histLevel = level;
  }
  if (subject === "accounting") {
    if (level > levels.accountingLevel) levels.accountingLevel = level;
  }
  if (subject === "business studies") {
    if (level > levels.businessLevel) levels.businessLevel = level;
  }
  if (subject === "economics") {
    if (level > levels.ecoLevel) levels.ecoLevel = level;
  }
  if (subject === "information technology") {
    if (level > levels.infoLevel) levels.infoLevel = level;
  }
  if (subject === "tourism") {
    if (level > levels.tourLevel) levels.tourLevel = level;
  }
  if (subject === "consumer studies") {
    if (level > levels.consumerLevel) levels.consumerLevel = level;
  }
  if (subject === "hospitality studies") {
    if (level > levels.hospLevel) levels.hospLevel = level;
  }
  if (subject === "agricultural sciences") {
    if (level > levels.agriScienceLevel) levels.agriScienceLevel = level;
  }
  if (subject === "agricultural technology") {
    if (level > levels.agriTechLevel) levels.agriTechLevel = level;
  }
  if (subject === "agricultural management practices") {
    if (level > levels.agriManageLevel) levels.agriManageLevel = level;
  }
  if (subject === "civil technology") {
    if (level > levels.civilTechLevel) levels.civilTechLevel = level;
  }
  if (subject === "electrical technology") {
    if (level > levels.elecTechLevel) levels.elecTechLevel = level;
  }
  if (subject === "mechanical technology") {
    if (level > levels.mechTechLevel) levels.mechTechLevel = level;
  }
  if (subject === "engineering graphics and design") {
    if (level > levels.enginLevel) levels.enginLevel = level;
  }
}

function checkQualification(stream, apsTotal, levels) {
  // Basic APS check
  if (apsTotal < stream.minAPS) {
    return false;
  }
  
  // Add specific requirements based on program name
  const streamName = stream.name.toUpperCase();
  
  // Engineering programs
  if (streamName.includes("ENGINEERING")) {
    if (levels.englishLevel < 4 || 
        (levels.mathLevel < 4 || levels.techMathLevel < 4) &&
        (levels.phyScienceLevel < 4 || levels.techScienceLevel < 4)) {
      return false;
    }
  }
  
  // Health Science programs
  if (streamName.includes("HEALTH") || streamName.includes("NURSING") || 
      streamName.includes("MEDICAL") || streamName.includes("RADIOGRAPHY")) {
    if (levels.englishLevel < 4 || levels.lifeScienceLevel < 4) {
      return false;
    }
  }
  
  // Mathematics-heavy programs
  if (streamName.includes("MATHEMATICS") || streamName.includes("ACTUARIAL") ||
      streamName.includes("COMPUTER SCIENCE") || streamName.includes("INFORMATION TECHNOLOGY")) {
    if (levels.mathLevel < 5 && levels.techMathLevel < 5) {
      return false;
    }
  }
  
  // Business programs
  if (streamName.includes("BUSINESS") || streamName.includes("MANAGEMENT") ||
      streamName.includes("ACCOUNTING") || streamName.includes("ECONOMICS")) {
    if (levels.englishLevel < 4) {
      return false;
    }
  }
  
  return true;
}

window.addEventListener('DOMContentLoaded', () => {
  const firstRow = document.querySelector('.subject-row');
  const firstSelect = firstRow.querySelector('select[name="subject"]');
  const firstSearch = firstRow.querySelector('input[name="subjectSearch"]');
  populateDropdown(firstSelect);
  firstSearch.addEventListener('input', e => populateDropdown(firstSelect, e.target.value));
  document.getElementById('addSubject').addEventListener('click', addRow);
});

document.getElementById('apsForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('result').innerHTML = "";
  
  const rows = Array.from(document.querySelectorAll('.subject-row'));
  let apsTotal = 0;
  const selectedSubjects = new Set();
  const levels = initializeSubjectLevels();

  for (const row of rows) {
    const subject = row.querySelector('select[name="subject"]').value;
    const percent = parseInt(row.querySelector('input[name="percentage"]').value);
    const level = parseInt(row.querySelector('select[name="level"]').value);

    if (!subject || isNaN(percent) || isNaN(level)) {
      alert("Please fill in all fields correctly");
      return;
    }

    if (selectedSubjects.has(subject)) {
      alert(`Duplicate subject detected: ${subject}`);
      return;
    }
    selectedSubjects.add(subject);

    // Update subject levels
    updateSubjectLevels(subject, level, levels);

    // Skip Life Orientation for APS calculation
    if (subject.toLowerCase() === "life orientation") continue;

    // Calculate points based on percentage
    let points = 0;
    if (percent >= 80) points = 7;
    else if (percent >= 70) points = 6;
    else if (percent >= 60) points = 5;
    else if (percent >= 50) points = 4;
    else if (percent >= 40) points = 3;
    else if (percent >= 30) points = 2;
    else if (percent >= 20) points = 1;

    apsTotal += points;
  }

  if (selectedSubjects.size === 0 || (selectedSubjects.size === 1 && selectedSubjects.has("life orientation"))) {
    alert("Enter at least one subject besides Life Orientation");
    return;
  }

  let html = `<p>Your APS (excluding Life Orientation) is: <strong>${apsTotal}</strong></p>`;
  let anyQualification = false;

  universities.forEach(u => {
    let univText = '';
    u.faculties.forEach(f => {
      let qualifiedStreams = [];
      f.streams.forEach(s => {
        if (checkQualification(s, apsTotal, levels)) {
          qualifiedStreams.push(s);
        }
      });

      if (qualifiedStreams.length > 0) {
        univText += `<h4>Faculty of ${f.name}</h4><ul>`;
        qualifiedStreams.forEach(s => {
          univText += `<li>${s.name} (Min APS: ${s.minAPS})</li>`;
        });
        univText += '</ul>';
      }
    });

    if (univText) {
      html += `<h3>${u.name}</h3>${univText}`;
      anyQualification = true;
    }
  });

  if (!anyQualification) {
    html += "<p>Unfortunately, you do not qualify for any listed university courses based on your current APS and subject combinations. Consider improving your grades or taking additional subjects.</p>";
  }

  document.getElementById('result').innerHTML = html;
});
