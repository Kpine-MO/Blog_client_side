// import React, { useState } from 'react'
// import "../css/SignUp.css"

// function SignUp() {

//     const[firstName, setFirstName] = useState("")
//     const[lastName, setLasttName] = useState("")
//     const[userName, setUserName] = useState("")
//     const[password, setPassword] = useState("")
//     const[email, setEmail] = useState("")

//     async function handleSubmit(e) {
//         e.preventDefault()

//         const user = {
//             first_name: firstName,
//             last_name: lastName,
//             user_name: userName,
//             email: email,
//             password: password
//         }

//         let result = await fetch("http://localhost:9292/users", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify(user),
//           })

//           result = await result.json()
      
//           setFirstName("")
//           setLasttName("")
//           setUserName("")
//           setPassword("")
//           setEmail("")
//     }

//   return (
//     <div className='sign_up'>
//         <form onSubmit={handleSubmit}>

//         <h1 className='H1'>B.Blogs</h1>
//         <h3 className='H2'>Welcome</h3>
//         <h6 className='sign_P'>Sign Up to B.Blog</h6>

//             <input className='sign_input' type="text" name= "first name" value={firstName} onChange={(e)=> setFirstName(e.target.value)} placeholder='first name'/>

//             <input className='sign_input' type="text" name= "last name" value={lastName} onChange={(e)=> setLasttName(e.target.value)} placeholder='last name'/>

//             <input className='sign_input' type="text" name= "user name" value={userName} onChange={(e)=> setUserName(e.target.value)} placeholder='user name'/>

//             <input className='sign_input' type="email" name= "email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='email'/>
  
//             <input className='sign_input' type="password" name= "password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='password'/>
//             <br/>
//             <button className='btn_signup' type='submit'>post</button>
//         </form>
//     </div>
//   )
// }

// export default SignUp