import "./SigninPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSigninFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div className="auth-form">
      <h2>Signin</h2>
      <form onSubmit={onSigninFormSubmit}>
        <label>Email:</label>
        <input
          type={"email"}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type={"password"}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Signin</button>
        <div>
          <span>Don't have an account? </span>
          <a href="signup">Signup</a>
        </div>
      </form>
    </div>
  );
};

export default SigninPage;
