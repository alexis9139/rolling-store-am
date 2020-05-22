import * as firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBtYunMtP66ohMXQ694hWmgB80WyvPLHrw",
    authDomain: "rolling-store-am.firebaseapp.com",
    databaseURL: "https://rolling-store-am.firebaseio.com",
    projectId: "rolling-store-am",
    storageBucket: "rolling-store-am.appspot.com",
    messagingSenderId: "748068462045",
    appId: "1:748068462045:web:118d8b69b6534d015fea34"
};

firebase.initializeApp(firebaseConfig)


const firebaseApp = firebase;

export { firebaseApp };