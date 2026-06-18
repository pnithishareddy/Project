function Signup() {
  return (
    <div className="auth">
      <div className="auth-card">
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" /> <br/>
        <input type="email" placeholder="Email Address" /> <br/>
        <input type="password" placeholder="Password" /> <br/>

        <button>Create Account</button> <br/>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;