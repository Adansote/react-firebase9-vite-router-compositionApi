
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkfUzlTrYbBR4mm0WHNXai5Iu3cxo7mco",
  authDomain: "react-firebase9-2022.firebaseapp.com",
  projectId: "react-firebase9-2022",
  storageBucket: "react-firebase9-2022.appspot.com",
  messagingSenderId: "909338866047",
  appId: "1:909338866047:web:03bb36ccd4ec7e0f75aa4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};
