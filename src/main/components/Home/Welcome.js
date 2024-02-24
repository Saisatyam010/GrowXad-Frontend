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
                        <Col md={6} className='flex items-center content-center'>
                            <div className="">
                                <div className=''>
                                    <h1 className=' text-[3rem] text-white mb-4'>Revolutionize Your Reach: The Premier Ad Network Experience</h1>
                                    <p className={`${welcomeStyles.SSA_HOME_21pxFont} py-1 text-white mb-4`}> Unlock the full potential of your advertising
                                        Publisher and advertiser unite their efforts with the support of an ad server to enhance targeting and maximize campaign effectiveness</p>
                                    <div class="d-flex">
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
                        <Col md={6} className=''>
                            <TopSlider />
                        </Col>
                    </Row>

                </Container>
            </section>


        </>
    )
}

export default Welcome;