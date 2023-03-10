const firebaseConfig = {
    apiKey: "AIzaSyAri_MHTyNs1CaZ-V2VpPo_-xLrSiKsuY8",
    authDomain: "sporstsmd.firebaseapp.com",
    projectId: "sporstsmd",
    storageBucket: "sporstsmd.appspot.com",
    messagingSenderId: "985116999667",
    appId: "1:985116999667:web:e3a4376f02418a3bc05c86",
    measurementId: "G-VCMY8C4GJT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();