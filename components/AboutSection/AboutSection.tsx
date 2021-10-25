import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './AboutSection.module.css';
import numuImage from '../../public/Numu-Barnacle-No-BKG.png';

const AboutSection = () => {
  return (
    <Container fluid className={styles.aboutSection}>
      <Row className='g-0'>
        <Col>
          <div className={styles.image}>
            <Image src={numuImage} alt='numu image' width={350} height={350} />
          </div>
        </Col>
        <Col>
          <div className={styles.text}>
            <h1 className={['sectionTitle', styles.title].join(' ')}>
              Meet The Numus
            </h1>
            <div className='textColor'>
              <p>Numus are what they eat - making each one unique!</p>

              <p>
                They live across five different environments which shape their
                character, and give them unique abilities in the battle arena.
              </p>
              <p>All numus are hand drawn, unique NFT&#39;s</p>
              <p>Collect your team and prepare for battle!</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
