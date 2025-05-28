import React from 'react';

const Welcome = ({ isMobile = false }) => {
  const LineNumber = ({ num, children, isComment = false }) => (
    <div className={`flex ${isMobile ? 'mb-2' : 'mb-1'}`}>
      <span className={`text-gray-500 ${isMobile ? 'w-6 text-xs' : 'mr-4'} flex-shrink-0`}>{num}</span>
      <div className={`${isMobile ? 'ml-2 break-words' : ''} ${isComment ? 'text-gray-500' : ''}`}>
        {children}
      </div>
    </div>
  );

  return (
    <div className={`${isMobile ? 'max-w-full text-sm' : 'max-w-4xl'}`}>
      {/* Header Section */}
      <div className={`${isMobile ? 'mb-6' : 'mb-8'}`}>
        <LineNumber num={1}>
          <span className="text-purple-400"># Hi there, I'm M Nafian Wildana! 👋</span>
        </LineNumber>
        <LineNumber num={2}></LineNumber>
        <LineNumber num={3} isComment>
          <span>// Currently searching for opportunities as Fullstack Engineer</span>
        </LineNumber>
        <LineNumber num={4} isComment>
          <span>// Location: Jakarta, Indonesia (Open to remote work)</span>
        </LineNumber>
      </div>

      {/* Code Block */}
      <div className={`space-y-${isMobile ? '3' : '4'}`}>
        <LineNumber num={6}>
          <div>
            <span className="text-blue-400">const</span>
            <span className="text-white"> developer = </span>
            <span className="text-white">{"{"}</span>
          </div>
        </LineNumber>
        
        <LineNumber num={7}>
          <div className={`${isMobile ? 'ml-4' : 'ml-8'}`}>
            <span className="text-red-400">name</span>
            <span className="text-white">: </span>
            <span className="text-green-400">"M Nafian Wildana"</span>
            <span className="text-white">,</span>
          </div>
        </LineNumber>

        <LineNumber num={8}>
          <div className={`${isMobile ? 'ml-4' : 'ml-8'}`}>
            <span className="text-red-400">role</span>
            <span className="text-white">: </span>
            <span className="text-green-400">"Fullstack Engineer"</span>
            <span className="text-white">,</span>
          </div>
        </LineNumber>

        <LineNumber num={9}>
          <div className={`${isMobile ? 'ml-4' : 'ml-8'}`}>
            <span className="text-red-400">experience</span>
            <span className="text-white">: </span>
            <span className="text-green-400">"7+ years"</span>
            <span className="text-white">,</span>
          </div>
        </LineNumber>

        <LineNumber num={10}>
          <div className={`${isMobile ? 'ml-4' : 'ml-8'}`}>
            <span className="text-red-400">email</span>
            <span className="text-white">: </span>
            <span className="text-green-400">"nafianwildana@gmail.com"</span>
            <span className="text-white">,</span>
          </div>
        </LineNumber>

        <LineNumber num={11}>
          <div className={`${isMobile ? 'ml-4' : 'ml-8'}`}>
            <span className="text-red-400">phone</span>
            <span className="text-white">: </span>
            <span className="text-green-400">"+62 8771 2585822"</span>
            <span className="text-white">,</span>
          </div>
        </LineNumber>

        <LineNumber num={12}>
          <div className={`${isMobile ? 'ml-4' : 'ml-8'}`}>
            <span className="text-red-400">location</span>
            <span className="text-white">: </span>
            <span className="text-green-400">"Jakarta, Indonesia"</span>
            <span className="text-white">,</span>
          </div>
        </LineNumber>

        <LineNumber num={13}>
          <div className={`${isMobile ? 'ml-4' : 'ml-8'}`}>
            <span className="text-red-400">skills</span>
            <span className="text-white">: [</span>
          </div>
        </LineNumber>

        <LineNumber num={14}>
          <div className={`${isMobile ? 'ml-8' : 'ml-12'} ${isMobile ? 'break-words' : ''}`}>
            <span className="text-green-400">"React"</span>
            <span className="text-white">, </span>
            <span className="text-green-400">"Next.js"</span>
            <span className="text-white">, </span>
            <span className="text-green-400">"Flutter"</span>
            <span className="text-white">, </span>
            <span className="text-green-400">"Go"</span>
            <span className="text-white">,</span>
          </div>
        </LineNumber>

        <LineNumber num={15}>
          <div className={`${isMobile ? 'ml-8' : 'ml-12'} ${isMobile ? 'break-words' : ''}`}>
            <span className="text-green-400">"Node.js"</span>
            <span className="text-white">, </span>
            <span className="text-green-400">"TypeScript"</span>
            <span className="text-white">, </span>
            <span className="text-green-400">"PostgreSQL"</span>
            <span className="text-white">, </span>
            <span className="text-green-400">"AWS"</span>
          </div>
        </LineNumber>

        <LineNumber num={16}>
          <div className={`${isMobile ? 'ml-4' : 'ml-8'}`}>
            <span className="text-white">],</span>
          </div>
        </LineNumber>

        <LineNumber num={17}>
          <div className={`${isMobile ? 'ml-4' : 'ml-8'} ${isMobile ? 'break-words' : ''}`}>
            <span className="text-red-400">currentFocus</span>
            <span className="text-white">: </span>
            <span className="text-green-400">"Building scalable applications & mentoring teams"</span>
            <span className="text-white">,</span>
          </div>
        </LineNumber>

        <LineNumber num={18}>
          <div className={`${isMobile ? 'ml-4' : 'ml-8'} ${isMobile ? 'break-words' : ''}`}>
            <span className="text-red-400">github</span>
            <span className="text-white">: </span>
            <span className="text-green-400">"https://github.com/mnafian"</span>
            <span className="text-white">,</span>
          </div>
        </LineNumber>

        <LineNumber num={19}>
          <div className={`${isMobile ? 'ml-4' : 'ml-8'} ${isMobile ? 'break-words' : ''}`}>
            <span className="text-red-400">linkedin</span>
            <span className="text-white">: </span>
            <span className="text-green-400">"https://www.linkedin.com/in/mnafian/"</span>
            <span className="text-white">,</span>
          </div>
        </LineNumber>

        <LineNumber num={20}>
          <div className={`${isMobile ? 'ml-4' : 'ml-8'}`}>
            <span className="text-red-400">availability</span>
            <span className="text-white">: </span>
            <span className="text-green-400">"Open to new opportunities"</span>
          </div>
        </LineNumber>

        <LineNumber num={21}>
          <div>
            <span className="text-white">{"}"}</span>
            <span className="text-white">;</span>
          </div>
        </LineNumber>

        <LineNumber num={23} isComment>
          <span>// Feel free to explore my work and get in touch!</span>
        </LineNumber>

        <LineNumber num={24}>
          <div className={isMobile ? 'break-words' : ''}>
            <span className="text-blue-400">console</span>
            <span className="text-white">.</span>
            <span className="text-yellow-400">log</span>
            <span className="text-white">(</span>
            <span className="text-green-400">"Welcome to my portfolio!"</span>
            <span className="text-white">);</span>
          </div>
        </LineNumber>
      </div>

      {/* Mobile Contact Cards */}
      {isMobile && (
        <div className="mt-8 space-y-3">
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2 flex items-center">
              <span className="mr-2">📧</span>
              Quick Contact
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="text-gray-400 w-16">Email:</span>
                <span className="text-blue-400">nafianwildana@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 w-16">Phone:</span>
                <span className="text-green-400">+62 8771 2585822</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2 flex items-center">
              <span className="mr-2">🔗</span>
              Links
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="https://github.com/mnafian" className="text-purple-400 hover:underline">
                🐙 GitHub
              </a>
              <a href="https://www.linkedin.com/in/mnafian/" className="text-blue-400 hover:underline">
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;