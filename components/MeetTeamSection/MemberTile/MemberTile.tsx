import { Card } from 'react-bootstrap';
import styles from '../MeetTeamSection.module.css';

type MemberTileProps = {
  pfpImage: string;
  name: string;
  role: string;
};

const MemberTile = ({ pfpImage, name, role }: MemberTileProps) => {
  return (
    <Card className={styles.memberTileCard}>
      <Card.Img variant='top' src={pfpImage} alt={`${name} pfp`} />
      <Card.Title className={styles.memberName}>
        {name + ` - ${role}`}
      </Card.Title>
    </Card>
  );
};
export default MemberTile;
