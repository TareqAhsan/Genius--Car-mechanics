import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const gitprovider = new GithubAuthProvider();
  const auth = getAuth();
  const signInUsingGoogle = () => {
    setIsLoading(true);
   return signInWithPopup(auth, provider)
     
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };
  // git sign in
  const signinUsingGit = () => {
    signInWithPopup(auth, gitprovider).then((result) => {
      console.log(result.user);
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    logOut,
    signInUsingGoogle,
    isLoading,signinUsingGit,setIsLoading
  };
};

export default useFirebase;
