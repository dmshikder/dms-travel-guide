// Import the functions you need from the SDKs you need
import { getAuth, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3m51Kg-YzyU-Lt7bVg2FbmXOKS4zmS-M",
  authDomain: "dms-travel-guide.firebaseapp.com",
  projectId: "dms-travel-guide",
  storageBucket: "dms-travel-guide.appspot.com",
  messagingSenderId: "595728558919",
  appId: "1:595728558919:web:b67b291f40965ea03dfa62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;