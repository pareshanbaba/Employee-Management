import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MainNavbar({ onLogout, onPageChange }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      {/* Left aligner brand and navigation link */}
      <Navbar.Brand as={Link} to="/Dashboard" style={{ color: 'white' }}> Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/employeeList" onClick={() => onPageChange("employeeList")}>Employee List</Nav.Link>
        <Nav.Link as={Link} to="/createEmployee" onClick={() => onPageChange("createEmployee")}>Create Employee</Nav.Link>
      </Nav>
      <div className="d-flex align-items-center ml-auto"> 
        <Navbar.Text className="text-white mr-2">
          Hukum Gupta -
        </Navbar.Text>
        <Button variant="outline-light" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </Navbar>
  );
}

export default MainNavbar;
