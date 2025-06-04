import React from 'react';
import profileImage from '../assets/profile-image.jpeg';

interface ProfileHeaderProps {
  typedText: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ typedText }) => {
  return (
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
    </div>
  );
};

export default ProfileHeader;
