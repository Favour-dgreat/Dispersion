import styles from './thisyear.module.css';
import Image from '../../../../components/images';
import thisfeature3Img from '../../../../assets/pictures/Features2.png';
// import thisfeature2Img from '../../../../assets/pictures/Features2.png';
// import thisfeature3Img from '../../../../assets/pictures/Features 3.png';

const ThisYear = () => {
  return (
    <div id='features' className={styles.thisyear_container}>


         <Image
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
           src={thisfeature3Img}
           className={styles.thisfeature_image}
          />
<div style={{color: '#0DE0F3', fontSize: 48, marginBottom: '30', paddingTop: '3%', textAlign: 'center', fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}>Features</div>
<div className={styles.understand} style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 90, display: 'inline-flex'}}>
<div id='div1' className={styles.animatedDiv1}>
<div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
<div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
<div style={{width: 64, paddingLeft:'120', height: 64, background: 'linear-gradient(89deg, #00D4F7 0%, #029EEC 26%, #5172E5 47%, #5671E4 65%, #8957DF 74%, #BB40D9 86%, #E235D5 100%)', borderRadius: 9999}} />
{/* <div style={{width: 53, height: 53, background: '#D9D9D9', borderRadius: 9999}} /> */}
</div>
<div style={{width: 259, height: 0, border: '3px #00D4F7 solid'}}></div>
</div>
<div style={{paddingLeft: 20, paddingRight: 20,marginRight:80, paddingTop: 0, background: 'linear-gradient(180deg, #262E30 0%, rgba(6, 12, 12, 0) 100%)', borderRadius: 10, border: '1px #00D4F7 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
<div style={{padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
<div style={{color: 'rgba(0, 212, 247, 0.94)', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}>ERC Multi-Chain Trading</div>
</div>
<div style={{padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
<div style={{padding:10, width: 726, color: 'white', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}>Supports cross-chain transactions for SOL, AVAX, MATIC, ARB, etc., using ERC funds.</div>
</div>
</div>
</div>
<div id='div2' className={styles.animatedDiv2} >
    <div style={{paddingLeft: 20, marginLeft: '5%',paddingRight: 20, paddingTop: 20, paddingBottom: 20, background: 'linear-gradient(180deg, #262E30 0%, rgba(6, 12, 12, 0) 100%)', borderRadius: 10, border: '1px #00D4F7 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div style={{padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'rgba(0, 212, 247, 0.94)', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}>Muilt-Chain Sniping Robot</div>
        </div>
        <div style={{padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{width: 726, color: 'white', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}>Supports cross-chain sniping using ERC funds.</div>
        </div>
    </div>
    <div style={{transform: 'rotate(-180deg)', transformOrigin: '0 0', justifyContent: 'flex-start', alignItems: 'center', display: 'flex', paddingRight: '40%'}}>
        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: -10, display: 'flex', marginLeft: '-100%', marginTop:'-3%' }}>
            <div style={{width: 64, height: 64, background: 'linear-gradient(89deg, #00D4F7 0%, #029EEC 26%, #5172E5 47%, #5671E4 65%, #8957DF 74%, #BB40D9 86%, #E235D5 100%)', borderRadius: 9999}} />
            {/* <div style={{width: 53, height: 53, background: '#D9D9D9', borderRadius: 9999}} /> */}
        </div>
        <div style={{width: 299, height: 0, border: '3px #00D4F7 solid'}}></div>
    </div>
</div>
<div id='div3'className={styles.animatedDiv3} >
<div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
<div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
<div style={{width: 64, paddingLeft:'120', height: 64, background: 'linear-gradient(89deg, #00D4F7 0%, #029EEC 26%, #5172E5 47%, #5671E4 65%, #8957DF 74%, #BB40D9 86%, #E235D5 100%)', borderRadius: 9999}} />
{/* <div style={{width: 53, height: 53, background: '#D9D9D9', borderRadius: 9999}} /> */}
</div>
<div style={{width: 259, height: 0, border: '3px #00D4F7 solid'}}></div>
</div>
<div style={{paddingLeft: 20, paddingRight: 20,marginRight:80, paddingTop: 0, background: 'linear-gradient(180deg, #262E30 0%, rgba(6, 12, 12, 0) 100%)', borderRadius: 10, border: '1px #00D4F7 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
<div style={{padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
<div style={{color: 'rgba(0, 212, 247, 0.94)', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}> Smart Contract Auditing</div>
</div>
<div style={{padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
<div style={{padding:10, width: 726, color: 'white', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}> Supports the detection of smart contracts on various chains.</div>
</div>
</div>
</div>

<div className={styles.dont}>
<div id='div3' className={styles.mediaDiv} >
    {/* <div style={{ paddingBottom: 14.68, paddingLeft: 135, paddingRight: 134, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> */}
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
            <div style={{color: 'rgba(0, 212, 247, 0.94)',  fontSize: 32.98, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}> ERC Multi-Chain Trading </div>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12.41, display: 'flex'}}>
                <div style={{color: 'white', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400'}}>Supports cross-chain transactions for SOL, AVAX, MATIC, ARB, etc., using ERC funds.</div>
                <div style={{height: 22, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 30.58, display: 'flex'}}>
                </div>
                
            </div>
        </div>
    </div>
    <div id='div3' className={styles.mediaDiv1} >
    {/* <div style={{ paddingBottom: 14.68, paddingLeft: 135, paddingRight: 134, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> */}
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
            <div style={{color: 'rgba(0, 212, 247, 0.94)',  fontSize: 32.98, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}> Muilt-Chain Sniping Robot </div>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12.41, display: 'flex'}}>
                <div style={{color: 'white', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400'}}>Supports cross-chain sniping using ERC funds.</div>
                <div style={{height: 22, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 30.58, display: 'flex'}}>
                </div>
                
            </div>
        </div>
    </div>
    <div id='div3' className={styles.mediaDiv2} >
    {/* <div style={{ paddingBottom: 14.68, paddingLeft: 135, paddingRight: 134, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> */}
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
            <div style={{color: 'rgba(0, 212, 247, 0.94)',  fontSize: 32.98, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}>  Smart Contract Auditing </div>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12.41, display: 'flex'}}>
                <div style={{color: 'white', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400'}}> Supports the detection of smart contracts on various chains.</div>
                <div style={{height: 22, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 30.58, display: 'flex'}}>
                </div>
                
            </div>
        </div>
    </div>

    
</div>
</div>   
    </div>
  );
};

export default ThisYear;
