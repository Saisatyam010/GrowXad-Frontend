import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { RtbMenu } from '../Shared/data/rtbMenu'
import RtbStyles from '../../components/Home/HomeStyles/Rtb.module.css'
import JoinGrowXAd from './HomeStyles/JoinGrowXAd'

import { FaArrowCircleRight } from 'react-icons/fa'
import TbSeperator from '../Shared/TbSeperator'

// import JoinGrowXAd from './HomeStyles/JoinGrowXAd'

const Rtb = (props) => {
    const { title, imagePath } = props

    return (
        <Container fluid className={`${RtbStyles.RtbContainer} py-5`}>
            <Container style={{ marginBottom: "4rem" }}>
                <Row>
                    <Col md={12} className='d-flex justify-content-center'>
                        <h1 className='text-center font-semibold text-black'>Real <span style={{ color: "#71065D" }}>Time</span> Bidding</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={12} className=''>
                        <div className={RtbStyles.RtbBackgroundImage} style={{ height: "500px" }}></div>
                    </Col>
                </Row>
            </Container>
            <TbSeperator />
            <TbSeperator />
            <Container>
                <Row>
                    <TbSeperator />
                    <TbSeperator />
                    <Col md={12} >
                        <h1 className='text-center font-semibold text-black'>Well <span style={{ color: "#71065D" }}>Proven</span>Technology</h1>
                    </Col>
                    </Row>
                    <TbSeperator />
                    <TbSeperator />
                    <Row className=''>
                    <Col md={12} lg={12} className={` d-flex justify-content-center ${RtbStyles.RtbItems}`}>
                    <div className='d-flex align-items-center justify-content-center flex-wrap'>
    {RtbMenu.map((advertiser, index) => (
        <div className={`col-md-2 col-xs-6 ${RtbStyles.rk_proven_td} mb-3`} key={index}>
            <RtbCards {...advertiser} />
        </div>
    ))}
</div>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={12} className='d-flex justify-content-center py-5'>
                        <Button className={`LiveDemoButton btn`}>
                            <div className='p-0 m-0'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <span>Advertiser</span>
                                    <span className={`ps-3 `}><FaArrowCircleRight /></span>
                                </div>
                            </div>
                        </Button>
                        <Button className={`MoreButton btn`}>
                            <div className='p-0 m-0'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <span>Publisher</span>
                                    <span className={`ps-3 `}><FaArrowCircleRight /></span>
                                </div>
                            </div>
                        </Button>
                    </Col>
                </Row>
            </Container>
            <TbSeperator />
            <Row>
                <JoinGrowXAd />
            </Row>
        </Container>
    )
}
export default Rtb
const RtbCards = (props) => {
    const { title, imagePath, height, width } = props
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 d-flex align-items-center justify-content-center '>
                    <div>
                        <img src={imagePath} height={height} width={width}></img>
                    </div>
                </div>
            </div>
            <p className={`text-center ${RtbStyles.RtbCardsHeading}`}>{title}</p>
        </div>
    )
}
