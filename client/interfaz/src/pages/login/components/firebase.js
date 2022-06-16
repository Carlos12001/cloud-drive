import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
const firebaseConfig = {

    apiKey: "AIzaSyAJzXnK0THIp88qSxFAX644gac5XDCobrE",
  
    authDomain: "cloud-drive-108c3.firebaseapp.com",
  
    projectId: "cloud-drive-108c3",
  
    storageBucket: "cloud-drive-108c3.appspot.com",
  
    messagingSenderId: "114485468771",
  
    appId: "1:114485468771:web:76b307de62a28cb669a256"
  
  };
  
  export const app =initializeApp(firebaseConfig)
  export const storage = getStorage(app)