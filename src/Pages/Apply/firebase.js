
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyOPrtkwdAwgdDkChHTv_dRdz2rO2lJ6M",
  authDomain: "alianca-a14cf.firebaseapp.com",
  projectId: "alianca-a14cf",
  storageBucket: "alianca-a14cf.appspot.com",
  messagingSenderId: "191514961181",
  appId: "1:191514961181:web:bdc83ef2fbb50555e9edf4",
  measurementId: "G-3VGBPEN2YE"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

 export { storage };
