import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIuBzxovAR8_ZkgiloLu0gxT8EQ_PIQsA",
  authDomain: "geeks-425a9.firebaseapp.com",
  projectId: "geeks-425a9",
  storageBucket: "geeks-425a9.appspot.com",
  messagingSenderId: "918568419416",
  appId: "1:918568419416:web:402c6a651aedb6cbbc0a2d"
};


const app = initializeApp(firebaseConfig);

export const db = () => app