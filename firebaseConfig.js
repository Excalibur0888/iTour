import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCJzNYz_8ydHDfpXFaq8cRwnnj4w5vgyto",
  authDomain: "auth-start-63049.firebaseapp.com",
  projectId: "auth-start-63049",
  storageBucket: "auth-start-63049.appspot.com",
  messagingSenderId: "1092761434475",
  appId: "1:1092761434475:web:682ad23c8536f59bca342e"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };