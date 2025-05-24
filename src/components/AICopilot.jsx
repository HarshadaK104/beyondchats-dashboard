// src/components/AICopilot.jsx
import React, { useState } from 'react';

const samplePrompts = [
  'Summarize this conversation',
  'Generate a follow-up email',
  'Detect customer sentiment',
  'Suggest next steps',
];

const AICopilot = ({ onSendPrompt }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendPrompt(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <aside className="w-full md:w-80 bg-white border-l border-gray-200 flex flex-col shadow-lg">
      <div className="p-5 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">AI Assistant</h3>
        <p className="text-gray-600 text-sm mb-4">
          Welcome to BeyondChats AI! Ask me anything or choose a prompt below.
        </p>
        <div className="flex flex-wrap gap-2">
          {samplePrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => onSendPrompt(prompt)}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm hover:bg-blue-200 transition"
              aria-label={`Send prompt: ${prompt}`}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 p-5 overflow-auto text-gray-700">
        {/* Placeholder for AI responses if you want to expand */}
        <p className="italic text-gray-400">AI responses will appear here...</p>
      </div>

      <div className="border-t border-gray-200 p-4">
        <textarea
          rows={2}
          placeholder="Type your question or command..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300 transition"
          aria-label="Send AI prompt"
        >
          Send
        </button>
      </div>
    </aside>
  );
};

export default AICopilot;
