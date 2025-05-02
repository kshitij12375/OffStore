import './Login.css'


const Login = () => {
  return (
    <div className="login-container">
      <h2>Login Here</h2>
      

      <div className="input-field">
      <h4 className='text1'>welcome back !!! </h4>
        <h1>Sign in</h1>
        <label htmlFor="Email">Email:</label>
        <input type="text" id="username" placeholder="Enter your Email" />
      </div>
      <div className="input-field">
        <div className="pass">
        <label htmlFor="password">Password:</label>
        <label htmlFor="password"> <a className='forget' href="forgot password page"> forget password ?</a></label>
        </div>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>
     
      <button className="login-button">SIGN IN </button>
      <p className='text'> Don't have an account ? </p>
      <a className='link' href="sign up page">Sign up</a>

    </div>
  );
};

export default Login;
