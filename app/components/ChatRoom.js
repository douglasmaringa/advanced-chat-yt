import React,{useState,useEffect,useRef} from 'react';
import MessageCard from './MessageCard';
import MessageInput from './MessageInput';
import { addDoc, collection,doc, serverTimestamp,onSnapshot,query,where,orderBy,updateDoc } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';

function ChatRoom({ user ,selectedChatroom}) {
  const me = selectedChatroom?.myData
  const other = selectedChatroom?.otherData
  const chatRoomId = selectedChatroom?.id

  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

//get messages 
useEffect(() => {
  if(!chatRoomId) return;
  const unsubscribe = onSnapshot(
    query(collection(firestore, 'messages'),where("chatRoomId","==",chatRoomId),orderBy('time', 'asc')),
    (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //console.log(messages);
      setMessages(messages);
    }
  );

  return unsubscribe;
}, [chatRoomId]);

//put messages in db
 const sendMessage = async () => {
    const messagesCollection = collection(firestore, 'messages');
    // Check if the message is not empty
  if (message == '' && image == '') {
    return;
  }

  try {
    // Add a new message to the Firestore collection
    const newMessage = {
      chatRoomId:chatRoomId,
      sender: me.id,
      content: message,
      time: serverTimestamp(),
      image: image,
    };

    await addDoc(messagesCollection, newMessage);
    setMessage('');
    setImage('');
    //send to chatroom by chatroom id and update last message
    const chatroomRef = doc(firestore, 'chatrooms', chatRoomId);
    await updateDoc(chatroomRef, { lastMessage: message ? message : "Image" });

    // Clear the input field after sending the message
    
  } catch (error) {
    console.error('Error sending message:', error.message);
  }

  // Scroll to the bottom after sending a message
  if (messagesContainerRef.current) {
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
  }
    
}


  return (
    <div className='flex flex-col h-screen'>
      {/* Messages container with overflow and scroll */}
      <div ref={messagesContainerRef} className='flex-1 overflow-y-auto p-10'>
        {messages?.map((message) => (
          <MessageCard key={message.id} message={message} me={me} other={other}/>
        ))}
      </div>

      {/* Input box at the bottom */}
      <MessageInput sendMessage={sendMessage} message={message} setMessage={setMessage} image={image} setImage={setImage}/>
    </div>
  );
}

export default ChatRoom;
