"use client";

import React, { useState } from "react";
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
import { FILE_SYSTEM, FILE_ICONS, DEFAULT_EXPANDED_FOLDERS } from "./constants/fileSystem";

const VSCodePortfolio = () => {
  const [activeTab, setActiveTab] = useState("welcome.md");
  const [openTabs, setOpenTabs] = useState(["welcome.md"]);
  const [expandedFolders, setExpandedFolders] = useState(DEFAULT_EXPANDED_FOLDERS);
  const [activeProjectPath, setActiveProjectPath] = useState("");

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
          ["bio.txt", "interests.md", "experience.md", "education.md", "skills.json"].includes(newActiveTab)) {
        setActiveProjectPath("");
      }
    }
  };

  const getFileIcon = (fileName) => {
    for (const [key, icon] of Object.entries(FILE_ICONS)) {
      if (fileName.includes(key)) {
        return icon;
      }
    }
    return FILE_ICONS.default;
  };

  const renderFileExplorer = () => {
    const renderFolder = (name, content, path = "", level = 0) => {
      const fullPath = path ? `${path}/${name}` : name;
      const isExpanded = expandedFolders.includes(fullPath);
      
      return (
        <div key={fullPath}>
          <div 
            className={`flex items-center py-1 px-2 hover:bg-gray-700 cursor-pointer transition-colors duration-200 ${
              activeTab === name && content.type === "file" ? "bg-gray-700" : ""
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
                <div className="w-3 flex justify-center">
                  {isExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                </div>
                {isExpanded ? 
                  <FolderOpen size={16} className="mx-1 text-blue-400" /> : 
                  <Folder size={16} className="mx-1 text-blue-400" />
                }
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
      <div className="w-64 bg-gray-900 border-r border-gray-700 h-full">
        {/* Explorer Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-700">
          <span className="text-gray-400 text-sm font-medium">EXPLORER</span>
          <div className="flex space-x-1">
            <button className="p-1 hover:bg-gray-700 rounded transition-colors duration-200">
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
            className={`flex items-center py-1 px-2 hover:bg-gray-700 cursor-pointer ml-4 transition-colors duration-200 ${
              activeTab === "welcome.md" ? "bg-gray-700" : ""
            }`}
            onClick={() => openFile("welcome.md")}
          >
            <span className="text-sm mr-2">👋</span>
            <span className="text-gray-300 text-sm">welcome.md</span>
          </div>

          {/* File system */}
          {Object.entries(FILE_SYSTEM).map(([name, content]) =>
            renderFolder(name, content)
          )}
        </div>
      </div>
    );
  };

  const renderTabBar = () => (
    <div className="flex bg-gray-800 border-b border-gray-700 overflow-x-auto">
      {openTabs.map((tab) => (
        <div
          key={tab}
          className={`flex items-center px-4 py-2 border-r border-gray-700 cursor-pointer group whitespace-nowrap transition-colors duration-200 ${
            activeTab === tab ? "bg-gray-900 text-white" : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-750"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          <span className="text-sm mr-2">
            {getFileIcon(tab)}
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

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-300 font-mono">
      {/* VS Code Title Bar */}
      <div className="flex items-center justify-between bg-gray-800 border-b border-gray-700 px-4 py-2">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 cursor-pointer transition-colors duration-200"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 cursor-pointer transition-colors duration-200"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 cursor-pointer transition-colors duration-200"></div>
          </div>
          <span className="text-gray-400 text-sm">M Nafian Wildana - Portfolio - Visual Studio Code</span>
        </div>
        <div className="flex items-center space-x-2">
          <Search size={16} className="text-gray-400 hover:text-gray-300 cursor-pointer transition-colors duration-200" />
          <Settings size={16} className="text-gray-400 hover:text-gray-300 cursor-pointer transition-colors duration-200" />
        </div>
      </div>

      {/* Activity Bar & Main Content */}
      <div className="flex flex-1">
        {/* Activity Bar */}
        <div className="w-12 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-4 space-y-4">
          <div className="p-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-200">
            <FileText size={20} className="text-white" />
          </div>
          <div className="p-2 hover:bg-gray-700 rounded cursor-pointer transition-colors duration-200">
            <Search size={20} className="text-gray-400" />
          </div>
          <div className="p-2 hover:bg-gray-700 rounded cursor-pointer transition-colors duration-200">
            <GitBranch size={20} className="text-gray-400" />
          </div>
          <div className="p-2 hover:bg-gray-700 rounded cursor-pointer transition-colors duration-200">
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
          <ContentRenderer 
            activeTab={activeTab} 
            activeProjectPath={activeProjectPath}
          />
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-blue-600 text-white px-4 py-1 text-xs flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span>✓ Portfolio</span>
          <span>UTF-8</span>
          <span>Ln 1, Col 1</span>
          <span className="bg-blue-700 px-2 py-0.5 rounded">{activeTab}</span>
          {activeProjectPath && (
            <span className="text-blue-200">({activeProjectPath})</span>
          )}
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