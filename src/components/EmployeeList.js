import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EmployeeList({ employees, onEdit, onDelete }) {
  // State to store search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to filter employees based on the search query
  const filteredEmployees = employees.filter((employee) => {
    // Check if any of the fields match the search query (case insensitive)
    return (
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.designation.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      <div className="d-flex justify-content-between align-items-end mb-3">
        <h4>Total Employees: {filteredEmployees.length}</h4>
        <Link to="/createEmployee" className="btn btn-primary">
          Create Employee
        </Link>
      </div>

      <div className="d-flex justify-content-end mb-3">
        <input
          type="text"
          className="form-control w-auto"  
          placeholder="Search by Name, Email, or Designation"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

     
      <table className="table table-bordered table-striped">
        <thead>
          <tr className="table-dark">
            <th>Unique ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Courses</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>
                {employee.photo ? (
                  <img
                    src={employee.photo}
                    alt="Employee"
                    style={{ maxWidth: '50px', maxHeight: '50px', borderRadius: '50%' }}
                  />
                ) : (
                  <span>No Photo</span>
                )}
              </td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.mobile}</td>
              <td>{employee.designation}</td>
              <td>{employee.gender}</td>
              <td>{employee.courses.join(', ')}</td>
              <td>
                <button className="btn btn-warning mr-2" onClick={() => onEdit(employee)}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => onDelete(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
