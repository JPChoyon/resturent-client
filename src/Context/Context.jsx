import app from "../../firebase.config";
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
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  // sorting function
  const sorting = () => {
    dispatchEvent({ type: "GET_SORT_VALUE" });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const userEmail = user?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(user);
      setLoading(false);
      if (user) {
        axios
          .post(
            "https://hotel-booking-server-blush.vercel.app/jwt",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => console.log(res.data));
      } else {
        axios
          .post(
            "https://hotel-booking-server-blush.vercel.app/logout",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("token is : ", res.data);
          });
      }
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
    sorting,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
