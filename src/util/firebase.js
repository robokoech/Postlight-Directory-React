import firebase from 'firebase'
// for use in production these would be hidden via .env variables or some other security measure 
const firebaseConfig = {
  apiKey: "AIzaSyCB7AJi9xyu9KUKVlbpcFFko_VsF1BYrUw",
  authDomain: "postlight-directory.firebaseapp.com",
  databaseURL: "https://postlight-directory-default-rtdb.firebaseio.com",
  projectId: "postlight-directory",
  storageBucket: "postlight-directory.appspot.com",
  messagingSenderId: "704470666360",
  appId: "1:704470666360:web:20fac439ba100c6db0b18d"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;