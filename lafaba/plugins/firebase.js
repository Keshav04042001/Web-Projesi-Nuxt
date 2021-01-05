import  firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyANExIUoBuuQ7AWAh_eqi1gukEzQBT6Y9k",
    authDomain: "lafaba-web-proje.firebaseapp.com",
    databaseURL:"https://lafaba-web-proje-default-rtdb.firebaseio.com",
    projectId: "lafaba-web-proje",
    storageBucket: "lafaba-web-proje.appspot.com",
    messagingSenderId: "146144295313",
    appId: "1:146144295313:web:83041763404f001fc74230",
    measurementId: "G-WZN8ZQS954"
  };
  let app = null
    if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
    
    }
  
  // Initialize Firebase
//  firebase.initializeApp(firebaseConfig);
//  firebase.analytics();




export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase
