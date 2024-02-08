import LandingLayout from "../../components/layout";
import Showcase from "./sections/showcase";
import Tokenomics from "./sections/tokenomics";
import Features from './sections/features';
// import Pitch from "./sections/pitch";
import Story from "./sections/story";
import ThisYear from "./sections/thisYear";
// import Youtube from "./sections/youtube";
// import CountdownTimer from "./sections/countdown/CountdownTimer";
// import Twitter from "./sections/twitter";
// import Swags from "./sections/swags";
// import Speakers from "./sections/speakers";
function LandingPage() {
  // Create a ref for the Pitch section

  return (
    <LandingLayout>
      <Showcase />
       <ThisYear />
       <Story />
      <Features/>
      <Tokenomics />


      {/*<Pitch />
      <Swags />
      <Speakers />
      <Twitter />
      <Youtube />
      <CountdownTimer /> */}
      
    </LandingLayout>
  );
}

export default LandingPage;
