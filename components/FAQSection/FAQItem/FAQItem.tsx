import { Card } from 'react-bootstrap';

type FAQItemProps = {
  title: string;
  text: string;
};

const FAQItem = ({ title, text }: FAQItemProps) => {
  return (
    <Card
      style={{ width: '30rem', backgroundColor: '#04091A', margin: '1rem' }}
    >
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title style={{ fontSize: '1.5rem', color: 'lightblue' }}>
          {title}
        </Card.Title>
        <Card.Text style={{ color: '#848198' }}>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FAQItem;
