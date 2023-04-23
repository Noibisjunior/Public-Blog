import './login.css';
import back from '../../assets/images/login.jpg';
import  {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  

  const Navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
console.log(response)
const data = await response.json()
console.log(data);
    if(response.status === 200) {
  setRedirect(true);
}else{
  alert('login failed')
}
    
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <form className="login" onSubmit={login}>
     <div className="container">
           <div className="backImg">
             <img src={back} alt="img" />
             <div className="text">
      <h1>Login</h1>
      </div>
      </div>
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
      <button className='button'>Login</button>
      </div>
    </form>
  );
};

export default LoginPage;




//  const Login = () => {
//   return (
//     <>
//       <section className="login">
//         <div className="container">
//           <div className="backImg">
//             <img src={back} alt="" />
//             <div className="text">
//               <h3>Login</h3>
//               <h1>My account</h1>
//             </div>
//           </div>

//           <form>
//             <span>Username or email address *</span>
//             <input type="text" required />
//             <span>Password *</span>
//             <input type="password" required />
//             <button className="button">Log in</button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;