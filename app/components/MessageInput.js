import React from 'react'
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa'; // Import icons from react-icons

function MessageInput({sendMessage,message,setMessage}) {
  return (
    <div className='flex items-center p-4 border-t border-gray-200'>
    {/* Pin icon for attachments */}
    <FaPaperclip className='text-gray-500 mr-2 cursor-pointer' />

    {/* Text input */}
    <input
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      type='text'
      placeholder='Type a message...'
      className='flex-1 border-none p-2 outline-none'
    />

    {/* Kite icon for sending messages */}
    <FaPaperPlane onClick={()=>{sendMessage()}} className='text-blue-500 cursor-pointer ml-2' />
  </div>
  )
}

export default MessageInput