import React from 'react';

interface MatrixBackgroundProps {
  matrixChars: string[];
}

const MatrixBackground: React.FC<MatrixBackgroundProps> = ({ matrixChars }) => {
  return (
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
  );
};

export default MatrixBackground;
