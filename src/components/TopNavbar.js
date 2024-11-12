import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function TopNavbar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
