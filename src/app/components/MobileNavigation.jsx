import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  User, 
  Briefcase, 
  Code, 
  Mail,
  ChevronRight,
  Folder,
  FolderOpen
} from 'lucide-react';

const MobileNavigation = ({ 
  fileSystem, 
  expandedFolders, 
  toggleFolder, 
  openFile, 
  activeTab 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'welcome.md', label: 'Welcome', icon: <FileText size={20} />, emoji: '👋' },
    { 
      id: 'personal', 
      label: 'Personal Info', 
      icon: <User size={20} />, 
      emoji: '👤',
      children: [
        { id: 'bio.txt', label: 'Bio', emoji: '👤' },
        { id: 'interests.md', label: 'Interests', emoji: '💡' },
        { id: 'contact.json', label: 'Contact', emoji: '📧' }
      ]
    },
    { 
      id: 'professional', 
      label: 'Professional', 
      icon: <Briefcase size={20} />, 
      emoji: '💼',
      children: [
        { id: 'experience.md', label: 'Experience', emoji: '💼' },
        { id: 'education.md', label: 'Education', emoji: '🎓' },
        { id: 'skills.json', label: 'Skills', emoji: '⚡' }
      ]
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      icon: <Code size={20} />, 
      emoji: '🚀',
      children: [
        { id: 'kindercastle', label: 'KinderCastle App', emoji: '🏰' },
        { id: 'bukabangunan', label: 'BukaBangunan App', emoji: '🏗️' },
        { id: 'bukalapak', label: 'Bukalapak Mitra', emoji: '🛒' }
      ]
    }
  ];

  const handleItemClick = (item) => {
    if (item.children) {
      // Toggle section
      const sectionKey = item.id === 'personal' ? 'personal_info' : 
                        item.id === 'professional' ? 'professional_info' : 'projects';
      toggleFolder(sectionKey);
    } else {
      // Open file
      openFile(item.id);
      setIsMenuOpen(false);
    }
  };

  const handleProjectClick = (projectId) => {
    const projectMap = {
      'kindercastle': 'projects/kindercastle_app',
      'bukabangunan': 'projects/bukabangunan_app', 
      'bukalapak': 'projects/bukalapak_mitra'
    };
    openFile('README.md', projectMap[projectId]);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg shadow-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`md:hidden fixed left-0 top-0 h-full w-80 bg-gray-900 border-r border-gray-700 z-40 transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-white font-semibold">Portfolio Navigation</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="p-4 space-y-2 max-h-full overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.id}>
              {/* Main Item */}
              <button
                className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
                onClick={() => handleItemClick(item)}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{item.emoji}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.children && (
                  <ChevronRight 
                    size={16} 
                    className={`transform transition-transform ${
                      expandedFolders.includes(item.id === 'personal' ? 'personal_info' : 
                                                item.id === 'professional' ? 'professional_info' : 'projects') 
                        ? 'rotate-90' : ''
                    }`} 
                  />
                )}
              </button>

              {/* Children Items */}
              {item.children && expandedFolders.includes(
                item.id === 'personal' ? 'personal_info' : 
                item.id === 'professional' ? 'professional_info' : 'projects'
              ) && (
                <div className="ml-6 mt-2 space-y-1">
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      className={`w-full flex items-center space-x-3 p-2 rounded text-left transition-colors ${
                        activeTab === child.id 
                          ? 'bg-gray-700 text-white' 
                          : 'text-gray-400 hover:bg-gray-800 hover:text-gray-300'
                      }`}
                      onClick={() => {
                        if (item.id === 'projects') {
                          handleProjectClick(child.id);
                        } else {
                          openFile(child.id);
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      <span className="text-sm">{child.emoji}</span>
                      <span className="text-sm">{child.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 bg-gray-900">
          <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
            <span>💻</span>
            <span>M Nafian Wildana</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;