
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

 const firebaseConfig = {
    apiKey: "AIzaSyAOFbwM2WRUc4CcLLBZdVZlzphEwAsIpuY",
    authDomain: "site-fb218.firebaseapp.com",
    projectId: "site-fb218",
    storageBucket: "site-fb218.appspot.com",
    messagingSenderId: "105847302535",
    appId: "1:105847302535:web:3d0b1585fb16db0fff4b22",
    measurementId: "G-CNRV6XZJYP"
  };


const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

 export { storage };
