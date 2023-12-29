import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import app from "../../Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic()

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const emailSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      
      setUser(user);
      if (user) {
        const userInfo = { email: user.email }
        axiosPublic.post('/jwt', userInfo)
          .then(res => {
            if (res.data.token) {
            localStorage.setItem('access-token',res.data.token)
          }
        })
      }
      else {
        localStorage.removeItem('access-token')
      }
      setLoading(false);

     
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authinfo = {
    emailSignUp,
    emailLogin,
    user,
    logOut,
    loading,
    googleLogin,
    
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
