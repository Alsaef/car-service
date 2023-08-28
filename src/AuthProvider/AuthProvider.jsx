/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword,signOut   } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user,setuser]=useState(null)
  const [loading,setloading]=useState(true)

  const createAccount=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
  }
  const singIn=(email,password)=>{
      return signInWithEmailAndPassword (auth,email,password)
  }
  const singout=()=>{
      return signOut(auth)
  }
  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser)
        setuser(currentUser)
        setloading(false)
    })
    return ()=>{
        return unSubscribe();
    }
  },[])
    const userInfo = {
        user,
        loading,
        createAccount,
        singIn,
        singout
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;