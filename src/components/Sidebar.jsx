// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { FiInbox, FiMessageCircle } from 'react-icons/fi';

const conversationsSample = [
  { id: 1, name: 'John Doe', lastMessage: 'Hey, how can I help you?', unread: true, timestamp: '10:32 AM' },
  { id: 2, name: 'Jane Smith', lastMessage: 'Thanks for the update!', unread: false, timestamp: 'Yesterday' },
  { id: 3, name: 'Michael Lee', lastMessage: 'Can we schedule a call?', unread: true, timestamp: '2 days ago' },
];

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredConversations = conversationsSample.filter(conv =>
    activeTab === 'unread' ? conv.unread : true
  );

  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
      {/* Tabs */}
      <nav className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('all')}
          className={`flex items-center space-x-2 flex-1 py-3 justify-center text-sm font-semibold
            ${activeTab === 'all' ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-blue-600'}
          `}
          aria-label="All Conversations"
        >
          <FiInbox size={18} />
          <span>All</span>
        </button>
        <button
          onClick={() => setActiveTab('unread')}
          className={`flex items-center space-x-2 flex-1 py-3 justify-center text-sm font-semibold
            ${activeTab === 'unread' ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-blue-600'}
          `}
          aria-label="Unread Conversations"
        >
          <FiMessageCircle size={18} />
          <span>Unread</span>
        </button>
      </nav>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.length === 0 ? (
          <p className="p-4 text-center text-gray-400">No conversations</p>
        ) : (
          <ul>
            {filteredConversations.map(({ id, name, lastMessage, unread, timestamp }) => (
              <li
                key={id}
                className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 border-b border-gray-100
                  ${unread ? 'bg-blue-50' : ''}
                `}
                role="button"
                tabIndex={0}
              >
                <div>
                  <p className="text-gray-800 font-medium">{name}</p>
                  <p className="text-gray-500 text-sm truncate max-w-[180px]">{lastMessage}</p>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span className="text-gray-400 text-xs">{timestamp}</span>
                  {unread && (
                    <span className="inline-block w-3 h-3 bg-blue-600 rounded-full" aria-label="Unread message indicator" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
