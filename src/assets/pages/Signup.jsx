import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./SignUp.css"
import logo from "../components/Header/head-image/web-logo.png"

function SignUp({setUser}) {
  const [form, setForm] = useState({
    firstName:"",
    lastName:"",
    username: "",
    phone:"",
    email: "",
    password: "",
    confirmpassword:"",

  });

  const [error, setError] = useState("");

  const changed = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitted = (e) => {
    e.preventDefault();

    if(form.password !== form.confirmpassword){
        setError("Passwords do not match!");
        return;
    }
    setError("")
    setUser(form);
  };

  return (
      <div className="SignUp">
        <img src={logo} className="weblogo"/>
        <h1>Sign Up</h1>
        <form onSubmit={submitted}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={changed}
          
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
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
            type="tel"
            minLength={10}
            maxLength={10}
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={changed}

            />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={changed}
          
          />
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            value={form.confirmpassword}
            onChange={changed}
          
          />
          <Link to="/"><button type="submit">Create Profile</button></Link>
        </form>
      </div>
  );
}

export default SignUp;