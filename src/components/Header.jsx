// src/components/Header.jsx
import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md border-b border-gray-200">
      {/* Left side: Logo + App Name */}
      <div className="flex items-center space-x-3">
        <div className="text-blue-600">
          <FiMessageSquare size={28} />
        </div>
        <h1 className="text-xl font-semibold text-blue-700 select-none">
          BeyondChats
        </h1>
      </div>

      {/* Right side (optional): You can add profile or settings icon here later */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Placeholder for future items like user avatar or settings */}
      </div>
    </header>
  );
};

export default Header;
