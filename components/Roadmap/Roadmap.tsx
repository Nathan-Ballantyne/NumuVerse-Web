import RoadmapItem from './RoadmapItem';

const roadmapItems: { title: string; text: string }[] = [
  {
    title: '.01 Launch 151 OGs',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida semper ex, vel vulputate ipsum vehicula at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce feugiat elit sit amet felis facilisis, elementum fringilla enim tincidunt. Morbi sed arcu ut ex fringilla tempus id sed mi. Suspendisse mollis ligula sed orci facilisis eleifend. Duis eu orci nec turpis posuere sollicitudin in sit amet purus.',
  },
  {
    title: '.02 Launch 10k',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida semper ex, vel vulputate ipsum vehicula at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce feugiat elit sit amet felis facilisis, elementum fringilla enim tincidunt. Morbi sed arcu ut ex fringilla tempus id sed mi. Suspendisse mollis ligula sed orci facilisis eleifend. Duis eu orci nec turpis posuere sollicitudin in sit amet purus.',
  },
  {
    title: '.03 Launch Merch Line',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida semper ex, vel vulputate ipsum vehicula at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce feugiat elit sit amet felis facilisis, elementum fringilla enim tincidunt. Morbi sed arcu ut ex fringilla tempus id sed mi. Suspendisse mollis ligula sed orci facilisis eleifend. Duis eu orci nec turpis posuere sollicitudin in sit amet purus.',
  },
  {
    title: '.04 Launch Video Game',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida semper ex, vel vulputate ipsum vehicula at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce feugiat elit sit amet felis facilisis, elementum fringilla enim tincidunt. Morbi sed arcu ut ex fringilla tempus id sed mi. Suspendisse mollis ligula sed orci facilisis eleifend. Duis eu orci nec turpis posuere sollicitudin in sit amet purus.',
  },
];

const Roadmap = () => {
  return (
    <div>
      <div
        style={{
          width: '50rem',
          padding: '2rem',
          margin: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 className='sectionTitle'>Roadmap</h1>
        <p style={{ color: '#848198' }}>
          This roadmap outlines our goals and where we want to take MetaMorfs.
          We have a lot of ideas and concepts that we are working on. It may
          evolve over time and hopefully become even better!
        </p>
      </div>
      {roadmapItems.map((item) => (
        <RoadmapItem key={item.title} {...item} />
      ))}
    </div>
  );
};

export default Roadmap;
