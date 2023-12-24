import styles from './thisyear.module.css';
// import Image from '../../../../components/images';
import thisfeature1Img from '../../../../assets/pictures/twitter.jpg';
import thisfeature2Img from '../../../../assets/pictures/telegram.png';
// import thisfeature2Img from '../../../../assets/pictures/Features2.png';
// import thisfeature3Img from '../../../../assets/pictures/Features 3.png';

const ThisYear = () => {
  return (
    <div className={styles.thisyear_container}>

<div style={{width: '100%', height: '100%', position: 'relative'}}>
    <div style={{width: 1293, height: 69, left: 0, top: 0, position: 'absolute'}}></div>
    <div className={styles.thriving} style={{left: 333, top: 82, position: 'absolute', color: '#00D4F7', fontSize: 48, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}>Join a thriving community</div>
    <div style={{left: 150, top: 171, position: 'absolute', background: 'linear-gradient(180deg, #262E30 0%, rgba(6, 12, 12, 0) 100%)', borderRadius: 29.60, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14.80, display: 'inline-flex'}}>
        <div style={{width: 444, paddingTop: 20.72, paddingBottom: 58.96, paddingLeft: 14.80, paddingRight: 16.28, borderRadius: 14.80, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 28.12, display: 'inline-flex'}}>
            <img style={{width: 412.92, height: 318.20, borderRadius: 14.80}} src={thisfeature1Img} />
            <div style={{color: 'white', fontSize: 29.60, fontFamily: 'Montserrat', fontWeight: '500',  wordWrap: 'break-word'}}>$DPS Twitter</div>
        </div>
    </div>
    <div style={{left: 725, top: 170, position: 'absolute', background: 'linear-gradient(180deg, #262E30 0%, rgba(6, 12, 12, 0) 100%)', borderRadius: 28.80, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14.40, display: 'inline-flex'}}>
        <div style={{width: 432, paddingTop: 20.16, paddingBottom: 56.88, paddingLeft: 14.40, paddingRight: 15.84, borderRadius: 14.40, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 27.36, display: 'inline-flex'}}>
            <img style={{width: 401.76, height: 309.60, borderRadius: 14.40}} src={thisfeature2Img} />
            <div style={{color: 'white', fontSize: 28.80, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>$DPS Telegram</div>
        </div>
    </div>
</div>
    </div>
  );
};

export default ThisYear;
