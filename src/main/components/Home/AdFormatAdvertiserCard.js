import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import AdFormatStyle from '../Home/HomeStyles/AdFormat.module.css';
import { FaArrowCircleRight } from 'react-icons/fa';
import { RxVideo } from 'react-icons/rx';
import TbSeperator from '../Shared/TbSeperator';
import { AdFormatAdvertiserCardMenuData } from '../Shared/data/adFormatCardMenu';
import { Link } from 'react-router-dom';

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
    const { title, imagePath, Content, ContentUnderImage, imagePath2, link } = props
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


                        <div className='w-100 d-flex justify-content-center '>

                            <div className='' style={{ height: "220px", width: "250px" }}>
                                <img src={isHovered ? imagePath : imagePath2} className='' height={200} width={250}></img>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} className='d-flex flex-md-row mt-2 mt-md-0 text-center flex-column gap-2' >
                        <div className='d-flex justify-content-center mt-2 mt-md-0 flex-md-row gap-2 flex-column'>

                            <span>
                                <Button className={`${AdFormatStyle.LiveDemoButton} btn`}>
                                    <div className='p-0 d-flex align-items-center justify-content-center m-0'>

                                        <span className="me-2"><RxVideo /></span>
                                        <span>Live Demo</span>


                                    </div>
                                </Button>
                            </span>
                            <span>
                                <Link to={link} style={{ textDecoration: "none" }}>
                                    <Button className={`${AdFormatStyle.MoreButton} btn`}>
                                        <div className='p-0 m-0'>
                                            <div className='d-flex align-items-center justify-content-center'>
                                                <span>MORE</span>
                                                <span className={`ps-3 ${AdFormatStyle.moreArrrow}`}><FaArrowCircleRight /></span>
                                            </div>
                                        </div>
                                    </Button>
                                </Link>
                            </span>
                        </div>
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
