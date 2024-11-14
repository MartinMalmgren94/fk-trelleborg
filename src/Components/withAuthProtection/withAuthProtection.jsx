import React from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirebaseApp } from '../../services/firebase/firebase';
import { useNavigate, useLocation } from "react-router-dom";

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
