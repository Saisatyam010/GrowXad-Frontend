
import { Button, Col, Container, Row } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import AdvertiserWelcome from "./AdvertiserWelcome";
import { FaArrowCircleRight } from "react-icons/fa";
import AdvertiserSelfServeStyles from '../../components/Advertiser/AdvertiserStyles/AdvertiserSelfServe.module.css';
export default function SelfServe() {
    const data = {
        heading1: 'GrowXad for Advertisers.',
        heading2: 'Experience a Superlative Output of Your Marketing',
        subheading: 'A game-changing advertising network for media buyers and affiliates looking for alternative traffic sources to connect their offers to highly engaged audiences.',
        spanHeading: 'ready to engage',
        afterSpanHeading: ' with your offers',
        imgUrl: 'https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/c9aeaeb1-a4cf-4869-1e39-647cd61f4700/public'

    }
    const selfServePlatform = [
        {
            selfServePlatformHeading: 'Our SSP is a part of our secret software and human intelligence blend, our own development we are proud of. No matter how skilled you are in affiliate marketing or media buying, GrowAds self-serve ad platform fits both beginners and professionals.',

        },
        {
            selfServePlatformHeading: 'GrowAds SSP allows advertisers to launch, manage and analyze advertising campaigns without any assistance! The dashboard is intuitive and easy to use.You can tour, or watch a brief video that will guide you through  self-serve platform\'s features.',
        }

    ]
    const CardDataMenu = [
        {
            cardImageUrl: 'https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/2e63fe6b-4224-483f-8c97-3a4c84416500/public',
            cardMenuHeading: 'Fast',

        }, {
            cardImageUrl: '	https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/e525a56d-d3bc-4211-a53b-917c2956ad00/public',
            cardMenuHeading: 'Simple',

        }, {
            cardImageUrl: 'https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/8facf47f-e927-477e-bd72-d52de9d97700/public',
            cardMenuHeading: 'Transparent',
        }

    ]
    return (
        <>
            <Layout>
                <section >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className='py-4'>
                                    <AdvertiserWelcome message={data} />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <Container>
                        <Row >
                            <Col className="d-flex justify-content-center py-4 align-items-center mt-5 ">
                                <div>
                                    <h3 className={`${AdvertiserSelfServeStyles.SSA_SelfService_SubHeadiing}`}>Improve your advertising experience with</h3>
                                    <h3 className={`d-flex justify-content-center ${AdvertiserSelfServeStyles.SSA_SelfService_SubHeadiing}`}><span className={AdvertiserSelfServeStyles.SSA_SELFSERVICE_PURPLE}>GrowAds self-service platform</span></h3>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-3  d-flex justify-content-center">
                            <Col>
                                <div className="text-left" >
                                    {/* <img src={img2} alt="" width='100%'/> */}
                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/880830fa-c519-4d89-935a-26ab17591b00/public' width="100%" className="ab-ssimg" />

                                </div>
                            </Col>
                            <Col>
                                <div className={`${AdvertiserSelfServeStyles.ab_ssborder1} text-left`}>

                                    <p className="d-flex"><span className={`${AdvertiserSelfServeStyles.ab_sspoints}  me-2`} ><TiTick className='fs-4 ' /> </span><span>All within <b>one page</b></span></p>

                                    <p className="d-flex  "><span className={`${AdvertiserSelfServeStyles.ab_sspoints}  me-2`} ><TiTick className='fs-4 ' /> </span><span>Set up detailed <b>targeting and tracking</b> in minutes</span></p>

                                    <p className="d-flex  "><span className={`${AdvertiserSelfServeStyles.ab_sspoints}  me-2`} ><TiTick className='fs-4 ' /> </span><span>Estimate <b>traffic volumes</b></span></p>

                                    <p className="d-flex  "><span className={`${AdvertiserSelfServeStyles.ab_sspoints}  me-2`} ><TiTick className='fs-4 ' /> </span><span><b>Launch </b>as many <b>campaigns</b> as you want</span></p>

                                    <p className="d-flex  "><span className={`${AdvertiserSelfServeStyles.ab_sspoints}  me-2`} ><TiTick className='fs-4 ' /> </span><span><b>A/B test</b> up to 15 creatives and scale</span></p>

                                    <p className="d-flex "><span className='ab-sspoints me-2' ><TiTick className='fs-4 ' /> </span><span>Enjoy <b>100% control</b></span></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    {/* ab-sscontainer2 */}
                    <Container className="mt-5 mb-5 ">
                        <Row>
                            {selfServePlatform.map(() =>
                                <Col className="mt-4">
                                    <div className="SSA_SelfServe_card1 ab-ssborder1  px-5 py-5 pb-5 ">
                                        <p className="ab-sspara">Our SSP is a part of our secret software and human intelligence blend, our own development we are proud of. No matter how skilled you are in affiliate marketing or
                                            media buying, GrowAds self-serve ad platform fits both beginners and professionals.</p>
                                    </div>
                                </Col>

                            )}

                        </Row>
                        <Row className=" d-flex justify-content-center p-3 mt-5 ">

                            {CardDataMenu.map((ele) =>
                                <Col>
                                    <div className=" ab-selfservice-iconcontainer">
                                        <span className="bg-danger">
                                            <div className="d-flex justify-content-center">
                                                <div className="ab-ss3img ">
                                                    <img src={ele.cardImageUrl} width={100} />
                                                </div>
                                            </div>
                                            <h3 className="text-center fw-bold">{ele.cardMenuHeading}</h3>
                                        </span>
                                    </div>
                                </Col>)}





                        </Row>

                        <Row>
                            <Col>
                                <div className="d-flex justify-content-center mt-5 ">
                                    <Link to="/adveriserauthLogin" className='no-underline hover:no-underline'>
                                        <Button className={`MoreButton btn   m-0`}>
                                            <div className='p-0 m-0'>
                                                <div className='d-flex align-items-center justify-content-center'>

                                                    <span>Try GrowXad SSP</span>
                                                    <span className={`ps-3 moreArrrow`}><FaArrowCircleRight /></span>

                                                </div>
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container className=" my-5 px-5">
                        <Row className="py-5">
                            <Col md={7} className="d-flex justify-content-center text-left">
                                <div className="pt-5">
                                    <h3 className="SSA_SelfService_SubHeadiing">Choose <span className="SSA_SELFSERVICE_PURPLE"> General Settings for your campaign:</span></h3>
                                    <ul className="pl-0">
                                        <li className="ab-libulets"> &#10004; &nbsp; Pricing type</li>
                                        <li className="ab-libulets">&#10004;  &nbsp;   Ad format</li>
                                        <li className="ab-libulets">&#10004;  &nbsp;  Traffic type</li>
                                        <li className="ab-libulets">&#10004;  &nbsp;  Pricing settings</li>
                                        <li className="ab-libulets"> &#10004;  &nbsp;  GEO</li>
                                        <li className="ab-libulets">&#10004;  &nbsp;  Budget limits</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={5}>
                                <div className="ab-laptopimg ">
                                    <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/9b7ab646-25b1-4276-171b-1f9442a7ae00/public" width={400} />
                                </div>
                            </Col>
                        </Row>

                        <Row className="m-5 justify-content-center">
                            <Col md={4} className="ab-ssgap text-center border-right border-dark">
                                <div className="card p-3">
                                    <h4>248+</h4>
                                    <h4>GEO's cover</h4>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <p className="ab-ssline"></p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="ab-ssgap text-center border-right border-dark">
                                <div className="card p-3">
                                    <h4>30BN+</h4>
                                    <h4>impressions/month</h4>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <p className="ab-ssline"></p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="ab-ssgap text-center">
                                <div className="card p-3">
                                    <h4>18 000+</h4>
                                    <h4>direct publishers</h4>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <p className="ab-ssline"></p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout >
        </>
    )
}