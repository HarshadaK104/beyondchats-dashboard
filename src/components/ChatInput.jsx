// src/components/ChatInput.jsx
import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-gray-200 px-4 py-3 bg-white flex items-center space-x-3">
      <textarea
        className="flex-1 resize-none rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none px-3 py-2 text-gray-900 placeholder-gray-400 max-h-24"
        rows={1}
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSend}
        className="p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 rounded-md text-white transition"
        disabled={!message.trim()}
        aria-label="Send message"
      >
        <FiSend size={20} />
      </button>
    </div>
  );
};

export default ChatInput;
