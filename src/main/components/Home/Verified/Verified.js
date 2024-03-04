import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CPANetworkStyleCSS from '../../CpaNetwork/CpaNetwork.module.css'

const Verified = () => {
    return (
        <>
            <Container>
                <Row className='py-3' >
                    <Col md={12} className='py-3 wow animate__animated animate__fadeIn animate__delay-0.5s'>
                        <h1 className='text-center font-semibold text-black'>Verified <span style={{ color: "#71065D" }}>By</span> Adscore </h1>
                    </Col>

                    <Col md={12} >
                        <Row className='d-flex align-items-center' >
                            <Col md={6} className='wow animate__animated animate__rotateInDownLeft animate__delay-1s' >
                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/99e4efb9-a05f-4c97-78dd-e20b8c367900/public' alt="" height="85%" width="85%" />
                            </Col>

                            <Col md={6}>
                                <div className={`text-center wow animate__animated animate__fadeInRight animate__delay-0.5s ${CPANetworkStyleCSS.dp_cpanetwork_keyfeatures_card} 
                                ${CPANetworkStyleCSS.dp_cpaNetwork_cards_content}
                                `}>
                                    <p >
                                        GrowXad traffic quality is verified by Adscore.
                                        We block any bot or other fraudulent traffic.
                                    </p>

                                    <p >
                                        Thus, we make only real target users receive your content by creating a safe environment for advertisers and affiliate marketers. You can launch your ad campaign here.
                                    </p>

                                    <p >
                                        reaches you or, at least, before you receive the payout, we receive detailed reports, filter, and block fraudulent traffic.
                                    </p>

                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default Verified