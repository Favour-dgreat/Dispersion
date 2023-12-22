import Icon from '../../../../assets/icons/Vector 4.png';
import { RegularButton } from '../../../../components/buttons';
import styles from "./showcase.module.css";
function Showcase() {
  return (
    <div className={styles.showcase_container}>
    <div className={styles.showcase_inner}>
      <span className={styles.showcase_span}>Unlock </span>
      <span className={styles.showcase_span2}>Diverse </span>
      <span className={styles.showcase_span3}>Possibilities:</span>
      <div className={styles.showcase_icon}>
      <div>
      <img
              src={Icon}
              className={styles.showcase_vector}
              alt="arrow icon"
            />
     </div>
      <span className={styles.showcase_span4}>Dispersion - your one stop Multi-Trading Platform</span>
      </div>

     <div className={styles.button}>  
     <RegularButton
              title="Launch dApp"
              className={styles.showcase_button}
              url="https://bit.ly/devfestado23"
            />
        <a className={styles.showcase_link}>Learn More</a>
     </div>
     
      </div>
      
    </div>
  );
}

export default Showcase;
