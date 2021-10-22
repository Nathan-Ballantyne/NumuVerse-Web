import { Row, Col, Card } from 'react-bootstrap';

type RoadmapItemProps = {
  title: string;
  sentences: string[];
};

const RoadmapItem = ({ title, sentences }: RoadmapItemProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '50rem',
        }}
      >
        <h2 className='titleColorWhite'>{title}</h2>
        <div
          style={{
            backgroundColor: '#CEE8FF',
            width: '100%',
            padding: '2rem',
            margin: '2rem 2rem 2rem 0',
            borderRadius: '0.2rem',
          }}
          className='textColor'
        >
          {sentences.map((sentence) => (
            <p key={sentence}>{sentence}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapItem;
