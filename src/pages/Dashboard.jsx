// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatHeader from '../components/ChatHeader';
import ChatList from '../components/ChatList';
import ChatInput from '../components/ChatInput';
import AICopilot from '../components/AICopilot';

const Dashboard = () => {
  // Sample conversations and messages state
  const [selectedConversation, setSelectedConversation] = useState({
    id: 1,
    title: 'John Doe',
    messages: [
      { id: 1, text: 'Hello! How can I help you?', timestamp: '10:00 AM', isUser: false },
      { id: 2, text: 'I need help with my order.', timestamp: '10:02 AM', isUser: true },
    ],
  });

  // Manage conversations sample list for Sidebar (minimal)
  const conversations = [
    { id: 1, name: 'John Doe', unread: true },
    { id: 2, name: 'Jane Smith', unread: false },
  ];

  // Chat messages state
  const [messages, setMessages] = useState(selectedConversation.messages);

  // Handle sending new user message
  const handleSendMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: true,
    };
    setMessages([...messages, newMessage]);
  };

  // Handle AI prompts (stub)
  const handleSendAIPrompt = (prompt) => {
    const aiResponse = {
      id: messages.length + 1,
      text: `🤖 AI Response to: "${prompt}"`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: false,
    };
    setMessages([...messages, aiResponse]);
  };

  // TODO: Implement conversation selection from Sidebar and updating selectedConversation

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Top header with logo and app name */}
      <Header />

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex border-r border-gray-200">
          <Sidebar />
        </div>

        {/* Chat panel */}
        <main className="flex flex-col flex-1 min-w-0">
          <ChatHeader title={selectedConversation.title} />
          <ChatList messages={messages} />
          <ChatInput onSend={handleSendMessage} />
        </main>

        {/* AI Assistant panel */}
        <div className="hidden md:flex border-l border-gray-200">
          <AICopilot onSendPrompt={handleSendAIPrompt} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
