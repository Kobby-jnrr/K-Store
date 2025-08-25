import React, {useState} from "react";
import "./Login.css"

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
      <h1>Sign Up</h1>
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
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
}

export default LoginPage;