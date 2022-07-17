import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirrestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC6fzsr8lS-h_AFCHUXCZ-uOb9xA2yVI7o",
    authDomain: "hobbi-eshop.firebaseapp.com",
    databaseURL: "https://hobbi-eshop-default-rtdb.firebaseio.com",
    projectId: "hobbi-eshop",
    storageBucket: "hobbi-eshop.appspot.com",
    messagingSenderId: "741464360157",
    appId: "1:741464360157:web:98e3a4403f13c5ffeac734",
    measurementId: "G-JRQZWREH0K"
  };

  const app = getApps.lenght > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirrestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage};