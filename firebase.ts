// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc7punHUDrBjR6bxVJ6Ib6efkS56_swUI",
  authDomain: "netflix-clone-nextjs-25ae8.firebaseapp.com",
  projectId: "netflix-clone-nextjs-25ae8",
  storageBucket: "netflix-clone-nextjs-25ae8.appspot.com",
  messagingSenderId: "824163438278",
  appId: "1:824163438278:web:74df8a4f22787a1b1811c7",
  databaseURL:"https://netflix-clone-nextjs-25ae8-default-rtdb.firebaseio.com/"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }