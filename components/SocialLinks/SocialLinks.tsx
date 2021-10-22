import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <a
            href='https://twitter.com/NumuVerse'
            target='_blank'
            rel='noreferrer'
            style={{ display: 'inline-block' }}
          >
            <div className={styles.iconBackground}>
              <Image src='/twitter.svg' alt='Twitter' height={30} width={30} />
            </div>
          </a>

          {/* <div className={styles.iconBackground}>
            <Image src='/opensea.svg' alt='Opensea' height={30} width={30} />
          </div> */}

          <a
            href='https://discord.gg/3ZesqdJnWD'
            target='_blank'
            rel='noreferrer'
            style={{ display: 'inline-block' }}
          >
            <div className={styles.iconBackground}>
              <Image src='/discord.svg' alt='Discord' height={30} width={30} />
            </div>
          </a>
        </Row>
      </Container>
    </div>
  );
};

export default SocialLinks;
