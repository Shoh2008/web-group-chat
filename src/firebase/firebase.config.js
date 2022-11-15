import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9kCToUJ1MNMJkxMmzWlb-9M8afCYp4yQ",
  authDomain: "web-chat-953e5.firebaseapp.com",
  projectId: "web-chat-953e5",
  storageBucket: "web-chat-953e5.appspot.com",
  messagingSenderId: "944545490600",
  appId: "1:944545490600:web:003ffae6e2b58ca109c49d",
  measurementId: "G-HB5TP5CV7B"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
