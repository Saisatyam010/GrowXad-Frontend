import React, { useState } from 'react';
import ReferralProgramStyleCSS from './Referralprogram.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import { EarnMoneyByReferCard, HowToAttractReferrals } from './ReferralProgramData';
import Layout from '../../../components/Layout/Layout';
import { GoRocket } from 'react-icons/go';
import TbSeperator from '../../../components/Shared/TbSeperator';
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
                <TbSeperator />
                <Row className='d-flex justify-content-center'>
                    <Col md={10}>
                        {/* Image and Content */}

                        <Row className='py-4'>
                            <Col md={6} className='d-flex align-items-center'>
                                <Row>
                                    <Col md={12} className='p-0'>
                                        <div className='fw-bold  pt-5'>

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
                                    </Col>
                                    <Col md={12} className='m-0 p-0'>


                                        <button className={`MoreButton  m-0`}>
                                            <div className='p-0 m-0'>
                                                <div className='d-flex align-items-center justify-content-center '>
                                                    <span className={`${ReferralProgramStyleCSS.dp_referralprogram_content}`}>Learn More</span>
                                                    <span className={`ps-3 moreArrrow`}><GoRocket /></span>
                                                </div>
                                            </div>
                                        </button>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={6} className='py-2 '>
                                <div className='text-center '>
                                    <img
                                        src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/5ecb590d-2679-44d3-8fc0-84e84ec43400/public"
                                        alt=""
                                    />
                                </div>
                            </Col>
                        </Row>

                        {/* Earn money */}
                        <TbSeperator />
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
                                                            style={{ minWidth: "100%", minHeight: "100%", }} />
                                                    </Col>

                                                    <Col md={12} className='p-3 text-center'>
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
                        <TbSeperator />
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
                                            key={index}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}>
                                            <div className={`${ReferralProgramStyleCSS.rs_card_block} `}>
                                                <div className={ReferralProgramStyleCSS.rs_inner}>
                                                    <div className={`${ReferralProgramStyleCSS.rs_img}`}>
                                                        <img
                                                            src={card.imgPath}
                                                            alt='Unique Partner Care'
                                                            loading='lazy'
                                                            className='w-100 h-100'
                                                        />
                                                    </div>

                                                    <div className='my-4'>
                                                        <span className={`${ReferralProgramStyleCSS.dp_howtoattract_card_fontBorder}`}>{card.title}</span>
                                                    </div>
                                                    <p className={`${ReferralProgramStyleCSS.rs_p_text} m-0`}>{card.content}</p>
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
