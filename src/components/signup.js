import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../components/signup.css"

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Form submit handler
  const handleSubmit = async () => {
    // Basic validation to ensure all fields are filled
    if (!name || !email || !password || !mobile || !address) {
      toast.error("All fields are required.");
      return;
    }

    const data = {
      name,
      email,
      password,
      mobile: String(mobile),  // Ensure mobile is a string
      address,
    };

    try {
      // Make the POST request to the backend
      const response = await fetch("http://localhost:4000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // Log the result to debug
      console.log(result);

      // Check if the response was a failure (e.g., validation error)
      if (response.status === 400) {
        setErrors(result.errors || {});
        toast.error(result.message || "Something went wrong.");
        return;
      }

      // Check if the response is not ok (e.g., server error)
      if (!response.ok) {
        toast.error(result.message || "Something went wrong.");
        return;
      }

      // Clear errors and show success
      setErrors({});
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      // Handle any errors like network failure
      toast.error(error.message || "An error occurred.");
    }
  };

  return (
    <div id="Sign-Up">
      <form className="container">
        <h1>SignUp</h1>
        <div className="box">
          <label htmlFor="text">Name: </label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors && errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="box">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
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
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors && errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="box">
          <label htmlFor="number">Mobile No: </label>
          <input
            type="text" // Changed to text to allow mobile numbers with special chars
            name="number"
            id="number"
            placeholder="Enter your Mobile No"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          {errors && errors.mobile && <p className="error">{errors.mobile}</p>}
        </div>
        <div className="box">
          <label htmlFor="text">Address: </label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          {errors && errors.address && <p className="error">{errors.address}</p>}
        </div>
        <div className="submit-button">
          <button type="button" onClick={handleSubmit} className="button">
            Submit
          </button>
        </div>
        <p className="check">
          If you are already registered, then <a href="#">Click here</a>.
        </p>
      </form>
    </div>
  );
}
