import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

<<<<<<< HEAD


const config = {
  apiKey: "AIzaSyD0n5tTxB1oPnJghXJSu03kCsH36kCq3w0",
  authDomain: "aikon-e1ba6.firebaseapp.com",
  projectId: "aikon-e1ba6",
  storageBucket: "aikon-e1ba6.appspot.com",
  messagingSenderId: "283145900428",
  appId: "1:283145900428:web:662ea099761b4e244a06a9",
  measurementId: "G-50JY4810PF"
}

const firebaseApp = firebase.initializeApp(config)

=======
const firebaseConfig = {
  apiKey: "AIzaSyBKB4L3qyD-QHCovEvntQS3HRuOJBVSkno",
  authDomain: "udemy-vue-projects.firebaseapp.com",
  databaseURL: "https://udemy-vue-projects.firebaseio.com",
  projectId: "udemy-vue-projects",
  storageBucket: "udemy-vue-projects.appspot.com",
  messagingSenderId: "25092947019",
  appId: "1:25092947019:web:1cd42f080ff63e1c63e1ce"
};

// init firebase
firebase.initializeApp(firebaseConfig)
>>>>>>> parent of f1a8988 (auth guard)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp



export { projectAuth, projectFirestore, timestamp, firebaseApp, config }
