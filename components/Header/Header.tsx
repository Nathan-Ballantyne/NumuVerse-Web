import Image from 'next/image';
import SocialLinks from '../SocialLinks';
// import { Container, Row, Col } from 'react-bootstrap';
import headerImage from '../../public/LandingPage.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
      }}
    >
      <SocialLinks />

      <Image
        className='img-fluid'
        src={headerImage}
        alt='banner image'
        placeholder='blur'
        priority={true}
      />
    </div>
  );
};

export default Header;
