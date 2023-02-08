// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDYN_o4Ect4fnMn9VKfsGWsf237nwva3QA",
    authDomain: "unibake-website.firebaseapp.com",
    databaseURL: "https://unibake-website-default-rtdb.firebaseio.com",
    projectId: "unibake-website",
    storageBucket: "unibake-website.appspot.com",
    messagingSenderId: "753118309805",
    appId: "1:753118309805:web:0795733899f4f9d2c9c524",
    measurementId: "G-242D2QV1EZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);