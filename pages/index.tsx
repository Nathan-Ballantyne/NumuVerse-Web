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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NumuVerse</title>
        <meta
          name='description'
          content='Home of the NumuVerse NFT collection'
        />
        <link rel='icon' href='/NumuLogo.ico' />
      </Head>
      <Container className='g-0' fluid>
        <Row className='g-0'>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row className='g-0'>
          <Col
            className={styles.centerCol}
            style={{ backgroundColor: '#56E1FF' }}
          >
            <AboutSection />
          </Col>
        </Row>
        <Row className='g-0'>
          <Col
            className={styles.centerCol}
            style={{ backgroundColor: '#547094' }}
          >
            <CaroucelSection />
          </Col>
        </Row>
        <Row className='g-0'>
          <Col
            className={styles.centerCol}
            style={{ backgroundColor: '#547094' }}
          >
            <Roadmap />
          </Col>
        </Row>
        {
          // Will add back in after frequent questions have been asked
          /* <Row>
          <Col className={styles.centerCol}>
            <FAQSection />
          </Col>
        </Row> */
        }
        <Row className='g-0'>
          <Col
            className={styles.centerCol}
            style={{ backgroundColor: '#56E1FF' }}
          >
            <MeetTeamSection />
          </Col>
        </Row>
        <Row className='g-0'>
          <Col
            className={styles.centerCol}
            style={{ backgroundColor: '#547094' }}
          >
            <CommunitySection />
          </Col>
        </Row>
        <Row className='g-0'>
          <Col>
            <footer className={styles.footer}>
              NumuVerse {'  '}
              <Image
                src='/NumuLogo.png'
                alt='MetaMorf image'
                width={30}
                height={30}
              />
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
