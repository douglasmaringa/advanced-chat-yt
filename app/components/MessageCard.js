import React from 'react';

function MessageCard({ message, user }) {
  const isMessageFromMe = message.sender === user;

  return (
    <div key={message.id} className={`flex mb-4 ${isMessageFromMe ? 'justify-end' : 'justify-start'}`}>
      {/* Avatar on the left or right based on the sender */}
      <div className={`w-10 h-10 ${isMessageFromMe ? 'ml-2 mr-2' : 'mr-2'}`}>
        <img
          className='w-full h-full object-cover rounded-full'
          src={message.avatarUrl}
          alt='Avatar'
        />
      </div>

      {/* Message bubble on the right or left based on the sender */}
      <div className={` text-white p-2 rounded-md ${isMessageFromMe ? 'bg-blue-500 self-end' : 'bg-[#19D39E] self-start'}`}>
        <p>{message.content}</p>
        <div className='text-xs text-gray-300'>{message.time}</div>
      </div>
    </div>
  );
}

export default MessageCard;
