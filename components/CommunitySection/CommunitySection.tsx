import { Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import communityBanner from '../../public/Desert-Environment-01.png';

const CommunitySection = () => {
  return (
    <div
      style={{
        // backgroundColor: 'red',
        backgroundImage: '/Desert-Environment-01.png',
        width: '100%',
        height: '35rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <Image src={communityBanner} alt='Community Banner' placeholder='blur' /> */}
      <Card
        style={{
          width: '50%',
          height: '50%',
          backgroundColor: '#04091A',
          padding: '1rem',
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: '3rem', color: 'lightblue' }}>
            Join the community
          </Card.Title>
          <Card.Text style={{ width: '30%', color: '#848198' }}>
            MetaMorfs Discord already has over 150,000 members! If you want to
            join the #MORFGANG it’s here. Join us to get the news as soon as
            possible and follow our latest announcements.
          </Card.Text>
          <Button variant='primary'>Join our Discord</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CommunitySection;
