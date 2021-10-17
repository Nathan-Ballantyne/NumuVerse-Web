import { Container, Row, Col } from 'react-bootstrap';
import FAQItem from './FAQItem';

const FAQSection = () => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h1 className='sectionTitle centerText'>FAQ</h1>
      <Container
        fluid
        style={{
          height: '35rem',
          paddingTop: '1rem',
        }}
      >
        <Row>
          <Col>
            <FAQItem
              title='How much do they cost and what is the total supply?'
              text={
                "The total supply of Morfs's is 10,000 with a mint cost of .08Ξ per Morf."
              }
            />
          </Col>
          <Col>
            <FAQItem
              title='What are missions?'
              text='Missions are the gamification mechanism for the Nomu universe. With your crew(s), you will be able to complete missions that yield other NFT’s and rewards.'
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FAQItem
              title='What is the best crew mix to have?'
              text='Missions are the gamification mechanism for the MetaMorf universe. With your crew(s), you will be able to complete missions that yield other NFT’s and rewards.'
            />
          </Col>
          <Col>
            <FAQItem
              title='Will I need more than one ape to run missions?'
              text='Yes! For missions you will need a crew, but you can also have multiple crews to run different missions simultaneously. Depending on your crew mix, there will be significant advantages over other crews.'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQSection;
