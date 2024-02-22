import React from 'react'
import welcomeStyles from '../Home/HomeStyles/Welcome.module.css'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap'
import TopSlider from './TopSlider/TopSlider'

const Welcome = () => {
    return (
        <>
            <section className={`${welcomeStyles.SSA_HOME_parallax}`}>
                <Container>
                    <Row className=''>
                        <Col md={7} className='flex items-center content-center'>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className=''>
                                    <h1 className='text-center text-[3rem] text-white'>WELCOME TO GrowXad</h1>
                                    <p className={`${welcomeStyles.SSA_HOME_21pxFont} py-1 p-3 text-white`}> Unlock the full potential of your advertising
                                        campaigns with our cutting-edge platform.
                                        We are on a mission to empower your brand and extend your influence through revolutionary advertising solutions.
                                        Our goal is to provide you with the tools and technology needed to elevate your marketing efforts and achieve unparalleled success.</p>
                                    <div class="d-flex justify-content-center p-4 align-items-center">
                                        <div className='mr-2 w-40'>
                                            <Link to="/adveriserauthLogin" className='text-black no-underline hover:no-underline border-0 outline-0'> <button type="button" className={`${welcomeStyles.SSA_Btn_HOME_buytraffic} py-3   p-3 w-100`}>BUY TRAFFIC</button></Link>
                                        </div>
                                        <div className='w-40'>
                                            <Link to="/adveriserauthLogin" className='text-white no-underline hover:no-underline '> <Button variant="outline" className={`${welcomeStyles.gradient_signup}  px-5 mr-2 p-3 w-100`}>Sell Traffic</Button>{' '}</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col md={5} className=''>
                            <TopSlider />
                        </Col>
                    </Row>

                </Container>
            </section>
            {/* <section className={`${welcomeStyles.SSA_HOME_section_background} 
            ${welcomeStyles.SSA_HOME_parallax} d-flex justify-content-center align-items-center pt-5 text-center`}
                style={{ overflowX: "hidden" }}>
                <div>
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col-md-7 p-4">
                            <h1 className={welcomeStyles.heading}>WELCOME TO GrowXAd</h1>
                            <p className={`${welcomeStyles.SSA_HOME_21pxFont} py-1 p-3`}> Unlock the full potential of your advertising
                                campaigns with our cutting-edge platform.
                                We are on a mission to empower your brand and extend your influence through revolutionary advertising solutions.
                                Our goal is to provide you with the tools and technology needed to elevate your marketing efforts and achieve unparalleled success.</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center p-4 align-items-center">
                        <Link to="/adveriserauthLogin" className='text-black no-underline hover:no-underline border-0 outline-0'> <button type="button" className={`${welcomeStyles.SSA_Btn_HOME_buytraffic} py-3  mr-2 p-3`}>BUY TRAFFIC</button></Link>
                        <div className='mt-2'>
                            <Link to="/adveriserauthLogin" className='text-white no-underline hover:no-underline '> <Button variant="outline" className={`${welcomeStyles.gradient_signup}  px-5 mr-2 p-3`}>Sell Traffic</Button>{' '}</Link>
                        </div>
                    </div>
                </div>
            </section> */}



        </>
    )
}

export default Welcome;