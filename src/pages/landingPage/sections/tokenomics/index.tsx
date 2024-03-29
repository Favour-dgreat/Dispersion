import styles from './thisyear.module.css';
import Image from '../../../../components/images';
// import thisyearImg from '../../../../assets/pictures/ellipse.png';
import thisyearImg1 from '../../../../assets/icons/token.png';



// import ReactDOM from 'react-dom'
import * as Icon from 'react-bootstrap-icons';

// import { ArrowUp } from 'react-bootstrap-icons';



const ThisYear = () => {
  
  return (
    <>
      <Image
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="center-bottom"
        src={thisyearImg1}
        className={styles.story_item_image3}
        style={{ flexShrink: 0, height: '100%', width: 'auto' }}
      />
      <div id="story" className={styles.story_container}>
        <div className={styles.story_inner}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Icon.ArrowUpSquareFill color="#000" size={56} className={styles.gi}/>
            </div>
            <p className={styles.tt}>Total Supply</p>
            <p className={styles.tt}>10,000</p>
            <p className={styles.marginBottom}> </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Icon.CartCheckFill color="#000" size={56} className={styles.gi}/>
            </div>
            <p className={styles.tt}>Sell Tax</p>
            <p className={styles.tt}>0</p>
            <p className={styles.marginBottom}> </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Icon.CartPlusFill color="#000" size={56} className={styles.gi}/>
            </div>
            <p className={styles.tt}>Buy Tax</p>
            <p className={styles.tt}>0</p>
            <p className={styles.marginBottom}> </p>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default ThisYear;

    