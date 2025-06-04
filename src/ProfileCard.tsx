import React, { useState, useEffect } from 'react';
import {
  MatrixBackground,
  TerminalHeader,
  ProfileHeader,
  Philosophy,
  SkillsSection,
  Stats,
  ContactLinks,
  TerminalFooter
} from './components';

const ProfileCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  
  const fullText = "Aspiring Programmer // Aspiring Web Developer";

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
      setCurrentSkillIndex((prev) => (prev + 1) % 3); // 3 is the number of skills
    }, 3000);

    return () => clearInterval(skillTimer);
  }, []);
  const matrixChars = ['0', '1', '日', 'ﾊ', 'ﾐ', 'ﾋ', 'ｰ', 'ｳ', 'ｼ', 'ﾅ', 'ﾓ', 'ﾆ', 'ｻ', 'ﾜ', 'ﾂ', 'ｵ', 'ﾘ', 'ｱ', 'ﾎ', 'ﾃ', 'ﾏ', 'ｹ', 'ﾒ', 'ｴ', 'ｶ', 'ｷ', 'ﾑ', 'ﾕ', 'ﾗ', 'ｾ', 'ﾈ', 'ｽ', 'ﾀ', 'ﾇ', 'ﾍ'];

  return (
    <div className="h-screen bg-black flex items-center justify-center p-2 relative overflow-hidden">
      {/* CMatrix-style falling columns */}
      <MatrixBackground matrixChars={matrixChars} />

      {/* Profile Card */}
      <div 
        className={`relative max-w-sm w-full max-h-[95vh] bg-gray-900 border-2 border-green-400 rounded-lg shadow-2xl 
                   transform transition-all duration-1000 overflow-y-auto ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
        style={{
          boxShadow: '0 0 30px rgba(34, 197, 94, 0.3), inset 0 0 30px rgba(34, 197, 94, 0.1)'
        }}
      >
        {/* Terminal Header */}
        <TerminalHeader />

        <div className="p-4 space-y-4">
          {/* Profile Header */}
          <ProfileHeader typedText={typedText} />

          {/* Philosophy */}
          <Philosophy />

          {/* Skills Section */}
          <SkillsSection currentSkillIndex={currentSkillIndex} />

          {/* Stats */}
          <Stats />

          {/* Contact & Links */}
          <ContactLinks />

          {/* Terminal Footer */}
          <TerminalFooter />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
