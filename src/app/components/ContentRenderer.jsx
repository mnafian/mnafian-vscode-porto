import React, { useState, useEffect } from 'react';
import Welcome from './sections/Welcome';
import PersonalInfo from './sections/PersonalInfo';
import ProfessionalInfo from './sections/ProfessionalInfo';
import Projects from './sections/Projects';

const ContentRenderer = ({ activeTab, activeProjectPath }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderContent = () => {
    // Welcome page
    if (activeTab === "welcome.md") {
      return <Welcome isMobile={isMobile} />;
    }

    // Personal Info files
    if (["bio.txt", "interests.md", "contact.json"].includes(activeTab)) {
      return <PersonalInfo fileName={activeTab} isMobile={isMobile} />;
    }

    // Professional Info files
    if (["experience.md", "education.md", "skills.json"].includes(activeTab)) {
      return <ProfessionalInfo fileName={activeTab} isMobile={isMobile} />;
    }

    // Project files
    if (activeTab === "README.md" || activeTab === "tech_stack.json" || 
        activeTab === "features.md" || activeTab === "optimization.md") {
      return <Projects fileName={activeTab} projectPath={activeProjectPath} isMobile={isMobile} />;
    }

    // Default fallback
    return (
      <div className={`${isMobile ? 'space-y-3' : 'space-y-2'}`}>
        <div className="flex">
          <span className={`text-gray-500 ${isMobile ? 'w-8 text-xs' : 'mr-4'}`}>1</span>
          <span className={`text-gray-300 ${isMobile ? 'text-sm ml-2' : ''}`}>File: {activeTab}</span>
        </div>
        <div className="flex">
          <span className={`text-gray-500 ${isMobile ? 'w-8 text-xs' : 'mr-4'}`}>2</span>
          <span className={`text-gray-300 ${isMobile ? 'text-sm ml-2' : ''}`}>Content not yet implemented for this file type.</span>
        </div>
        <div className="flex">
          <span className={`text-gray-500 ${isMobile ? 'w-8 text-xs' : 'mr-4'}`}>3</span>
          <span className={`text-gray-300 ${isMobile ? 'text-sm ml-2' : ''}`}></span>
        </div>
        <div className="flex">
          <span className={`text-gray-500 ${isMobile ? 'w-8 text-xs' : 'mr-4'}`}>4</span>
          <span className={`text-gray-500 ${isMobile ? 'text-sm ml-2' : ''}`}>// TODO: Add content for {activeTab}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={`${
      isMobile 
        ? 'p-4 bg-gray-900 min-h-full text-sm' 
        : 'flex-1 bg-gray-900 overflow-auto p-6 font-mono text-sm'
    } custom-scrollbar`}>
      {/* Mobile Header */}
      {isMobile && (
        <div className="mb-4 pb-3 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <span className="text-lg">
              {activeTab.includes("welcome") ? "👋" : 
               activeTab.includes("bio") ? "👤" :
               activeTab.includes("experience") ? "💼" :
               activeTab.includes("education") ? "🎓" :
               activeTab.includes("skills") ? "⚡" :
               activeTab.includes("contact") ? "📧" :
               activeTab.includes("interests") ? "💡" :
               activeTab.includes("README") ? "📖" :
               activeTab.includes("features") ? "✨" :
               activeTab.includes("optimization") ? "🚀" :
               activeTab.includes("tech_stack") ? "🔧" : "📄"}
            </span>
            <h2 className="text-white font-semibold">{activeTab}</h2>
          </div>
          {activeProjectPath && (
            <p className="text-gray-400 text-xs mt-1">
              📁 {activeProjectPath.replace('projects/', '').replace(/_/g, ' ').toUpperCase()}
            </p>
          )}
        </div>
      )}

      {/* Content */}
      <div className={isMobile ? 'font-mono' : ''}>
        {renderContent()}
      </div>

      {/* Mobile Footer */}
      {isMobile && (
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-xs">
            💻 Swipe to navigate • Tap menu for files
          </p>
        </div>
      )}
    </div>
  );
};

export default ContentRenderer;