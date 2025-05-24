// src/components/ChatHeader.jsx
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

const ChatHeader = ({ title, onBack }) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
      {onBack && (
        <button
          onClick={onBack}
          className="md:hidden p-2 mr-2 rounded-md hover:bg-gray-100"
          aria-label="Back"
        >
          <FiArrowLeft size={20} />
        </button>
      )}
      <h2 className="text-lg font-semibold text-gray-800 truncate">{title || 'Select a conversation'}</h2>
    </header>
  );
};

export default ChatHeader;
