import React, { useContext, useEffect, useState } from 'react';
import {auth} from '../constants/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged, sendPasswordResetEmail , updateEmail, updatePassword} from 'firebase/auth';
const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [imageUrls, setImageUrls] = useState([]);
    const [loading,setLoading] = useState(true); //by default we are loading
    const options = [
        {value: '', text: 'Choose your role'},
        {value: 'Admin', text: 'Admin'},
        {value: 'User', text: 'User'},
      ];
    
      const [selected, setSelected] = useState(options[0].value);
    function signup(email,password) {
        return createUserWithEmailAndPassword(auth, email,password)
    }
    function login(email,password) {
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logout() {
        return signOut(auth);
      }
    function updateE(email) {
     return updateEmail(auth.currentUser,email)
    }
    function updatePass(password) {
     return updatePassword(auth.currentUser, password)
    }
    function resetPassword(email){
        return  sendPasswordResetEmail(auth, email)
    }
   
    useEffect(()=>{
        //at first it'll check whether the user is signIn or not
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setCurrentUser(currentUser)
        localStorage.setItem("Current User", JSON.stringify(currentUser))
        setLoading(false)
    })  
    return unsubscribe

    },[])

    
    const value ={
        currentUser, 
        signup,
        login,
        logout,
        resetPassword,
        updateE,
        updatePass,
        selected,
        setSelected,
        options,
        imageUrls, setImageUrls
    }
  return (
  <AuthContext.Provider value={value}>
{!loading && children}
  </AuthContext.Provider>  
  )
}

