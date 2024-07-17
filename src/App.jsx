import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ActivityFeed from './components/ActivityFeed.jsx';
import ActivityDetails from './components/ActivityDetails.jsx';
import ArchivedCalls from './components/ArchivedCalls.jsx';
import './css/app.css';
import './css/body.css';
import './css/header.css';
import Header from './Header.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import NotFound from './components/NotFound.jsx';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Header />
      <Container className="mt-5 pt-5">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<ActivityFeed />} />
          <Route path="/activity/:id" element={<ActivityDetails />} />
          <Route path="/archived" element={<ArchivedCalls />} />
          <Route path="*" element={<NotFound />} /> {}
        </Routes>
        </ErrorBoundary>
        </Container>
    </Router>
  );
}

export default App;
