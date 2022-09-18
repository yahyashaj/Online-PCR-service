import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBiCriwzKF2gTgaOYwc5Nf5-FqzKBMCwCY",
  authDomain: "online-pcr-4e439.firebaseapp.com",
  projectId: "online-pcr-4e439",
  storageBucket: "online-pcr-4e439.appspot.com",
  messagingSenderId: "129188250160",
  appId: "1:129188250160:web:4acc6e5721178801ffa3f5",
  measurementId: "G-5RYMGFZ31F",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
