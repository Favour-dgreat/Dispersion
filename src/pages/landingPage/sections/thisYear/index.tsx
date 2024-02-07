// import * as Icon from 'react-bootstrap-icons';
// import { RegularButton } from '../../../../components/buttons';
import styles from './thisyear.module.css';
import Image from '../../../../components/images';
// import thisyearImg from '../../../../assets/pictures/ellipse.png';
import thisyearImg1 from '../../../../assets/icons/x.png';
import thisyearImg2 from '../../../../assets/icons/telegram.png';
import thisyearImg3 from '../../../../assets/icons/chart.png';



const ThisYear = () => {
  return (
    <>
      {/* <div id="story" className={styles.story_container}> */}
      
  <div id="story" className={styles.story_container}>
 
  <div className={styles.story_inner}>
  <div className={styles.card}>
    <Image
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="center-bottom"
        src={thisyearImg2}
        className={styles.story_item_image2}
        style={{ flexShrink: 0, width: 'auto', height: '100%' }}
      /> 
      <p className={styles.text_p}>Telegram</p>
    </div>
<div className={styles.card}>

    <Image
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="center-bottom"
        src={thisyearImg1}
        className={styles.story_item_image2}
        style={{ flexShrink: 0, width: 'auto', height: '100%' }}
      />     
      <p className={styles.text_p}>Twitter</p>

    </div>
    
    <div className={styles.card}>

    <Image
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="center-bottom"
        src={thisyearImg3}
        className={styles.story_item_image2}
        style={{ flexShrink: 0, width: 'auto', height: '100%' }}
      />         
      <p className={styles.text_p}>Chart</p>

    </div>
    
</div>

</div>

  {/* </div> */}
  {/* <Image
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="center-bottom"
        src={storyImgIcon}
        className={styles.story_item_image2}
        style={{ flexShrink: 0, width: 'auto', height: '100%' }}
      /> */}

    </>
  );

};

export default ThisYear;
