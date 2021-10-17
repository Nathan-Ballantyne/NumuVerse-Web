import Image from 'next/image';
import SocialLinks from '../SocialLinks';
import { Container, Row, Col } from 'react-bootstrap';
import headerImage from '../../public/Coral-Environment.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 style={{ textAlign: 'left' }} className={styles.title}>
              MetaMorfs
            </h1>
          </Col>
          <Col md={{ span: 2, offset: 4 }}>
            <SocialLinks />
          </Col>
        </Row>
      </Container>
      <Image
        src={headerImage}
        alt='banner image'
        placeholder='blur'
        priority={true}
      />
    </>
  );
};

export default Header;
