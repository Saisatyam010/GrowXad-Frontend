import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
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
            <div className="container-fluid  px-4 py-3  my-3 ">
                <div className='px-md-5 px-0'>
                    {/* <div  className:{`row mx-md-5 mx-0 justify-content-center ${dp_advbenifits_3btns}`}> */}
                    <Row className='d-flex justify-content-center'>

                        <Col md={8}>
                            <div className={`row ${AdvertiserBenefitsStyles.dp_advbenifits_3btns} my-4 `}>
                                <div className="col-4 text-center py-3" onClick={() => {
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
                                    <div >
                                        <div className={`${AdvertiserBenefitsStyles.dp_advbenifits_heading}  p-0 m-0`}>Popunder</div>
                                    </div>
                                </div>

                                <div className="col-4 text-center py-3" onClick={() => {
                                    setPopunder(false);
                                    setSocialBar(true);
                                    setInPagePush(false);
                                }}
                                    style={{ cursor: 'pointer', backgroundColor: socialBar ? 'black' : 'white', color: socialBar ? 'white' : 'black', borderRadius: "var(--border-radius-large)" }}
                                >
                                    <div >
                                        <div className={`${AdvertiserBenefitsStyles.dp_advbenifits_heading}`}>Native Ads</div>
                                    </div>
                                </div>
                                <div className="col-4 text-center py-3" onClick={() => {
                                    setPopunder(false);
                                    setSocialBar(false);
                                    setInPagePush(true);
                                }}
                                    style={{ cursor: 'pointer', backgroundColor: inPagePush ? 'black' : 'white', color: inPagePush ? 'white' : 'black', borderRadius: "var(--border-radius-large)" }}
                                >
                                    <div >
                                        <div className={`${AdvertiserBenefitsStyles.dp_advbenifits_heading}`}>In-page Push</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                            {popunder &&
                                <>
                                    <div className={`container-fluid ${AdvertiserBenefitsStyles.dp_switch_container}`}>
                                        <div className="row " >
                                            <div className="col-md-8">
                                                <div className="row ">

                                                    <div className="col-md-6 ">
                                                        <span className={`${AdvertiserBenefitsStyles.dp_switch_points_heading_container} fw-bold `}>
                                                            <span className={`${AdvertiserBenefitsStyles.dp_advbenifits_switch_heading_color} m-0 py-2 bg-bold`}>2.5B+ </span>
                                                            <span className={`${AdvertiserBenefitsStyles.dp_advbenifits_switch_heading} m-0 py-2 fw-bold`}>Ads views weekly</span>
                                                        </span>





                                                        <div className='py-2'>
                                                            <p className={`${AdvertiserBenefitsStyles.dp_advbenifits_content} m-0 pt-3 text-bold`}>Use cases</p>
                                                            <ul className={`${AdvertiserBenefitsStyles.dp_switch_points}`} >
                                                                <li> Enter a new market</li>
                                                                <li> Run a global-reach campaign</li>
                                                                <li>Increase the number of deposits</li>
                                                                <li>Attract users to a seasonal sale</li>
                                                                <li> Increase brand awareness</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <span className={`${AdvertiserBenefitsStyles.dp_switch_points_heading_container}`}>
                                                            <span className={`${AdvertiserBenefitsStyles.dp_advbenifits_switch_heading_color} m-0 py-2 fw-bold`}>CPM, CPA </span>
                                                            <span className={`${AdvertiserBenefitsStyles.dp_advbenifits_switch_heading} m-0 py-2 fw-bold`}>Traffic</span>
                                                        </span>

                                                        <div className='py-2'>
                                                            <p className={`${AdvertiserBenefitsStyles.dp_advbenifits_content} m-0 pt-3 text-bold`}>Facts</p>
                                                            <ul className={`${AdvertiserBenefitsStyles.dp_switch_points}`} >
                                                                <li> Enter a new market</li>
                                                                <li> Run a global-reach campaign</li>
                                                                <li>Increase the number of deposits</li>
                                                                <li>Attract users to a seasonal sale</li>
                                                                <li> Increase brand awareness</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className='row mt-4'>

                                                    <button className={`LiveDemoButton`}>
                                                        <div className='p-0 m-0'>
                                                            <div className='d-flex align-items-center justify-content-center'>
                                                                <span className={`pe-2 liveicon`}><RxVideo /></span>
                                                                <span>Get Pop Traffic</span>
                                                            </div>
                                                        </div>
                                                    </button>

                                                    <button className={`MoreButton1 py-2`}>
                                                        <div className='p-0 m-0'>
                                                            <div className='d-flex align-items-center justify-content-center'>
                                                                <span>Learn More</span>
                                                                <span className={`ps-2 moreArrrow`}><FaArrowCircleRight className='fs-5' /></span>
                                                            </div>
                                                        </div>
                                                    </button>


                                                </div>
                                            </div>

                                            <div className="col-md-4 p-0 m-0">
                                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/09379916-612d-4eaf-daf0-adf002da8100/public' alt='' ></img>

                                                <p className={`${AdvertiserBenefitsStyles.dp_advbenifits_content} m-0 pt-2 text-secondary`}>Ads open in a new tab after a user clicks anywhere on a website</p>
                                            </div>
                                        </div>

                                    </div>
                                </>}

                            {socialBar &&
                                <>
                                    <div className={`container-fluid ${AdvertiserBenefitsStyles.dp_switch_container}`}>
                                        <div className="row " >
                                            <div className="col-md-8">
                                                <div className="row ">

                                                    <div className="col-md-6 ">
                                                        <span className={`${AdvertiserBenefitsStyles.dp_switch_points_heading_container} fw-bold `}>
                                                            <span className={`${AdvertiserBenefitsStyles.dp_advbenifits_switch_heading_color} m-0 py-2 bg-bold`}>2.0B+ </span>
                                                            <span className={`${AdvertiserBenefitsStyles.dp_advbenifits_switch_heading} m-0 py-2 fw-bold`}>Ads views weekly</span>
                                                        </span>

                                                        <div className='py-2'>
                                                            <p className={`${AdvertiserBenefitsStyles.dp_advbenifits_content} m-0 pt-3 text-bold`}>Use cases</p>
                                                            <ul className={`${AdvertiserBenefitsStyles.dp_switch_points}`} >
                                                                <li> Multiply the number of online orders</li>
                                                                <li> Get more free and paid subscriptions</li>
                                                                <li>Demonstrate gameplay</li>
                                                                <li>Increase your customer base</li>
                                                                <li>Prewarm users lander</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <span className={`${AdvertiserBenefitsStyles.dp_switch_points_heading_container}`}>
                                                            <span className={`${AdvertiserBenefitsStyles.dp_advbenifits_switch_heading_color} m-0 py-2 fw-bold`}>CPM, CPA, CPM </span>
                                                            <span className={`${AdvertiserBenefitsStyles.dp_advbenifits_switch_heading} m-0 py-2 fw-bold`}>Traffic</span>
                                                        </span>

                                                        <div className='py-2'>
                                                            <p className={`${AdvertiserBenefitsStyles.dp_advbenifits_content} m-0 pt-3 text-bold`}>Facts</p>
                                                            <ul className={`${AdvertiserBenefitsStyles.dp_switch_points}`} >
                                                                <li> Up to 30X higher CTRs</li>
                                                                <li> Advanced templates</li>
                                                                <li>Adblock bypass</li>
                                                                <li>Browser friendliness</li>
                                                                <li>dynamic content, custom designs</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className='row mt-4'>

                                                    <button className={`LiveDemoButton`}>
                                                        <div className='p-0 m-0'>
                                                            <div className='d-flex align-items-center justify-content-center'>
                                                                <span className={`pe-2 liveicon`}><RxVideo /></span>
                                                                <span>Try Native Ads</span>
                                                            </div>
                                                        </div>
                                                    </button>

                                                    <button className={`MoreButton1 py-2`}>
                                                        <div className='p-0 m-0'>
                                                            <div className='d-flex align-items-center justify-content-center'>
                                                                <span>Learn More</span>
                                                                <span className={`ps-2 moreArrrow`}><FaArrowCircleRight className='fs-5' /></span>
                                                            </div>
                                                        </div>
                                                    </button>


                                                </div>
                                            </div>

                                            <div className="col-md-4 p-0 m-0">
                                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/09379916-612d-4eaf-daf0-adf002da8100/public' alt='' ></img>

                                                <p className={`${AdvertiserBenefitsStyles.dp_advbenifits_content} m-0 pt-2 text-secondary`}>Ads open in a new tab after a user clicks anywhere on a website</p>
                                            </div>
                                        </div>

                                    </div>
                                </>}

                            {inPagePush && <>
                                <div className={`container-fluid ${AdvertiserBenefitsStyles.dp_switch_container}`}>
                                    <div className="row " >
                                        <div className="col-md-8">
                                            <div className="row ">

                                                <div className="col-md-6 ">
                                                    <span className={`${AdvertiserBenefitsStyles.dp_switch_points_heading_container} fw-bold `}>
                                                        <span className={`${AdvertiserBenefitsStyles.dp_advbenifits_switch_heading_color} m-0 py-2 bg-bold`}>2.0B+ </span>
                                                        <span className={`${AdvertiserBenefitsStyles.dp_advbenifits_switch_heading} m-0 py-2 fw-bold`}>Ads views weekly</span>
                                                    </span>

                                                    <div className='py-2'>
                                                        <p className={`${AdvertiserBenefitsStyles.dp_advbenifits_content} m-0 pt-3 text-bold`}>Use cases</p>
                                                        <ul className={`${AdvertiserBenefitsStyles.dp_switch_points}`} >
                                                            <li> Boost VPN/cleaner/antivirus installs</li>
                                                            <li> Expose your app to millions of users</li>
                                                            <li>Increase app or utility trials</li>
                                                            <li>Attract multiple players to your game</li>
                                                            <li>Prewarm users lander</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <span className={`${AdvertiserBenefitsStyles.dp_switch_points_heading_container}`}>
                                                        <span className={`${AdvertiserBenefitsStyles.dp_advbenifits_switch_heading_color} m-0 py-2 fw-bold`}>CPM, CPA, CPM </span>
                                                        <span className={`${AdvertiserBenefitsStyles.dp_advbenifits_switch_heading} m-0 py-2 fw-bold`}>Traffic</span>
                                                    </span>

                                                    <div className='py-2'>
                                                        <p className={`${AdvertiserBenefitsStyles.dp_advbenifits_content} m-0 pt-3 text-bold`}>Facts</p>
                                                        <ul className={`${AdvertiserBenefitsStyles.dp_switch_points}`} >
                                                            <li> Untapped, quality audiences</li>
                                                            <li> OS-friendly ads that return high-value leads</li>
                                                            <li>Massive mobile traffic, incl. iOS users</li>
                                                            <li>Browser friendliness</li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='row mt-4'>

                                                <button className={`LiveDemoButton`}>
                                                    <div className='p-0 m-0'>
                                                        <div className='d-flex align-items-center justify-content-center'>
                                                            <span className={`pe-2 liveicon`}><RxVideo /></span>
                                                            <span>Try In-pagepush Ads</span>
                                                        </div>
                                                    </div>
                                                </button>

                                                <button className={`MoreButton1 py-2`}>
                                                    <div className='p-0 m-0'>
                                                        <div className='d-flex align-items-center justify-content-center'>
                                                            <span>Learn More</span>
                                                            <span className={`ps-2 moreArrrow`}><FaArrowCircleRight className='fs-5' /></span>
                                                        </div>
                                                    </div>
                                                </button>


                                            </div>
                                        </div>

                                        <div className="col-md-4 p-0 m-0">
                                            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/09379916-612d-4eaf-daf0-adf002da8100/public' alt='' ></img>

                                            <p className={`${AdvertiserBenefitsStyles.dp_advbenifits_content} m-0 pt-2 text-secondary`}>Ads open in a new tab after a user clicks anywhere on a website</p>
                                        </div>
                                    </div>

                                </div>
                            </>}
                        </Col>
                    </Row>



                </div>
            </div>
        </div>
    )
}

export default Switch3Component