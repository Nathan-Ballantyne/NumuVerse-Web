import { Container, Row, Col } from 'react-bootstrap';
import MemberTile from './MemberTile';
import styles from './MeetTeamSection.module.css';

const MeetTeamSection = () => {
  return (
    <div>
      <h1 className={['sectionTitle', 'centerText', styles.title].join(' ')}>
        Meet the Team!
      </h1>
      <div className={styles.container}>
        <Container fluid>
          <Row className='g-0'>
            <Col>
              <MemberTile pfpImage='/Numu_Sue.png' name='SUE' role='ART' />
            </Col>
            <Col>
              <MemberTile
                pfpImage='/Numu-Nathan.png'
                name='NATHAN'
                role='TECH'
              />
            </Col>
            <Col>
              <MemberTile pfpImage='/Numu_Matt.png' name='MATT' role='DESIGN' />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MeetTeamSection;
