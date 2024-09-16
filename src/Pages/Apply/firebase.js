
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

 const firebaseConfig = {
  apiKey: "AIzaSyA5Qcx7e2yAPRDDV_23chIXN3rs-Xr2ixs",
  authDomain: "site-860ef.firebaseapp.com",
  projectId: "site-860ef",
  storageBucket: "site-860ef.appspot.com",
  messagingSenderId: "1042522307409",
  appId: "1:1042522307409:web:c011d4280232208a54b170",
  measurementId: "G-98F715LCE4"
  };


const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

 export { storage };
