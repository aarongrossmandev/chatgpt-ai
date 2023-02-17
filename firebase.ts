import { getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxgqoiYS26MbPv6zucuyIuHb-WgmFjzjg",
  authDomain: "chaptgpt-ai.firebaseapp.com",
  projectId: "chaptgpt-ai",
  storageBucket: "chaptgpt-ai.appspot.com",
  messagingSenderId: "1073447265572",
  appId: "1:1073447265572:web:d5697c6c6cb54ee8837fb1"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };