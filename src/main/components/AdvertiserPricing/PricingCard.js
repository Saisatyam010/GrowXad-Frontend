import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import SmartCpmStyles from '../../components/Advertiser/AdvertiserStyles/PricingCard.module.css';
import { FaArrowCircleRight } from 'react-icons/fa';
const PricingCard = () => {
    const pricingDataMenus = [{
        imgUrl: 'https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/c94f6f62-ac4d-4453-8cd9-8b1b47913500/public',
        heading1: "vever",
        para1: "hufyrghurgrgrgr"

    },
    {
        imgUrl: 'https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/c94f6f62-ac4d-4453-8cd9-8b1b47913500/public',
        heading1: "vever",
        para1: "hufyrghurgrgrgr"

    },
    {
        imgUrl: 'https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/c94f6f62-ac4d-4453-8cd9-8b1b47913500/public',
        heading1: "vever",
        para1: "hufyrghurgrgrgr"

    }

    ]
    return (
        <>
            <div style={{ padding: "30px 0px" }}>

                <Container className="">

                    <Row >

                        {pricingDataMenus.map((ele) =>
                            <Col xs={12} md={4} lg={4} className={` py-5 `} >

                                <div className='card p-4'>               <div className='d-flex justify-content-center  '>
                                    <div>
                                        <  img src={ele.imgUrl} alt='advertisercaed' />
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
                                        <h4 className='fs-5' style={{ color: "#71065D" }}>{ele.heading1}</h4>
                                        <div className='d-flex align-items-start justify-content-start'>
                                            <hr style={{
                                                width: "180px",
                                                padding: '1px',
                                                backgroundColor: "#71065D",
                                                opacity: "100%"
                                            }} />
                                        </div>


                                        <p className=' fs-6'>{ele.para1}</p>
                                        <div className=' m-0  p-0  border-1 border-black'>

                                            <Button variant='outline' className={`  w-100 rounded-none  `}>

                                                <div className='p-0 m-0'>
                                                    <div className='d-flex align-items-center justify-content-center '>

                                                        <span>Expolore More</span>
                                                        <span className={`ps-3 moreArrrow py-2 `}><FaArrowCircleRight /></span>

                                                    </div>
                                                </div>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>)}



                    </Row>
                </Container>
            </div>
        </>
    )
}

export default PricingCard