import styles from './story.module.css';
// import storyImg from '../../../../assets/pictures/logoish.png';
// import thisyearImg from '../../../../assets/pictures/ellipse.png';
import thisyearImg1 from '../../../../assets/icons/8.png';
import thisyearImg2 from '../../../../assets/icons/Group 69.png';

// import aboutImgLarge from '../../../../assets/pictures/logoish.png';
import Image from '../../../../components/images';
import { Icon } from '../../../../components';
// import arrowDown from '../../../../assets/icons/thisyear.png';
// import arrowRight from '../../../../assets/icons/arrowright.png';
// import { useEffect, useState } from 'react';

function Story() {
  // const [isSmallViewport, setIsSmallViewport] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallViewport(window.innerWidth <= 999);
  //   };

    // Initial call to set the initial state
    // handleResize();

    // Add event listener for window resize
    // window.addEventListener('resize', handleResize);

    // Cleanup by removing the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <>
      {/* <div id="story" className={styles.story_container}> */}
      <Image
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          src={thisyearImg2}
          className={styles.story_item_image3}
          style={{ flexShrink: 0, width: '100%', height: '100%' }}
        />
  <div id="story" className={styles.story_container}>
 
  <div className={styles.story_inner}>
  <div className={styles.cardContainer}>
    <div className={styles.card}>
      <p className={styles.tt}>Spades Card</p>
      <p className={styles.t}>Each of your $spades possesses unique NFT attributes randomly assigned at the time of purchase. These attributes represent five different spades cards: Spade A, Spade K, Spade Q, Spade J, and Spade 10. The acquisition probability is determined by the card's rank, Spade A being the rarest and hardest to obtain.</p>
    </div>

    <div className={styles.contain}>
      <div className={styles.imageContain}>
        <Image
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          src={thisyearImg1}
          className={styles.story_item_image2}
          style={{ flexShrink: 0, width: '100%', height: '100%' }}
        />
      </div>
    </div>

    <div className={styles.card}>
      <p className={styles.tt}>Spades Defi</p>
      <p className={styles.t}>Spades Finance introduces a groundbreaking DeFi model. Users have the option to burn their cards to start mining tokens. Mining returns vary based on the rarity of the card. When you choose to burn your cards and start mining, your $spades are also burned, contributing to the continuous deflation of the $Spades total supply.</p>
    </div>
  </div>

  
</div>
<div className={styles.card2}>
    <p className={styles.tt}>Spades Protocol</p>
    <p className={styles.t}>Diverging from conventional Erc20 or Erc721 protocols, the Spades protocol introduces novel technology, seamlessly integrating Tokens and NFTs.</p>
  </div>

 
</div>

  {/* </div> */}


    </>
  );
}

export default Story;
