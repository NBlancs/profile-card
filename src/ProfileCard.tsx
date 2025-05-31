import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code, Database, Cpu } from 'lucide-react';
import profileImage from './assets/profile-image.jpeg';

const ProfileCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  
  const fullText = "Aspiring Programmer // Aspiring Web Developer";
  const skills = [
    { name: 'Frontend', icon: Code, techs: ['HTML5', 'CSS3', 'JavaScript', 'React'] },
    { name: 'Backend', icon: Database, techs: ['Node.js', 'Python', 'PHP', 'SQL'] },
    { name: 'Tools', icon: Cpu, techs: ['Git', 'GitHub', 'Figma', 'Android Studio'] }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Skill rotation animation
    const skillTimer = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(skillTimer);
  }, []);

  const matrixChars = ['0', '1', '日', 'ﾊ', 'ﾐ', 'ﾋ', 'ｰ', 'ｳ', 'ｼ', 'ﾅ', 'ﾓ', 'ﾆ', 'ｻ', 'ﾜ', 'ﾂ', 'ｵ', 'ﾘ', 'ｱ', 'ﾎ', 'ﾃ', 'ﾏ', 'ｹ', 'ﾒ', 'ｴ', 'ｶ', 'ｷ', 'ﾑ', 'ﾕ', 'ﾗ', 'ｾ', 'ﾈ', 'ｽ', 'ﾀ', 'ﾇ', 'ﾍ'];  return (
    <div className="h-screen bg-black flex items-center justify-center p-2 relative overflow-hidden">
      {/* CMatrix-style falling columns */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={`column-${i}`}
            className="absolute top-0 text-green-400 font-mono text-sm opacity-80"
            style={{
              left: `${i * 4}%`,
              animation: `matrix-fall ${3 + (i % 3)}s linear infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          >
            {Array.from({ length: 40 }, (_, j) => (
              <div
                key={j}
                className="leading-tight"
                style={{
                  opacity: j < 3 ? 1 : Math.max(0, 1 - (j - 2) * 0.15),
                  color: j === 0 ? '#ffffff' : j < 3 ? '#00ff41' : '#008f11',
                }}
              >
                {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Profile Card */}
      <div 
        className={`relative max-w-sm w-full max-h-[95vh] bg-gray-900 border-2 border-green-400 rounded-lg shadow-2xl 
                   transform transition-all duration-1000 overflow-y-auto ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
        style={{
          boxShadow: '0 0 30px rgba(34, 197, 94, 0.3), inset 0 0 30px rgba(34, 197, 94, 0.1)'
        }}
      >        {/* Terminal Header */}
        <div className="bg-gray-800 border-b border-green-400 p-2 rounded-t-lg flex items-center">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-green-400 font-mono text-xs flex items-center justify-center">
              <Terminal className="w-3 h-3 mr-1" />
              profile_card.exe
            </span>
          </div>
        </div>

        <div className="p-4 space-y-4">          {/* Profile Header */}
          <div className="text-center space-y-3">
            <div className="relative">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Noel Jhumel Blanco" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <div>
              <h1 className="text-xl font-bold text-green-400 font-mono mb-1">
                Noel Jhumel Blanco
              </h1>
              <div className="text-green-300 font-mono text-xs h-5">
                <span className="inline-block">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>
          </div>          {/* Philosophy */}
          <div className="bg-gray-800 border border-green-400 rounded p-3">
            <div className="text-green-400 font-mono text-xs mb-1">$ cat philosophy.txt</div>
            <p className="text-green-300 text-xs leading-relaxed">
              "I am a firm believer in the value of hard work and perseverance. 
              I see setbacks as opportunities to grow and improve."
            </p>
          </div>          {/* Skills Section */}
          <div className="space-y-2">
            <div className="text-green-400 font-mono text-xs flex items-center">
              <span className="mr-2">$</span>
              <span>./display_skills.sh</span>
            </div>
            
            <div className="bg-gray-800 border border-green-400 rounded p-3">
              {skills.map((skillGroup, index) => {
                const Icon = skillGroup.icon;
                const isActive = index === currentSkillIndex;
                
                return (
                  <div 
                    key={skillGroup.name}
                    className={`transition-all duration-500 ${
                      isActive ? 'opacity-100 transform scale-100' : 'opacity-50 transform scale-95'
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      <Icon className="w-3 h-3 text-green-400 mr-1" />
                      <span className="text-green-400 font-mono text-xs">{skillGroup.name}:</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {skillGroup.techs.map((tech) => (
                        <span 
                          key={tech}
                          className="px-1.5 py-0.5 bg-green-900 text-green-300 text-xs rounded font-mono border border-green-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-800 border border-green-400 rounded p-2 text-center">
              <div className="text-green-400 font-mono text-sm font-bold">20+</div>
              <div className="text-green-300 text-xs">Projects</div>
            </div>
            <div className="bg-gray-800 border border-green-400 rounded p-2 text-center">
              <div className="text-green-400 font-mono text-sm font-bold">10+</div>
              <div className="text-green-300 text-xs">Certificates</div>
            </div>
          </div>          {/* Contact & Links */}
          <div className="space-y-2">
            <div className="text-green-400 font-mono text-xs">$ ./contact_links.sh</div>
            
            <div className="grid grid-cols-3 gap-2">
              <a 
                href="mailto:noelblanco369@gmail.com.com" 
                className="flex flex-col items-center p-2 bg-gray-800 border border-green-400 rounded hover:bg-gray-700 transition-colors group"
              >
                <Mail className="w-4 h-4 text-green-400 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-green-300 text-xs">Email</span>
              </a>
              
              <a 
                href="https://github.com/nblancs" 
                className="flex flex-col items-center p-2 bg-gray-800 border border-green-400 rounded hover:bg-gray-700 transition-colors group"
              >
                <Github className="w-4 h-4 text-green-400 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-green-300 text-xs">GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/noel-jhumel-blanco-14217826a/" 
                className="flex flex-col items-center p-2 bg-gray-800 border border-green-400 rounded hover:bg-gray-700 transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-green-400 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-green-300 text-xs">LinkedIn</span>
              </a>
            </div>

            {/* Portfolio Link */}
            <a 
              href="https://nblancs-website-portfolio.vercel.app/" 
              className="w-full flex items-center justify-center p-2 bg-green-900 border border-green-400 rounded hover:bg-green-800 transition-colors group"
            >
              <ExternalLink className="w-3 h-3 text-green-300 mr-1 group-hover:scale-110 transition-transform" />
              <span className="text-green-300 font-mono text-xs">View Full Portfolio</span>
            </a>
          </div>

          {/* Terminal Footer */}
          <div className="text-center text-green-400 font-mono text-xs">
            <span className="animate-pulse">█</span> System Ready // NBlancs © 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
