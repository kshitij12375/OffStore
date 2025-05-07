import './Login.css';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); 
      // Redirect after login
      
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login Here</h2>

      <div className="input-field">
        <h4 className='text1'>Welcome back !!! </h4>
        <h1>Sign in</h1>
        <label>Email:</label>
        <input type="text" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="input-field">
        <div className="pass">
          <label>Password:</label>
          <a className='forget' href="#">Forget password?</a>
        </div>
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button className="login-button" onClick={handleLogin}>SIGN IN</button>

      <p className='text'>Don't have an account?</p>
      <a className='link' href="/signup">Sign up</a>
    </div>
  );
};

export default Login;
