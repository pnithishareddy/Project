function Login() {
  return (
    <div className="auth">
      <div className="auth-card">
        <h2>Login</h2>

        <input type="email" placeholder="Email Address" /> <br/>
        <input type="password" placeholder="Password" />  <br/>

        <button>Login</button>

        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;