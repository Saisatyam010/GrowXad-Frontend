import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import JoinGrowXAds from '../../Home/HomeStyles/JoinGrowXAd.module.css';


const JoinGrowXAd = () => {
    const buttons = [
        { text: "I'm an Advertiser" },
        { text: "I'm a Publisher" },
        // { text: "I'm an Affiliate" }
    ];
    return (
        <Container>
            <Row className='d-flex justify-content-center wow animate__animated animate__fadeIn animate__delay-0.5s'>
                <Col md={12}>
                    <div className={`container mt-5 rounded-lg ${JoinGrowXAds.rs_img} `}>
                        <div className='row d-flex justify-content-center bg-[rgba(0,0,0,0.5)]'>
                            <div className='col-md-12'>
                                <section className={JoinGrowXAds.rs_section_container}>
                                    <section className={JoinGrowXAds.rs_common_red_square_block}>
                                        <div className={`${JoinGrowXAds.rs_col_7} col-lg-8 offset-lg-2`}>
                                            <p className={`${JoinGrowXAds.AdvertisersContainerHeading} text-center fs-3 text-white`}>Join GrowXAds Today</p>
                                            <p className={`${JoinGrowXAds.JoinGrowXAdsSubHeading} text-white`}>
                                                You’re only a few minutes away from high-performing ad campaigns and loads of quality traffic. Welcome to your new growth area!
                                            </p>
                                        </div>
                                        <div className='conatiner'>
                                            <div className='row d-flex justify-content-center'>
                                                {buttons.map((button, index) => (
                                                    <div key={index} className='col-lg-4 col-md-4 pb-2'>
                                                        <p className={JoinGrowXAds.rs_block_list}>{button.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>
                                </section>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default JoinGrowXAd