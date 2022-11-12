import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBASJN7wFfjfFJKSRcLHbh6y52hHq-cvGc",
    authDomain: "fir-a51ee.firebaseapp.com",
    databaseURL: "https://fir-a51ee.firebaseio.com",
    projectId: "fir-a51ee",
    storageBucket: "fir-a51ee.appspot.com",
    messagingSenderId: "908808914200",
    appId: "1:908808914200:web:ade868d7dc14e26f5d0a6d"
  };
firebase.initializeApp(firebaseConfig);
var database=firebase.database();
export default database;
  