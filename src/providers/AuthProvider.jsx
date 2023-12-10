import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase-auth/firebase.config';


export const AuthContext =createContext(null);

const AuthProvider = ({children}) => {
    
    const [user,setUser] =useState(null);
    const [loading ,setLoading]=useState(true);

    const auth = getAuth(app);
    const createUser =(email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUsername =(username) => {
        return updateProfile(auth.currentUser, {
            displayName: username, photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
    }
    const logIn=(email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut =()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
          });
        return ()=>{
            unsubscribe();
        }
    }, [])
    const authInfo={
        user,
        createUser,
        updateUsername,
        logIn,
        logOut,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;