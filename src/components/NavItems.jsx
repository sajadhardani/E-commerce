

import logo from "../../src/assets/images/logo/logo.png"
import React, { useState } from 'react'
import { Link } from 'react-router-dom';




const Navitems = () => {

const [menuToggle, setMenuToggle] = useState(false);
const [socialToggle, setSocialToggle] = useState(false);
const [headerFixed, setHeaderFixed] = useState(false)

window.addEventListener("scroll", () => {
if(window.scrollY > 200) {
    setHeaderFixed(true)
}else{
    setHeaderFixed(false)
}
})

  return (
    //header top start
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
        <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}> 
            <div className='container'>
                <div className='header-top-area'>
                        <Link to="./signup" className='lab-btn text-white me-3' >Create Accout</Link>
                        <Link to="./login" >log in</Link>
                </div>
            </div>
        </div>

{/* header bottoms */}

<div className='header-bottom'>
    <div className='container'>
    <div className='header-wrapper'>
        {/* logo */}
        <div className='logo-search-acte'>
            <div className='logo'>
         <link to ={"/"}/>
             <img src={logo} alt="" />
            </div>
        </div>
        {/* menu area */}
        <div className="menu-area">
            <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active": "" }`}>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/Shop"> Shope </Link></li>
                    <li><Link to="/Blog"> Blog </Link></li>
                    <li><Link to="/About"> About </Link></li>
                    <li><Link to="/Contact"> Contact </Link></li>
                </ul>

               

            </div>
            {/* sign in and log in */}
             <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">Create Account</Link>
                <Link to="/login" className="d-none d-md-block">Log in</Link>

                {/* menu toggler */}
                <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>

                    <span></span>
                    <span></span>
                    <span></span>

                </div >

                {/* social troggler  */}
                <div className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}>  
                    
                <i className="icofont-info-square"></i>
                
                </div>
        </div>

    </div>
    </div>
    </div>

    </header>
  )
}

export default Navitems