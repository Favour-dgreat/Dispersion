import styles from './thisyear.module.css';
import Image from '../../../../components/images';
import thisfeature2Img from '../../../../assets/icons/Group 77.png';
import thisfeature3Img from '../../../../assets/icons/11.png';
import { RegularButton } from '../../../../components/buttons';

const ThisYear = () => {
    return (
        <>
          {/* <div id="story" className={styles.story_container}> */}
          <Image
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            src={thisfeature2Img}
            className={styles.story_item_image3}
            style={{ flexShrink: 0, height: '100%', width: 'auto', }}
          />
      <div id="story" className={styles.story_container}>
     
      <div className={styles.story_inner}>
      <div className={styles.vertical_line}></div>
      <div className={styles.content}>
      Stake your <span className={styles.ti}>$SPADES </span>and enjoy the rewards coming from your NFTs, depending on your NFT rarity and attributes your rewards are calculated on a daily basis based on the total stake and the number of stakers.
      <div></div>
      <RegularButton
              title="STAKING"
              className={styles.showcase_button}
              url="#"
            />
      </div>

      <Image
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            src={thisfeature3Img}
            className={styles.story_item_image2}
            style={{ flexShrink: 0, height: '100%', width: 'auto', }}
          />
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
    

export default ThisYear;
