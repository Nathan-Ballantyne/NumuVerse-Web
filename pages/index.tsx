import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import CaroucelSection from '../components/CaroucelSection';
import Roadmap from '../components/Roadmap';
import FAQSection from '../components/FAQSection';
import MeetTeamSection from '../components/MeetTeamSection';
import CommunitySection from '../components/CommunitySection';

const centerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Home: NextPage = () => {
  return (
    <div style={{ backgroundColor: '#01030d' }}>
      <Head>
        <title>MetaMorfs</title>
        <meta
          name='description'
          content='Home of the MetaMorfs NFT collection'
        />
        <link rel='icon' href='/Background-Test-Forest-Circle.png' />
      </Head>
      <Header />

      <Container fluid>
        <Row>
          <Col style={centerStyle}>
            <AboutSection />
          </Col>
        </Row>
        <Row>
          <Col>
            <CaroucelSection />
          </Col>
        </Row>
        <Row>
          <Col style={centerStyle}>
            <Roadmap />
          </Col>
        </Row>
        <Row>
          <Col style={centerStyle}>
            <FAQSection />
          </Col>
        </Row>
        <Row>
          <Col style={centerStyle}>
            <MeetTeamSection />
          </Col>
        </Row>
        <Row>
          <Col>
            <CommunitySection />
          </Col>
        </Row>
      </Container>

      <footer className={styles.footer}>
        MetaMorfs {'  '}
        <Image
          src='/Background-Test-Forest-Circle.png'
          alt='MetaMorf image'
          width={30}
          height={30}
        />
      </footer>
    </div>
  );
};

export default Home;
