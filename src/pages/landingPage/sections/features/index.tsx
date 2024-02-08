import styles from './thisyear.module.css';
import Image from '../../../../components/images';
import thisfeature2Img from '../../../../assets/icons/Group 77.png';
import thisfeature3Img from '../../../../assets/icons/11.png';
import { RegularButton } from '../../../../components/buttons';
import thisyearImg2 from '../../../../assets/pictures/z1.png';
import thisyearImg3 from '../../../../assets/pictures/z4.png';
import thisyearImg4 from '../../../../assets/pictures/z5.png';
import thisyearImg5 from '../../../../assets/pictures/z6.png';
import thisyearImg6 from '../../../../assets/pictures/z7.png';


// import ReactDOM from 'react-dom'
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { ArrowUp } from 'react-bootstrap-icons';

 

const ThisYear = () => {
    const [,setIsPaused] = useState(false);

    const settings = {
      dots: false,
      infinite: true,
      speed: 1000, // Change the speed of sliding
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, // Change the speed of autoplay
      pauseOnHover: true,
      pauseOnFocus: true,
      beforeChange: () => setIsPaused(true),
      afterChange: () => setIsPaused(false),
    };
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
      Stake and burn your <span className={styles.ti}>$SPADES, </span>start enjoying daily token rewards instantly! Based on your card rarity, you can have up to 4800% APR!
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
      <div className={styles.carousel}>
          <Slider {...settings}>
            <div>
              <img src={thisyearImg2} alt="Image 1" className={styles.slider} />
            </div>
            <div>
              <img src={thisyearImg3} alt="Image 2" className={styles.slider} />
            </div>
            <div>
              <img src={thisyearImg4} alt="Image 3" className={styles.slider} />
            </div>
            <div>
              <img src={thisyearImg5} alt="Image 4" className={styles.slider} />
            </div>
            <div>
              <img src={thisyearImg6} alt="Image 5" className={styles.slider} />
            </div>
          </Slider>
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
