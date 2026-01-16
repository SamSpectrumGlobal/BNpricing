// auth.js
import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Enter email & password");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      location.replace("dashboard.html");
    })
    .catch(err => alert(err.message));
};

window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Enter email & password");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Account created. Now login."))
    .catch(err => alert(err.message));
};
