import React from 'react';

const Projects = ({ fileName, projectPath }) => {
  const getProjectContent = (fileName, projectPath) => {
    // Handle project-specific files
    if (projectPath === "projects/kindercastle_app") {
      switch (fileName) {
        case "README.md":
          return (
            <div>
              <div className="mb-4">
                <div className="flex">
                  <span className="text-gray-500 mr-4">1</span>
                  <span className="text-purple-400"># 🏰 KinderCastle App</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">2</span>
                  <span className="text-gray-400">Educational Child Care Platform</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-gray-500 mr-4">4</span>
                  <span className="text-blue-400">## 📖 Overview</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">5</span>
                  <span className="text-gray-300">Revolutionary educational child care platform that combines</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">6</span>
                  <span className="text-gray-300">cutting-edge technology with personalized learning experiences.</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">7</span>
                  <span className="text-gray-300">Built as a full-stack solution for modern childcare needs.</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">8</span>
                  <span className="text-gray-300"></span>
                </div>
                
                <div className="flex">
                  <span className="text-gray-500 mr-4">9</span>
                  <span className="text-blue-400">## ✨ Key Features</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">10</span>
                  <span className="text-gray-300">- 🎯 **Personalized Learning Dashboard** - Adaptive learning paths</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">11</span>
                  <span className="text-gray-300">- 📅 **Smart Activity Scheduler** - AI-powered activity planning</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">12</span>
                  <span className="text-gray-300">- 💬 **Real-time Communication** - Secure parent-caregiver messaging</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">13</span>
                  <span className="text-gray-300">- 📊 **Progress Analytics** - Comprehensive development tracking</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">14</span>
                  <span className="text-gray-300">- 📱 **Cross-platform Mobile App** - iOS and Android support</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">15</span>
                  <span className="text-gray-300">- 🔒 **Advanced Security** - GDPR compliant data protection</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">16</span>
                  <span className="text-gray-300"></span>
                </div>

                <div className="flex">
                  <span className="text-gray-500 mr-4">17</span>
                  <span className="text-blue-400">## 🎯 My Contributions</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">18</span>
                  <span className="text-gray-300">- Led full-stack development from conception to deployment</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">19</span>
                  <span className="text-gray-300">- Architected scalable backend services using Node.js with Express</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">20</span>
                  <span className="text-gray-300">- Developed responsive frontend with React and Next.js</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">21</span>
                  <span className="text-gray-300">- Created cross-platform mobile app using Flutter</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">22</span>
                  <span className="text-gray-300">- Implemented CI/CD pipeline for automated deployments</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">23</span>
                  <span className="text-gray-300">- Collaborated with UX/UI team for optimal user experience</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">24</span>
                  <span className="text-gray-300"></span>
                </div>

                <div className="flex">
                  <span className="text-gray-500 mr-4">25</span>
                  <span className="text-blue-400">## 🏆 Impact & Results</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">26</span>
                  <span className="text-gray-300">- Achieved 95% user satisfaction rating</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">27</span>
                  <span className="text-gray-300">- Reduced administrative overhead by 60%</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">28</span>
                  <span className="text-gray-300">- Improved parent engagement by 80%</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">29</span>
                  <span className="text-gray-300">- Platform successfully serves 1000+ families</span>
                </div>
              </div>
            </div>
          );

        case "tech_stack.json":
          return (
            <div>
              <div className="flex">
                <span className="text-gray-500 mr-4">1</span>
                <span className="text-white">{"{"}</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">2</span>
                <div className="ml-4">
                  <span className="text-red-400">"project_name"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"KinderCastle App"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">3</span>
                <div className="ml-4">
                  <span className="text-red-400">"frontend"</span>
                  <span className="text-white">: {"{"}</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">4</span>
                <div className="ml-8">
                  <span className="text-red-400">"framework"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"Next.js 14"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">5</span>
                <div className="ml-8">
                  <span className="text-red-400">"library"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"React 18"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">6</span>
                <div className="ml-8">
                  <span className="text-red-400">"styling"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"Tailwind CSS"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">7</span>
                <div className="ml-8">
                  <span className="text-red-400">"state_management"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"Zustand"</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">8</span>
                <div className="ml-4">
                  <span className="text-white">{"}"}</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">9</span>
                <div className="ml-4">
                  <span className="text-red-400">"backend"</span>
                  <span className="text-white">: {"{"}</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">10</span>
                <div className="ml-8">
                  <span className="text-red-400">"primary_language"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"Go (Golang)"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">11</span>
                <div className="ml-8">
                  <span className="text-red-400">"secondary_service"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"Node.js/Express"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">12</span>
                <div className="ml-8">
                  <span className="text-red-400">"database"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"PostgreSQL + Redis"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">13</span>
                <div className="ml-8">
                  <span className="text-red-400">"api_style"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"RESTful + GraphQL"</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">14</span>
                <div className="ml-4">
                  <span className="text-white">{"}"}</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">15</span>
                <div className="ml-4">
                  <span className="text-red-400">"mobile"</span>
                  <span className="text-white">: {"{"}</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">16</span>
                <div className="ml-8">
                  <span className="text-red-400">"framework"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"Flutter 3.x"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">17</span>
                <div className="ml-8">
                  <span className="text-red-400">"language"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"Dart"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">18</span>
                <div className="ml-8">
                  <span className="text-red-400">"platforms"</span>
                  <span className="text-white">: [</span>
                  <span className="text-green-400">"iOS"</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">"Android"</span>
                  <span className="text-white">]</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">19</span>
                <div className="ml-4">
                  <span className="text-white">{"}"}</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">20</span>
                <div className="ml-4">
                  <span className="text-red-400">"infrastructure"</span>
                  <span className="text-white">: {"{"}</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">21</span>
                <div className="ml-8">
                  <span className="text-red-400">"cloud_provider"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"AWS"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">22</span>
                <div className="ml-8">
                  <span className="text-red-400">"containerization"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"Docker + Kubernetes"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">23</span>
                <div className="ml-8">
                  <span className="text-red-400">"ci_cd"</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"GitHub Actions"</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">24</span>
                <div className="ml-4">
                  <span className="text-white">{"}"}</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">25</span>
                <span className="text-white">{"}"}</span>
              </div>
            </div>
          );
      }
    }

    if (projectPath === "projects/bukabangunan_app") {
      switch (fileName) {
        case "README.md":
          return (
            <div>
              <div className="mb-4">
                <div className="flex">
                  <span className="text-gray-500 mr-4">1</span>
                  <span className="text-purple-400"># 🏗️ BukaBangunan App</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">2</span>
                  <span className="text-gray-400">Construction Materials E-commerce Platform</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-gray-500 mr-4">4</span>
                  <span className="text-blue-400">## 📖 Project Overview</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">5</span>
                  <span className="text-gray-300">BukaBangunan is a specialized mobile application serving materials</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">6</span>
                  <span className="text-gray-300">buyers in the construction industry. Part of Bukalapak ecosystem,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">7</span>
                  <span className="text-gray-300">this app revolutionizes how construction professionals source materials.</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">8</span>
                  <span className="text-gray-300"></span>
                </div>

                <div className="flex">
                  <span className="text-gray-500 mr-4">9</span>
                  <span className="text-blue-400">## 🎯 Key Achievements</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">10</span>
                  <span className="text-gray-300">- 📈 **Test Coverage**: Increased from 40% to 100% (60% improvement)</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">11</span>
                  <span className="text-gray-300">- 🚀 **Performance**: Reduced app loading time by 45%</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">12</span>
                  <span className="text-gray-300">- 🐛 **Quality**: Reduced production bugs by 70%</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">13</span>
                  <span className="text-gray-300">- 👥 **User Experience**: 4.8/5 star rating on app stores</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">14</span>
                  <span className="text-gray-300"></span>
                </div>

                <div className="flex">
                  <span className="text-gray-500 mr-4">15</span>
                  <span className="text-blue-400">## 🛠️ Technical Contributions</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">16</span>
                  <span className="text-gray-300">- Architected robust Flutter codebase with clean architecture</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">17</span>
                  <span className="text-gray-300">- Implemented comprehensive testing strategy (Unit, Widget, Integration)</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">18</span>
                  <span className="text-gray-300">- Utilized Kotlin for native Android performance optimizations</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">19</span>
                  <span className="text-gray-300">- Integrated advanced search and filtering capabilities</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">20</span>
                  <span className="text-gray-300">- Developed real-time inventory tracking system</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">21</span>
                  <span className="text-gray-300">- Implemented secure payment gateway integration</span>
                </div>
              </div>
            </div>
          );

        case "features.md":
          return (
            <div>
              <div className="mb-4">
                <div className="flex">
                  <span className="text-gray-500 mr-4">1</span>
                  <span className="text-purple-400"># 🚀 BukaBangunan Features</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-gray-500 mr-4">3</span>
                  <span className="text-blue-400">## 🔍 Smart Product Discovery</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">4</span>
                  <span className="text-gray-300">- Advanced search with filters (price, location, supplier)</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">5</span>
                  <span className="text-gray-300">- Category-based browsing for construction materials</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">6</span>
                  <span className="text-gray-300">- QR code scanner for instant product lookup</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">7</span>
                  <span className="text-gray-300"></span>
                </div>

                <div className="flex">
                  <span className="text-gray-500 mr-4">8</span>
                  <span className="text-blue-400">## 📱 User Experience</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">9</span>
                  <span className="text-gray-300">- Intuitive material calculation tools</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">10</span>
                  <span className="text-gray-300">- Bulk order management system</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">11</span>
                  <span className="text-gray-300">- Real-time price comparison</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">12</span>
                  <span className="text-gray-300">- Delivery scheduling and tracking</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">13</span>
                  <span className="text-gray-300"></span>
                </div>

                <div className="flex">
                  <span className="text-gray-500 mr-4">14</span>
                  <span className="text-blue-400">## 💼 Business Features</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">15</span>
                  <span className="text-gray-300">- Supplier management and ratings</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">16</span>
                  <span className="text-gray-300">- Credit and payment term negotiations</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">17</span>
                  <span className="text-gray-300">- Project-based ordering and budgeting</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">18</span>
                  <span className="text-gray-300">- Inventory management for contractors</span>
                </div>
              </div>
            </div>
          );
      }
    }

    if (projectPath === "projects/bukalapak_mitra") {
      switch (fileName) {
        case "README.md":
          return (
            <div>
              <div className="mb-4">
                <div className="flex">
                  <span className="text-gray-500 mr-4">1</span>
                  <span className="text-purple-400"># 🛒 Bukalapak Mitra App</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">2</span>
                  <span className="text-gray-400">Grocery & Retail Partner Application</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-gray-500 mr-4">4</span>
                  <span className="text-blue-400">## 📱 Project Overview</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">5</span>
                  <span className="text-gray-300">Bukalapak Mitra is a comprehensive partner application designed</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">6</span>
                  <span className="text-gray-300">for grocery store owners and retail partners. Focused primarily</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">7</span>
                  <span className="text-gray-300">on the grocery section, enabling seamless business operations.</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">8</span>
                  <span className="text-gray-300"></span>
                </div>

                <div className="flex">
                  <span className="text-gray-500 mr-4">9</span>
                  <span className="text-blue-400">## 🎯 Key Achievements</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">10</span>
                  <span className="text-gray-300">- 📈 **User Experience**: Improved by 35% through optimization</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">11</span>
                  <span className="text-gray-300">- 🔧 **Modules Enhanced**: Developed and improved 15+ modules</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">12</span>
                  <span className="text-gray-300">- 📚 **Libraries Created**: Built reusable component libraries</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">13</span>
                  <span className="text-gray-300">- 🚀 **Performance**: Reduced app loading time significantly</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">14</span>
                  <span className="text-gray-300"></span>
                </div>

                <div className="flex">
                  <span className="text-gray-500 mr-4">15</span>
                  <span className="text-blue-400">## 🛠️ Technical Implementation</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">16</span>
                  <span className="text-gray-300">- Native Android development using Java and Kotlin</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">17</span>
                  <span className="text-gray-300">- MVVM architecture pattern for maintainable code</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">18</span>
                  <span className="text-gray-300">- RxJava for reactive programming and async operations</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">19</span>
                  <span className="text-gray-300">- Custom UI components for consistent user experience</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">20</span>
                  <span className="text-gray-300">- Performance optimization and memory management</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">21</span>
                  <span className="text-gray-300">- Integration with Bukalapak's ecosystem and APIs</span>
                </div>
              </div>
            </div>
          );

        case "optimization.md":
          return (
            <div>
              <div className="mb-4">
                <div className="flex">
                  <span className="text-gray-500 mr-4">1</span>
                  <span className="text-purple-400"># 🚀 Performance Optimizations</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-gray-500 mr-4">3</span>
                  <span className="text-blue-400">## 📊 Performance Metrics Improved</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">4</span>
                  <span className="text-gray-300">- App launch time: Reduced from 3.2s to 1.8s (44% improvement)</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">5</span>
                  <span className="text-gray-300">- Memory usage: Optimized by 30% through better lifecycle management</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">6</span>
                  <span className="text-gray-300">- Network requests: Implemented caching, reduced by 50%</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">7</span>
                  <span className="text-gray-300">- User interaction response: Improved to 35% faster responses</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">8</span>
                  <span className="text-gray-300"></span>
                </div>

                <div className="flex">
                  <span className="text-gray-500 mr-4">9</span>
                  <span className="text-blue-400">## 🔧 Technical Optimizations</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">10</span>
                  <span className="text-gray-300">- Implemented lazy loading for heavy UI components</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">11</span>
                  <span className="text-gray-300">- Optimized image loading with Glide and smart caching</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">12</span>
                  <span className="text-gray-300">- Refactored database queries for better performance</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">13</span>
                  <span className="text-gray-300">- Implemented background thread processing for heavy operations</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">14</span>
                  <span className="text-gray-300">- Created efficient RecyclerView adapters with ViewHolder pattern</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">15</span>
                  <span className="text-gray-300">- Optimized network layer with request batching and compression</span>
                </div>
              </div>
            </div>
          );
      }
    }

    // Default content
    return (
      <div>
        <div className="flex">
          <span className="text-gray-500 mr-4">1</span>
          <span className="text-gray-300">Project content for {fileName}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 mr-4">2</span>
          <span className="text-gray-300">Path: {projectPath}</span>
        </div>
      </div>
    );
  };

  return getProjectContent(fileName, projectPath);
};

export default Projects;