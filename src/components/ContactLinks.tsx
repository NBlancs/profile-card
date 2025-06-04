import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const ContactLinks: React.FC = () => {
  return (
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
  );
};

export default ContactLinks;
