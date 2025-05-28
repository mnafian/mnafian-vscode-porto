import React from 'react';
import { Welcome, PersonalInfo, ProfessionalInfo, Projects } from './sections';
import { FILE_CATEGORIES } from './constants/fileSystem';

const ContentRenderer = ({ activeTab, activeProjectPath }) => {
  const renderContent = () => {
    // Welcome page
    if (FILE_CATEGORIES.WELCOME.includes(activeTab)) {
      return <Welcome />;
    }

    // Personal Info files
    if (FILE_CATEGORIES.PERSONAL.includes(activeTab)) {
      return <PersonalInfo fileName={activeTab} />;
    }

    // Professional Info files
    if (FILE_CATEGORIES.PROFESSIONAL.includes(activeTab)) {
      return <ProfessionalInfo fileName={activeTab} />;
    }

    // Project files
    if (FILE_CATEGORIES.PROJECTS.includes(activeTab)) {
      return <Projects fileName={activeTab} projectPath={activeProjectPath} />;
    }

    // Default fallback
    return (
      <div>
        <div className="flex">
          <span className="text-gray-500 mr-4">1</span>
          <span className="text-gray-300">File: {activeTab}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 mr-4">2</span>
          <span className="text-gray-300">Content not yet implemented for this file type.</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 mr-4">3</span>
          <span className="text-gray-300"></span>
        </div>
        <div className="flex">
          <span className="text-gray-500 mr-4">4</span>
          <span className="text-gray-500">// TODO: Add content for {activeTab}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 mr-4">5</span>
          <span className="text-gray-500">// Project Path: {activeProjectPath}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 bg-gray-900 overflow-auto">
      <div className="p-6 font-mono text-sm">
        {renderContent()}
      </div>
    </div>
  );
};

export default ContentRenderer;