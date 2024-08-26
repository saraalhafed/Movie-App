import { createContext, useContext , useEffect, useState} from "react";
import { firebaseConfig } from './../config/firebase';
import { initializeApp } from 'firebase/app';


import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from 'firebase/auth';
  import { useNavigate } from 'react-router-dom';
  import { toast } from 'react-toastify';

const app = initializeApp(firebaseConfig); /* more safty give security for our app (we stor the data and make it not available  for athors) ,  */
const auth = getAuth(app); /* // Initialize Firebase Authentication and get a reference to the service */

 const AuthContext=createContext();


 export  const AuthProvider =({children})=>{
/* we need navigat to go to the home */
    const navigate = useNavigate();

 /* we need this state to stor the value whicht come from the auth obj ,the state can be any name but we called the same name in auth just to understand  */
 const [currentUser, setCurrentUser] = useState(false);/* not the same with auth.currentUser ,we need this state just to stor the value of the key inside the state ,what does the current do */

 // register a user (// Signed up ):
const registerUser = async (email, password, displayName) => {  /* this func will take this parameters from register page */
    try {                                       
      await createUserWithEmailAndPassword(auth, email, password);/* This function is part of Firebase Authentication. It creates a new user account using the provided email and password. */
      await updateProfile(auth.currentUser, { displayName });/* This function updates the profile information of the currently signed-in user.
       it sets the displayName property of the current user to the value provided. This is useful for adding additional information to the user’s profile, such as their name2. */
      setCurrentUser(auth.currentUser); /* const user = userCredential.user; */
      navigate('/');
      toast.success('Registered Successfully!');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
    }}
    /* This function ensures that after a user registers, their profile is updated, they are redirected to the home page, and appropriate messages are displayed based on the outcome. */
/* ------------------------------------------- */
  // login a user (Sign in existing users):

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
      toast.success('Logged in Successfully!');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
    }
  };
/* When you call this function, Firebase attempts to authenticate the user with the provided email and password. If the credentials are correct, the user is signed in, and you can access their user information through the auth.currentUser proper */

/*    //// */
 // track user:
 const userObserver = () => {
    /* onAuthStateChanged(auth, callback): Listens for changes in the user’s authentication state. */
    onAuthStateChanged(auth, (user) => {
      if (user) {     /* Checks if a user is logged in. */
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });  /*  Updates the state with the logged-in user’s information. */
      } else {
        setCurrentUser(false);  /* Resets the state when the user logs out. */ 
      } /*  it take false because we need to use CurrentUser in another page CurrentUse to toggle login register */
    });
  };

/* ----------------- */
useEffect(() => {
    // I start the execution of userObserver 
    /*user info come from firebase  page (ousid our app) :it take time, get info of user,triggert one time is enough ,
    ( this func an asyn func:get data from another external page  it is sideEffect)*/
    userObserver();
  }, []);
  /* --------------------- */
  // authenticate with provider.:
   /* from  firebase,documentation,Authentification,web,google,5step:2 */
   const signUpProvider = async () => {   /* very important to make asyn func */
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/');
      toast.success('Logged in successfully !');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
    }
  };
/* ------------------- */
// logout:To sign out a user, call signOut: from web,psswordAuthentification
const logOut = () => {
    signOut(auth);   // Sign-out successful.
    console.log('Logged out successfully !');
    navigate('/');
  };
/* ---------------- */
// forgot password: web,ManagerUser,(Send a password reset email)
const forgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);/* send me an email to set my password */
      toast.success('Password resent link sent. Please check your email!');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
    }
  };


  const values = {
    currentUser,
    registerUser,
    signIn,
    signUpProvider,
    logOut,
    forgotPassword,
  };


 return (
    <AuthContext.Provider value={{values}}>
        {children}
    </AuthContext.Provider>
 )

 }
 /* custom hook ,useContext */
export const useAuth =()=>useContext(AuthContext)


/* to use backend service i use firebase ,
1-we create a project firebase and get the Authentication and it method*/