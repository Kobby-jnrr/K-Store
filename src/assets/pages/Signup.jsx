import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./SignUp.css";
import logo from "../components/Header/head-image/web-logo.png";
import {auth} from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp({setUser}) {
  const navigate = useNavigate();
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
  const [success, setSuccess] = useState("");

  const changed = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitted = async(e) => {
    e.preventDefault();

    if(form.password !== form.confirmpassword){
        setError("Passwords do not match!");
        return;
    }

    const mapAuthError = (err) => {
    switch (err.code) {
      case "auth/email-already-in-use":
        return "That email is already in use.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      case "auth/network-request-failed":
        return "Network error. Check your connection and try again.";
      default:
        return "Something went wrong. Try again.";
    }
  };

    try {
      const userDetails =  await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userDetails.user;
      setSuccess("User Profile Created Successfully! Redirecting");
      setError("");
      setTimeout(() => {navigate("/");}, 2000);
    } catch (err) {
      setError(mapAuthError(err));
      setSuccess("");
      console.error(err);
    }
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
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={changed}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={changed}
            required
          />
          <input
            type="tel"
            minLength={10}
            maxLength={10}
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
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
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            value={form.confirmpassword}
            onChange={changed}
            required
          />
          <button type="submit">Create Profile</button>
        </form>
        {error && <p className="errMsg">{error}</p>}
        {success && <p className="successMsg">{success}</p>}
      </div>
  );
}

export default SignUp;