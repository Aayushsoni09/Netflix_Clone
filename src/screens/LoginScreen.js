import React,{useState} from 'react'
import './loginscreen.css'
import SignUpScreen from './SignUpScreen'
function LoginScreen() {
const[signIn,setSignIn]=useState(false)
    return (

        <div className="loginscreen">
            <div className="loginscreen__background">
            <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            className="loginscreen__logo"
            alt="logo"
            />
            <button onClick={()=>setSignIn(true)} className="loginscreen__button">Sign In</button>
            <div className="loginscreen__gradient" />
            </div>
            <div className="loginscreen__body">
                {signIn?(<SignUpScreen />):(

                    <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership </h3>
                    <div className="loginscreen__input">
                        <form>
                            
                            <button onClick={()=>setSignIn(true)} className="loginscreen__getstarted">GET STARTED</button>
                        </form>

                    </div>
                    </>
                )}
               
            </div>
            
        </div>
    )
}

export default LoginScreen
