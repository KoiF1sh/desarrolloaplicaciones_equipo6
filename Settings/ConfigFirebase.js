import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config = {
    apiKey: "AIzaSyASHjSNsvrnkLWf4Hd_uYA4Wf85KE4NJgY",
    authDomain: "proyectonombrespr.firebaseapp.com",
    databaseURL: "https://proyectonombrespr-default-rtdb.firebaseio.com",
    projectId: "proyectonombrespr",
    storageBucket: "proyectonombrespr.appspot.com",
    messagingSenderId: "517159642401",
    appId: "1:517159642401:web:c4ee4e2bf6d21a3e1f0a60",
    measurementId: "G-9SVRFTZXPP"
}

const app = initializeApp(config);
export const firebase = getDatabase(app);
