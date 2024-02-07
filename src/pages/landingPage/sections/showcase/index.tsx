import AnchorLink from 'react-anchor-link-smooth-scroll';
import Icon from '../../../../assets/icons/Vector 4.png';
import thisyearImg from '../../../../assets/pictures/light.png';
import Image from '../../../../components/images';


import { RegularButton } from '../../../../components/buttons';
import styles from "./showcase.module.css";


function Showcase() {
  return (
    <div className={styles.showcase_container}>
    <div className={styles.showcase_inner}>
      <span className={styles.showcase_span}>Spades Finance </span>
    
      <div className={styles.showcase_icon}>
      
      <span className={styles.showcase_span4}>A DeFi project that adopts the <br/> innovative <span>ERC 404 </span> standard on <br/> Ethereum.</span>
      </div>

     <div className={styles.button}>  
     <RegularButton
              title="BUY NOW"
              className={styles.showcase_button}
              url="#"
            />
           
     </div>
     
      </div>
      <div className={styles.showcase_inner2}>
      <Image
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
           src={thisyearImg}
           className={styles.thisyear_image}
          />

      </div>
     
      
    </div>
  );
}

export default Showcase;
