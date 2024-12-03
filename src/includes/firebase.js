import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyCgEilHug2w2IezUHSZaHcTN15Hu6Q1WU0',

  authDomain: 'music-55b93.firebaseapp.com',

  projectId: 'music-55b93',

  storageBucket: 'music-55b93.appspot.com',

  messagingSenderId: '55257035009',

  appId: '1:55257035009:web:add3630764fbf588c3eb00',

  measurementId: 'G-GHZD4ZQ8V9'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, songsCollection, commentsCollection, storage }
