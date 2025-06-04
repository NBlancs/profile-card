import React from 'react';
import { Code, Database, Cpu, type LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
  techs: string[];
}

interface SkillsSectionProps {
  currentSkillIndex: number;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ currentSkillIndex }) => {
  const skills: Skill[] = [
    { name: 'Frontend', icon: Code, techs: ['HTML5', 'CSS3', 'JavaScript', 'React'] },
    { name: 'Backend', icon: Database, techs: ['Node.js', 'Python', 'PHP', 'SQL'] },
    { name: 'Tools', icon: Cpu, techs: ['Git', 'GitHub', 'Figma', 'Android Studio'] }
  ];

  return (
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
    </div>
  );
};

export default SkillsSection;
