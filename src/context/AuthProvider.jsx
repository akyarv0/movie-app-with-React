import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,

} from "firebase/auth";
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helper/ToastNotify";
import { GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";

const AuthContext = createContext();
export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      navigate("/login");
      toastSuccessNotify("Sign Up Successful");

      console.log(userCredential);
    } catch (error) {
      console.log(error);
      toastErrorNotify(error.message);
    }
  };
  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      toastSuccessNotify("Sign In Successful");
      console.log(userCredential);
    } catch (error) {
      console.log(error);
      toastErrorNotify(error.message);
    }
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        toastSuccessNotify("Logged out successfully");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("logged in");
        const { displayName, email, photoURL } = user;
        setCurrentUser({ displayName, email, photoURL });
      } else {
        console.log("logged out");
        setCurrentUser(false);
      }
    });
  };

  const googleProvider = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
        toastSuccessNotify("Sign In Successful");
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
  };

  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
  .then(() => {
   
    toastWarnNotify("Password reset link sent to your email");
  })
  .catch((error) => {
    toastErrorNotify(error.message);
  
  });


  };

  console.log(currentUser);

  const values = { currentUser, createUser, signIn, logOut, googleProvider, forgotPassword };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
