import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.login = function () {
  const email = email.value;
  const password = password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => location.href = "dashboard.html")
    .catch(err => alert(err.message));
};

window.signup = function () {
  const email = email.value;
  const password = password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Account created"))
    .catch(err => alert(err.message));
};

onAuthStateChanged(auth, user => {
  console.log(user ? "Logged in" : "Logged out");
});
