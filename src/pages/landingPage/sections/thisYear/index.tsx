import { RegularButton } from '../../../../components/buttons';
import styles from './thisyear.module.css';

const ThisYear = () => {
  return (
    <div className={styles.thisyear_container}>
      <div className={styles.thisyear_inner}>
      <h3> Spades Protocol assigns unique NFTs with variable rarities to each holder by leveraging the <span style={{color: '#FFBF62'}}>ERC 404</span> token standard.</h3>
      </div>
      <div className={styles.thisyear_inner2}>
      <RegularButton
              title="Join Our Community"
              className={styles.showcase_button}
              url="#"
            />
      </div>
      
        
    </div>
  );
};

export default ThisYear;
