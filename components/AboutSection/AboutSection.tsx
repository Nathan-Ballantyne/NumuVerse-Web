import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './AboutSection.module.css';
import numuImage from '../../public/Numu-Barnacle-No-BKG.png';

const AboutSection = () => {
  return (
    <Container fluid className={styles.aboutSection}>
      <Row>
        <Col>
          <div
            style={{
              paddingTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image src={numuImage} alt='numu image' width={350} height={350} />
          </div>
        </Col>
        <Col>
          <div
            style={{
              fontSize: '20px',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40%',
            }}
          >
            <h1
              style={{
                paddingTop: '3rem',
                paddingBottom: '1rem',
              }}
              className='sectionTitle'
            >
              Meet the Numus.
            </h1>
            <div className='textColor'>
              <p>Numus are what they eat - making each one of them unique! </p>

              <p> They live in one of five different environments. </p>
              <p>All numus are hand drawn, unique NFT&#39;s</p>
              <p>Collect your team and prepare for battle! </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
