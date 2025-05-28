import React from 'react';

const ProfessionalInfo = ({ fileName }) => {
  const getProfessionalContent = (fileName) => {
    switch (fileName) {
      case "experience.md":
        return (
          <div>
            <div className="mb-6">
              <div className="flex">
                <span className="text-gray-500 mr-4">1</span>
                <span className="text-purple-400"># Professional Experience</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex">
                <span className="text-gray-500 mr-4">3</span>
                <span className="text-blue-400">## Remote Fullstack Engineer @ KinderCastle</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">4</span>
                <span className="text-yellow-400">**Duration:** 10/2023 - Present | Jakarta, Indonesia</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">5</span>
                <span className="text-gray-300">- Spearheaded full-stack development for educational child care startup</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">6</span>
                <span className="text-gray-300">- Developed versatile technology stack using React, Go, and Flutter</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">7</span>
                <span className="text-gray-300">- Created innovative features to enhance educational platform</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">8</span>
                <span className="text-gray-300">- Implemented CI/CD pipeline for continuous deployment</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">9</span>
                <span className="text-gray-300"></span>
              </div>
              
              <div className="flex">
                <span className="text-gray-500 mr-4">10</span>
                <span className="text-blue-400">## Full Stack Engineer @ Bukalapak (BukaBangunan)</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">11</span>
                <span className="text-yellow-400">**Duration:** 10/2022 - 08/2023 | Jakarta, Indonesia</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">12</span>
                <span className="text-gray-300">- Elevated BukaBangunan app using Flutter and Kotlin</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">13</span>
                <span className="text-gray-300">- Increased test coverage by 60% through automated testing</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">14</span>
                <span className="text-gray-300">- Engaged in dynamic collaborations for exceptional products</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">15</span>
                <span className="text-gray-300">- Utilized modern development practices and code reviews</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">16</span>
                <span className="text-gray-300"></span>
              </div>

              <div className="flex">
                <span className="text-gray-500 mr-4">17</span>
                <span className="text-blue-400">## Mobile Application Developer @ Bukalapak</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">18</span>
                <span className="text-yellow-400">**Duration:** 03/2022 - 10/2022 | Jakarta, Indonesia</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">19</span>
                <span className="text-gray-300">- Created cutting-edge Mobile App using Flutter</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">20</span>
                <span className="text-gray-300">- Achieved 40% increase in user engagement</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">21</span>
                <span className="text-gray-300">- Implemented Scrum methodology for development</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">22</span>
                <span className="text-gray-300">- Collaborated with cross-functional teams</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">23</span>
                <span className="text-gray-300"></span>
              </div>

              <div className="flex">
                <span className="text-gray-500 mr-4">24</span>
                <span className="text-blue-400">## Android Developer @ Bukalapak (Mitra)</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">25</span>
                <span className="text-yellow-400">**Duration:** 01/2019 - 03/2022 | Jakarta, Indonesia</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">26</span>
                <span className="text-gray-300">- Enhanced 15+ modules and libraries for grocery section</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">27</span>
                <span className="text-gray-300">- Improved average user experience time by 35%</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">28</span>
                <span className="text-gray-300">- Optimized UI components for better performance</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">29</span>
                <span className="text-gray-300">- Implemented MVVM architecture pattern</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">30</span>
                <span className="text-gray-300"></span>
              </div>

              <div className="flex">
                <span className="text-gray-500 mr-4">31</span>
                <span className="text-gray-400">// Additional experience in mobile and web development</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">32</span>
                <span className="text-gray-400">// spanning 7+ years across various industries</span>
              </div>
            </div>
          </div>
        );

      case "education.md":
        return (
          <div>
            <div className="mb-6">
              <div className="flex">
                <span className="text-gray-500 mr-4">1</span>
                <span className="text-purple-400"># Education & Certifications</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex">
                <span className="text-gray-500 mr-4">3</span>
                <span className="text-blue-400">## Formal Education</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">4</span>
                <span className="text-yellow-400">**S.Kom (Bachelor of Computer Science)**</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">5</span>
                <span className="text-gray-300">Universitas Islam Negeri Maulana Malik Ibrahim</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">6</span>
                <span className="text-gray-300">01/2014 - 12/2018 | Malang, East Java, Indonesia</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">7</span>
                <span className="text-gray-300">- Focused on Software Engineering and Computer Systems</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">8</span>
                <span className="text-gray-300">- Thesis: Mobile Application Development for Educational Purposes</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">9</span>
                <span className="text-gray-300"></span>
              </div>

              <div className="flex">
                <span className="text-gray-500 mr-4">16</span>
                <span className="text-blue-400">## Continuous Learning</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">17</span>
                <span className="text-gray-300">I regularly engage in continuous learning through:</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">18</span>
                <span className="text-gray-300">- Online courses (Udemy, Coursera, Pluralsight)</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">19</span>
                <span className="text-gray-300">- Tech conferences and workshops</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">20</span>
                <span className="text-gray-300">- Open source contributions</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">21</span>
                <span className="text-gray-300">- Technical blogs and documentation</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">22</span>
                <span className="text-gray-300">- Peer learning and code reviews</span>
              </div>
            </div>
          </div>
        );

      case "skills.json":
        return (
          <div>
            <div className="flex">
              <span className="text-gray-500 mr-4">1</span>
              <span className="text-white">{"{"}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">9</span>
              <div className="ml-4">
                <span className="text-red-400">"mobile_development"</span>
                <span className="text-white">: [</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">10</span>
              <div className="ml-8">
                <span className="text-green-400">"Flutter"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"Android (Kotlin)"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"iOS (Swift)"</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">11</span>
              <div className="ml-4">
                <span className="text-white">],</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">2</span>
              <div className="ml-4">
                <span className="text-red-400">"frontend_technologies"</span>
                <span className="text-white">: [</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">3</span>
              <div className="ml-8">
                <span className="text-green-400">"React"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"Next.js"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"Vue.js"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"TypeScript"</span>
                <span className="text-white">,</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">5</span>
              <div className="ml-4">
                <span className="text-white">],</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">6</span>
              <div className="ml-4">
                <span className="text-red-400">"backend_technologies"</span>
                <span className="text-white">: [</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">7</span>
              <div className="ml-8">
                <span className="text-green-400">"Go"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"Node.js"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"Express.js"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"FastAPI"</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">8</span>
              <div className="ml-4">
                <span className="text-white">],</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">12</span>
              <div className="ml-4">
                <span className="text-red-400">"databases"</span>
                <span className="text-white">: [</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">13</span>
              <div className="ml-8">
                <span className="text-green-400">"PostgreSQL"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"MongoDB"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"Redis"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"MySQL"</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">14</span>
              <div className="ml-4">
                <span className="text-white">],</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">15</span>
              <div className="ml-4">
                <span className="text-red-400">"cloud_devops"</span>
                <span className="text-white">: [</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">16</span>
              <div className="ml-8">
                <span className="text-green-400">"AWS"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"Google Cloud"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"Docker"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"Kubernetes"</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">17</span>
              <div className="ml-4">
                <span className="text-white">],</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">18</span>
              <div className="ml-4">
                <span className="text-red-400">"tools_frameworks"</span>
                <span className="text-white">: [</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">19</span>
              <div className="ml-8">
                <span className="text-green-400">"Git"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"GitHub Actions"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"Figma"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"VS Code"</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">20</span>
              <div className="ml-4">
                <span className="text-white">],</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">21</span>
              <div className="ml-4">
                <span className="text-red-400">"methodologies"</span>
                <span className="text-white">: [</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">22</span>
              <div className="ml-8">
                <span className="text-green-400">"Agile/Scrum"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"TDD"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"CI/CD"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"Code Review"</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">23</span>
              <div className="ml-4">
                <span className="text-white">]</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">24</span>
              <span className="text-white">{"}"}</span>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <div className="flex">
              <span className="text-gray-500 mr-4">1</span>
              <span className="text-gray-300">Professional information content for {fileName}</span>
            </div>
          </div>
        );
    }
  };

  return getProfessionalContent(fileName);
};

export default ProfessionalInfo;