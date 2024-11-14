import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword  } from 'firebase/auth';
import { getFirebaseApp } from '../firebase/firebase'; // Ensure you have firebase initialized in a separate file

/**
 * The `useAuthStatus` function uses Firebase authentication to track and update the authentication
 * status of a user in a React component.
 * @returns The `useAuthStatus` custom hook is returning an object with a single property
 * `isAuthenticated`, which holds the current authentication status (true if the user is logged in,
 * false if the user is not logged in).
 */
export function useAuthStatus() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Holds authentication status

  useEffect(() => {
    const auth = getAuth(getFirebaseApp());
    
    // Firebase listener to track auth status changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // User is logged in
      } else {
        setIsAuthenticated(false); // User is not logged in
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return { isAuthenticated };
}

/**
 * The function `authWithEmail` takes an email and password, attempts to sign in with Firebase
 * authentication, and returns a Promise that resolves with the user if successful or rejects with an
 * error message if there is an error.
 * @param email - The `email` parameter is a string that represents the email address of the user
 * trying to authenticate.
 * @param password - The `password` parameter in the `authWithEmail` function is the password that the
 * user enters when trying to authenticate with their email. It is used along with the email to verify
 * the user's identity and grant access to the application or service.
 * @returns The `authWithEmail` function is returning a Promise. If the sign-in process is successful,
 * it resolves with the user object. If there is an error during the sign-in process, it rejects with
 * the error message.
 */
export function authWithEmail(email, password) {
  return new Promise(async (resolve, reject) => {
    try {
      const userCredential = signInWithEmailAndPassword(getAuth(getFirebaseApp()), email, password)
      resolve(userCredential.user); 
    } catch (error) {
      reject(error.message); 
    }
  })
}

