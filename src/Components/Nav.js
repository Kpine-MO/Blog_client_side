import React from 'react'
import { NavLink } from "react-router-dom";
import '../css/Nav.css'



function Nav() {
  return (
    <div className='nav'>
        <h1>B.Blogs</h1>
        <p>behind good reads</p>
        <div className='btn'>
           <NavLink className='grey btn_nav ' to="/sign_up">Sign Up</NavLink>
           <NavLink className='blue btn_nav ' to="/login">Login</NavLink>
           
        </div>
        <ul>
          <NavLink className='li' style={{textDecoration: "none"}} to="/">HOME</NavLink>
          <NavLink className='li' style={{textDecoration: "none"}} to="/my_account">MY ACCOUNT</NavLink>
          <NavLink className='li' style={{textDecoration: "none"}} to="/post">POST AN ARTICLE</NavLink>
        </ul>
    </div>
  )
}

export default Nav