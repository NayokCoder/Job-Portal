import { useEffect, useState } from "react";
import AuthContext from "./AuthContec";
import auth from "../FIrebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signIn(auth, email, password);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      return unsubscribed();
    });
  }, []);
  const authinfo = { user, loading, createUser, signIn };

  return <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
