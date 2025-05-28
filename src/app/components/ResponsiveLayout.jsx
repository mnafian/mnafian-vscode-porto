import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ResponsiveLayout = ({ 
  children, 
  openTabs, 
  activeTab, 
  setActiveTab, 
  closeTab,
  renderFileExplorer,
  renderContent
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showTabs, setShowTabs] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getFileIcon = (fileName) => {
    if (fileName.includes("welcome")) return "👋";
    if (fileName.includes("bio")) return "👤";
    if (fileName.includes("experience")) return "💼";
    if (fileName.includes("education")) return "🎓";
    if (fileName.includes("skills")) return "⚡";
    if (fileName.includes("contact")) return "📧";
    if (fileName.includes("interests")) return "💡";
    if (fileName.includes("README")) return "📖";
    if (fileName.includes("features")) return "✨";
    if (fileName.includes("optimization")) return "🚀";
    if (fileName.includes("tech_stack")) return "🔧";
    return "📄";
  };

  if (isMobile) {
    return (
      <div className="flex flex-col h-screen bg-gray-900">
        {/* Mobile Header */}
        <div className="bg-gray-800 border-b border-gray-700 p-3">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-lg font-semibold truncate">Portfolio</h1>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">{openTabs.length} files</span>
            </div>
          </div>
        </div>

        {/* Mobile Tab Bar */}
        {openTabs.length > 0 && (
          <div className="bg-gray-800 border-b border-gray-700">
            <div className="flex items-center justify-between p-2">
              <button 
                onClick={() => setShowTabs(!showTabs)}
                className="p-2 text-gray-400 hover:text-white"
              >
                {showTabs ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </button>
              <span className="text-gray-400 text-sm">
                {showTabs ? 'Hide Tabs' : 'Show Tabs'}
              </span>
            </div>
            
            {showTabs && (
              <div className="flex overflow-x-auto pb-2 px-2 space-x-2">
                {openTabs.map((tab) => (
                  <div
                    key={tab}
                    className={`flex items-center px-3 py-2 rounded-lg cursor-pointer whitespace-nowrap min-w-max ${
                      activeTab === tab 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <span className="text-sm mr-2">{getFileIcon(tab)}</span>
                    <span className="text-sm font-medium">{tab}</span>
                    {openTabs.length > 1 && (
                      <button
                        className="ml-2 p-1 rounded hover:bg-gray-600"
                        onClick={(e) => closeTab(tab, e)}
                      >
                        <X size={12} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Mobile Content */}
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>

        {/* Mobile Status Bar */}
        <div className="bg-blue-600 text-white px-4 py-2 text-sm">
          <div className="flex items-center justify-between">
            <span>{activeTab}</span>
            <span>📱 Mobile View</span>
          </div>
        </div>
      </div>
    );
  }

  // Desktop Layout (original)
  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {children}
    </div>
  );
};

export default ResponsiveLayout;