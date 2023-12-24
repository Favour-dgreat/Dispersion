import styles from './story.module.css';
import storyImg from '../../../../assets/pictures/logoish.png';
import storyImgIcon from '../../../../assets/icons/Ellipse 11.png';
import storyImgIcon2 from '../../../../assets/icons/Ellipse 9.png';

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
        style={{ flexShrink: 0, width: '20%', height: '100%' }}
      />
  <div id="story" className={styles.story_container}>
  <div className={styles.story_inner}>
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <div style={{ left: 74, marginRight: 20, marginTop: 40, flexShrink: 0 }}>
        <span className={styles.texxt} style={{ color: '#0DE0F3', fontSize: 67.08, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>
          The Vision Behind<br />
        </span>
        <span className={styles.texxt}  style={{ color: '#0DE0F3', fontSize: 72, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word' }}>
          Dispersion Swap
        </span>
        <div className={styles.story_details} style={{ width: 469, height: 595, display: 'block' }}>
          <span style={{ color: 'white', fontSize: 22.78, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word' }}>
            Multi Chain Trading dApp<br />
          </span>
          <span style={{ color: 'white', fontSize: 22.78, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>
            <br />Dispersion stands as the pioneering bridge purposefully crafted to seamlessly facilitate cross-network transfers between multiple chains and ERC20 tokens. By championing unparalleled liquidity for these tokens, Dispersion significantly enhances cross-chain interoperability. Our unwavering mission is clear: to cultivate heightened liquidity and seamless access for multiple chains and ERC tokens, all within a robust, secure, and user-centric framework.
            <br /><br />
          </span>
          <span style={{ color: 'white', fontSize: 22.78, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word' }}>
            Multi chain AI Auditor <br />
          </span>
          <span style={{ color: 'white', fontSize: 22.78, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>
            <br />Experience Unmatched Security Across Networks: Dispersion's Multi-Chain AI Auditor Empowers Seamless Smart Contract Evaluation and Fortification. Safeguard Your Assets with Confidence, Regardless of Coding Expertise, Across Limitless Network Chains.
          </span>
        </div>
      </div>

      {/* Image component */}
      <Image
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="center-bottom"
        src={storyImg}
        className={styles.story_item_image}
        style={{ flexShrink: 0, width: 'auto', height: '100%' }}
      />
    </div>
  </div>
</div>

  {/* </div> */}
  <Image
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="center-bottom"
        src={storyImgIcon}
        className={styles.story_item_image2}
        style={{ flexShrink: 0, width: 'auto', height: '100%' }}
      />

    </>
  );
}

export default Story;
