// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBexyI4ikfMWfljSXFV9b1uT3E9Q8ZoU3s",
    authDomain: "mcbrand-84ed7.firebaseapp.com",
    projectId: "mcbrand-84ed7",
    storageBucket: "mcbrand-84ed7.appspot.com",
    messagingSenderId: "465741040690",
    appId: "1:465741040690:web:cb72695aadc8f10734002b",
    measurementId: "G-494JEN4KLG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { storage };
