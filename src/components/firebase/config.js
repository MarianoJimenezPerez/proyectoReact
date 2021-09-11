import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAjyaCJmItwIa-5m2EsgMa_Z8XKqleyxUU",
    authDomain: "react1-eb519.firebaseapp.com",
    projectId: "react1-eb519",
    storageBucket: "react1-eb519.appspot.com",
    messagingSenderId: "506851651254",
    appId: "1:506851651254:web:255f442e0422c19e01c017"
}

const app = firebase.initializeApp(firebaseConfig)

export function getFirebase(){
    return app
}
export function getFirestore(){
    return firebase.firestore(app)
}