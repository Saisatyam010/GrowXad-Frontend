import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import SmartCpmStyles from '../../components/Advertiser/AdvertiserStyles/PricingCard.module.css';
import { FaArrowCircleRight } from 'react-icons/fa';
const PricingCard = () => {
    return (
        <>

            <Container className='pt-3'>

                <Row >

                    <Col xs={12} md={4} lg={4} className={`px-3 py-2`} >
                        <div className={`${SmartCpmStyles.dp_pricing_banner_card} p-3`}>
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <  img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/c94f6f62-ac4d-4453-8cd9-8b1b47913500/public' alt='advertisercaed' />
                                </div>
                            </div>
                            <div className='d-flex align-items-start justify-content-start'>
                                <hr style={{
                                    width: "80px",
                                    padding: '1px',
                                    backgroundColor: "#71065D",
                                    opacity: "100%"
                                }} />
                            </div>
                            <div className=''>
                                <p className={`${SmartCpmStyles.dp_pricing_banner_heading} m-0`} >Protect budgets and win hearts with CPM-based smart campaign tests</p>
                                <div className='d-flex align-items-start justify-content-start'>
                                    <hr style={{
                                        width: "180px",
                                        padding: '1px',
                                        backgroundColor: "#71065D",
                                        opacity: "100%"
                                    }} />
                                </div>

                                <p className={`${SmartCpmStyles.dp_pricing_banner_content}`}>Forget about hit-or-miss tactics. Before
                                    running your CPA campaign at full
                                    blast, we test in on a CPM base with a
                                    test budget. It allows you to estimate
                                    how engaging your offer is and adjust
                                    the creatives before launching the
                                    campaign. For Web-Push and Social
                                    Bar formats, you can A/B test up to 15
                                    creatives to pick the most beneficial</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={4} lg={4} className={`px-3 py-2`} >
                        <div className={`${SmartCpmStyles.dp_pricing_banner_card} p-3`}>
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <  img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/c94f6f62-ac4d-4453-8cd9-8b1b47913500/public' alt='advertisercaed' />
                                </div>
                            </div>
                            <div className='d-flex align-items-start justify-content-start'>
                                <hr style={{
                                    width: "80px",
                                    padding: '1px',
                                    backgroundColor: "#71065D",
                                    opacity: "100%"
                                }} />
                            </div>
                            <div className=''>
                                <p className={`${SmartCpmStyles.dp_pricing_banner_heading} m-0`} >Protect budgets and win hearts with CPM-based smart campaign tests</p>
                                <div className='d-flex align-items-start justify-content-start'>
                                    <hr style={{
                                        width: "180px",
                                        padding: '1px',
                                        backgroundColor: "#71065D",
                                        opacity: "100%"
                                    }} />
                                </div>

                                <p className={`${SmartCpmStyles.dp_pricing_banner_content}`}>Forget about hit-or-miss tactics. Before
                                    running your CPA campaign at full
                                    blast, we test in on a CPM base with a
                                    test budget. It allows you to estimate
                                    how engaging your offer is and adjust
                                    the creatives before launching the
                                    campaign. For Web-Push and Social
                                    Bar formats, you can A/B test up to 15
                                    creatives to pick the most beneficial</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={4} lg={4} className={`px-3 py-2`} >
                        <div className={`${SmartCpmStyles.dp_pricing_banner_card} p-3`}>
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <  img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/c94f6f62-ac4d-4453-8cd9-8b1b47913500/public' alt='advertisercaed' />
                                </div>
                            </div>
                            <div className='d-flex align-items-start justify-content-start'>
                                <hr style={{
                                    width: "80px",
                                    padding: '1px',
                                    backgroundColor: "#71065D",
                                    opacity: "100%"
                                }} />
                            </div>
                            <div className=''>
                                <p className={`${SmartCpmStyles.dp_pricing_banner_heading} m-0`} >Protect budgets and win hearts with CPM-based smart campaign tests</p>
                                <div className='d-flex align-items-start justify-content-start'>
                                    <hr style={{
                                        width: "180px",
                                        padding: '1px',
                                        backgroundColor: "#71065D",
                                        opacity: "100%"
                                    }} />
                                </div>

                                <p className={`${SmartCpmStyles.dp_pricing_banner_content}`}>Forget about hit-or-miss tactics. Before
                                    running your CPA campaign at full
                                    blast, we test in on a CPM base with a
                                    test budget. It allows you to estimate
                                    how engaging your offer is and adjust
                                    the creatives before launching the
                                    campaign. For Web-Push and Social
                                    Bar formats, you can A/B test up to 15
                                    creatives to pick the most beneficial</p>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default PricingCard