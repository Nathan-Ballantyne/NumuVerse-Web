import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import CaroucelSection from '../components/CaroucelSection';
import Roadmap from '../components/Roadmap';
// import FAQSection from '../components/FAQSection';
import MeetTeamSection from '../components/MeetTeamSection';
import CommunitySection from '../components/CommunitySection';

const centerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NumuVerse</title>
        <meta
          name='description'
          content='Home of the MetaMorfs NFT collection'
        />
        <link rel='icon' href='/NumuLogo.ico' />
      </Head>
      <Header />

      <Container style={{ margin: '0', padding: '0' }} fluid>
        <Row>
          <Col style={{ ...centerStyle, backgroundColor: '#56E1FF' }}>
            <AboutSection />
          </Col>
        </Row>
        <Row>
          <Col>
            <CaroucelSection />
          </Col>
        </Row>
        <Row>
          <Col style={{ ...centerStyle, backgroundColor: '#547094' }}>
            <Roadmap />
          </Col>
        </Row>
        {/* <Row>
          <Col style={centerStyle}>
            <FAQSection />
          </Col>
        </Row> */}
        <Row>
          <Col style={{ ...centerStyle, backgroundColor: '#FF7BEA' }}>
            <MeetTeamSection />
          </Col>
        </Row>
        <Row>
          <Col style={{ ...centerStyle, backgroundColor: '#56E1FF' }}>
            <CommunitySection />
          </Col>
        </Row>
      </Container>

      <footer className={styles.footer}>
        NumuVerse {'  '}
        <Image
          src='/NumuLogo.png'
          alt='MetaMorf image'
          width={30}
          height={30}
        />
      </footer>
    </div>
  );
};

export default Home;
