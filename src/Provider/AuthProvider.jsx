import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName]= useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(null);
  const [theme, setTheme] = useState("light"); // State for theme

  const handleCardClick = async (name) => {
    try {
      const response = await fetch(`https://brand-shop-server-two-tau.vercel.app/products/${name}`);
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser => {
      setUser(currentUser)
      setLoading(false);
    }))

    return () => {
      unSubscribe()
    }
  },[])

  const userLogout = () => {
    setLoading(true);
    return signOut(auth)
  }

  const info = {
    loading,
    createUser,
    userLogin,
    googleLogin,
    userLogout,
    setUserName,
    setUserPhoto,
    user,
    userName,
    userPhoto,
    handleCardClick,
    products,
    setLoading,
    theme, 
    setTheme
  }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;