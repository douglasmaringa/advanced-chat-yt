'use client'
import React,{useEffect,useState} from 'react';
import { app,firestore } from '@/lib/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import Users from './components/Users';
import ChatRoom from './components/ChatRoom';

function page() {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Use onAuthStateChanged to listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(firestore, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            setUser(data);
        } else {
          console.log('No such document!');
        }
      } else {
        setUser(null);
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [auth, router]); 

  //console.log(user);
  return (
    <div className="flex h-screen">
      {/* Left side user */}
      <div className="flex-shrink-0 w-3/12">
        <Users user={user} />
      </div>

      {/* Right side chat room */}
      <div className="flex-grow w-9/12">
        <ChatRoom user={user} />
      </div>
    </div>
  )
}

export default page