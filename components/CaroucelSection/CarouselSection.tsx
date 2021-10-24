import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import coralEnv from '../../public/OG_Coral_001.png';
import desertEnv from '../../public/OG_Desert_026.png';

const CaroucelSection = () => {
  return (
    <Carousel style={{ margin: '0', padding: '0' }}>
      <Carousel.Item interval={2000}>
        <Image src={coralEnv} alt='coral environment' placeholder='blur' />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image src={desertEnv} alt='desert environment' placeholder='blur' />
      </Carousel.Item>
    </Carousel>
  );
};

export default CaroucelSection;
