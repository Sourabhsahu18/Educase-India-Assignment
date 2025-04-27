import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreateAccountPage.css";

// Reusable TextField component
const TextField = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  required = false,
  autoComplete = "on",
}) => (
  <div className="form-group">
    <label htmlFor={id} className="input-label">
      {label} {required && <span className="required">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      className="input-field"
      value={value}
      onChange={onChange}
      required={required}
      autoComplete={autoComplete}
    />
  </div>
);

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "Yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const checkForm = () => {
    const { fullName, phoneNumber, email, password } = formData;
    if (!fullName || !phoneNumber || !email || !password) {
      alert("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkForm()) {
      console.log("Form Submitted: ", formData);
      navigate("/setting");
    }
  };

  return (
    <div className="create-account-page">
      <div className="create-account-container">
        <div className="create-account-header">
          <h1>Create your<br />PopX account</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Phone Number"
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email Address"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
          <TextField
            label="Company Name"
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
          />

          <div className="radio-group">
            <p className="radio-label">
              Are you an Agency? <span className="required">*</span>
            </p>
            <div className="radio-options">
              {["Yes", "No"].map((option) => (
                <label key={option} className="radio-container">
                  <input
                    type="radio"
                    name="isAgency"
                    value={option}
                    checked={formData.isAgency === option}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-text">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
