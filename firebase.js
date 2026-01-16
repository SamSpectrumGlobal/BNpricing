import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlHj8UtV-rKJtx77B8j2SZ0iXy9K6q9Sc",
  authDomain: "mattress-price-calc.firebaseapp.com",
  projectId: "mattress-price-calc",
  storageBucket: "mattress-price-calc.firebasestorage.app",
  messagingSenderId: "990770914138",
  appId: "1:990770914138:web:ca343435b2b8681d198963",
  measurementId: "G-X3RZ7T923C"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
