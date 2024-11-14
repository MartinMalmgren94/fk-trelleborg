import React from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirebaseApp } from '../../services/firebase/firebase';
import { useNavigate, useLocation } from "react-router-dom";

/**
 * The function `withAuthProtection` is a higher-order component in React that adds authentication
 * protection to a wrapped component by checking the user's authentication status and redirecting if
 * not authenticated.
 * @returns The `withAuthProtection` function returns a higher-order component that wraps the
 * `WrappedComponent` with authentication protection. The ProtectedComponent returned by
 * `withAuthProtection` manages the user authentication state, redirects to the home page if the user
 * is not authenticated, and passes the `user` prop to the `WrappedComponent`.
 */
function withAuthProtection(WrappedComponent) {
  return function ProtectedComponent() {
    const [user, setUser] = React.useState(null);
    const auth = getAuth(getFirebaseApp());
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user || null);
      });

      return () => unsubscribe();
    }, [auth]);
    React.useEffect(() => {
      if (!user || user == null) {
        if(location.pathname != "/"){
            navigate("/")
        }
      }
    }, [user])
    
    return <WrappedComponent user={user} />;
  };
}

export default withAuthProtection;
