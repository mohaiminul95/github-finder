import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBpPtf-pdV7PHxrLkOMzruDHoQbyF8RLaU",
    authDomain: "react-crud-c9386.firebaseapp.com",
    databaseURL: "https://react-crud-c9386-default-rtdb.firebaseio.com",
    projectId: "react-crud-c9386",
    storageBucket: "react-crud-c9386.appspot.com",
    messagingSenderId: "187120090681",
    appId: "1:187120090681:web:0c33ddb88174eb011457e8"
  };

const firebaseDB = firebase.initializeApp(firebaseConfig);
export default firebaseDB.ref();
