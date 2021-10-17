import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import coralEnv from '../../public/Coral-Environment.png';
import desertEnv from '../../public/Desert-Environment-01.png';

const CaroucelSection = () => {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <Image src={coralEnv} alt='coral environment' />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image src={desertEnv} alt='desert environment' />
      </Carousel.Item>
    </Carousel>
  );
};

export default CaroucelSection;
