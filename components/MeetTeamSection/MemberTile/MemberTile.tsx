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
        backgroundColor: '#FF7BEA',
        border: 'none',
      }}
    >
      <Card.Img variant='top' src={pfpImage} />
      <Card.Title
        style={{
          padding: '1rem',
          color: 'black',
          textAlign: 'left',
          fontSize: '2rem',
        }}
        className='sectionTitle'
      >
        {name + ` - ${role}`}
      </Card.Title>
    </Card>
  );
};
export default MemberTile;
