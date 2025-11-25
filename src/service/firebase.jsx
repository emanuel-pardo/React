
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk9ywQh_DUA694RX4Zt1uO6EMxnuwLhE0",
  authDomain: "hilos-ecommerce.firebaseapp.com",
  projectId: "hilos-ecommerce",
  storageBucket: "hilos-ecommerce.firebasestorage.app",
  messagingSenderId: "2325170610",
  appId: "1:2325170610:web:0e15d62fa609b317233cab"
};

const app = initializeApp(firebaseConfig);
export const dataBaseFS = getFirestore(app);