var firebaseConfig = {
  apiKey: "AIzaSyDr5LodyV5pPv6dGnGNQtDKpe-7IntDXXc",
  authDomain: "authentication-8f052.firebaseapp.com",
  projectId: "authentication-8f052",
  storageBucket: "authentication-8f052.appspot.com",
  messagingSenderId: "479936034169",
  appId: "1:479936034169:web:fc18e92d2a0737a5c26ba8",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

function getData() {
  var userEmail = document.getElementById("email");
  var userPassword = document.getElementById("password");

  firebase
    .auth()
    .createUserWithEmailAndPassword(userEmail.value, userPassword.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // setTimeout(function () {
      //   window.location.href = "dashboard.html";
      // }, 2000);
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          alert("verification email sent!");
          // ...
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

function login() {
  var userEmail = document.getElementById("email");
  var userPassword = document.getElementById("password");

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail.value, userPassword.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

function forgetPassword() {
  var userEmail = document.getElementById("email");

  firebase
    .auth()
    .sendPasswordResetEmail(userEmail.value)
    .then(() => {
      alert("Password reset email sent!");
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

function loginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // IdP data available in result.additionalUserInfo.profile.
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

function loginWithGithub() {
  var provider = new firebase.auth.GithubAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = credential.accessToken;

      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // IdP data available in result.additionalUserInfo.profile.
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}
