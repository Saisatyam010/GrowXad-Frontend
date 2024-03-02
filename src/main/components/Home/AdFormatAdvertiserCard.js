import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';

import AdFormatStyle from '../Home/HomeStyles/AdFormat.module.css';
import { Row, Col } from 'react-bootstrap';

import { FaArrowCircleRight } from 'react-icons/fa';


import { RxVideo } from 'react-icons/rx';
import TbSeperator from '../Shared/TbSeperator';
import { AdFormatAdvertiserCardMenuData } from '../Shared/data/adFormatCardMenu';
const AdFormatAdvertiserCard = () => {


    return (
        <>

            <Container fluid>
                <Row>

                    <Col md={12}>
                        {AdFormatAdvertiserCardMenuData.map((advertiser, index) => {
                            return (
                                <>
                                    <PublisherCards {...advertiser} />
                                </>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AdFormatAdvertiserCard



const PublisherCards = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const { title, imagePath, Content, ContentUnderImage, imagePath2 } = props
    return (
        <>
            <TbSeperator />
            <Container className={AdFormatStyle.AdvertisersContainer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Row>
                    <Col md={7} >
                        <Row>
                            <Col md={12}>
                                {/* <img
                                src={imagePath}
                                alt=""
                            /> */}
                                <h4 className={AdFormatStyle.heading}>
                                    {title}
                                </h4>
                                <p className={AdFormatStyle.content}>
                                    {Content}
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={5}  >
                        {/* <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                        <iframe src={imagePath} style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" />
                    </div> */}
                        <div className='w-100 d-flex justify-content-center'>
                            <div className='' style={{ height: "220px", width: "250px" }}>
                                <img src={isHovered ? imagePath : imagePath2} className='' height={200} width={250}></img>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} className='d-flex flex-md-row flex-column gap-2' >
                        <Button className={`${AdFormatStyle.LiveDemoButton} btn`}>
                            <div className='p-0 m-0'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <span className="ps-3 me-2 "><RxVideo /></span>
                                    <span>Live Demo</span>

                                </div>
                            </div>
                        </Button>
                        <Button className={`${AdFormatStyle.MoreButton} btn`}>
                            <div className='p-0 m-0'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <span>MORE</span>
                                    <span className={`ps-3 ${AdFormatStyle.moreArrrow}`}><FaArrowCircleRight /></span>
                                </div>
                            </div>
                        </Button>
                    </Col>
                    <Col md={5} className='d-flex align-items-center '>
                        <p className={AdFormatStyle.text_U_img}>{ContentUnderImage}</p>
                    </Col>
                </Row>
            </Container>
            <TbSeperator />

        </>
    )
}
