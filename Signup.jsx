import { useState } from "react";
import API from "../api/api";
import "./auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await API.post("/auth/signup", {
        name,
        email,
        password,
      });

      if (res.data.error) {
        alert(res.data.error);
      } else {
        alert(res.data.message);
        window.location.href = "/login";
      }
    } catch (err) {
      alert("Signup failed ❌");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Signup</h2>

        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>Signup</button>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;