import { initializeApp } from "firebase/app";

let firebaseConfig;

/**
 * The function `getFirebaseApp` initializes a Firebase app using configuration values from environment
 * variables.
 */
export const getFirebaseApp = () => {
  if(!firebaseConfig) {
    firebaseConfig = initializeApp({
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId
    });
  }
}


  