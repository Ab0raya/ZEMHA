// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const getFirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDbCs6sHdwadSGQjggghnl4lkW6XAYFd8k",
    authDomain: "awd-b1315.firebaseapp.com",
    projectId: "awd-b1315",
    storageBucket: "awd-b1315.appspot.com",
    messagingSenderId: "734822943161",
    appId: "1:734822943161:web:5047cbf62234f0d5f2ce68",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};
