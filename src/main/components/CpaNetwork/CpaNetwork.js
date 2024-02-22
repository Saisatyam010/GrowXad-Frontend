import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CPANetworkSocialMediaIcons, CpaNetworkDiscoverKeyFeatures, CpaNetworkExOpportunity, CpaNetworkGrowXAdsVerticals } from '../Shared/data/CpaNetworkData';
import CPANetworkStyleCSS from '../../components/CpaNetwork/CpaNetwork.module.css';
import Layout from '../Layout/Layout';


export const CpaNetwork = () => {
    return (
        <Layout>
            <Container fluid >
                <Row >

                    <Col md={12} >

                        <Row className='d-flex justify-content-center '>
                            <Col md={10}>
                                {/* Image and Content */}

                                <Row>
                                    <Col md={6} className='d-flex align-items-center'>
                                        <Row>
                                            <Col md={12} className='p-0 m-0'>
                                                <div style={{ lineHeight: "40px" }}>
                                                    <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading_color}>Sign up </span>

                                                    <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading}>
                                                        with </span>

                                                    <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading_color}> GrowXAds </span>

                                                    <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading}>
                                                        today to access exclusive offers directly from </span>

                                                    <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading_color}>Advertisers!</span>
                                                </div>

                                                <p className={`py-3 ${CPANetworkStyleCSS.dp_cpanetwork_main_sub_heading}`}>
                                                    Unlock exclusive offers with higher payouts and exceptional conversion rates just moments away. Explore our top selection of VPN, Utility, and Sweepstake Offers – start testing now!"
                                                </p>
                                            </Col>
                                            <Col md={12} className='p-0 m-0'>
                                                <button className={`my-3 mx-0  fw-bold ${CPANetworkStyleCSS.RegisterButton}`}>Register Now!</button>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md={6} className='py-2 '>
                                        <div className='text-center '>
                                            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d741e910-49e8-411d-f605-2f6ed68a9c00/public' width="100%" height="100%" alt=''></img>
                                        </div>
                                    </Col>
                                </Row>

                                {/* Exclusive Opportunity */}

                                <Row>
                                    <Col md={12}>

                                        <div style={{ lineHeight: "40px" }} className='text-center py-5'>
                                            <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading}> Access exclusive opportunities with </span>

                                            <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading_color}>GrowXAds CPA </span>
                                        </div>
                                    </Col>

                                    <Col md={12}>
                                        <Row className='d-flex justify-content-center'>

                                            <Col md={11} className='d-flex align-items-center justify-content-center'>

                                                {CpaNetworkExOpportunity.map((ele, index) => (
                                                    <Col md={4} key={index} className={`${CPANetworkStyleCSS.dp_cpanetwork_exclusive_cards} mx-3`}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <p className={`${CPANetworkStyleCSS.dp_cpanetwork_main_sub_heading} text-center fw-bold`}>{ele.title} </p>
                                                            </Col>
                                                            <Col md={12} className='d-flex justify-content-center'>
                                                                <div className={`${CPANetworkStyleCSS.dp_cpanetwork_opp_cards_underline}  `}> </div>
                                                            </Col>
                                                            <Col md={12}>
                                                                <p className={`${CPANetworkStyleCSS.dp_cpaNetwork_cards_content} text-center`}>{ele.content} </p>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                ))}

                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                {/* Verticals that work best with growXads traffic */}

                                <Row >
                                    <Col md={12}>

                                        <div className='text-center p-5 '>
                                            <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading}>
                                                Verticals that work best
                                                with </span>

                                            <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading_color}>GrowXAds traffic</span>

                                        </div>
                                    </Col>


                                    <Row className='d-flex justify-content-center'>

                                        <Col md={12} className='d-flex align-items-center justify-content-between' >

                                            <Row className='d-flex justify-content-center'>
                                                {CpaNetworkGrowXAdsVerticals.map((ele, index) => (
                                                    <Col md={3}>

                                                        <Row>
                                                            <Col md={12} className='d-flex justify-content-center'>
                                                                <div className={`${CPANetworkStyleCSS.dp_cpanetwork_icon_circle}`}>
                                                                    <img src={ele.imgPath} alt='' />
                                                                </div>
                                                            </Col>
                                                            <Col md={12}>
                                                                <p className={`${CPANetworkStyleCSS.dp_cpanetwork_main_sub_heading}  text-center py-2 `}>{ele.title}</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                ))}
                                            </Row>

                                        </Col>
                                    </Row>
                                </Row>

                                {/* Discover Our Key Features */}

                                <Row className='py-5'>
                                    <Col md={12} className='py-2'>

                                        <div className='text-center pt-5 '>
                                            <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading_color}>Discover </span>

                                            <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading}>
                                                Our Key Features </span>
                                        </div>

                                        <p className={`text-center ${CPANetworkStyleCSS.dp_cpanetwork_main_sub_heading} `}>
                                            Every day, our dedicated work strives to improve and brighten our clients' lives.
                                        </p>
                                    </Col>

                                    <Row className='d-flex justify-content-between py-5'>

                                        <Col md={12} className='d-flex align-items-center justify-content-between' >

                                            <Row className='d-flex justify-content-center'>
                                                {CpaNetworkDiscoverKeyFeatures.map((ele, index) => (

                                                    <Col md={4} className="justify-content-center pt-4">

                                                        <div className={`text-center  ${CPANetworkStyleCSS.dp_cpanetwork_keyfeatures_card}`} >

                                                            <img src={ele.imgPath} alt="" className={`text-center  ${CPANetworkStyleCSS.dp_cpanetwork_keyfeatures_card_image}`}
                                                                width='100px' />

                                                            <p className={`${CPANetworkStyleCSS.dp_cpanetwork_main_sub_heading}  text-center fw-bold pt-5`}>{ele.title}</p>

                                                            <p className={`${CPANetworkStyleCSS.dp_cpaNetwork_cards_content}  text-center `}>{ele.content}</p>
                                                        </div>
                                                    </Col>

                                                ))}
                                            </Row>
                                        </Col>
                                    </Row>
                                </Row>

                                {/* About GrowXAds */}

                                <Row className='py-3' >
                                    <Col md={12} className='p-3'>
                                        <div className='text-center '>

                                            <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading}>
                                                About </span>

                                            <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading_color}>GrowXAds </span>
                                        </div>
                                    </Col>

                                    <Col md={12} >
                                        <Row className='d-flex align-items-center' >
                                            <Col md={6} >
                                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/99e4efb9-a05f-4c97-78dd-e20b8c367900/public' alt="" height="85%" width="85%" />
                                            </Col>

                                            <Col md={6}>
                                                <div className={`text-center  ${CPANetworkStyleCSS.dp_cpanetwork_keyfeatures_card} 
                                  ${CPANetworkStyleCSS.dp_cpaNetwork_cards_content}
                                  `}>
                                                    <p >
                                                        Welcome to GrowXAds, a pioneering ad network established in 2013. Trusted by over 30,000 advertisers and publishers globally, we offer an intuitive platform featuring regularly updated offers, rapid and generous payouts, user-friendly statistics, and an advanced tracking system.
                                                    </p>

                                                    <p>
                                                        Experience unique, high-payout offers tailored for individual affiliates – seize the opportunity to be the first to access exclusive closed offers!
                                                    </p>

                                                    <p>
                                                        At GrowXAds, we prioritize top-notch service, ensuring full support throughout your campaign launch. Join us for a seamless and rewarding advertising journey!
                                                    </p>

                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        {/* Be part of the GrowXAds community, where passionate professionals thrive. */}

                        <Row className={`${CPANetworkStyleCSS.dp_cpanetwork_socialmedia_bg}  d-flex justify-content-center`}>
                            <Col md={8} >
                                <h1 className={`text-center  ${CPANetworkStyleCSS.dp_cpanetwork_main_heading}`}>Be part of the GrowXAds community, where passionate professionals thrive.</h1>

                                <p className={`text-center ${CPANetworkStyleCSS.dp_cpanetwork_main_sub_heading}`}>
                                    Stay ahead with early access to new offers, traffic insights, and expert strategies.
                                </p>
                            </Col>

                            <Col md={12} >
                                <Row className=" justify-content-center">

                                    {
                                        CPANetworkSocialMediaIcons.map((ele, index) => (
                                            <div className="col-md-1 col-4">
                                                <img style={{ borderRadius: '50%' }} src={ele.imgPath} alt="" width='80%' />
                                            </div>
                                        ))
                                    }

                                </Row>
                            </Col>
                        </Row>

                    </Col>
                </Row>

            </Container>
        </Layout>
    )
}
