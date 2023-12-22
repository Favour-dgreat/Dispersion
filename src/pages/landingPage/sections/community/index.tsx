import styles from './thisyear.module.css';
// import Image from '../../../../components/images';
import thisfeatureImg from '../../../../assets/pictures/join.png';
import thisfeature1Img from '../../../../assets/pictures/DPS tG.png';
import thisfeature2Img from '../../../../assets/pictures/DPS Discord.png';
// import thisfeature2Img from '../../../../assets/pictures/Features2.png';
// import thisfeature3Img from '../../../../assets/pictures/Features 3.png';

const ThisYear = () => {
  return (
    <div className={styles.thisyear_container}>

    <img
        src={thisfeatureImg}
        className={styles.showcase_image}
        alt="text"
      />
    <div className={styles.contents}>
    <img
        src={thisfeature1Img}
        className={styles.showcase_image1}
        alt="text"
      />

      <img
        src={thisfeature2Img}
        className={styles.showcase_image2}
        alt="text"
      />
    </div>
    </div>
  );
};

export default ThisYear;
