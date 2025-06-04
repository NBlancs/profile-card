import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-gray-800 border border-green-400 rounded p-2 text-center">
        <div className="text-green-400 font-mono text-sm font-bold">20+</div>
        <div className="text-green-300 text-xs">Projects</div>
      </div>
      <div className="bg-gray-800 border border-green-400 rounded p-2 text-center">
        <div className="text-green-400 font-mono text-sm font-bold">10+</div>
        <div className="text-green-300 text-xs">Certificates</div>
      </div>
    </div>
  );
};

export default Stats;
