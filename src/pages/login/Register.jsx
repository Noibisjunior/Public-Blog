import  { useState } from 'react'
import './login.css';
import back from '../../assets/images/register.jpg';


const Register = () => {
 const [email,setEmail] = useState('')
 const [username,setUsername] = useState('')
 const [password,setPassword] = useState('')

 async function register(event){
  event.preventDefault(); //prevent the default behaviour of the browser

const response = await fetch('http://localhost:5000/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email,username, password }),
});
// const result = await response.json()
console.log(response)

if(response.status === 200) {
  alert('registration successful')
}else{
  alert('registration failed')
}
 }


  return (
     <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Register</h3>
              <h1>My account</h1>
            </div>
            </div>
    <form onSubmit={register}>
      <h1>Register</h1>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='button'>Register</button>
    </form>
    </div>
    </section>
  );
}

export default Register;






// import React from 'react';

//  const Regsiter = () => {
//   return (
//     <>
//       <section className="login">
//         <div className="container">
//           <div className="backImg">
//             <img src={back} alt="" />
//             <div className="text">
//               <h3>Register</h3>
//               <h1>My account</h1>
//             </div>
//           </div>

//           <form>
//             <span>Email address *</span>
//             <input type="text" required />
//             <span>Username *</span>
//             <input type="text" required />
//             <span>Password *</span>
//             <input type="password" required />
//             <span>Conform Password *</span>
//             <input type="password" required />
//             <button className="button">Register</button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Regsiter