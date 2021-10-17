import { Card } from 'react-bootstrap';

type MemberTileProps = {
  pfpImage: string;
  name: string;
  role: string;
};

const MemberTile = ({ pfpImage, name, role }: MemberTileProps) => {
  return (
    <Card
      style={{
        width: '20rem',
        textAlign: 'center',
        backgroundColor: '#01030D',
      }}
    >
      <Card.Img variant='top' src={pfpImage} />
      <Card.Title
        style={{ padding: '1rem', fontSize: '1.5rem', color: 'lightblue' }}
      >
        {name + ` (${role})`}
      </Card.Title>
    </Card>
  );
};
export default MemberTile;
