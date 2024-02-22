
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'react-slick'

import PricingCard from './PricingCard';

import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import PricingSlider from './PricingSlider/PricingSlider';
import AdvertiserWelcome from '../Advertiser/AdvertiserWelcome';
import SectionSeperator from '../Shared/SectionSeperator';
import AdvertiserPricingCard from './AdvertiserPricingCard';

import { AdvertiserCardDataMenus } from '../Shared/data/advertiserCardMenu';


const AdvertiserPricing = () => {
    const data = {
        heading1: 'GrowXad for Advertisers.',
        heading2: 'Experience a Superlative Output of Your Marketing',
        subheading: 'A game-changing advertising network for media buyers and affiliates looking for alternative traffic sources to connect their offers to highly engaged audiences.',
        spanHeading: 'ready to engage',
        afterSpanHeading: ' with your offers',
        imgUrl: 'https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/6de390dc-1dc4-42b0-0835-88f663227900/public'

    }
    const data2 = AdvertiserCardDataMenus;


    return (
        <div>
            <Layout>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 py-10'>
                            <AdvertiserWelcome message={data} />
                        </div>
                    </div>
                </div>
                <div className='container-fluid py-4 mt-2' style={{ backgroundColor: "#fff" }}>

                    <div className='row'>
                        <div className=''>
                            <h1 id="rs_ipp_why-join" className='text-center'>
                                Why to Join
                                <span className='webcl_theme'> GrowXad</span>
                            </h1>
                        </div>
                    </div>




                    <div className='row pt-5'>
                        <div col-md-12>
                            <PricingSlider />
                        </div>
                    </div>


                    <SectionSeperator />

                    <Container fluid className='  ' >
                        <Container className='pt-3' >
                            <Row>
                                <Col>
                                    <Row className='d-flex justify-content-center mb-4' >
                                        <Col md={6} className='text-center' >
                                            <h1 className='rk_price_h1' >Operate pricing models to gain
                                                broader reach and <span style={{ color: '#71065D' }} > larger ROI</span></h1>
                                        </Col>
                                    </Row>
                                    <Row className='' >
                                        <Col md={6} className='' >
                                            <h2 className='webcl_theme rk_price_h2' style={{ color: '#71065D' }} >CPA</h2>
                                            <h6 className='rk_price_h2'>COST-PER-ACQUISITION</h6>
                                            <p>Opt for Cost-Per-Acquisition (CPA) in familiar markets with a simple conversion process. For uncharted territories or complex flows, start with Cost Per Mille (CPM). This balance optimizes strategies, tailoring them to specific goals, while testing and data analysis pinpoint the most efficient model for maximum return on investment.</p>


                                        </Col>
                                        <Col md={6} className='' >
                                            <Row className='d-flex justify-content-center' >
                                                <Col md={4} sm={5} xs={5} className='' >
                                                    <div className='rk_price_bx-3'>
                                                        <p>TOP VERTICALS:</p>
                                                        <ul>
                                                            <li><Link to='' className='text-black no-underline'>VPN & Utility</Link></li>
                                                            <li><Link to='' className='text-black no-underline'>PIN Submits</Link></li>
                                                            <li><Link to='' className='text-black no-underline'>Sweepstakes</Link></li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col md={1} sm={2} xs={2} className='' >
                                                    <div className='rk_price_bx-3-Vl' ></div>
                                                </Col>
                                                <Col md={4} sm={5} xs={5} >
                                                    <div> <p>TOP AD FORMATS:</p>
                                                        <ul>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Popunder</Link></li>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Popunder</Link></li>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Push Ads</Link></li>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Native Banners</Link></li>
                                                        </ul></div>
                                                </Col>
                                            </Row>


                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr className='rk_price_bx-3-Hl' />

                                        </Col>
                                    </Row>


                                </Col>
                            </Row>

                            <Row>
                                <Col>

                                    <Row className='' >
                                        <Col md={6} className='' >
                                            <h2 className='webcl_theme rk_price_h2' style={{ color: '#71065D' }} >CPC</h2>
                                            <h6 className='rk_price_h2'>COST-PER-CLICK</h6>
                                            <p>Opt for cost-per-click payment for easily convertible offers, such as a simple opt-in. Utilize the Traffic Chart and Traffic Estimator tools to ensure a substantial volume of impressions. This ensures an effective strategy by aligning the payment model with the simplicity of the conversion process while optimizing impressions for maximum impact.</p>


                                        </Col>
                                        <Col md={6} className='' >
                                            <Row className='d-flex justify-content-center'>
                                                <Col md={4} sm={5} xs={5} className='' >
                                                    <div className='rk_price_bx-3'>
                                                        <p>TOP VERTICALS:</p>
                                                        <ul>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Mobile Apps & Games</Link></li>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Mobile Apps & Games</Link></li>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Utilities & Software</Link></li>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Subscriptions</Link></li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col md={1} sm={2} xs={2} className='' >
                                                    <div className='rk_price_bx-3-Vl' ></div>
                                                </Col>
                                                <Col md={4} sm={5} xs={5} >
                                                    <div className='rk_price_bx-3 '>
                                                        <div> <p>TOP AD FORMATS:</p>
                                                            <ul>
                                                                <li><Link to='' className='text-black text-[18px] no-underline '>Popunder</Link></li>
                                                                <li><Link to='' className='text-black text-[18px] no-underline'>Popunder</Link></li>
                                                                <li><Link to='' className='text-black text-[18px] no-underline'>Push Ads</Link></li>
                                                                <li><Link to='' className='text-black text-[18px] no-underline'>Native Banners</Link></li>
                                                            </ul></div>
                                                    </div>
                                                </Col>
                                            </Row>


                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr className='rk_price_bx-3-Hl' />

                                        </Col>
                                    </Row>


                                </Col>
                            </Row>

                            <Row>
                                <Col>

                                    <Row className='' >
                                        <Col md={6} className='' >
                                            <h2 className='webcl_theme rk_price_h2' style={{ color: '#71065D' }} >CPM</h2>

                                            <h6 className='rk_price_h2'>COST-PER-MILLE</h6>
                                            <p>Cost-per-thousand-impressions (CPM) pricing suits exploring new GEOs and testing intricate conversion flows like CC submits. It's cost-effective, aiding bid balance until conversions increase, making it ideal for strategic testing and optimization.</p>


                                        </Col>
                                        <Col md={6} className='' >
                                            <Row className='d-flex justify-content-center'>
                                                <Col md={4} sm={5} xs={5} className='' >
                                                    <div className='rk_price_bx-3'>
                                                        <p className='webcl_theme'>TOP VERTICALS:</p>
                                                        <ul>
                                                            <li><Link to='' className='text-black no-underline'>Finance</Link></li>
                                                            <li><Link to='' className='text-black no-underline'>E-commerce</Link></li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col md={1} sm={2} xs={2} className='' >
                                                    <div className='rk_price_bx-3-Vl' ></div>
                                                </Col>
                                                <Col md={4} sm={5} xs={5} >
                                                    <div> <p>TOP AD FORMATS:</p>
                                                        <ul>
                                                            <li><Link to='' className='text-black text-[18px] no-underline '>Popunder</Link></li>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Popunder</Link></li>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Push Ads</Link></li>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Native Banners</Link></li>
                                                        </ul></div>
                                                </Col>
                                            </Row>


                                        </Col>
                                    </Row>



                                </Col>
                            </Row>

                        </Container>


                    </Container>


                    <div className='row pt-5'>
                        <div col-md-12>
                            <PricingCard />
                        </div>
                    </div>


                    <AdvertiserPricingCard cardData={data2} />


                </div>
            </Layout>
        </div>
    )
}

export default AdvertiserPricing