// src/components/EmployeeForm.js
import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course: [],
  });

  const handleSubmit = () => {
    axios.post("http://localhost:3000/employees", employee)
      .then(() => alert("Employee added successfully"))
      .catch(error => console.error("Error:", error));
  };

  return (
    <div>
      <h2>Create Employee</h2>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EmployeeForm;
