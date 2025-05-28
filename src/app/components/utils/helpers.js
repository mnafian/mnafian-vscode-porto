/**
 * Utility functions for the VS Code Portfolio
 */

/**
 * Get the appropriate icon for a file based on its name
 * @param {string} fileName - The name of the file
 * @returns {string} - The emoji icon for the file
 */
export const getFileIcon = (fileName) => {
  const iconMap = {
    welcome: "👋",
    bio: "👤", 
    experience: "💼",
    education: "🎓",
    skills: "⚡",
    contact: "📧",
    interests: "💡",
    README: "📖",
    features: "✨",
    optimization: "🚀",
    tech_stack: "🔧"
  };

  for (const [key, icon] of Object.entries(iconMap)) {
    if (fileName.toLowerCase().includes(key.toLowerCase())) {
      return icon;
    }
  }
  return "📄"; // default icon
};

/**
 * Format folder names by replacing underscores with hyphens
 * @param {string} folderName - The folder name to format
 * @returns {string} - The formatted folder name
 */
export const formatFolderName = (folderName) => {
  return folderName.replace(/_/g, "-");
};

/**
 * Check if a file belongs to a specific category
 * @param {string} fileName - The file name to check
 * @param {string} category - The category to check against
 * @returns {boolean} - Whether the file belongs to the category
 */
export const isFileInCategory = (fileName, category) => {
  const categories = {
    personal: ["bio.txt", "interests.md"],
    professional: ["experience.md", "education.md", "skills.json"],
    projects: ["README.md", "tech_stack.json", "features.md", "optimization.md"],
    welcome: ["welcome.md"]
  };

  return categories[category]?.includes(fileName) || false;
};

/**
 * Generate syntax-highlighted line with line number
 * @param {number} lineNumber - The line number
 * @param {string} content - The content for the line
 * @param {string} type - The type of content (comment, keyword, string, etc.)
 * @returns {JSX.Element} - The formatted line element
 */
export const createCodeLine = (lineNumber, content, type = "normal") => {
  const getContentStyle = (type) => {
    switch (type) {
      case "comment":
        return "text-gray-500";
      case "keyword":
        return "text-blue-400";
      case "string":
        return "text-green-400";
      case "property":
        return "text-red-400";
      case "value":
        return "text-yellow-400";
      case "header":
        return "text-purple-400";
      default:
        return "text-gray-300";
    }
  };

  return (
    <div className="flex" key={lineNumber}>
      <span className="text-gray-500 mr-4 w-8 text-right">{lineNumber}</span>
      <span className={getContentStyle(type)}>{content}</span>
    </div>
  );
};

/**
 * Calculate reading time for content
 * @param {string} content - The content to calculate reading time for
 * @returns {number} - Estimated reading time in minutes
 */
export const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

/**
 * Debounce function for performance optimization
 * @param {Function} func - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} - The debounced function
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

/**
 * Deep clone an object
 * @param {Object} obj - The object to clone
 * @returns {Object} - The cloned object
 */
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};