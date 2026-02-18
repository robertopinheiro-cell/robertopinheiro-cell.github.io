
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// ATENÇÃO: COPIE AS CREDENCIAIS DO SEU PROJETO FIREBASE AQUI
const firebaseConfig = {
  apiKey: "AIzaSyCafmoBpitp3Brq_bGjjC8UKByjWvMz1XY",
  authDomain: "gitcomfire.firebaseapp.com",
  projectId: "gitcomfire",
  storageBucket: "gitcomfire.firebasestorage.app",
  messagingSenderId: "351032531331",
  appId: "1:351032531331:web:824661fc9afcba3fae3eb6",
  measurementId: "G-SH3C87QG72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
