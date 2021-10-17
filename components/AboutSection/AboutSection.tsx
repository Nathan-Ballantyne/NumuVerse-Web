import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <Container fluid className={styles.aboutSection}>
      <Row>
        <Col md={{ span: 2, offset: 4 }}>
          <div
            style={{
              paddingTop: '8rem',
            }}
          >
            <Image
              src='/Small-Platform.png'
              alt='gif place holder'
              width={300}
              height={300}
            />
          </div>
        </Col>
        <Col>
          <div
            style={{
              color: '#848198',
              fontSize: '20px',
              justifyContent: 'center',
              alignItems: 'center',
              width: '30rem',
            }}
          >
            <h1
              style={{
                paddingTop: '3rem',
                paddingBottom: '1rem',
              }}
              className='sectionTitle'
            >
              What are MetaMorfs
            </h1>
            <p>
              Fusce vel eros eget ex lobortis luctus nec sed nisl. Aliquam id
              efficitur arcu, in vulputate lacus. Sed sed arcu ac urna hendrerit
              ultricies. Fusce vel eros eget ex lobortis luctus nec sed nisl.
              Aliquam id efficitur arcu, in vulputate lacus. Sed sed arcu ac
              urna hendrerit ultricies.{' '}
            </p>
            <p>
              Nulla semper condimentum fermentum. Aliquam erat volutpat. Fusce
              scelerisque, leo et eleifend facilisis. Nulla semper condimentum
              fermentum. Aliquam erat volutpat. Fusce scelerisque, leo et
              eleifend facilisis.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
