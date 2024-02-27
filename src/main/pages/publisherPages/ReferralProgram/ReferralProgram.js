import React, { useState } from 'react';
import ReferralProgramStyleCSS from './Referralprogram.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import { EarnMoneyByReferCard, HowToAttractReferrals } from './ReferralProgramData';
import Layout from '../../../components/Layout/Layout';

export const ReferralProgram = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    return (
        <Layout>
            <Container fluid>
                <Row className='d-flex justify-content-center'>

                    <Col md={10}>
                        {/* Image and Content */}

                        <Row>
                            <Col md={6} className='d-flex align-items-center'>
                                <Row>
                                    <Col md={12}>
                                        <div className='p-2'>

                                            <div className='fw-bold pt-5'>

                                                <span className={`${ReferralProgramStyleCSS.dp_referralprogram_main_heading}`}>
                                                    Join Our </span>
                                                <span className={`${ReferralProgramStyleCSS.dp_referralprogram_main_heading_color}`}>
                                                    Referral Program </span>
                                                <span className={`${ReferralProgramStyleCSS.dp_referralprogram_main_heading}`}>
                                                    Today! </span>
                                            </div>

                                            <p className={`py-3 ${ReferralProgramStyleCSS.dp_referralprogram_sub_heading}`}>
                                                Receive 5% of the revenue from every referral you bring in. Simply sign up and receive your exclusive referral link.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={12} className='m-0 p-0'>
                                        <button className={`my-3 ${ReferralProgramStyleCSS.RegisterButton}`}>

                                            <div className='d-flex align-items-center justify-content-center'>
                                                <span>
                                                    {/* <GoRocket /> */}
                                                </span>
                                                <span className='px-2'>
                                                    Start Monetizing
                                                </span>
                                            </div>

                                        </button>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={6} className='py-2 '>
                                <div className='text-center '>
                                    <img
                                        src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/9dd99071-0a9b-468d-2e48-5dac32cdd100/public"
                                        alt=""
                                    />
                                </div>
                            </Col>
                        </Row>

                        {/* Earn money */}

                        <Row>
                            <Col md={12}>
                                <Row>
                                    <Col md={12}>

                                        <div className='fw-bold text-center p-5'>
                                            <span className={`${ReferralProgramStyleCSS.dp_referralprogram_main_heading}`}>
                                                Earn money by recommending </span>
                                            <span className={`${ReferralProgramStyleCSS.dp_referralprogram_main_heading_color}`}>
                                                GrowXAds </span>
                                            <span className={`${ReferralProgramStyleCSS.dp_referralprogram_main_heading}`}>
                                                with friends and colleagues! </span>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    {EarnMoneyByReferCard.map((ele, key) => (
                                        <Col md={4} >
                                            <div className={`${ReferralProgramStyleCSS.dp_referalprogram_earnmoney_card}`}>
                                                <Row className='p-3 d-flex justify-content-center'>
                                                    <Col md={12} className=' d-flex align-items-center' style={{ height: "100px", width: "150px" }}>
                                                        <img
                                                            src={ele.imgPath}
                                                            alt=""
                                                            style={{ minWidth: "100%", minHeight: "100%", }}
                                                        />
                                                    </Col>

                                                    <Col md={12} className='p-3 mt-3 text-center'>
                                                        <h4 className={`fw-bold ${ReferralProgramStyleCSS.dp_referralprogram_sub_heading}`}>{ele.title}</h4>
                                                        <p className={`m-0 ${ReferralProgramStyleCSS.dp_referralprogram_sub_heading}`}>
                                                            {ele.content}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </div>

                                        </Col>
                                    ))}
                                </Row>
                            </Col>

                        </Row>

                        {/* How can you attract referrals to GrowXAds??  */}

                        <Row>
                            <Col md={12} >
                                <Row>
                                    <Col md={12} className='py-4'>

                                        <div className='fw-bold text-center pt-5'>
                                            <span className={`${ReferralProgramStyleCSS.dp_referralprogram_main_heading}`}>
                                                How can you </span>
                                            <span className={`${ReferralProgramStyleCSS.dp_referralprogram_main_heading_color}`}>
                                                Attract </span>
                                            <span className={`${ReferralProgramStyleCSS.dp_referralprogram_main_heading}`}>
                                                referrals to </span>
                                            <span className={`${ReferralProgramStyleCSS.dp_referralprogram_main_heading_color}`}>
                                                GrowXAds? </span>
                                        </div>

                                        <p className={`text-center ${ReferralProgramStyleCSS.dp_referralprogram_sub_heading}`}>Employ any or all of these methods to earn additional income!</p>
                                    </Col>
                                </Row>


                                <Row>
                                    {HowToAttractReferrals.map((card, index) => (
                                        <div className='col-md-6 col-lg-6 mb-4'
                                            key={index} // Don't forget to add a unique key for each card
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}>
                                            <div className={`${ReferralProgramStyleCSS.rs_card_block} `}>
                                                <div className={ReferralProgramStyleCSS.rs_inner}>
                                                    <div className={`${ReferralProgramStyleCSS.rs_img} d-flex ${ReferralProgramStyleCSS.rs_strawberry}`}>
                                                        <img
                                                            src={card.imgPath}
                                                            alt='Unique Partner Care'
                                                            loading='lazy'
                                                            className=''
                                                        />
                                                    </div>
                                                    <div className={`${ReferralProgramStyleCSS.rs_h_card_border} `}>
                                                        <div className={ReferralProgramStyleCSS.slide_card}></div>
                                                    </div>
                                                    <h5 className={ReferralProgramStyleCSS.rs_h_text}>{card.title}</h5>
                                                    <p className={ReferralProgramStyleCSS.rs_p_text}>{card.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Row>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
