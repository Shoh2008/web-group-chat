import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwYF-aVvSyPIhiEDAAX9l2JetxmhLV_Z8",
  authDomain: "chat-42d0f.firebaseapp.com",
  projectId: "chat-42d0f",
  storageBucket: "chat-42d0f.appspot.com",
  messagingSenderId: "329297277364",
  appId: "1:329297277364:web:b8c3d81eaadcb2d43982e1",
  measurementId: "G-8HJVHT5X6V"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
