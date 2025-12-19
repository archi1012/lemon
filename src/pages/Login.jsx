import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login to LEMON 🍋</h2>
        <p>Welcome back! Please login to your account.</p>

        <form>
          <input
            type="email"
            placeholder="Email address"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit">Login</button>
        </form>

        <div className="login-footer">
          <span>New to LEMON?</span>
          <a href="#">Create an account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
