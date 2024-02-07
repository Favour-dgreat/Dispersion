import styles from './thisyear.module.css';
import Image from '../../../../components/images';
// import thisyearImg from '../../../../assets/pictures/ellipse.png';
import thisyearImg1 from '../../../../assets/icons/roadmap.png';
// import thisyearImg2 from '../../../../assets/icons/Ellipse.png';
// import thisyearImg3 from '../../../../assets/icons/Rectangle28.png';
// import thisyearImg4 from '../../../../assets/icons/Rectangle29.png';
// import ReactDOM from 'react-dom'
import * as Icon from 'react-bootstrap-icons';
// import { ArrowUp } from 'react-bootstrap-icons';


const ThisYear = () => {
    return (
        <>
          {/* <div id="story" className={styles.story_container}> */}
          <Image
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            src={thisyearImg1}
            className={styles.story_item_image3}
            style={{ flexShrink: 0, height: '100%', width: 'auto', }}
          />
      <div id="story" className={styles.story_container}>
     
      <div className={styles.story_inner}>
      <div className={styles.card}>
        <div className={styles.icon}>
        <Icon.ArrowUpSquareFill color="#000" size={56} className={styles.gi}/>
        </div>
        <p className={styles.tt}>Total Supply</p>
        </div>
<div className={styles.card}>
        <div className={styles.icon}>

        <Icon.CartCheckFill color="#000" size={56} className={styles.gi}/>
        </div>
        <p className={styles.tt}>Sell Tax</p>


</div>
<div className={styles.card}>
        <div className={styles.icon}>

        <Icon.CartPlusFill color="#000" size={56} className={styles.gi}/>
        </div>
        <p className={styles.tt}>Buy Tax</p>


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
    }
    

export default ThisYear;
