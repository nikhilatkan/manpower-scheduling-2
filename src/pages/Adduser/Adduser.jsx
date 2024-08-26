import React, { useState } from "react";
import "./Adduser.css"; // Import the CSS file

const Adduser = () => {
  const [formData, setFormData] = useState({
    email: "",
    userID: "",
    name: "",
    number: "",
    googleDriveLink: "",
    photo: "",
    company: "Hello Fresh",
    department: "",
  });

  const companyDepartments = {
    "Hello Fresh": ["Automation", "Flow wrap", "Sanitation", "Ice"],
    Factor: ["Kitchen", "Plating", "Casing", "Float", "Sanitation"],
  };

  const [departments, setDepartments] = useState(
    companyDepartments["Hello Fresh"]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Update departments based on selected company
    if (name === "company") {
      setDepartments(companyDepartments[value]);
      setFormData({ ...formData, department: companyDepartments[value][0] }); // Set the first department as the default
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Perform your form submission logic here
  };

  return (
    <div className="form-container">
      <h2>Employee Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email ID:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>User ID:</label>
          <input
            type="text"
            name="userID"
            value={formData.userID}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Google Drive Link:</label>
          <input
            type="url"
            name="googleDriveLink"
            value={formData.googleDriveLink}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Photo:</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Company:</label>
          <select
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          >
            {Object.keys(companyDepartments).map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Department:</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            {departments.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Adduser;
