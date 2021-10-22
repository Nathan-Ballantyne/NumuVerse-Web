import RoadmapItem from './RoadmapItem';
import styles from './Roadmap.module.css';

const roadmapItems: { title: string; sentences: string[] }[] = [
  {
    title: "01 - Launch The OG's",
    sentences: [
      "It all begins with the OG's. A collection of 151 completely unique, hand drawn (non-generated) NFTs.",
      "Each of the 151 OG's comes with it's own unique banner sized art to accompany your PFP wherever it may be displayed.",
    ],
  },
  {
    title: '02 - Release Gen 2',
    sentences: [
      'Following the OGs, 10,000 more numus will be released in December 2021. ',
      'This collection is all hand drawn, digitally generated and carefully curated to ensure the highest quality. ',
      '5% of minting profits will be donated to an environmental charity.',
      'Gather your team and prepare yourself to venture into NumuVerse!',
    ],
  },
  {
    title: '03 - Expand NumuVerse',
    sentences: [
      'NumuVerse has a lot of potential outside of the NFT space.',
      'We hope to explore some of our ideas, such as merch, during this phase and expand NumuVerse into the real world.',
    ],
  },
  {
    title: '04 - Prepare For Battle',
    sentences: [
      'Our team is passionate about gaming and have designed NumuVerse with this in mind. ',
      'We would love to bring NumuVerse to life through a unique battle game where teams of 3 can test their skills against each other.',
    ],
  },
];

const Roadmap = () => {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <div className={styles.details}>
        <h1 className='titleColorWhite'>Roadmap</h1>
      </div>
      {roadmapItems.map((item) => (
        <RoadmapItem key={item.title} {...item} />
      ))}
    </div>
  );
};

export default Roadmap;
