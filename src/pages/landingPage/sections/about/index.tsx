import styles from './thisyear.module.css';
// import Image from '../../../../components/images';
// import thisfeatureImg from '../../../../assets/pictures/Featuresmain.png';
// import thisfeature3Img from '../../../../assets/pictures/Feature3.png';
// import thisfeature2Img from '../../../../assets/pictures/Features2.png';
// import thisfeature3Img from '../../../../assets/pictures/Features 3.png';

const ThisYear = () => {
  return (
    <div className={styles.thisyear_container}>

       <div className={styles.thisyear_inner}> 
       <div className={styles.thisyear_text}>
       <p>
       DPS is the first ERC multi-chain trading dapp, assisting users in purchasing, sniping, and auditing contracts across multiple chains. Users no longer need multi-chain bridges or smart robots from other chains, as all features are consolidated in one dapp, saving users a significant amount of trading time. DPS employs unique cross-chain trading technology. When users select the desired coin, make the payment, the dapp helps them purchase the coin from the liquidity pool and deposits it into the user's dedicated account. The entire process is completed within seconds, providing lightning-fast multi-chain transaction speeds!
        </p>
       </div>
             
       </div>
        
    </div>
  );
};

export default ThisYear;
