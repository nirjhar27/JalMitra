// Enhanced application data with location-based parameters
const appData = {
  states: [
    {"name": "Andhra Pradesh", "rainfall": 940, "waterTable": 8, "soilType": "Mixed/Red", "region": "Peninsular"},
    {"name": "Arunachal Pradesh", "rainfall": 2782, "waterTable": 4, "soilType": "Rocky/Forest", "region": "Mountain"},
    {"name": "Assam", "rainfall": 2818, "waterTable": 3, "soilType": "Alluvial/Clay", "region": "Flood Plains"},
    {"name": "Bihar", "rainfall": 1205, "waterTable": 6, "soilType": "Alluvial", "region": "Gangetic Plains"},
    {"name": "Chhattisgarh", "rainfall": 1292, "waterTable": 10, "soilType": "Mixed/Laterite", "region": "Peninsular"},
    {"name": "Goa", "rainfall": 3005, "waterTable": 5, "soilType": "Coastal/Sandy", "region": "Coastal"},
    {"name": "Gujarat", "rainfall": 1107, "waterTable": 12, "soilType": "Black Cotton", "region": "Western"},
    {"name": "Haryana", "rainfall": 617, "waterTable": 18, "soilType": "Sandy/Loam", "region": "Northern Plains"},
    {"name": "Himachal Pradesh", "rainfall": 1251, "waterTable": 3, "soilType": "Rocky/Mountain", "region": "Mountain"},
    {"name": "Jharkhand", "rainfall": 1463, "waterTable": 8, "soilType": "Mixed/Laterite", "region": "Peninsular"},
    {"name": "Karnataka", "rainfall": 1139, "waterTable": 10, "soilType": "Mixed/Red", "region": "Peninsular"},
    {"name": "Kerala", "rainfall": 3107, "waterTable": 4, "soilType": "Laterite/Coastal", "region": "Coastal"},
    {"name": "Madhya Pradesh", "rainfall": 1178, "waterTable": 9, "soilType": "Mixed/Black", "region": "Central"},
    {"name": "Maharashtra", "rainfall": 1181, "waterTable": 11, "soilType": "Black Cotton", "region": "Peninsular"},
    {"name": "Manipur", "rainfall": 1467, "waterTable": 5, "soilType": "Hill/Clay", "region": "Northeast"},
    {"name": "Meghalaya", "rainfall": 2818, "waterTable": 3, "soilType": "Laterite/Clay", "region": "Northeast"},
    {"name": "Mizoram", "rainfall": 2391, "waterTable": 4, "soilType": "Hill/Forest", "region": "Northeast"},
    {"name": "Nagaland", "rainfall": 1814, "waterTable": 4, "soilType": "Hill/Forest", "region": "Northeast"},
    {"name": "Odisha", "rainfall": 1451, "waterTable": 7, "soilType": "Alluvial/Laterite", "region": "Eastern"},
    {"name": "Punjab", "rainfall": 649, "waterTable": 20, "soilType": "Alluvial/Sandy", "region": "Northern Plains"},
    {"name": "Rajasthan", "rainfall": 313, "waterTable": 25, "soilType": "Sandy/Desert", "region": "Arid"},
    {"name": "Sikkim", "rainfall": 3396, "waterTable": 3, "soilType": "Mountain/Forest", "region": "Mountain"},
    {"name": "Tamil Nadu", "rainfall": 998, "waterTable": 9, "soilType": "Red/Black", "region": "Southern"},
    {"name": "Telangana", "rainfall": 905, "waterTable": 9, "soilType": "Red/Black", "region": "Peninsular"},
    {"name": "Tripura", "rainfall": 2663, "waterTable": 4, "soilType": "Hill/Alluvial", "region": "Northeast"},
    {"name": "Uttar Pradesh", "rainfall": 1025, "waterTable": 8, "soilType": "Alluvial", "region": "Gangetic Plains"},
    {"name": "Uttarakhand", "rainfall": 1611, "waterTable": 4, "soilType": "Mountain/Alluvial", "region": "Mountain"},
    {"name": "West Bengal", "rainfall": 1582, "waterTable": 5, "soilType": "Alluvial/Delta", "region": "Eastern"},
    {"name": "Delhi", "rainfall": 617, "waterTable": 15, "soilType": "Alluvial/Sandy", "region": "Northern Plains"}
  ],

  roofMaterials: [
    {"type": "RCC", "runoffCoeff": 0.8, "costMultiplier": 1.0},
    {"type": "Asbestos", "runoffCoeff": 0.85, "costMultiplier": 0.9},
    {"type": "Tin Sheets", "runoffCoeff": 0.85, "costMultiplier": 0.85}
  ],

  structureTypes: [
    {
      "name": "Recharge Pit",
      "criteria": {"maxArea": 100, "maxDepth": 2.5, "minSpace": 4},
      "specs": {"spaceRequired": "4-6", "maintenance": "Low", "suitability": "Shallow Water Table (≤2.5m)"},
      "costPerM2": 180,
      "reasons": ["Optimal for small rooftop areas", "Cost-effective for shallow water table", "Minimal space requirement", "Easy maintenance"],
      "alternatives": [{"name": "Recharge Trench", "reason": "If linear space is preferred"}]
    },
    {
      "name": "Recharge Trench",
      "criteria": {"minArea": 100, "maxArea": 300, "maxDepth": 5, "minSpace": 8},
      "specs": {"spaceRequired": "8-15", "maintenance": "Low to Medium", "suitability": "Shallow to Medium (2-5m)"},
      "costPerM2": 220,
      "reasons": ["Suitable for medium rooftop areas", "Good for linear space", "Efficient for moderate depth", "Higher infiltration capacity"],
      "alternatives": [{"name": "Recharge Pit", "reason": "If compact space preferred"}, {"name": "Recharge Shaft", "reason": "If deeper recharge needed"}]
    },
    {
      "name": "Recharge Shaft",
      "criteria": {"minArea": 200, "maxArea": 500, "minDepth": 2, "maxDepth": 12, "minSpace": 10},
      "specs": {"spaceRequired": "9-25", "maintenance": "Medium", "suitability": "Medium to Deep (2-12m)"},
      "costPerM2": 280,
      "reasons": ["Ideal for medium to large rooftops", "Effective for deeper water table", "Compact vertical design", "Good recharge efficiency"],
      "alternatives": [{"name": "Recharge Trench", "reason": "If shallow depth sufficient"}, {"name": "Recharge Well", "reason": "For very deep water table"}]
    },
    {
      "name": "Recharge Well",
      "criteria": {"minArea": 400, "minDepth": 10, "minSpace": 25},
      "specs": {"spaceRequired": "25-50", "maintenance": "Medium to High", "suitability": "Deep Water Table (>10m)"},
      "costPerM2": 350,
      "reasons": ["Best for large rooftop areas", "Suitable for deep aquifers", "High recharge capacity", "Direct injection to aquifer"],
      "alternatives": [{"name": "Recharge Shaft", "reason": "If moderate depth acceptable"}, {"name": "Combined System", "reason": "For maximum efficiency"}]
    }
  ],

  translations: {
    english: {
      "page_title": "Jalmitra - Rooftop Rainwater Harvesting Assessment",
      "header_title": "Jalmitra",
      "header_subtitle": "Ministry of Jal Shakti - Rooftop Rainwater Harvesting Assessment",
      "assessment_form": "Assessment Form",
      "location_details": "Location Details",
      "property_info": "Property Information",
      "site_conditions": "Site Conditions (Auto-Detected)",
      "usage_requirements": "Usage Requirements",
      "state": "State",
      "district": "District",
      "rooftop_area": "Rooftop Area (m²)",
      "roof_material": "Roof Material",
      "occupants": "Number of Occupants",
      "water_table": "Water Table Depth",
      "soil_type": "Soil Type",
      "daily_requirement": "Daily Water Requirement (L)",
      "calculate": "Calculate Assessment",
      "auto_detected": "Auto-detected based on location",
      "processing": "Processing Assessment...",
      "assessment_report": "Assessment Report",
      "installation_recommendation": "Recommended Installation Type",
      "feasible": "System Feasible",
      "not_feasible": "System Not Feasible"
    },
    hindi: {
      "page_title": "जलमित्र - छत वर्षा जल संचयन मूल्यांकन",
      "header_title": "जलमित्र",
      "header_subtitle": "जल शक्ति मंत्रालय - छत वर्षा जल संचयन मूल्यांकन",
      "assessment_form": "मूल्यांकन फॉर्म",
      "location_details": "स्थान विवरण",
      "property_info": "संपत्ति जानकारी",
      "site_conditions": "साइट की स्थिति (स्वचालित पहचान)",
      "usage_requirements": "उपयोग आवश्यकताएं",
      "state": "राज्य",
      "district": "जिला",
      "rooftop_area": "छत का क्षेत्रफल (वर्ग मीटर)",
      "roof_material": "छत सामग्री",
      "occupants": "निवासियों की संख्या",
      "water_table": "भूजल स्तर की गहराई",
      "soil_type": "मिट्टी का प्रकार",
      "daily_requirement": "दैनिक जल आवश्यकता (लीटर)",
      "calculate": "मूल्यांकन की गणना करें",
      "auto_detected": "स्थान के आधार पर स्वचालित पहचान",
      "processing": "मूल्यांकन प्रक्रिया...",
      "assessment_report": "मूल्यांकन रिपोर्ट",
      "installation_recommendation": "अनुशंसित स्थापना प्रकार",
      "feasible": "सिस्टम व्यवहार्य",
      "not_feasible": "सिस्टम व्यवहार्य नहीं"
    }
  }
};

// Global variables
let currentLanguage = 'english';
let selectedStateData = null;
let assessmentData = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  populateStateDropdown();
  setupEventListeners();
  updateLanguage('english');
}

// Populate state dropdown
function populateStateDropdown() {
  const stateSelect = document.getElementById('state');
  stateSelect.innerHTML = '<option value="">Select State</option>';

  appData.states.forEach(state => {
    const option = document.createElement('option');
    option.value = state.name;
    option.textContent = state.name;
    stateSelect.appendChild(option);
  });
}

// Setup event listeners
function setupEventListeners() {
  // Language selector
  document.getElementById('languageSelect').addEventListener('change', function(e) {
    updateLanguage(e.target.value);
  });

  // State selection - auto-populate location data
  document.getElementById('state').addEventListener('change', function(e) {
    const stateName = e.target.value;
    if (stateName) {
      selectedStateData = appData.states.find(state => state.name === stateName);
      updateLocationData(selectedStateData);
    } else {
      clearLocationData();
    }
  });

  // Form submission
  document.getElementById('rwcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
      processAssessment();
    }
  });
}

// Update location-based data when state is selected
function updateLocationData(stateData) {
  if (stateData) {
    // Update water table depth
    document.getElementById('waterTableDepth').value = `${stateData.waterTable}m below ground level`;

    // Update soil type
    document.getElementById('soilType').value = stateData.soilType;

    // Add visual feedback
    const waterTableField = document.getElementById('waterTableDepth');
    const soilTypeField = document.getElementById('soilType');

    waterTableField.style.backgroundColor = '#e8f5e8';
    soilTypeField.style.backgroundColor = '#e8f5e8';

    setTimeout(() => {
      waterTableField.style.backgroundColor = '';
      soilTypeField.style.backgroundColor = '';
    }, 1000);
  }
}

function clearLocationData() {
  document.getElementById('waterTableDepth').value = '';
  document.getElementById('soilType').value = '';
  selectedStateData = null;
}

// Language translation function
function updateLanguage(languageCode) {
  currentLanguage = languageCode;
  const translations = appData.translations[languageCode] || appData.translations.english;

  // Update all elements with data-key attributes
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[key]) {
      if (element.tagName === 'INPUT' && element.type !== 'submit') {
        element.placeholder = translations[key];
      } else {
        element.textContent = translations[key];
      }
    }
  });

  // Update document title
  if (translations.page_title) {
    document.title = translations.page_title;
  }
}

// Form validation
function validateForm() {
  const requiredFields = ['state', 'rooftopArea', 'dailyRequirement'];
  let isValid = true;

  requiredFields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (!field.value.trim()) {
      field.style.borderColor = '#e53e3e';
      isValid = false;
    } else {
      field.style.borderColor = '';
    }
  });

  if (!selectedStateData) {
    alert('Please select a state first');
    return false;
  }

  return isValid;
}

// Process assessment
function processAssessment() {
  // Collect form data
  assessmentData = {
    state: document.getElementById('state').value,
    district: document.getElementById('district').value,
    propertyType: document.getElementById('propertyType').value,
    rooftopArea: parseFloat(document.getElementById('rooftopArea').value),
    roofMaterial: document.getElementById('roofMaterial').value,
    occupants: parseInt(document.getElementById('occupants').value) || 4,
    dailyRequirement: parseFloat(document.getElementById('dailyRequirement').value),
    primaryUse: document.getElementById('primaryUse').value,
    stateData: selectedStateData
  };

  // Show processing screen
  showProcessingAnimation();

  // Simulate processing delay
  setTimeout(() => {
    calculateResults();
    showResults();
  }, 3000);
}

// Show processing animation
function showProcessingAnimation() {
  document.getElementById('assessmentForm').style.display = 'none';
  document.getElementById('processingSection').style.display = 'block';

  // Animate progress bar and steps
  let progress = 0;
  let currentStep = 1;
  const progressFill = document.getElementById('progressFill');

  const interval = setInterval(() => {
    progress += 2;
    progressFill.style.width = progress + '%';

    // Update active step
    if (progress >= currentStep * 20) {
      document.querySelectorAll('.step').forEach((step, index) => {
        if (index < currentStep) {
          step.classList.add('active');
        }
      });
      currentStep++;
    }

    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 50);
}

// Calculate assessment results
function calculateResults() {
  const rooftopArea = assessmentData.rooftopArea;
  const rainfall = assessmentData.stateData.rainfall;
  const roofMaterial = appData.roofMaterials.find(m => m.type === assessmentData.roofMaterial);
  const runoffCoeff = roofMaterial ? roofMaterial.runoffCoeff : 0.8;

  // Calculate water availability
  const annualRunoff = rooftopArea * rainfall * runoffCoeff; // liters
  const dailyAvailable = Math.round(annualRunoff / 365); // liters per day

  // Determine recommended structure
  const waterTableDepth = assessmentData.stateData.waterTable;
  const recommendedStructure = determineStructureType(rooftopArea, waterTableDepth);

  // Calculate costs
  const baseCost = rooftopArea * recommendedStructure.costPerM2;
  const materialCost = Math.round(baseCost * (roofMaterial ? roofMaterial.costMultiplier : 1.0));
  const laborCost = Math.round(materialCost * 0.3);
  const contingencyCost = Math.round((materialCost + laborCost) * 0.2);
  const totalCost = materialCost + laborCost + contingencyCost;

  // Calculate technical specifications
  const specs = calculateTechnicalSpecs(recommendedStructure, rooftopArea);

  // Store results
  assessmentData.results = {
    annualRainfall: rainfall,
    dailyAvailable: dailyAvailable,
    dailyRequirement: assessmentData.dailyRequirement,
    annualRunoff: annualRunoff,
    isFeasible: dailyAvailable >= (assessmentData.dailyRequirement * 0.7), // 70% threshold
    recommendedStructure: recommendedStructure,
    costs: {
      material: materialCost,
      labor: laborCost,
      contingency: contingencyCost,
      total: totalCost
    },
    specs: specs
  };
}

// Determine appropriate structure type based on criteria
function determineStructureType(rooftopArea, waterTableDepth) {
  for (let structure of appData.structureTypes) {
    const criteria = structure.criteria;

    // Check area constraints
    if (criteria.maxArea && rooftopArea > criteria.maxArea) continue;
    if (criteria.minArea && rooftopArea < criteria.minArea) continue;

    // Check depth constraints
    if (criteria.maxDepth && waterTableDepth > criteria.maxDepth) continue;
    if (criteria.minDepth && waterTableDepth < criteria.minDepth) continue;

    return structure;
  }

  // Default fallback
  return appData.structureTypes[0]; // Recharge Pit
}

// Calculate technical specifications
function calculateTechnicalSpecs(structure, rooftopArea) {
  let specs = {};

  switch (structure.name) {
    case 'Recharge Pit':
      specs.diameter = Math.max(1.5, Math.min(3.0, Math.sqrt(rooftopArea / 100) * 2));
      specs.depth = Math.min(3.0, assessmentData.stateData.waterTable - 0.5);
      specs.volume = Math.PI * Math.pow(specs.diameter / 2, 2) * specs.depth;
      break;

    case 'Recharge Trench':
      specs.width = 1.0;
      specs.length = Math.max(5, Math.min(15, rooftopArea / 20));
      specs.depth = Math.min(2.0, assessmentData.stateData.waterTable - 0.5);
      specs.volume = specs.width * specs.length * specs.depth;
      break;

    case 'Recharge Shaft':
      specs.diameter = Math.max(1.0, Math.min(2.5, Math.sqrt(rooftopArea / 200) * 2));
      specs.depth = Math.min(8.0, assessmentData.stateData.waterTable - 1.0);
      specs.volume = Math.PI * Math.pow(specs.diameter / 2, 2) * specs.depth;
      break;

    case 'Recharge Well':
      specs.diameter = 0.3; // Standard bore diameter
      specs.depth = Math.min(20.0, assessmentData.stateData.waterTable + 5.0);
      specs.volume = Math.PI * Math.pow(specs.diameter / 2, 2) * specs.depth;
      break;

    default:
      specs.diameter = 2.0;
      specs.depth = 2.5;
      specs.volume = Math.PI * Math.pow(specs.diameter / 2, 2) * specs.depth;
  }

  return specs;
}

// Show results section
function showResults() {
  document.getElementById('processingSection').style.display = 'none';
  document.getElementById('resultsSection').style.display = 'block';

  const results = assessmentData.results;

  // Update feasibility badge
  const feasibilityBadge = document.getElementById('feasibilityBadge');
  const feasibilityText = feasibilityBadge.querySelector('span');

  if (results.isFeasible) {
    feasibilityBadge.classList.remove('not-feasible');
    feasibilityText.textContent = appData.translations[currentLanguage].feasible || 'System Feasible';
  } else {
    feasibilityBadge.classList.add('not-feasible');
    feasibilityText.textContent = appData.translations[currentLanguage].not_feasible || 'System Not Feasible';
  }

  // Update summary cards
  document.getElementById('annualRainfall').textContent = `${results.annualRainfall} mm`;
  document.getElementById('dailyAvailable').textContent = `${results.dailyAvailable.toLocaleString()} L`;
  document.getElementById('dailyReq').textContent = `${results.dailyRequirement.toLocaleString()} L`;
  document.getElementById('estimatedCost').textContent = `₹${results.costs.total.toLocaleString()}`;

  // Update installation recommendation
  updateInstallationRecommendation(results.recommendedStructure);

  // Update technical specifications
  updateTechnicalSpecs(results.specs, results.recommendedStructure);

  // Update cost breakdown
  updateCostBreakdown(results.costs);
}

// Update installation recommendation section
function updateInstallationRecommendation(structure) {
  document.getElementById('recommendedStructure').textContent = structure.name;
  document.getElementById('structureType').textContent = 
    structure.name.includes('Well') ? 'Deep Injection Structure' :
    structure.name.includes('Shaft') ? 'Subsurface Recharge Structure' :
    'Surface Recharge Structure';
  document.getElementById('spaceRequired').textContent = `${structure.specs.spaceRequired} m²`;
  document.getElementById('maintenanceLevel').textContent = structure.specs.maintenance;
  document.getElementById('suitability').textContent = structure.specs.suitability;

  // Update reasons list
  const reasonsList = document.getElementById('reasonsList');
  reasonsList.innerHTML = '';
  structure.reasons.forEach(reason => {
    const li = document.createElement('li');
    li.textContent = reason;
    reasonsList.appendChild(li);
  });

  // Update alternatives
  const alternativesList = document.getElementById('alternativesList');
  alternativesList.innerHTML = '';
  structure.alternatives.forEach(alt => {
    const altDiv = document.createElement('div');
    altDiv.className = 'alternative-item';
    altDiv.innerHTML = `
      <span class="alt-name">${alt.name}</span>
      <span class="alt-reason">${alt.reason}</span>
    `;
    alternativesList.appendChild(altDiv);
  });
}

// Update technical specifications
function updateTechnicalSpecs(specs, structure) {
  const dimensionLabel = structure.name === 'Recharge Trench' ? 'Length' : 'Diameter';
  const dimensionValue = structure.name === 'Recharge Trench' ? 
    `${specs.length ? specs.length.toFixed(1) : specs.diameter.toFixed(1)} m` :
    `${specs.diameter.toFixed(1)} m`;

  document.getElementById('structureDimension').textContent = dimensionValue;
  document.getElementById('structureDepth').textContent = `${specs.depth.toFixed(1)} m`;
  document.getElementById('structureVolume').textContent = `${specs.volume.toFixed(1)} m³`;
  document.getElementById('annualRunoff').textContent = `${Math.round(assessmentData.results.annualRunoff).toLocaleString()} L`;
}

// Update cost breakdown
function updateCostBreakdown(costs) {
  document.getElementById('materialCost').textContent = `₹${costs.material.toLocaleString()}`;
  document.getElementById('laborCost').textContent = `₹${costs.labor.toLocaleString()}`;
  document.getElementById('contingencyCost').textContent = `₹${costs.contingency.toLocaleString()}`;
  document.getElementById('totalCost').textContent = `₹${costs.total.toLocaleString()}`;
}

// Reset form for new assessment
function resetForm() {
  document.getElementById('resultsSection').style.display = 'none';
  document.getElementById('assessmentForm').style.display = 'block';
  document.getElementById('rwcForm').reset();
  clearLocationData();
  assessmentData = {};
}

// Print functionality
window.addEventListener('beforeprint', function() {
  // Show all sections for printing
  document.getElementById('assessmentForm').style.display = 'none';
  document.getElementById('processingSection').style.display = 'none';
  document.getElementById('resultsSection').style.display = 'block';
});