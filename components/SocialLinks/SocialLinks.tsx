import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { SOCIALLINKS } from '../../constants';

import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col>
            <a href={SOCIALLINKS.TWITTER} target='_blank' rel='noreferrer'>
              <div className={styles.iconBackground}>
                <Image
                  src='/twitter.svg'
                  alt='Twitter'
                  height={30}
                  width={30}
                />
              </div>
            </a>

            {/* <div className={styles.iconBackground}>
            <Image src='/opensea.svg' alt='Opensea' height={30} width={30} />
          </div> */}

            <a href={SOCIALLINKS.DISCORD} target='_blank' rel='noreferrer'>
              <div className={styles.iconBackground}>
                <Image
                  src='/discord.svg'
                  alt='Discord'
                  height={30}
                  width={30}
                />
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SocialLinks;
