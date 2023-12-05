import React from 'react';
import MessageCard from './MessageCard';
import MessageInput from './MessageInput';

function ChatRoom({ user }) {
  const messages = [
    {
      id: 1,
      sender: 'kate perry',
      avatarUrl: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
      content: 'Hello, how are you?',
      time: '20:00 pm',
    },
    {
      id: 2,
      sender: 'douglas',
      avatarUrl: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
      content: 'Im fine and you?',
      time: '20:00 pm',
    },
    
    // Add more messages as needed
  ];

  return (
    <div className='flex flex-col h-screen'>
      {/* Messages container with overflow and scroll */}
      <div className='flex-1 overflow-y-auto p-10'>
        {messages.map((message) => (
          <MessageCard key={message.id} message={message} user={"douglas"}/>
        ))}
      </div>

      {/* Input box at the bottom */}
      <MessageInput/>
    </div>
  );
}

export default ChatRoom;
