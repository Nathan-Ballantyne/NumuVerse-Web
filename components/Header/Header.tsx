import Image from 'next/image';
import SocialLinks from '../SocialLinks';
import headerImage from '../../public/LandingPage.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.socialLinks}>
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
