import React, { useState, useId, useEffect } from "react";
import "./index.css";

// Constants
const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  password: "",
  gender: "",
  country: "",
  termsAccepted: false,
};

const COUNTRIES = [
  { value: "in", label: "India" },
  { value: "us", label: "USA" },
  { value: "uk", label: "UK" },
];

const PASSWORD_MIN_LENGTH = 8;
const STORAGE_KEY = "registrationSubmissions";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [submissions, setSubmissions] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const formId = useId();

  // Load submissions from localStorage on component mount
  useEffect(() => {
    try {
      const storedSubmissions = localStorage.getItem(STORAGE_KEY);
      if (storedSubmissions) {
        setSubmissions(JSON.parse(storedSubmissions));
      }
    } catch (error) {
      console.warn("Failed to load submissions from localStorage:", error);
    }
  }, []);

  // Save submissions to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
    } catch (error) {
      console.warn("Failed to save submissions to localStorage:", error);
    }
  }, [submissions]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? e.target.checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field when user starts editing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateEmail = (email) => {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  };

  const validatePassword = (password) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return (
      password.length >= PASSWORD_MIN_LENGTH &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber
    );
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(formData.password)) {
      newErrors.password = `Password must be at least ${PASSWORD_MIN_LENGTH} characters with uppercase, lowercase, and numbers`;
    }

    if (!formData.gender) {
      newErrors.gender = "Select a gender";
    }

    if (!formData.country) {
      newErrors.country = "Select a country";
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newSubmission = { ...formData, id: Date.now() };
      setSubmissions((prev) => [...prev, newSubmission]);
      setSuccessMessage(
        "Registration successful! Your account has been created.",
      );
      setFormData(INITIAL_FORM_STATE);

      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  const handleClearSubmissions = () => {
    if (
      window.confirm(
        "Are you sure you want to delete all submissions? This cannot be undone.",
      )
    ) {
      setSubmissions([]);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Create an Account</h2>
        <p className="form-subtitle">Join us and start your journey today.</p>

        {successMessage && (
          <div className="success-message" role="status" aria-live="polite">
            ✓ {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="registration-form" id={formId}>
          {/* Name */}
          <div className="form-group">
            <label htmlFor={`${formId}-name`}>Full Name</label>
            <input
              type="text"
              id={`${formId}-name`}
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "input-error" : ""}
              aria-invalid={!!errors.name}
              aria-describedby={
                errors.name ? `${formId}-name-error` : undefined
              }
            />
            {errors.name && (
              <span className="error-text" id={`${formId}-name-error`}>
                {errors.name}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor={`${formId}-email`}>Email Address</label>
            <input
              type="email"
              id={`${formId}-email`}
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
              aria-invalid={!!errors.email}
              aria-describedby={
                errors.email ? `${formId}-email-error` : undefined
              }
            />
            {errors.email && (
              <span className="error-text" id={`${formId}-email-error`}>
                {errors.email}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor={`${formId}-password`}>Password</label>
            <input
              type="password"
              id={`${formId}-password`}
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "input-error" : ""}
              aria-invalid={!!errors.password}
              aria-describedby={
                errors.password
                  ? `${formId}-password-error`
                  : `${formId}-password-hint`
              }
            />
            <small id={`${formId}-password-hint`} className="password-hint">
              At least 8 characters with uppercase, lowercase, and numbers
            </small>
            {errors.password && (
              <span className="error-text" id={`${formId}-password-error`}>
                {errors.password}
              </span>
            )}
          </div>

          {/* Gender & Country */}
          <div className="form-row">
            <div className="form-group half">
              <fieldset>
                <legend>Gender</legend>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                      aria-invalid={!!errors.gender}
                    />
                    <span>Male</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                      aria-invalid={!!errors.gender}
                    />
                    <span>Female</span>
                  </label>
                </div>
              </fieldset>
              {errors.gender && (
                <span className="error-text">{errors.gender}</span>
              )}
            </div>

            <div className="form-group half">
              <label htmlFor={`${formId}-country`}>Country</label>
              <select
                id={`${formId}-country`}
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={errors.country ? "input-error" : ""}
                aria-invalid={!!errors.country}
                aria-describedby={
                  errors.country ? `${formId}-country-error` : undefined
                }
              >
                <option value="" disabled>
                  Select a country
                </option>
                {COUNTRIES.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              {errors.country && (
                <span className="error-text" id={`${formId}-country-error`}>
                  {errors.country}
                </span>
              )}
            </div>
          </div>

          {/* Terms */}
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                aria-invalid={!!errors.termsAccepted}
                aria-describedby={
                  errors.termsAccepted ? `${formId}-terms-error` : undefined
                }
              />
              <span className="checkbox-text">
                I agree to the Terms and Conditions
              </span>
            </label>
            {errors.termsAccepted && (
              <span className="error-text" id={`${formId}-terms-error`}>
                {errors.termsAccepted}
              </span>
            )}
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            Register Now
          </button>
        </form>
      </div>

      {/* Submissions Table */}
      {submissions.length > 0 && (
        <div className="table-container">
          <div className="table-header">
            <h2 className="table-title">📋 Submitted Registrations</h2>
            <button
              type="button"
              onClick={handleClearSubmissions}
              className="btn btn-danger clear-btn"
            >
              Clear All
            </button>
          </div>
          <div className="table-responsive">
            <table className="submissions-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission, index) => (
                  <tr key={submission.id}>
                    <td>{index + 1}</td>
                    <td>{submission.name}</td>
                    <td>{submission.email}</td>
                    <td>
                      <span className="badge">{submission.gender}</span>
                    </td>
                    <td>
                      <span className="badge badge-secondary">
                        {submission.country.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
