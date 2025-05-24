// src/components/ChatList.jsx
import React, { useEffect, useRef } from 'react';
import Message from './Message';

const ChatList = ({ messages }) => {
  const bottomRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <main className="flex-1 overflow-y-auto bg-white px-4 py-3">
      {messages.length === 0 ? (
        <p className="text-center text-gray-400 mt-6">No messages yet</p>
      ) : (
        messages.map(({ id, text, timestamp, isUser }) => (
          <Message key={id} text={text} timestamp={timestamp} isUser={isUser} />
        ))
      )}
      <div ref={bottomRef} />
    </main>
  );
};

export default ChatList;
