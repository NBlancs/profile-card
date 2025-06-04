import React from 'react';
import { Terminal } from 'lucide-react';

const TerminalHeader: React.FC = () => {
  return (
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
  );
};

export default TerminalHeader;
