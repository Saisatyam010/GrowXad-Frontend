import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CPANetworkStyleCSS from '../../components/CpaNetwork/CpaNetwork.module.css'
const AdvertiserWelcome = (props) => {
    console.log(props)

    return (
        <>
            <Container fluid >
                <Container>
                    <Row className='py-7'>
                        <Col md={6} className='d-flex align-items-center '>
                            <Row>
                                <Col md={12}>
                                    <div >

                                        <p className={`${CPANetworkStyleCSS.dp_cpanetwork_main_heading} m-0`}>{props.message.heading1}</p>

                                        <p className={`${CPANetworkStyleCSS.dp_cpanetwork_main_heading} m-0`}>{props.message.heading2} {props.spanHeading} {props.afterSpanHeading}</p>

                                        <p className={` ${CPANetworkStyleCSS.dp_cpanetwork_main_sub_heading}`}>
                                            {props.message.subheading}
                                        </p>
                                    </div>
                                </Col>
                                <Col md={12} className="p-0 m-0">
                                    <div className='p-0 m-0'>
                                        <Button variant="outline" className={`${CPANetworkStyleCSS.RegisterButton}`}>Learn More</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col md={6} className='d-flex align-items-center justify-content-center '>
                            <div className=' '>
                                <img src={props.message.imgUrl} alt=''></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container >

        </>
    )
}

export default AdvertiserWelcome