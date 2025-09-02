import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Login.css";
import logo from "../components/Header/head-image/web-logo.png";

function LoginPage({setUser}) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changed = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitted = (e) => {
    e.preventDefault();
    setUser(form);
  };

  return (
      <div className="login-page">
        <img src={logo} className="weblogo"/>
        <h1>Sign In</h1>
        <form onSubmit={submitted}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={changed}
          
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={changed}
          
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={changed}
          
          />
          <button type="submit">Login</button>
          <p>Don't have an account yet? {""}
            <Link to="/signup" className="link">Click here</Link></p>
        </form>
      </div>
  );
}

export default LoginPage;