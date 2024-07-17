import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getActivities, updateActivity } from '../services/api';
import { Button, Card, ListGroup, Spinner } from 'react-bootstrap';
import phonecallIcon from '../image/phonecall_icon.jpg';
import archiveIcon from '../image/archive_icon.jpg';
import '../css/app.css';

const ActivityFeed = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await getActivities();
      setActivities(response.data.filter(activity => !activity.is_archived));
      setLoading(false);
    };

    fetchActivities();
  }, []);

  const handleArchiveAll = async () => {
    await Promise.all(
      activities.map(activity =>
        updateActivity(activity.id, { is_archived: true })
      )
    );
    const response = await getActivities();
    setActivities(response.data.filter(activity => !activity.is_archived));
  };

  if (loading) {
    return <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>;
  }

  return (
    <div>
      {activities.length > 0 ? (
      <Button variant="primary" onClick={handleArchiveAll} className="custom-button">
        <img src={archiveIcon} alt="Archive Icon" style={{ width: '25px', height: '20px' }} />
        Archive All
      </Button>
      ) : (
        <Button variant="primary" as={Link} to="/archived" className="custom-button">
          <img src={archiveIcon} alt="Archive Icon" style={{ width: '20px', height: '20px' }} />
          Go to Archived Calls
        </Button>
      )}

      <ListGroup className="mt-3">
        {activities.map(activity => (
          <ListGroup.Item key={activity.id} className="no-border">
            <Link to={`/activity/${activity.id}`} className="no-underline">
              <Card>
              <Card.Header>
                  <div className="text-center">
                    {new Date(activity.created_at).toLocaleString()} 
                  </div>
                </Card.Header>
                <Card.Body className="d-flex align-items-center">
                <img src={phonecallIcon} alt="Phone Call Icon" className="mr-3" style={{ width: '70px', height: '70px' }} />
                <div>
                  <Card.Title>{activity.from} to {activity.to}</Card.Title>
                  <Card.Text>
                    {activity.call_type} - {activity.direction}
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ActivityFeed;
