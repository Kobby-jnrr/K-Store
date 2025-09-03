import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./Login.css";
import logo from "../components/Header/head-image/web-logo.png";
import {auth} from "./Firebase";
import { signInWithEmailAndPassword} from "firebase/auth";

function LoginPage({setUser}) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const mapAuthError = (err) => {
    switch (err.code) {
      case "auth/invalid-credential":
        return "Invalid email or Password";
      case "auth/user-not-found":
        return "No account found. Please check details.";
      case "auth/wrong-password":
        return "Incorrect Password.";
      case "auth/invalid-email":
        return "Please enter a valid email.";
      case "auth/network-request-failed":
        return "Network error. Check your connection and try again.";
      default:
        return err.message || "Something went wrong. Try again.";
    }
  };
  

  const changed = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitted = async(e) => {
    e.preventDefault();

    try {
      const userDetails = await signInWithEmailAndPassword(auth, form.email, form.password);
      const user = userDetails.user;
      setUser(user);
    } catch (err) {
      setError(mapAuthError(err));
      console.error(err);
    }
  };

  return (
      <div className="login-page">
        <img src={logo} className="weblogo"/>
        <h1>Sign In</h1>
        <form onSubmit={submitted}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={changed}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={changed}
            required
          />
          <button type="submit">Login</button>
          <p>Don't have an account yet? {""}
            <Link to="/signup" className="link">Click here</Link></p>
        </form>
        {error && <p className="errMsg">{error}</p>}
      </div>
  );
}

export default LoginPage;