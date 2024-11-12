import React from 'react';
import { Container } from 'react-bootstrap';

function Dashboard({ currentUser }) {
  return (
    <Container className="mt-4">
      <h2 className='text-center  text-dark mt-5'>Welcome to Admin Panel</h2>
    </Container>
  );
}

export default Dashboard;
