import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";
import { RxVideo } from 'react-icons/rx';
import AdvertiserBenefitsStyles from "../../components/Advertiser/AdvertiserStyles/AdvertiserBenefit.module.css";


import Swich3ComponentStyles from '../../components/Advertiser/AdvertiserStyles/Switch3Component.module.css'
const Switch3Component = () => {
    const [popunder, setPopunder] = useState(true);
    const [socialBar, setSocialBar] = useState(false);
    const [inPagePush, setInPagePush] = useState(false);
 
    return (
        <div>
            <div className="container px-2 py-md-5 py-2  my-md-5 my-3" >
                <div className='px-md-5 px-0'>
                    {/* <div  className:{`row mx-md-5 mx-0 justify-content-center ${dp_advbenifits_3btns}`}> */}

                    <div className={`row ${AdvertiserBenefitsStyles.dp_advbenifits_3btns}`}>
                        <div className="col-4 text-center " onClick={() => {
                            setPopunder(true);
                            setSocialBar(false);
                            setInPagePush(false);
                        }}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: popunder ? 'black' : 'white',
                                color: popunder ? 'white' : 'black',
                                borderRadius: "var(--border-radius-large)"
                            }}
                        >
                            <div className='py-3'>
                                <div className={`${AdvertiserBenefitsStyles.dp_advbenifits_sub_heading}`}>popunder</div>
                            </div>
                        </div>
                        <div className="col-4 text-center" onClick={() => {
                            setPopunder(false);
                            setSocialBar(true);
                            setInPagePush(false);
                        }}
                            style={{ cursor: 'pointer', backgroundColor: socialBar ? 'black' : 'white', color: socialBar ? 'white' : 'black', borderRadius: "var(--border-radius-large)" }}
                        >
                            <div className='py-3'>
                                <div className={`${AdvertiserBenefitsStyles.dp_advbenifits_sub_heading}`}>Native Ads</div>
                            </div>
                        </div>
                        <div className="col-4 text-center" onClick={() => {
                            setPopunder(false);
                            setSocialBar(false);
                            setInPagePush(true);
                        }}
                            style={{ cursor: 'pointer', backgroundColor: inPagePush ? 'black' : 'white', color: inPagePush ? 'white' : 'black', borderRadius: "var(--border-radius-large)"}}
                        >
                            <div className='py-3'>
                                <div className={`${AdvertiserBenefitsStyles.dp_advbenifits_sub_heading}`}>In-page Push</div>
                            </div>
                        </div>
                    </div>

                    {popunder &&
                        <>
                            <div className="container mt-4 p-5" style={{ backgroundColor: '#efefef', borderRadius: '30px' }}>
                                <div className="row " >
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className='SSA_benefits_font26px_purple SSA_BENEFIT_Text_Black py-2 px-4 text-center' style={{ border: '1px solid white', borderRadius: '30px', backgroundColor: 'white' }}> <span style={{ color: '#73035b' }}>2.5B+</span>  ad views weekly</div>
                                                <div className='pt-4 pb-2' style={{ fontSize: '20px', fontWeight: '600' }}>Use cases</div>
                                                <div>
                                                    <ul className='ssa_uldot' style={{fontSize:"var((--section-content))"}}>
                                                        <li> Enter a new market</li>
                                                        <li> Run a global-reach campaign</li>
                                                        <li>Increase the number of deposits</li>
                                                        <li>Attract users to a seasonal sale</li>
                                                        <li> Increase brand awareness</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='SSA_benefits_font26px_purple SSA_BENEFIT_Text_Black py-2 px-4 text-center' style={{ border: '1px solid white', borderRadius: '30px', backgroundColor: 'white' }}> <span style={{ color: '#73035b' }}>CPM, CPA</span> Traffic</div>

                                                <div className='pt-4 pb-2' style={{ fontSize: '20px', fontWeight: '600' }}>Facts</div>
                                                <div>
                                                    <ul className={Swich3ComponentStyles.ssa_uldot}>
                                                        <li> Enter a new market</li>
                                                        <li> Run a global-reach campaign</li>
                                                        <li>Increase the number of deposits</li>
                                                        <li>Attract users to a seasonal sale</li>
                                                        <li> Increase brand awareness</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-wrap pt-3">

                                                <Button className={`LiveDemoButton btn`}>
                                                    <div className='p-0 m-0'>
                                                        <div className='d-flex align-items-center justify-content-center'>
                                                            <span className="ps-3 me-2 "><RxVideo /></span>


                                                            <span>Live Demo</span>

                                                        </div>
                                                    </div>
                                                </Button>
                                                <Button className={`MoreButton btn`}>
                                                    <div className='p-0 m-0'>
                                                        <div className='d-flex align-items-center justify-content-center'>

                                                            <span>Learn More</span>
                                                            <span className={`ps-3 moreArrrow`}><FaArrowCircleRight /></span>

                                                        </div>
                                                    </div>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/09379916-612d-4eaf-daf0-adf002da8100/public' ></img>


                                        <div className="text-center pt-3">Ads open in a new tab after a user clicks anywhere on a website</div>
                                    </div>
                                </div>

                            </div>
                        </>}

                    {socialBar &&
                        <>
                            <div className="container mt-4 p-5" style={{ backgroundColor: '#efefef', borderRadius: '30px' }}>
                                <div className="row " >
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className='SSA_benefits_font26px_purple SSA_BENEFIT_Text_Black py-2 px-4 text-center' style={{ border: '1px solid white', borderRadius: '30px', backgroundColor: 'white' }}> <span style={{ color: '#73035b' }}>2.5B+</span>  ad views weekly</div>
                                                <div className='pt-4 pb-2' style={{ fontSize: '20px', fontWeight: '600' }}>Use cases</div>
                                                <div>
                                                    <ul className='ssa-uldot'>
                                                        <li> Enter a new market</li>
                                                        <li> Run a global-reach campaign</li>
                                                        <li>Increase the number of deposits</li>
                                                        <li>Attract users to a seasonal sale</li>
                                                        <li> Increase brand awareness</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='SSA_benefits_font26px_purple SSA_BENEFIT_Text_Black py-2 px-4 text-center' style={{ border: '1px solid white', borderRadius: '30px', backgroundColor: 'white' }}> <span style={{ color: '#73035b' }}>CPM, CPA</span> Traffic</div>

                                                <div className='pt-4 pb-2' style={{ fontSize: '20px', fontWeight: '600' }}>Facts</div>
                                                <div>
                                                    <ul className='ssa-uldot'>
                                                        <li> Enter a new market</li>
                                                        <li> Run a global-reach campaign</li>
                                                        <li>Increase the number of deposits</li>
                                                        <li>Attract users to a seasonal sale</li>
                                                        <li> Increase brand awareness</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-wrap pt-3">

                                                <Button className={`LiveDemoButton btn`}>
                                                    <div className='p-0 m-0'>
                                                        <div className='d-flex align-items-center justify-content-center'>
                                                            <span className="ps-3 me-2 "><RxVideo /></span>


                                                            <span>Live Demo</span>

                                                        </div>
                                                    </div>
                                                </Button>
                                                <Button className={`MoreButton btn`}>
                                                    <div className='p-0 m-0'>
                                                        <div className='d-flex align-items-center justify-content-center'>

                                                            <span>Learn More</span>
                                                            <span className={`ps-3 moreArrrow`}><FaArrowCircleRight /></span>

                                                        </div>
                                                    </div>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/33f238ec-ea4e-4546-edc8-cb9ccc9f1500/public' ></img>


                                        <div className="text-center pt-3">Ads open in a new tab after a user clicks anywhere on a website</div>
                                    </div>
                                </div>

                            </div>
                        </>}

                    {inPagePush && <>
                        <div className="container mt-4 p-5" style={{ backgroundColor: '#efefef', borderRadius: '30px' }}>
                            <div className="row " >
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className='SSA_benefits_font26px_purple SSA_BENEFIT_Text_Black py-2 px-4 text-center' style={{ border: '1px solid white', borderRadius: '30px', backgroundColor: 'white' }}> <span style={{ color: '#73035b' }}>2.5B+</span>  ad views weekly</div>
                                            <div className='pt-4 pb-2' style={{ fontSize: '20px', fontWeight: '600' }}>Use cases</div>
                                            <div>
                                                <ul className='ssa-uldot'>
                                                    <li> Enter a new market</li>
                                                    <li> Run a global-reach campaign</li>
                                                    <li>Increase the number of deposits</li>
                                                    <li>Attract users to a seasonal sale</li>
                                                    <li> Increase brand awareness</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className='SSA_benefits_font26px_purple SSA_BENEFIT_Text_Black py-2 px-4 text-center' style={{ border: '1px solid white', borderRadius: '30px', backgroundColor: 'white' }}> <span style={{ color: '#73035b' }}>CPM, CPA</span> Traffic</div>

                                            <div className='pt-4 pb-2' style={{ fontSize: '20px', fontWeight: '600' }}>Facts</div>
                                            <div>
                                                <ul className='ssa-uldot'>
                                                    <li> Enter a new market</li>
                                                    <li> Run a global-reach campaign</li>
                                                    <li>Increase the number of deposits</li>
                                                    <li>Attract users to a seasonal sale</li>
                                                    <li> Increase brand awareness</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap pt-3">

                                            <Button className={`LiveDemoButton btn`}>
                                                <div className='p-0 m-0'>
                                                    <div className='d-flex align-items-center justify-content-center'>
                                                        <span className="ps-3 me-2 "><RxVideo /></span>


                                                        <span>Live Demo</span>

                                                    </div>
                                                </div>
                                            </Button>
                                            <Button className={`MoreButton btn`}>
                                                <div className='p-0 m-0'>
                                                    <div className='d-flex align-items-center justify-content-center'>

                                                        <span>Learn More</span>
                                                        <span className={`ps-3 moreArrrow`}><FaArrowCircleRight /></span>

                                                    </div>
                                                </div>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/468b88c0-def8-4fa0-0370-f778a03f8900/public' ></img>


                                    <div className="text-center pt-3">Ads open in a new tab after a user clicks anywhere on a website</div>
                                </div>
                            </div>

                        </div>
                    </>}
                </div>
            </div>
        </div>
    )
}

export default Switch3Component