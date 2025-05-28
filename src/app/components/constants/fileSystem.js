// File system structure for the VS Code portfolio
export const FILE_SYSTEM = {
  "personal_info": {
    type: "folder",
    children: {
      "bio.txt": { type: "file", icon: "👤" },
      "interests.md": { type: "file", icon: "💡" },
    }
  },
  "professional_info": {
    type: "folder", 
    children: {
      "experience.md": { type: "file", icon: "💼" },
      "education.md": { type: "file", icon: "🎓" },
      "skills.json": { type: "file", icon: "⚡" }
    }
  },
  "projects": {
    type: "folder",
    children: {
      "kindercastle_app": {
        type: "folder",
        children: {
          "README.md": { type: "file", icon: "📖" },
          "tech_stack.json": { type: "file", icon: "🔧" }
        }
      },
      "bukabangunan_app": {
        type: "folder", 
        children: {
          "README.md": { type: "file", icon: "📖" },
          "features.md": { type: "file", icon: "✨" }
        }
      },
      "bukalapak_mitra": {
        type: "folder",
        children: {
          "README.md": { type: "file", icon: "📖" },
          "optimization.md": { type: "file", icon: "🚀" }
        }
      }
    }
  }
};

// File icons mapping
export const FILE_ICONS = {
  "welcome": "👋",
  "bio": "👤",
  "experience": "💼",
  "education": "🎓",
  "skills": "⚡",
  "contact": "📧",
  "interests": "💡",
  "README": "📖",
  "features": "✨",
  "optimization": "🚀",
  "tech_stack": "🔧",
  "default": "📄"
};

// File type categories
export const FILE_CATEGORIES = {
  PERSONAL: ["bio.txt", "interests.md"],
  PROFESSIONAL: ["experience.md", "education.md", "skills.json"],
  PROJECTS: ["README.md", "tech_stack.json", "features.md", "optimization.md"],
  WELCOME: ["welcome.md"]
};

// Default expanded folders
export const DEFAULT_EXPANDED_FOLDERS = [
  "personal_info",
  "professional_info", 
  "projects"
];