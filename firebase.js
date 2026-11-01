 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js"
  import { getFirestore } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCa2aWLl2NPqmO0jPi9IRWWVuiGtsalx-Y",
    authDomain: "schoolconnect-1a0ee.firebaseapp.com",
    projectId: "schoolconnect-1a0ee",
    storageBucket: "schoolconnect-1a0ee.firebasestorage.app",
    messagingSenderId: "664641369449",
    appId: "1:664641369449:web:bcd42fe1eecac61fb539f8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
export const db = getFirestore(app);
