import RoadmapItem from './RoadmapItem';
import styles from './Roadmap.module.css';

const roadmapItems: { title: string; sentences: string[] }[] = [
  {
    title: '01 - Launch The OGs',
    sentences: [
      'It all begins with the OGs. A collection of 151 completely unique, hand drawn (non-generated) NFTs.',
      'Each of the 151 OGs comes with its environment as a banner sized art piece, to accompany it wherever it may be displayed.',
    ],
  },
  {
    title: '02 - Release Gen 2',
    sentences: [
      'Following the OGs, 10,000 more numus will be released in December 2021.',
      'This collection is all hand drawn, digitally generated and carefully curated to ensure the highest quality.',
      '5% of minting profits will be used to make minting carbon neutral, with the remainder being donated to an environmental charity.',
      'Gather your team and prepare yourself to venture into NumuVerse!',
    ],
  },
  {
    title: '03 - Expand NumuVerse',
    sentences: [
      'We will be reaching out to established artists and animators to bring NumuVerse to life with their unique styles.',
      'This will be a future NFT drop. We hope this expands our audience further and prepares us for the next step.',
    ],
  },
  {
    title: '04 - Prepare For Battle',
    sentences: [
      'Our team is passionate about gaming and have designed NumuVerse with this in mind.',
      'We would love to bring NumuVerse to life through a strategic battle game where players can mix and match teams of three numus from the five environments and test their skills against each other!',
    ],
  },
];

const Roadmap = () => {
  return (
    <div className={styles.container}>
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
