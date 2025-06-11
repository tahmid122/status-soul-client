import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AuthContextProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const [dbUser, setDbUser] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const authDetails = {
    user,
    loading,
    createUser,
    loginUser,
    logOut,
    dbUser,
    setDbUser,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    if (!user && !user?.email) return;
    if (user?.email) {
      axiosSecure
        .get(`/users?email=${user.email}`)
        .then((res) => setDbUser(res.data))
        .catch((error) => console.log(error));
    }
  }, [user, axiosSecure]);
  return (
    <AuthContext.Provider value={authDetails}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
