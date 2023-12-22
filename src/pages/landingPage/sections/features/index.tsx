import styles from './thisyear.module.css';
import Image from '../../../../components/images';
import thisfeatureImg from '../../../../assets/pictures/Featuresmain.png';
// import thisfeature3Img from '../../../../assets/pictures/Feature3.png';
// import thisfeature2Img from '../../../../assets/pictures/Features2.png';
// import thisfeature3Img from '../../../../assets/pictures/Features 3.png';

const ThisYear = () => {
  return (
    <div className={styles.thisyear_container}>

       <div className={styles.thisyear_inner}> 
       <div className={styles.thisyear_text} style={{color: '#0DE0F3', fontSize: 48, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word'}}>Features</div>
       <Image
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
           src={thisfeatureImg}
           className={styles.thisyear_image1}
          />           
       </div>
        
    </div>
  );
};

export default ThisYear;
