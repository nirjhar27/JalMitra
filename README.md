# Jalmitra - Rooftop Rainwater Harvesting Assessment Tool

![Jalmitra Logo](https://img.shields.io/badge/Jalmitra-Ministry%20of%20Jal%20Shakti-blue)
![Version](https://img.shields.io/badge/version-2.0.0-green)
![License](https://img.shields.io/badge/license-Government%20of%20India-orange)

A comprehensive web-based assessment tool for evaluating the feasibility of **Rooftop Rainwater Harvesting (RTRWH)** systems across India, developed for the Ministry of Jal Shakti.

## 🌟 Features

### 🏛️ Government-Grade Assessment Tool
- **Professional Interface**: Clean, responsive design following government website standards
- **Multilingual Support**: Available in 8 Indian languages (English, Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada)
- **Official Branding**: Ministry of Jal Shakti branded interface

### 📍 Location-Based Intelligence
- **Automatic Data Detection**: Water table depth and soil type auto-populated based on selected state
- **State-Specific Data**: Rainfall, hydrogeological, and soil data for all 29 Indian states
- **Regional Optimization**: Recommendations tailored to local conditions

### 🔧 Smart Structure Recommendation
- **Algorithmic Selection**: Intelligent recommendation of optimal RTRWH structure type
- **4 Structure Types**: Recharge Pit, Recharge Trench, Recharge Shaft, Recharge Well
- **Criteria-Based Matching**: Based on rooftop area, water table depth, and space availability

### 📊 Comprehensive Assessment
- **Feasibility Analysis**: Clear feasible/not-feasible determination
- **Cost Estimation**: Detailed breakdown including material, labor, and contingency costs
- **Technical Specifications**: Precise dimensions and volume calculations
- **Implementation Guidelines**: Step-by-step installation guidance

## 🚀 Live Demo

**Primary Link**: [https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/388298d32a49b77e81cf2e5522f7663c/ad5cb939-71b3-4cd2-a6e9-811f0ab3972a/index.html](https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/388298d32a49b77e81cf2e5522f7663c/ad5cb939-71b3-4cd2-a6e9-811f0ab3972a/index.html)

## 📥 Installation

### Option 1: Direct Download and Run
1. Download all files from this repository
2. Open `index.html` in any modern web browser
3. No server setup required - runs entirely client-side

### Option 2: Local Web Server (Recommended)
```bash
# Clone the repository
git clone https://github.com/yourusername/jalmitra-rwh-assessment.git

# Navigate to project directory
cd jalmitra-rwh-assessment

# For Python 3.x
python -m http.server 8000

# For Python 2.x
python -m SimpleHTTPServer 8000

# Access at http://localhost:8000
```

### Option 3: GitHub Pages Deployment
1. Fork this repository
2. Go to repository Settings → Pages
3. Set source to "Deploy from a branch" → main branch
4. Your site will be available at `https://yourusername.github.io/jalmitra-rwh-assessment/`

## 📁 Project Structure

```
jalmitra-rwh-assessment/
│
├── index.html          # Main HTML file with form and results
├── style.css           # Complete CSS styling and responsive design
├── app.js             # JavaScript with assessment logic and translations
├── README.md          # This file
├── LICENSE            # Government license
└── docs/              # Additional documentation
    ├── ALGORITHM.md   # Structure selection algorithm details
    ├── DATA_SOURCES.md# Information about data sources
    └── CONTRIBUTING.md# Contribution guidelines
```

## 🔬 Technical Specifications

### Structure Selection Algorithm

The application uses a sophisticated algorithm to recommend the optimal RTRWH structure:

| Structure Type | Rooftop Area | Water Table Depth | Space Required | Best For |
|---------------|--------------|-------------------|----------------|----------|
| **Recharge Pit** | ≤100 m² | ≤2.5m | 4-6 m² | Small residential buildings |
| **Recharge Trench** | 100-300 m² | 2-5m | 8-15 m² | Medium residential/commercial |
| **Recharge Shaft** | 200-500 m² | 2-12m | 9-25 m² | Large buildings, deeper water table |
| **Recharge Well** | >400 m² | >10m | 25-50 m² | Industrial/institutional complexes |

### Location Data Coverage

- **29 Indian States + Delhi**: Complete coverage with state-specific data
- **Rainfall Data**: Historical average annual rainfall (mm)
- **Water Table Estimates**: Based on Central Ground Water Board data
- **Soil Classification**: Regional soil type mapping

### Cost Calculation Formula

```javascript
Total Cost = Material Cost × Roof Material Factor + Labor Cost (30%) + Contingency (20%)
```

## 🌐 Supported Languages

- 🇬🇧 **English** - Primary interface
- 🇮🇳 **हिंदी (Hindi)** - Hindi translation
- 🇧🇩 **বাংলা (Bengali)** - Bengali translation  
- 🇮🇳 **தமிழ் (Tamil)** - Tamil translation
- 🇮🇳 **తెలుగు (Telugu)** - Telugu translation
- 🇮🇳 **मराठी (Marathi)** - Marathi translation
- 🇮🇳 **ગુજરાતી (Gujarati)** - Gujarati translation
- 🇮🇳 **ಕನ್ನಡ (Kannada)** - Kannada translation

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

We welcome contributions from developers, water management experts, and government officials. Please see [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

### Areas for Contribution
- Additional language translations
- Regional data improvements
- UI/UX enhancements
- Performance optimizations
- Mobile app development

## 📄 License

This project is developed for the **Government of India, Ministry of Jal Shakti**. 

For government use and public benefit. All rights reserved to the Government of India.

## 🙋‍♂️ Support & Contact

- **Technical Issues**: Create an issue on GitHub
- **Government Queries**: Contact Ministry of Jal Shakti
- **Feature Requests**: Submit via GitHub issues
- **General Support**: [support@jalshakti.gov.in](mailto:support@jalshakti.gov.in)

## 🔄 Changelog

### Version 2.0.0 (Latest)
- ✨ Added automatic location-based data detection
- 🌐 Implemented multilingual support (8 languages)
- 🎯 Enhanced structure recommendation algorithm
- 📱 Improved mobile responsiveness
- 💡 Added installation type recommendations with reasoning
- 🎨 Professional government website design

### Version 1.0.0
- 🚀 Initial release with basic assessment functionality
- 📊 Cost calculation and technical specifications
- 🏗️ Structure feasibility analysis

## 🌿 Environmental Impact

This tool supports India's water conservation efforts by:
- 💧 Promoting rainwater harvesting adoption
- 🏘️ Optimizing installation efficiency
- 📈 Reducing implementation costs
- 🎓 Educating citizens about water conservation
- 🌍 Contributing to sustainable water management

## 📸 Screenshots

### Desktop Interface
![Desktop Assessment Form](https://via.placeholder.com/800x400?text=Desktop+Assessment+Form)

### Mobile Interface  
![Mobile Interface](https://via.placeholder.com/400x600?text=Mobile+Interface)

### Results Dashboard
![Results Dashboard](https://via.placeholder.com/800x500?text=Results+Dashboard)

---

**Developed for the Ministry of Jal Shakti, Government of India** 🇮🇳

*Jal Shakti - Jal Jeevan* 💧🌱