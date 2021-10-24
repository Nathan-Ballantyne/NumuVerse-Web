import styles from '../Roadmap.module.css';

type RoadmapItemProps = {
  title: string;
  sentences: string[];
};

const RoadmapItem = ({ title, sentences }: RoadmapItemProps) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemWidth}>
        <h2 className='titleColorWhite'>{title}</h2>
        <div className={['textColor', styles.sentenses].join(' ')}>
          {sentences.map((sentence) => (
            <p key={sentence}>{sentence}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapItem;
