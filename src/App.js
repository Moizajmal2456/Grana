import { useState } from 'react';
import './App.css';
import { BuyWant } from './components/BuyWant/BuyWant';
import { Hero } from './components/Hero/Hero';
import { Navbar }from "./components/Navbar/Navbar";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Services } from './components/Services/Services';

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyDi6WCz09Yf8rdMRjRZs-Rbzi8J5ulAxdg",
    authDomain: "graana-b0424.firebaseapp.com",
    projectId: "graana-b0424",
    storageBucket: "graana-b0424.appspot.com",
    messagingSenderId: "929782308373",
    appId: "1:929782308373:web:0b6eb96fa248d4211a381c"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

 const [email , setEmail] = useState("anwar@gmail.com");
 const [password , setPassword] = useState("Pakistan1234");

 const createUser = () => {
 createUserWithEmailAndPassword(auth , email , password)
 .then((userCredential) => {
  console.log(userCredential.user);
 })
 .catch((error) => {
  console.log(error);
 });
 };

 const signInUser = () => {
 signInWithEmailAndPassword(auth , email , password).then((userCredential) => {
  console.log("Sign In User" , userCredential.user)
 })
 .catch((error) => {
  console.log(error);
 })
 };
 
  return (
    <>
    <Navbar/>
    <Hero/>
    <button onClick={createUser}>Create User</button>
    <button onClick={signInUser}> Sign In</button>  
    <BuyWant/>
    <Services/>
    </>
    );
}

export default App;
