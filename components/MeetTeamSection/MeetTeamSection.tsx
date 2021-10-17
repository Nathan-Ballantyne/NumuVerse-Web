import { Container, Row, Col } from 'react-bootstrap';
import MemberTile from './MemberTile';

const MeetTeamSection = () => {
  return (
    <div>
      <h1
        style={{ paddingBottom: '1.5rem' }}
        className='sectionTitle centerText'
      >
        Meet the Team!
      </h1>
      <Container fluid>
        <Row>
          <Col>
            <MemberTile
              pfpImage='/Small-Platform.png'
              name='Member Name'
              role='Role'
            />
          </Col>
          <Col>
            <MemberTile
              pfpImage='/Small-Platform.png'
              name='Member Name'
              role='Role'
            />
          </Col>
          <Col>
            <MemberTile
              pfpImage='/Small-Platform.png'
              name='Member Name'
              role='Role'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MeetTeamSection;
