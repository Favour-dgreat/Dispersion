import styles from './story.module.css';
import storyImg from '../../../../assets/pictures/logoish.png';
import storyImgIcon from '../../../../assets/icons/Ellipse 1.png';
import storyImgIcon2 from '../../../../assets/icons/vector.png';

// import aboutImgLarge from '../../../../assets/pictures/logoish.png';
import Image from '../../../../components/images';
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
        src={storyImgIcon2}
        className={styles.story_item_image3}
        style={{ flexShrink: 0, height: '100%', width: 'auto', }}
      />
  <div id="story" className={styles.story_container}>
 
  <div className={styles.story_inner}>
  <ul className={styles.bullet_points}>
  <li><span style={{color:'#efb35b'}}>Spades Finance</span> introduces a groundbreaking DeFi initiative by leveraging an innovative protocol. </li>
  
</ul>
<ul className={styles.bullet_points}>
  <li>Diverging from conventional Erc20 or Erc721 protocols, the Spades protocol introduces novel technology, seamlessly integrating Tokens and NFTs.</li>
</ul>

<ul className={styles.bullet_points}>
  <li>Every <span style={{color:'#efb35b'}}>$Spades</span> token in your possession is freely exchangeable on both DEX and NFT markets, functioning as both a Token and an NFT.</li>
</ul>
  </div>
  <div className={styles.story_inner1}>
  <Image
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="center-bottom"
        src={storyImgIcon}
        className={styles.story_item_image2}
        style={{ flexShrink: 0, width: 'auto', height: '30%' }}
      />
  </div>
  <div className={styles.story_inner2}>
  <ul className={styles.bullet_points}>
  <li>Each <span style={{color:'#efb35b'}}>$Spades</span> token you hold possesses distinct NFT attributes randomly allocated upon purchase. </li>
  
</ul>
<ul className={styles.bullet_points}>
  <li>These attributes correspond to five different spade cards: Spade A, Spade K, Spade Q, Spade J, and Spade 10.</li>
</ul>

<ul className={styles.bullet_points}>
  <li>The rarity and difficulty of acquisition for each card are determined by its rank, with Spade A being the most exclusive and challenging to obtain.</li>
</ul>
  </div>
</div>

  {/* </div> */}
  {/* <Image
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="center-bottom"
        src={storyImgIcon}
        className={styles.story_item_image2}
        style={{ flexShrink: 0, width: 'auto', height: '100%' }}
      /> */}

    </>
  );
}

export default Story;
