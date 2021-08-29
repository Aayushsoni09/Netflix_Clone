import React,{useRef} from 'react';
import './signUpScreen.css';
import {auth} from '../firebase'
function SignUpScreen() {
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
    const register=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser)
        })
        .catch((error)=>{
            alert(error)
        })
    }
    const signIn=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser)
        })
        .catch((error)=>{
            alert(error)
        })
    }
    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In/Sign Up</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                
                <h4><span className="signUpScreen__gray">New to Netflix? </span>
                 <span className="signUpScreen__link" onClick={register}>Sign Up Now</span></h4>
                 <h6>In case you are new to netflix, enter the credentials and hit Sign Up Now</h6>
            </form>
        </div>
    )
}

export default SignUpScreen
