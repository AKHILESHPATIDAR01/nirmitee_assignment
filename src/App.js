import { useEffect, useState } from 'react';
import './App.css';
import firee from './fire';
import Home from './Home';
import Login from './Login';

const {db, fire} = firee

function App() {
  const [user , setUser] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [emailError , setEmailError] = useState("");
  const [passwordError , setPasswordError ] = useState("");
  const [hasAccount , setHasAccount] = useState(false);


  const clearInput = ()=>{
    setEmail("");
    setPassword("");
  }

  const clearErrors = ()=>{
    setEmailError("");
    setPasswordError("");
  }

  const handleLogin = ()=>{
    clearErrors();
    fire.auth().signInWithEmailAndPassword(email,password)
    .catch((err)=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/invalid-email":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    })
  }

  const handleSignup = ()=>{
    clearErrors();
    fire.auth().createUserWithEmailAndPassword(email,password)
    .catch((err)=>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/week-password":
          setPasswordError(err.message);
          break;
      }
    })
  }

  const handleLogout= ()=>{
    fire.auth().signOut();
  }

  const authListener = ()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        clearInput();
        setUser(user);
      }else{
        setUser("");
      }
    })
  }


  useEffect(()=>{
    authListener();
  },[])

  return (
    <div className="main">
      {user ? (
          <Home handleLogout={handleLogout} />
      ) : ( 
        <Login 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
      ) }

      

      

    </div>
  );
}

export default App;
