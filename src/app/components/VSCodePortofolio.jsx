"use client";

import React, { useState, useEffect } from "react";
import { 
  Github,
  Folder,
  FolderOpen,
  X,
  ChevronRight,
  ChevronDown,
  Settings,
  Search,
  GitBranch,
  Bug,
  FileText
} from "lucide-react";
import ContentRenderer from "./ContentRenderer";
import MobileNavigation from "./MobileNavigation";
import ResponsiveLayout from "./ResponsiveLayout";

const VSCodePortfolio = () => {
  const [activeTab, setActiveTab] = useState("welcome.md");
  const [openTabs, setOpenTabs] = useState(["welcome.md"]);
  const [expandedFolders, setExpandedFolders] = useState([
    "personal_info",
    "professional_info",
    "projects"
  ]);
  const [activeProjectPath, setActiveProjectPath] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // File system structure
  const fileSystem = {
    "personal_info": {
      type: "folder",
      children: {
        "bio.txt": { type: "file", icon: "👤" },
        "interests.md": { type: "file", icon: "💡" },
        "contact.json": { type: "file", icon: "📧" }
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

  const toggleFolder = (folderPath) => {
    setExpandedFolders(prev => 
      prev.includes(folderPath) 
        ? prev.filter(f => f !== folderPath)
        : [...prev, folderPath]
    );
  };

  const openFile = (fileName, projectPath = "") => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
    setActiveTab(fileName);
    setActiveProjectPath(projectPath);
  };

  const closeTab = (fileName, e) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(tab => tab !== fileName);
    setOpenTabs(newTabs);
    
    if (activeTab === fileName) {
      const newActiveTab = newTabs[newTabs.length - 1] || "welcome.md";
      setActiveTab(newActiveTab);
      // Reset project path if switching to a non-project file
      if (newActiveTab === "welcome.md" || 
          ["bio.txt", "interests.md", "contact.json", "experience.md", "education.md", "skills.json"].includes(newActiveTab)) {
        setActiveProjectPath("");
      }
    }
  };

  const renderFileExplorer = () => {
    const renderFolder = (name, content, path = "", level = 0) => {
      const fullPath = path ? `${path}/${name}` : name;
      const isExpanded = expandedFolders.includes(fullPath);
      
      return (
        <div key={fullPath}>
          <div 
            className={`flex items-center py-2 px-2 hover:bg-gray-700 cursor-pointer transition-colors duration-200 ${
              isMobile ? 'py-3' : 'py-1'
            }`}
            style={{ paddingLeft: `${12 + level * 16}px` }}
            onClick={() => {
              if (content.type === "folder") {
                toggleFolder(fullPath);
              } else {
                openFile(name, fullPath.replace(`/${name}`, ''));
              }
            }}
          >
            {content.type === "folder" ? (
              <>
                {isExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                {isExpanded ? <FolderOpen size={16} className="mx-1 text-blue-400" /> : <Folder size={16} className="mx-1 text-blue-400" />}
                <span className="text-gray-300 text-sm">{name.replace(/_/g, "-")}</span>
              </>
            ) : (
              <>
                <span className="w-3"></span>
                <span className="text-sm mx-1">{content.icon}</span>
                <span className="text-gray-300 text-sm">{name}</span>
              </>
            )}
          </div>
          
          {content.type === "folder" && isExpanded && content.children && (
            <div>
              {Object.entries(content.children).map(([childName, childContent]) =>
                renderFolder(childName, childContent, fullPath, level + 1)
              )}
            </div>
          )}
        </div>
      );
    };

    return (
      <div className={`${isMobile ? 'hidden' : 'w-64'} bg-gray-900 border-r border-gray-700 h-full`}>
        {/* Explorer Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-700">
          <span className="text-gray-400 text-sm font-medium">EXPLORER</span>
          <div className="flex space-x-1">
            <button className="p-1 hover:bg-gray-700 rounded">
              <Settings size={14} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Portfolio Folder */}
        <div className="p-2">
          <div className="flex items-center mb-2">
            <ChevronDown size={12} className="text-gray-400" />
            <span className="text-gray-300 text-sm font-medium ml-1">PORTFOLIO</span>
          </div>
          
          {/* Welcome file */}
          <div 
            className="flex items-center py-1 px-2 hover:bg-gray-700 cursor-pointer ml-4 transition-colors duration-200"
            onClick={() => openFile("welcome.md")}
          >
            <span className="text-sm mr-2">👋</span>
            <span className="text-gray-300 text-sm">welcome.md</span>
          </div>

          {/* File system */}
          {Object.entries(fileSystem).map(([name, content]) =>
            renderFolder(name, content)
          )}
        </div>
      </div>
    );
  };

  const renderTabBar = () => (
    <div className={`${isMobile ? 'hidden' : 'flex'} bg-gray-800 border-b border-gray-700 overflow-x-auto`}>
      {openTabs.map((tab) => (
        <div
          key={tab}
          className={`flex items-center px-4 py-2 border-r border-gray-700 cursor-pointer group whitespace-nowrap transition-colors duration-200 ${
            activeTab === tab ? "bg-gray-900 text-white" : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-750"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          <span className="text-sm mr-2">
            {tab.includes("welcome") ? "👋" : 
             tab.includes("bio") ? "👤" :
             tab.includes("experience") ? "💼" :
             tab.includes("education") ? "🎓" :
             tab.includes("skills") ? "⚡" :
             tab.includes("contact") ? "📧" :
             tab.includes("interests") ? "💡" :
             tab.includes("README") ? "📖" :
             tab.includes("features") ? "✨" :
             tab.includes("optimization") ? "🚀" :
             tab.includes("tech_stack") ? "🔧" : "📄"}
          </span>
          <span className="text-sm mr-2">{tab}</span>
          {openTabs.length > 1 && (
            <X 
              size={14} 
              className="opacity-0 group-hover:opacity-100 hover:bg-gray-600 rounded p-0.5 transition-opacity duration-200" 
              onClick={(e) => closeTab(tab, e)}
            />
          )}
        </div>
      ))}
    </div>
  );

  const renderContent = () => (
    <div className={`flex-1 bg-gray-900 overflow-auto ${isMobile ? 'px-4 py-4' : ''}`}>
      <div className={`${isMobile ? 'text-sm' : 'p-6 font-mono text-sm'}`}>
        <ContentRenderer 
          activeTab={activeTab} 
          activeProjectPath={activeProjectPath}
        />
      </div>
    </div>
  );

  // Mobile Layout
  if (isMobile) {
    return (
      <div className="flex flex-col h-screen bg-gray-900 text-gray-300">
        {/* Mobile Navigation */}
        <MobileNavigation 
          fileSystem={fileSystem}
          expandedFolders={expandedFolders}
          toggleFolder={toggleFolder}
          openFile={openFile}
          activeTab={activeTab}
        />

        {/* Mobile Header */}
        <div className="bg-gray-800 border-b border-gray-700 px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-lg font-semibold">Portfolio</h1>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">{openTabs.length} files</span>
            </div>
          </div>
        </div>

        {/* Mobile Tab Indicator */}
        {openTabs.length > 1 && (
          <div className="bg-gray-800 border-b border-gray-700 px-4 py-2">
            <div className="flex overflow-x-auto space-x-2 pb-2">
              {openTabs.map((tab) => (
                <button
                  key={tab}
                  className={`flex items-center px-3 py-1 rounded-full text-xs whitespace-nowrap transition-colors duration-200 ${
                    activeTab === tab 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  <span className="mr-1">{
                    tab.includes("welcome") ? "👋" : 
                    tab.includes("bio") ? "👤" :
                    tab.includes("experience") ? "💼" :
                    tab.includes("education") ? "🎓" :
                    tab.includes("skills") ? "⚡" :
                    tab.includes("contact") ? "📧" :
                    tab.includes("interests") ? "💡" :
                    tab.includes("README") ? "📖" :
                    tab.includes("features") ? "✨" :
                    tab.includes("optimization") ? "🚀" :
                    tab.includes("tech_stack") ? "🔧" : "📄"
                  }</span>
                  <span>{tab}</span>
                  {openTabs.length > 1 && (
                    <X 
                      size={12} 
                      className="ml-1 hover:bg-gray-500 rounded" 
                      onClick={(e) => closeTab(tab, e)}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Content */}
        {renderContent()}

        {/* Mobile Status Bar */}
        <div className="bg-blue-600 text-white px-4 py-2 text-xs">
          <div className="flex items-center justify-between">
            <span>📱 {activeTab}</span>
            <div className="flex items-center space-x-2">
              <Github size={12} />
              <span>@mnafian</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-300 font-mono">
      {/* VS Code Title Bar */}
      <div className="flex items-center justify-between bg-gray-800 border-b border-gray-700 px-4 py-2">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-sm">M Nafian Wildana - Portfolio - Visual Studio Code</span>
        </div>
        <div className="flex items-center space-x-2">
          <Search size={16} className="text-gray-400" />
          <Settings size={16} className="text-gray-400" />
        </div>
      </div>

      {/* Activity Bar & Main Content */}
      <div className="flex flex-1">
        {/* Activity Bar */}
        <div className="w-12 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-4 space-y-4">
          <div className="p-2 bg-blue-600 rounded">
            <FileText size={20} className="text-white" />
          </div>
          <div className="p-2 hover:bg-gray-700 rounded transition-colors duration-200">
            <Search size={20} className="text-gray-400" />
          </div>
          <div className="p-2 hover:bg-gray-700 rounded transition-colors duration-200">
            <GitBranch size={20} className="text-gray-400" />
          </div>
          <div className="p-2 hover:bg-gray-700 rounded transition-colors duration-200">
            <Bug size={20} className="text-gray-400" />
          </div>
        </div>

        {/* File Explorer */}
        {renderFileExplorer()}

        {/* Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          {renderTabBar()}
          
          {/* Editor Content */}
          {renderContent()}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-blue-600 text-white px-4 py-1 text-xs flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span>✓ Portfolio</span>
          <span>UTF-8</span>
          <span>Ln 1, Col 1</span>
          <span>{activeTab}</span>
        </div>
        <div className="flex items-center space-x-4">
          <Github size={14} />
          <span>@mnafian</span>
        </div>
      </div>
    </div>
  );
};

export default VSCodePortfolio;