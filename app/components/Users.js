import React, { useState } from 'react';
import UsersCard from './UsersCard';

function Users({ user }) {
  const [activeTab, setActiveTab] = useState('users');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='shadow-lg h-screen overflow-auto mt-4 mb-20'>
      <div className="flex justify-between p-4">
        <button
          className={`btn btn-outline ${activeTab === 'users' ? 'btn-primary' : ''}`}
          onClick={() => handleTabClick('users')}
        >
          Users
        </button>
        <button
          className={`btn btn-outline ${activeTab === 'chatrooms' ? 'btn-primary' : ''}`}
          onClick={() => handleTabClick('chatrooms')}
        >
          Chatrooms
        </button>
      </div>

      <div>
        {activeTab === 'chatrooms' && (
          <>
            <h1 className='px-4 text-base font-semibold'>Chatrooms</h1>
            <UsersCard
              name={"kate perry"}
              avatarUrl={"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
              isOnline={true}
              latestMessage={"hello how are you?"}
              time={"20:00 pm"}
              type={"chat"}
            />
            <UsersCard
              name={"kate perry"}
              avatarUrl={"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
              isOnline={true}
              latestMessage={"hello how are you?"}
              time={"20:00 pm"}
              type={"chat"}
            />
          </>
        )}

        {activeTab === 'users' && (
          <>
            <h1 className='mt-4 px-4 text-base font-semibold'>Users</h1>
            <UsersCard
              name={"kate perry"}
              avatarUrl={"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
              isOnline={true}
              latestMessage={"hello how are you?"}
              time={"20:00 pm"}
              type={"user"}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Users;
