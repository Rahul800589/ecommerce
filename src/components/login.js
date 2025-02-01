import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../components/signup.css"
import { useDispatch } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    if (!email || !password) {
      toast.error("Both fields are required.");
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.status === 400) {
        setErrors(result.errors);
        toast.error(result.message || "Something went wrong.");
        return;
      }
      if (!response.ok) {
        toast.error(result.message || "Something went wrong.");
        return;
      }
      dispatch({ type: "LOGIN", payload: result });
      setErrors({});
      toast.success("Login Successful.");
      navigate('/shop'); // Redirect to the dashboard or homepage
    } catch (error) {
      toast.error(error.message || "An error occurred.");
    }
  };

  return (
    <>
      <div id="Login">
        <form className="container" style={{width: "50%"}}>
          <h1>Login</h1>
          <div className="box">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors && errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="box">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors && errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="submit-button">
            <button type="button" onClick={handleSubmit} className="button">
              Login
            </button>
          </div>
          <p className="check">
            Don't have an account? <a href="/register">Sign Up</a>
          </p>
        </form>
      </div>
    </>
  );
}
