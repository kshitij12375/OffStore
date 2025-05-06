import './Login.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); 
    } catch (err) {
      setError('Signup failed. Email might already be in use.');
    }
  };

  return (
    <div className="login-container">
      <h2>Create Account</h2>

      <div className="input-field">
        <label>Email:</label>
        <input type="text" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="input-field">
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button className="login-button" onClick={handleSignup}>SIGN UP</button>

      <p className='text'>Already have an account?</p>
      <a className='link' href="/login">Login</a>
    </div>
  );
};

export default Signup;
