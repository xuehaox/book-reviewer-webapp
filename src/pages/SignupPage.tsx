import "./SigninPage.css";
import { useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-form">
      <h2>Signin</h2>
      <form>
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
        <button>Signup</button>
        <div>
          <span>Already have an account? </span>
          <a href="signin">Signin</a>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
