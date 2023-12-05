import React from 'react';

function UsersCard({ avatarUrl, name, latestMessage, isOnline, time,type }) {
  return (
    <div className="flex items-center p-4 border-b border-gray-200 relative hover:cursor-pointer">

      {/* Avatar on the left */}
      <div className="flex-shrink-0 mr-4 relative">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src={avatarUrl} alt="Avatar" />
        </div>
        {/* Floating blue circle to indicate online status */}
        {isOnline && (
          <div className="absolute top-0 right-0 bg-blue-500 rounded-full w-4 h-4 border-2 border-white"></div>
        )}
      </div>
        
        {
        type == "chat" &&
        /* Name, latest message, and time on the right */
          <div className="flex-1">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{name}</h2>
                <span className="text-xs text-gray-500">{time}</span>
             </div>
            <p className="text-gray-500 truncate">{latestMessage}</p>
         </div>
        }

        {
           type == "user" &&
              /* Name */
          <div className="flex-1">
             <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{name}</h2>
             </div>
           </div>
        }
      

    </div>
  );
}

export default UsersCard;
