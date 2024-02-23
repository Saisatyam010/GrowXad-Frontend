import React, { useState } from 'react'
import BenifitsForPublishersStyleCSS from './BenifisForPublishers.module.css'
import { GoRocket } from "react-icons/go";
import { Col, Container, Row } from 'react-bootstrap';
import { BloggerReviews, MonitizeAnyTrafficData, WhyChooseUsCards } from './BenifitsForPublisherData';
import { RiDoubleQuotesL } from "react-icons/ri";
import Layout from '../../../components/Layout/Layout';

export const BenifitsForPublishers = () => {
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
                                            <div className='fw-bold'>
                                                <span className={`${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_main_heading}`}>
                                                    Your Premier </span>
                                                <span className={`${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_main_heading_color}`}>
                                                    Destination </span>
                                                <span className={`${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_main_heading}`}>
                                                    for </span>
                                                <span className={`${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_main_heading_color}`}>
                                                    Publishers </span>
                                                <span className={`${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_main_heading}`}>
                                                    for Ads</span>
                                            </div>
                                            <p className={`py-2 ${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_sub_heading}`}>
                                                Partner with us for a lifetime and receive dedicated support, ensuring continuous growth in your revenue endeavors.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={12} className='p-0 m-0'>
                                        <button className={`my-1 ${BenifitsForPublishersStyleCSS.RegisterButton}`}>
                                            <div className='d-flex align-items-center justify-content-center'>
                                                <span>
                                                    <GoRocket />
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
                                <div className='d-flex justify-center text-center '>
                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/9aeac015-b088-42cb-0f24-a295c24d5a00/public' width="500px" height="100%" alt=''></img>
                                </div>
                            </Col>
                        </Row>

                        {/* Monetize any type of Traffic */}

                        <Row className='px-5 mx-5 mt-5'>
                            <Col md={12}>

                                <Row >
                                    <Col md={12}>
                                        <div className='fw-bold text-center py-5'>
                                            <span className={`${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_main_heading_color}`}>
                                                Monetize </span>
                                            <span className={`${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_main_heading}`}>
                                                any type of </span>
                                            <span className={`${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_main_heading_color}`}>
                                                Traffic </span>
                                        </div>
                                    </Col>


                                    <Col md={6} className=' d-flex justify-content-center align-items-center'>
                                        <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/f0b0ccff-8792-403e-7d3c-3fab8fcfe200/public' width="350px" height="80%" alt=''></img>
                                    </Col>

                                    <Col md={6} className='d-flex align-items-center '>
                                        <Row>
                                            <Col md={12}>
                                                <div className={`fw-bold ${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_sub_heading}`}>
                                                    <span>Mobile and Desktop Traffic</span>
                                                </div>
                                            </Col>

                                            <Col md={12}>
                                                <p className={` ${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_cards_content}`}>Optimize your website for diverse user experiences with our mobile and desktop traffic solutions. Engage a mobile audience on the go and capture the attention of desktop users with responsive designs.</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6} className='d-flex align-items-center '>
                                        <Row>
                                            <Col md={12}>
                                                <div >
                                                    <div className={`fw-bold  ${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_sub_heading}`}>
                                                        <span>Referral and Social Traffic</span>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={12} className="" >
                                                <p className={` ${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_cards_content}`}>Elevate your reach with our referral and social traffic solutions. Leverage word-of-mouth marketing for organic growth through referrals, while harnessing social media platforms to engage and captivate audiences.</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={6} className='d-flex justify-content-center align-items-center'>
                                        <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/9702214c-f9bf-4422-ed15-2554092afe00/public' width="350px" height="80%" alt=''></img>
                                    </Col>
                                </Row>

                                <Row >
                                    <Col md={6} className='d-flex justify-content-center align-items-center'>
                                        <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/df452dda-7e47-48c6-05a7-2d0ca21fa500/public' width="350px" height="80%" alt=''></img>
                                    </Col>
                                    <Col md={6} className='d-flex align-items-center'>
                                        <Row>
                                            <Col md={12}>
                                                <div>
                                                    <span className={`fw-bold ${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_sub_heading}`}>Paid Advertising Traffic</span>
                                                </div>
                                            </Col>
                                            <Col md={12}>
                                                <p className={` ${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_cards_content}`}>Elevate your brand with our paid advertising solutions and Transform your brand's visibility.achieve exceptional results as your brand takes center stage in the competitive landscape through our proven paid advertising strategies.</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        {/* Why Choose us */}

                        <Row className='d-flex justify-content-center p-1'>
                            <Col md={12}>
                                <div className='fw-bold text-center py-5'>
                                    <span className={`${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_main_heading}`}>
                                        Why </span>
                                    <span className={`${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_main_heading_color}`}>
                                        Choose </span>
                                    <span className={`${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_main_heading}`}>
                                        us </span>
                                </div>
                            </Col>

                            <Row>
                                {WhyChooseUsCards.map((card, index) => (
                                    <div className='col-md-4 col-lg-4 mb-4'
                                        key={index}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}>
                                        <div className={`${BenifitsForPublishersStyleCSS.rs_card_block} `}>
                                            <div className={BenifitsForPublishersStyleCSS.rs_inner}>
                                                <div className={`${BenifitsForPublishersStyleCSS.rs_img} d-flex ${BenifitsForPublishersStyleCSS.rs_strawberry}`}>
                                                    <img
                                                        src={card.imgPath}
                                                        alt='Unique Partner Care'
                                                        loading='lazy'
                                                        className='' />
                                                </div>
                                                <div className={`${BenifitsForPublishersStyleCSS.rs_h_card_border} `}>
                                                    <div className={BenifitsForPublishersStyleCSS.slide_card}></div>
                                                </div>
                                                <h5 className={BenifitsForPublishersStyleCSS.rs_h_text}>{card.title}</h5>
                                                <p className={BenifitsForPublishersStyleCSS.rs_p_text}>{card.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Row>
                        </Row>

                        {/* Top Bloggers' Review */}

                        <Row className='d-flex justify-content-center p-1'>
                            <Col md={12}>
                                <div className='fw-bold text-center py-5'>
                                    <span className={`${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_main_heading}`}>
                                        Top Bloggers' </span>
                                    <span className={`${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_main_heading_color}`}>
                                        Review </span>
                                </div>
                            </Col>

                            <Row className='d-flex justify-content-center'>
                                {BloggerReviews.map((ele, key) => (
                                        <Col md={4} className='pt-3'>
                                            <div className={BenifitsForPublishersStyleCSS.dp_publisher_blogger_container}>
                                                <Row >
                                                    <Col md={12} className='py-2'>
                                                        <RiDoubleQuotesL className={` ${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_main_heading_color} `} />
                                                    </Col>
                                                    <Col md={12}>
                                                        <p className={`m-0 ${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_cards_content} fw-bold`}>{ele.content}</p>
                                                    </Col>
                                                </Row>
                                                <Row className='d-flex align-items-center pt-4' style={{ padding: "1px 10px" }}>
                                                    <Col md={3} className='col-3'>
                                                        <div className='dp_publisher_blogger_icon_img'>
                                                            <img src={ele.imgProfilePath} alt='' height="100%" width="100%"></img>
                                                        </div>
                                                    </Col>
                                                    <Col md={7} className='col-6'>
                                                        <p className={`m-0 text-center ${BenifitsForPublishersStyleCSS.dp_benifitsforpublishers_cards_content} `}>{ele.name}</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    ))}
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
