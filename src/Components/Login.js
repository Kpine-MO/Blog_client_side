import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import "../css/Login.css"

function Login() {

    const[email, setEmail] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('user-info')){
            navigate("/login")
        }
    }, [])

   async function handleSubmit(e) {
        e.preventDefault()

        let data = {email, password}

        let result = await fetch("http://localhost:9292/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
          })
          result = await result.json()
          localStorage.setItem("user-info",JSON.stringify(result))
          navigate("/my_account")
        
    }

  return (
    <div className='login_form'>
        <form onSubmit={handleSubmit} >
            <input className='login_input' type="email" required placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <input className='login_input' type="password" required placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button className='btn_login' type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login