import styles from './story.module.css';
// import storyImg from '../../../../assets/pictures/logoish.png';
// import thisyearImg from '../../../../assets/pictures/ellipse.png';
import thisyearImg1 from '../../../../assets/icons/group70.jpeg';
import thisyearImg2 from '../../../../assets/icons/Group 69.png';

// import aboutImgLarge from '../../../../assets/pictures/logoish.png';
import Image from '../../../../components/images';
// import { Icon } from '../../../../components';
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
          src={thisyearImg2}
          className={styles.story_item_image3}
        />
  <div id="story" className={styles.story_container}>
 
  <div className={styles.story_inner}>
  <div className={styles.cardContainer1}>
    <div className={styles.card}>
      <p className={styles.tt}>Spades Card</p>
      <p className={styles.t}>Each of your $spades possesses unique NFT card attributes randomly assigned at the time of purchase. <br></br> Higher rarity cards having greater value, you can choose to stake and burn it for long-term rewards or sell rare cards on the NFT market to immediately gain high profits!</p>
    </div>
  </div>

  <div className={styles.cardContainer2} style={{ paddingTop: '20vh'}}>
  <Image
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          src={thisyearImg1}
          className={styles.imageOnCard}
          style={{ flexShrink: 0, width: '100%', height: '100%' }}
        />
    <div className={styles.card1} style={{ marginTop: '50vh'  }}>
      <p className={styles.tt}>Spades Protocol</p>
      <p className={styles.t}>Innovative ERC404 economic model encourages more and more holders to burn their tokens, helping to continuously decrease the total supply and drive the token price upwards. 

As tokens are burned, NFTs are also burned, making them increasingly rare and valuable. The price of NFT will further drive the price of token to continue rising.</p>
    </div>
  </div>

  <div className={styles.cardContainer3} >
    <div className={styles.card}>
      <p className={styles.tt}>Spades Defi</p>
      <p className={styles.t}>Spades Finance introduces a groundbreaking DeFi model. Users have the option to burn their cards to start mining tokens. Mining returns vary based on the rarity of the card. When you choose to burn your cards and start mining, your $spades are also burned, contributing to the continuous deflation of the $Spades total supply.</p>
    </div>
  </div>
</div>



 
</div>

  {/* </div> */}


    </>
  );
}

export default Story;