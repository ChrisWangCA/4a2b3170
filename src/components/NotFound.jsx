import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div className="text-center mt-5">
      <h1 className="display-4">404</h1>
      <p className="lead">Oops Something went wrong</p>
      <Button as={Link} to="/" variant="primary">Go to Home</Button>
    </div>
  );
};

export default NotFound;
