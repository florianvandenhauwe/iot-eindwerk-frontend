import firebase from 'firebase/app';
import 'firebase/firestore';

const initFirebase = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyBl43Jsn_HR4gmIG5zRMUBJcLJfDkH7tJo",
        authDomain: "iot-eindopdracht.firebaseapp.com",
        projectId: "iot-eindopdracht",
        storageBucket: "iot-eindopdracht.appspot.com",
        messagingSenderId: "818169358203",
        appId: "1:818169358203:web:fde39312719db9df553fde"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);    
};

export default initFirebase;