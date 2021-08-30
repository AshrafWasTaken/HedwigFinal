import firebase from "firebase/app";
import "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTDQu_RpQg9uoa9GLNWH4vfSur0k-jFsY",
  authDomain: "hedwig-aa0e2.firebaseapp.com",
  projectId: "hedwig-aa0e2",
  storageBucket: "hedwig-aa0e2.appspot.com",
  messagingSenderId: "406975524732",
  appId: "1:406975524732:web:cad698273b8828fd3abef9",
};
const Firebase = firebase.initializeApp(firebaseConfig);
export const ft = Firebase.firestore();
export default Firebase;
