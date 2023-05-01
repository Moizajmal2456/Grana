import { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { HomePage } from './Pages/HomePage';
import { BuyPage } from './Pages/BuyPage';


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
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/buy' element={<BuyPage/>}/>
    </Routes>
    </BrowserRouter>
    );
}

export default App;
