import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCypF-o2D93u7tnNWAGfqzOzUlcMNpLIzY",
  authDomain: "showroom-38d8d.firebaseapp.com",
  projectId: "showroom-38d8d",
  storageBucket: "showroom-38d8d.appspot.com",
  messagingSenderId: "771071758641",
  appId: "1:771071758641:web:93708e4fc3273d6995e010",
  measurementId: "G-B105176QTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const storage = getStorage(app)
export const database = getDatabase();