import { initializeApp } from "firebase/app";

let firebaseConfig;

/**
 * The function `getFirebaseApp` initializes a Firebase app using configuration values from environment
 * variables.
 */
export const getFirebaseApp = () => {
  if(!firebaseConfig) {
    try {
      firebaseConfig = initializeApp({
      apiKey: import.meta.env.VITE_apiKey,
      authDomain: import.meta.env.VITE_authDomain,
      projectId: import.meta.env.VITE_projectId,
      storageBucket: import.meta.env.VITE_storageBucket,
      messagingSenderId: import.meta.env.VITE_messagingSenderId,
      appId: import.meta.env.VITE_appId,
      measurementId: import.meta.env.VITE_measurementId
    });
    } catch (error) {
      console.log("Error on init firebase: ", error);
    }
  }
}


  