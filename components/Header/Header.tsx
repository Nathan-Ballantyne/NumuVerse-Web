import Image from 'next/image';
import SocialLinks from '../SocialLinks';
import headerImage from '../../public/Coral-Environment-01.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <h1 className={styles.title}>NumuVerse</h1>
      <SocialLinks />
      <Image
        src={headerImage}
        alt='banner image'
        placeholder='blur'
        priority={true}
      />
    </>
  );
};

export default Header;
