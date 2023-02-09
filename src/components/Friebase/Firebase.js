// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdjQH1v2lAOz6E2DGUkrk7mbC7_kUxp0E",
  authDomain: "repliq-aab99.firebaseapp.com",
  projectId: "repliq-aab99",
  storageBucket: "repliq-aab99.appspot.com",
  messagingSenderId: "794735673964",
  appId: "1:794735673964:web:203a7ffbe8bb4d0bd80e49",
  measurementId: "G-EXCX7CPYJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app