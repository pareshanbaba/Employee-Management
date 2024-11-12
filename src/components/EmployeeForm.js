import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    courses: [],
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setEmployee((prev) => ({
        ...prev,
        courses: checked
          ? [...prev.courses, value]
          : prev.courses.filter((course) => course !== value),
      }));
    } else if (type === 'file') {
      setEmployee((prev) => ({ ...prev, image: e.target.files[0] }));
    } else {
      setEmployee((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Data:', employee);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={employee.name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={employee.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          type="text"
          name="mobile"
          value={employee.mobile}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDesignation">
        <Form.Label>Designation</Form.Label>
        <Form.Select name="designation" onChange={handleInputChange}>
          <option>Select designation</option>
          <option>Manager</option>
          <option>Developer</option>
          <option>Designer</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGender">
        <Form.Label>Gender</Form.Label>
        <Form.Check
          type="radio"
          label="Male"
          name="gender"
          value="Male"
          onChange={handleInputChange}
        />
        <Form.Check
          type="radio"
          label="Female"
          name="gender"
          value="Female"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCourses">
        <Form.Label>Courses</Form.Label>
        <Form.Check
          type="checkbox"
          label="MCA"
          value="MCA"
          onChange={handleInputChange}
        />
        <Form.Check
          type="checkbox"
          label="BCA"
          value="BCA"
          onChange={handleInputChange}
        />
        <Form.Check
          type="checkbox"
          label="BSC"
          value="BSC"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formImage">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control
          type="file"
          name="image"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EmployeeForm;
