import React from 'react';

const PersonalInfo = ({ fileName }) => {
  const getPersonalContent = (fileName) => {
    switch (fileName) {
      case "bio.txt":
        return (
          <div>
            <div className="mb-4">
              <div className="flex">
                <span className="text-gray-500 mr-4">1</span>
                <span className="text-purple-400">About M Nafian Wildana</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">2</span>
                <span className="text-gray-400">==========================================</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex">
                <span className="text-gray-500 mr-4">4</span>
                <span className="text-gray-300">I am a highly skilled Fullstack Engineer with over seven years</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">5</span>
                <span className="text-gray-300">of experience in software development across various industries,</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">6</span>
                <span className="text-gray-300">including e-commerce, banking, and software houses.</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">7</span>
                <span className="text-gray-300"></span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">8</span>
                <span className="text-gray-300">With a strong understanding of both frontend and backend</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">9</span>
                <span className="text-gray-300">development, UI/UX design, and Agile methodologies, I build</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">10</span>
                <span className="text-gray-300">scalable and high-performing applications.</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">11</span>
                <span className="text-gray-300"></span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">12</span>
                <span className="text-gray-300">I am committed to continuous learning and integrating the latest</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">13</span>
                <span className="text-gray-300">technologies to enhance development efficiency. I am a problem</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">14</span>
                <span className="text-gray-300">solver who thrives in collaborative environments.</span>
              </div>
            </div>
          </div>
        );

      case "interests.md":
        return (
          <div>
            <div className="mb-4">
              <div className="flex">
                <span className="text-gray-500 mr-4">1</span>
                <span className="text-purple-400"># Personal Interests & Hobbies</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex">
                <span className="text-gray-500 mr-4">3</span>
                <span className="text-blue-400">## Technology & Innovation</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">4</span>
                <span className="text-gray-300">- Exploring emerging technologies and frameworks</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">5</span>
                <span className="text-gray-300">- Contributing to open source projects</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">6</span>
                <span className="text-gray-300">- Building side projects and experimenting with new tools</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">7</span>
                <span className="text-gray-300"></span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">8</span>
                <span className="text-blue-400">## Learning & Development</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">9</span>
                <span className="text-gray-300">- Reading tech blogs and documentation</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">10</span>
                <span className="text-gray-300">- Attending tech conferences and workshops</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">11</span>
                <span className="text-gray-300">- Mentoring junior developers</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">12</span>
                <span className="text-gray-300"></span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">13</span>
                <span className="text-blue-400">## Personal Activities</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">14</span>
                <span className="text-gray-300">- Photography and digital art</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 mr-4">16</span>
                <span className="text-gray-300">- Travel and exploring different cultures</span>
              </div>
            </div>
          </div>
        );

      case "contact.json":
        return (
          <div>
            <div className="flex">
              <span className="text-gray-500 mr-4">1</span>
              <span className="text-white">{"{"}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">2</span>
              <div className="ml-4">
                <span className="text-red-400">"name"</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"M Nafian Wildana"</span>
                <span className="text-white">,</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">3</span>
              <div className="ml-4">
                <span className="text-red-400">"title"</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"Fullstack Engineer"</span>
                <span className="text-white">,</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">4</span>
              <div className="ml-4">
                <span className="text-red-400">"email"</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"nafianwildana@gmail.com"</span>
                <span className="text-white">,</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">5</span>
              <div className="ml-4">
                <span className="text-red-400">"phone"</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"+62 8771 2585822"</span>
                <span className="text-white">,</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">6</span>
              <div className="ml-4">
                <span className="text-red-400">"location"</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"Jakarta, Indonesia"</span>
                <span className="text-white">,</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">7</span>
              <div className="ml-4">
                <span className="text-red-400">"social_media"</span>
                <span className="text-white">: {"{"}</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">8</span>
              <div className="ml-8">
                <span className="text-red-400">"github"</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"https://github.com/mnafian"</span>
                <span className="text-white">,</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">9</span>
              <div className="ml-8">
                <span className="text-red-400">"linkedin"</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"https://www.linkedin.com/in/mnafian/"</span>
                <span className="text-white">,</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">10</span>
              <div className="ml-8">
                <span className="text-red-400">"twitter"</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"@mnafian_dev"</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">11</span>
              <div className="ml-4">
                <span className="text-white">{"}"}</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">12</span>
              <div className="ml-4">
                <span className="text-red-400">"availability"</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"Open to new opportunities"</span>
                <span className="text-white">,</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">13</span>
              <div className="ml-4">
                <span className="text-red-400">"preferred_contact"</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"email"</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">14</span>
              <span className="text-white">{"}"}</span>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <div className="flex">
              <span className="text-gray-500 mr-4">1</span>
              <span className="text-gray-300">Personal information content for {fileName}</span>
            </div>
          </div>
        );
    }
  };

  return getPersonalContent(fileName);
};

export default PersonalInfo;