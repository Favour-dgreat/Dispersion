import styles from './thisyear.module.css';
import Image from '../../../../components/images';
// import thisyearImg from '../../../../assets/pictures/ellipse.png';
import thisyearImg1 from '../../../../assets/pictures/shape.png';
import thisyearImg2 from '../../../../assets/icons/Ellipse.png';

const ThisYear = () => {
  return (
    <div id='tokenomics' className={styles.thisyear_container}>

<div style={{width: '100%', height: '100%', position: 'relative'}}>
<img
              src={thisyearImg1}
              className={styles.thisyear_image}
              alt="menu"
            />
    
    {/* <div style={{left: 488,  position: 'absolute'}} /> */}
    <div className={styles.thisyear_tokenomics} style={{left: 495, position: 'absolute', color: '#0DE0F3', fontSize: 48, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word', marginTop: -80}}>Tokenomics</div>
    
    <div className={styles.tokenomics}>
    <div style={{ width: '38%', height: '100%', maxWidth: '80%', paddingTop: 49,paddingBottom: 49, paddingLeft: 20, paddingRight: 20, background: 'linear-gradient(180deg, #262E30 0%, rgba(6, 12, 12, 0) 100%)', borderRadius: 10, border: '1px rgba(216.88, 227.60, 229.37, 0.20) solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
    {/* <div style={{ paddingBottom: 14.68, paddingLeft: 135, paddingRight: 134, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> */}
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 38.98, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}> Total  Supply</div>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12.41, display: 'flex'}}>
                <div style={{color: 'rgba(0, 212, 247, 0.94)', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400',  wordWrap: 'break-word'}}>10,000,000</div>
                <div style={{height: 22, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 27.58, display: 'flex'}}>
                    <div style={{width: 106.17, color: 'rgba(0, 212, 247, 0.94)', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400',  wordWrap: 'break-word'}}>95% LP</div>
                </div>
                <div style={{height: 22, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 27.58, display: 'flex'}}>
                    <div style={{width: 179.24, color: 'rgba(0, 212, 247, 0.94)', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400',  wordWrap: 'break-word'}}>5% Marketing</div>
                </div>
            </div>
        </div>
    </div>

    <div style={{width: '38%', height: '100%', marginLeft: '5%',  paddingTop: 49,paddingBottom: 80, paddingLeft: 70, paddingRight: 70, background: 'linear-gradient(180deg, #262E30 0%, rgba(6, 12, 12, 0) 100%)', borderRadius: 10, border: '1px rgba(216.88, 227.60, 229.37, 0.20) solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 50, display: 'inline-flex'}}>
    <div style={{paddingLeft: 135, paddingRight: 164, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 0, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 38.98, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}> Initial LP: 2 ETH </div>
            {/* <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12.41, display: 'flex'}}>
                <div style={{color: 'rgba(0, 212, 247, 0.94)', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400',  wordWrap: 'break-word'}}>10,000,000</div>
                <div style={{height: 22, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 27.58, display: 'flex'}}>
                    <div style={{width: 106.17, color: 'rgba(0, 212, 247, 0.94)', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400',  wordWrap: 'break-word'}}>95% LP</div>
                </div>
                <div style={{height: 22, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 27.58, display: 'flex'}}>
                    <div style={{width: 179.24, color: 'rgba(0, 212, 247, 0.94)', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400',  wordWrap: 'break-word'}}>5% Markeing</div>
                </div>
            </div> */}
        </div>
    </div>
    </div>

    <div style={{width: '40%', height: '100%', marginTop: '-2%', paddingTop: 49,paddingBottom: 80, paddingLeft: 70, paddingRight: 70, background: 'linear-gradient(180deg, #262E30 0%, rgba(6, 12, 12, 0) 100%)', borderRadius: 10, border: '1px rgba(216.88, 227.60, 229.37, 0.20) solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
    {/* <div style={{ paddingBottom: 14.68, paddingLeft: 135, paddingRight: 134, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> */}
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 38.98, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}> Tax: 5% on buy/sell</div>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12.41, display: 'flex'}}>
                <div style={{color: 'rgba(0, 212, 247, 0.94)', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400'}}>4% for multi-chain trading liquidity pool</div>
                <div style={{height: 22, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 30.58, display: 'flex'}}>
                    <div style={{ color: 'rgba(0, 212, 247, 0.94)', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400'}}>1% for marketing/buyback</div>
                </div>
                
            </div>
        </div>
    </div>
</div>
<Image
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
           src={thisyearImg2}
           className={styles.thisyear_image2}
          />
    {/* <div style={{width: 543, height: 315, paddingBottom: 49, paddingLeft: 70, paddingRight: 70, left: 69, top: 116, position: 'absolute', background: 'linear-gradient(180deg, #262E30 0%, rgba(6, 12, 12, 0) 100%)', borderRadius: 10, border: '1px rgba(216.88, 227.60, 229.37, 0.20) solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
        <div style={{ paddingBottom: 14.68, paddingLeft: 135, paddingRight: 134, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
                <div style={{color: 'white', fontSize: 38.98, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word'}}> Total  Supply</div>
                <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12.41, display: 'flex'}}>
                    <div style={{color: 'rgba(0, 212, 247, 0.94)', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400',  wordWrap: 'break-word'}}>10,000,000</div>
                    <div style={{height: 22, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 27.58, display: 'flex'}}>
                        <div style={{width: 106.17, color: 'rgba(0, 212, 247, 0.94)', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400',  wordWrap: 'break-word'}}>95% LP</div>
                    </div>
                    <div style={{height: 22, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 27.58, display: 'flex'}}>
                        <div style={{width: 179.24, color: 'rgba(0, 212, 247, 0.94)', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>5% Markeing</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style={{width: 696, height: 404, paddingBottom: 49, paddingLeft: 70, paddingRight: 70, left: 316, top: 381, position: 'absolute', background: 'linear-gradient(180deg, #262E30 0%, rgba(6, 12, 12, 0) 100%)', borderRadius: 10, border: '1px rgba(216.88, 227.60, 229.37, 0.20) solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
        <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'flex'}}>
            <div style={{color: 'white', fontSize: 38.98, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word'}}>Tax: 5% on buy/sell</div>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12.41, display: 'flex'}}>
                <div style={{color: 'rgba(0, 212, 247, 0.94)', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400',  wordWrap: 'break-word'}}>4% for multi-chain trading liquidity pool</div>
                <div style={{height: 22, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 27.58, display: 'flex'}}>
                    <div style={{width: 368, color: 'rgba(0, 212, 247, 0.94)', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400',  wordWrap: 'break-word'}}>1% for marketing/buyback</div>
                </div>
            </div>
        </div>
    </div> */}
</div>
</div>

        
  );
};

export default ThisYear;
