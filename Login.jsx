import { useState } from "react";
import API from "../api/api";
import "./auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      if (res.data.error) {
        alert(res.data.error);
      } else {
        alert(res.data.message);

        // ✅ SAVE TOKEN
        localStorage.setItem("token", res.data.token);

        // 🔥🔥 ADD THIS LINE (VERY IMPORTANT)
        localStorage.setItem("user", JSON.stringify(res.data.user));

        window.location.href = "/";
      }
    } catch (err) {
      console.log(err);
      alert("Login failed ❌");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p>
          Don't have an account? <a href="/signup">Signup</a>
        </p>
      </div>
    </div>
  );
}

export default Login;