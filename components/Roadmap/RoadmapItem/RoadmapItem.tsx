import { Row, Col, Card } from 'react-bootstrap';

type RoadmapItemProps = {
  title: string;
  text: string;
};

const RoadmapItem = ({ title, text }: RoadmapItemProps) => {
  return (
    <Card
      style={{
        width: '50rem',
        backgroundColor: '#04091A',
        padding: '2rem',
        margin: '2rem',
      }}
    >
      <Card.Body>
        <Card.Title style={{ color: 'lightblue' }}>{title}</Card.Title>
        <Card.Text style={{ color: '#848198' }}>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RoadmapItem;
