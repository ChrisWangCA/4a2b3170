import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getActivityDetails, updateActivity } from '../services/api';
import { Card, Button, Spinner } from 'react-bootstrap';

const ActivityDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const fetchActivityDetails = async () => {
      try {
        const response = await getActivityDetails(id);
        setActivity(response.data);
      } catch (error) {
        console.error('Error fetching activity details:', error);
        navigate('/');
      }
    };

    fetchActivityDetails();
  }, [id, navigate]);

  const handleArchiveToggle = async () => {
    await updateActivity(id, { is_archived: !activity.is_archived });
    navigate(activity.is_archived ? '/' : '/archived');
  };

  if (!activity) {
    return <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>;
  }

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Activity Details</Card.Title>
        <Card.Text className="fw-bold">From: {activity.from}</Card.Text>
        <Card.Text className="fw-bold">To: {activity.to}</Card.Text>
        <Card.Text>Duration: {activity.duration} seconds</Card.Text>
        <Card.Text>Type: {activity.call_type}</Card.Text>
        <Card.Text>Direction: {activity.direction}</Card.Text>
        <Button variant="primary" onClick={handleArchiveToggle} className="custom-button-grey">
          {activity.is_archived ? 'Unarchive' : 'Archive'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ActivityDetails;
