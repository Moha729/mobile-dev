// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVNGtanUEPbRxVL4eJigRTzX8jNZIkQG0",
  authDomain: "milestonetodo.firebaseapp.com",
  projectId: "milestonetodo",
  storageBucket: "milestonetodo.appspot.com",
  messagingSenderId: "499374221880",
  appId: "1:499374221880:web:1c72690501b992852d94cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getFirestore } from "firebase/firestore";
const database = getFirestore(app)

export {app, database}
