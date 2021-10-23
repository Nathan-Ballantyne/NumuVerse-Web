import { Card, Button } from 'react-bootstrap';
import styles from './CommunitySection.module.css';

const CommunitySection = () => {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Card.Body>
          <Card.Title>
            <h2 className={['titleColorWhite', styles.title].join(' ')}>
              Join the community
            </h2>
          </Card.Title>
          <div style={{ paddingBottom: '1rem' }} className='titleColorWhite'>
            <p>
              We numus are a friendly bunch, come and join in the fun over on
              discord!
            </p>
            <p>
              All announcements will be made within discord ahead of our
              official social channels.
            </p>
          </div>
          <a
            href='https://discord.gg/j74fJh4aNv'
            target='_blank'
            rel='noreferrer'
            style={{ display: 'inline-block' }}
          >
            <Button variant='primary'>Join our Discord</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CommunitySection;
