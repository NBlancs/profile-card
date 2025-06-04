import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="bg-gray-800 border border-green-400 rounded p-3">
      <div className="text-green-400 font-mono text-xs mb-1">$ cat philosophy.txt</div>
      <p className="text-green-300 text-xs leading-relaxed">
        "I am a firm believer in the value of hard work and perseverance. 
        I see setbacks as opportunities to grow and improve."
      </p>
    </div>
  );
};

export default Philosophy;
