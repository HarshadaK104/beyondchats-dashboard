// src/components/Message.jsx
import React from 'react';

const Message = ({ text, timestamp, isUser }) => {
  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
      role="article"
      aria-label={`${isUser ? 'Your message' : 'Support message'}`}
    >
      <div
        className={`
          max-w-[70%] px-4 py-2 rounded-lg shadow-sm
          ${isUser ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-900 rounded-bl-none'}
        `}
      >
        <p className="whitespace-pre-wrap break-words">{text}</p>
        <time className="block text-xs text-gray-400 mt-1 text-right select-none">
          {timestamp}
        </time>
      </div>
    </div>
  );
};

export default Message;
