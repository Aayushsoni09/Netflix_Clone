import React,{useState,useEffect} from 'react'
import './Navbar.css'
import {useHistory} from 'react-router-dom'
function Navbar() {
const history=useHistory()    
const[show,handleShow]=useState(false)
const navbarTransition=()=>{

    if (window.scrollY >100 ){
        handleShow(true)
    }
    else{
        handleShow(false)
    }
}
useEffect(() => {
    window.addEventListener('scroll',navbarTransition)
    return () => {
        window.removeEventListener('scroll',navbarTransition)
    }
}, [])
    return (
        <div className={`navbar ${show && 'navbar__black'}`}>
            <div className="nav_content">
            <img className="netflix-image"
            onClick={()=>history.push("/")}
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="logo"/>

                <img className="netflix-avatar"
                    onClick={()=>history.push("/profile")}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="avatar"/>
            </div>
        </div>
    )
}

export default Navbar
