// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import Icon from '../../../../assets/icons/Vector 4.png';
import thisyearImg from '../../../../assets/icons/6.png';
import Image from '../../../../components/images';


import { RegularButton } from '../../../../components/buttons';
import styles from "./showcase.module.css";


function Showcase() {
  return (
    <div className={styles.showcase_container}>
    <div className={styles.showcase_inner}>
      <span className={styles.showcase_span}>Spades Finance </span>
    
      <div className={styles.showcase_icon}>
      <p className={styles.showcase_span4}>First DeFi project that adopts the  innovative <span style={{color: '#fdbf62'}}>ERC 404 </span> standard on  Ethereum.</p>
      </div>

     <div className={styles.button}>  
     <RegularButton
              title="Buy on Uniswap"
              className={styles.showcase_button}
              url="#"
            />
              <div style={{ margin: '0 10px' }}></div> {/* Adjust the margin value as needed */}

            <RegularButton
              title="Buy on Opensea"
              className={styles.showcase_button}
              url="#"
            />
           
     </div>
     
      </div>
      <div className={styles.showcase_inner2}>
    <div className={styles.image_container}>
        <Image
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            src={thisyearImg}
            className={styles.thisyear_image}
        />
    </div>
</div>

     
      
    </div>
  );
}

export default Showcase;
