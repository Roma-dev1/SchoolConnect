import { auth } from "./firebase.js";

import { signInWithEmailAndPassword } 
from 
"https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

const form = document.getElementById("loginForm");

const message = document.getElementById("loginMessage");

form.addEventListener("submit",
function(event) {
    event.preventDefault();

  const email = 
    document.getElementById("email").value;

  const password = 
    document.getElementById("password").value;

  signInWithEmailAndPassword(auth,
  email, password)
    
      .then(() => {
  message.textContent = "Login successful! Welcome back.";

        window.location.href = "home.html";
})
      .catch((error) => {
           message.textContent = 
             error.message;
      });
});
