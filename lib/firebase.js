// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCFt0EadvPAIhJkdta8gqi-Ir9VWpA5DOI",
    authDomain: "chat-app-b0868.firebaseapp.com",
    projectId: "chat-app-b0868",
    storageBucket: "chat-app-b0868.appspot.com",
    messagingSenderId: "1075227084843",
    appId: "1:1075227084843:web:c74a1cba89f07ec7f0026e",
    measurementId: "G-L12R3QZJ53"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };