import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

onAuthStateChanged(auth, user => {
  if (!user) {
    location.replace("index.html");
  }
});

window.logout = function () {
  signOut(auth)
    .then(() => {
      location.replace("index.html");
    })
    .catch(err => {
      alert(err.message);
    });
};
