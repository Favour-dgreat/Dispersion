import styles from './story.module.css';
import storyImg from '../../../../assets/pictures/vision.png';
// import storyImgLarge from '../../../../assets/pictures/story2.png';
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
      <div id="story" className={styles.story_container}>
        <div className={styles.story_inner}> 
        <Image
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
           src={storyImg}
           className={styles.story_item_image}
          />
        </div>
        

         
      </div>
    </>
  );
}

export default Story;
