import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAZXimGj1r-CFzjsnY7EdQ_I69ni_1MRck",
  authDomain: "live-chat-bd94b.firebaseapp.com",
  projectId: "live-chat-bd94b",
  storageBucket: "live-chat-bd94b.appspot.com",
  messagingSenderId: "420525990596",
  appId: "1:420525990596:web:4b272a9cf97e8c43aa9f91"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
