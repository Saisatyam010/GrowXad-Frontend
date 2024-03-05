import { Button, Col, Container, Row } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import AdvertiserWelcome from "./AdvertiserWelcome";
import { FaArrowCircleRight } from "react-icons/fa";
import AdvertiserSelfServeStyles from "../../components/Advertiser/AdvertiserStyles/AdvertiserSelfServe.module.css";
export default function SelfServe() {
    const data = {
        heading1: "GrowXad for Advertisers.",
        heading2: "Experience a Superlative Output of Your Marketing",
        subheading:
            "A game-changing advertising network for media buyers and affiliates looking for alternative traffic sources to connect their offers to highly engaged audiences.",
        spanHeading: "ready to engage",
        afterSpanHeading: " with your offers",
        imgUrl:
            "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/4696fc40-2b68-44d4-f8fd-79cf20804500/public",
    };
    const selfServePlatform = [
        {
            selfServePlatformHeading:
                "Our SSP is a part of our secret software and human intelligence blend, our own development we are proud of. No matter how skilled you are in affiliate marketing or media buying, GrowAds self-serve ad platform fits both beginners and professionals.",
        },
        {
            selfServePlatformHeading:
                "GrowAds SSP allows advertisers to launch, manage and analyze advertising campaigns without any assistance! The dashboard is intuitive and easy to use.You can tour, or watch a brief video that will guide you through  self-serve platform's features.",
        },
    ];
    const CardDataMenu = [
        {
            cardImageUrl:
                "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/2e63fe6b-4224-483f-8c97-3a4c84416500/public",
            cardMenuHeading: "Fast",
        },
        {
            cardImageUrl:
                "	https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/e525a56d-d3bc-4211-a53b-917c2956ad00/public",
            cardMenuHeading: "Simple",
        },
        {
            cardImageUrl:
                "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/8facf47f-e927-477e-bd72-d52de9d97700/public",
            cardMenuHeading: "Transparent",
        },
    ];

    const selfServicePoints = [
        "All within one page",
        "Set up detailed targeting and tracking in minutes",
        "Estimate traffic volumes",
        "Launch as many campaigns as you want",
        "A/B test up to 15 creatives and scale",
        "Enjoy 100% control",
    ];
    const statisticsData = [
        { value: "248+", label: "GEO's cover" },
        { value: "30BN+", label: "impressions/month" },
        { value: "18 000+", label: "direct publishers" },
        // Add more statistics data as needed
    ];
    const generalSettingsList = [
        "Pricing type",
        "Ad format",
        "Traffic type",
        "Pricing settings",
        "GEO",
        "Budget limits",
    ];

    return (
        <>
            <Layout>
                <section>
                    <div className="container-fluid ">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-11">
                                <div className="pt-4">
                                    <AdvertiserWelcome message={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <Container>
                        <Row className="justify-content-center ">
                            <Col md={10} className="d-flex justify-content-center pt-4 align-items-center">

                                <div className="text-center py-3">
                                    <span className={`${AdvertiserSelfServeStyles.dp_SelfService_main_heading}`}>Improve your advertising experience with </span>
                                    <span className={`${AdvertiserSelfServeStyles.dp_SelfService_main_heading_color}`}>General Settings </span>
                                    <span className={`${AdvertiserSelfServeStyles.dp_SelfService_main_heading}`}>for your campaign : </span>
                                </div>

                            </Col>
                        </Row>
                        <Row className="mt-3  pt-4 d-flex justify-content-center ">
                            <Col md={6} className="col-12">
                                <div >
                                    <img
                                        src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/880830fa-c519-4d89-935a-26ab17591b00/public"
                                        width="100%"
                                        className={AdvertiserSelfServeStyles.ab_ssimg}
                                        alt="Self-Service"
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div
                                    className={`${AdvertiserSelfServeStyles.ab_ssborder1} text-left`}
                                >
                                    {selfServicePoints.map((point, index) => (
                                        <p className="d-flex m-0" key={index}>
                                            <span className={AdvertiserSelfServeStyles.ab_sspoints}>
                                                <TiTick className="fs-4 text-white" />
                                            </span>
                                            <span
                                                className={`${AdvertiserSelfServeStyles.dp_SelfService_content} m-0 fw-bold ps-3`}
                                            >
                                                {point}
                                            </span>
                                        </p>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    {/* ab-sscontainer2 */}
                    <Container>
                        <Row className=" py-2">
                            {selfServePlatform.map((ele) => (
                                <Col md={6} className=" pt-3 col-12">
                                    <div >
                                        <p className={`${AdvertiserSelfServeStyles.dp_SelfService_heading} m-0`}>
                                            {ele.selfServePlatformHeading}
                                        </p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <Row className=" d-flex justify-content-center p-3 mt-2 ">
                            {CardDataMenu.map((ele) => (
                                <Col md={4} className="my-2">
                                    <div
                                        className={
                                            AdvertiserSelfServeStyles.ab_selfservice_iconcontainer
                                        }
                                    >
                                        <span>
                                            <div className="d-flex justify-content-center">
                                                <div className={AdvertiserSelfServeStyles.ab_ss3img}>
                                                    <img src={ele.cardImageUrl} width={100} />
                                                </div>
                                            </div>
                                            <p className={`${AdvertiserSelfServeStyles.dp_SelfService_sub_heading} text-center m-0`}>
                                                {ele.cardMenuHeading}
                                            </p>

                                        </span>
                                    </div>
                                </Col>
                            ))}
                        </Row>

                        <Row>
                            <Col>
                                <div className="d-flex justify-content-center  pt-3">
                                    <Link
                                        to="/adveriserauthLogin"
                                        className="no-underline hover:no-underline"
                                    >
                                        <Button className={`MoreButton btn m-0`}>
                                            <div className="p-0 m-0">
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <span>Try GrowXad SSP</span>
                                                    <span className={`ps-3 moreArrrow`}>
                                                        <FaArrowCircleRight />
                                                    </span>
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
                    <Container className="pt-5">
                        <Row>
                            <Col md={7} className="d-flex justify-content-center text-left">
                                <div >
                                    <div >
                                        <span className={`${AdvertiserSelfServeStyles.dp_SelfService_main_heading}`}>Choose </span>
                                        <span className={`${AdvertiserSelfServeStyles.dp_SelfService_main_heading_color}`}>General Settings </span>
                                        <span className={`${AdvertiserSelfServeStyles.dp_SelfService_main_heading}`}>for your campaign : </span>
                                    </div>

                                    <ul className="pl-0 pt-3">
                                        {generalSettingsList.map((item, index) => (
                                            <li
                                                key={index}
                                                className={`${AdvertiserSelfServeStyles.dp_SelfService_content} py-1`}
                                            >
                                                <span>✔ </span>
                                                 <span className="ps-2">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>

                            <Col md={5}>
                                <div className={AdvertiserSelfServeStyles.ab_laptopimg}>
                                    <img
                                        src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/9b7ab646-25b1-4276-171b-1f9442a7ae00/public"
                                        width={400}
                                    />
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center  p-3 mt-2">

                            {statisticsData.map((data, index) => (
                                <Col
                                    key={index}
                                    md={4}
                                    className={`my-2 `}
                                >
                                    <div className={`${AdvertiserSelfServeStyles.dp_selfserve_card}`}>

                                        <p className={`${AdvertiserSelfServeStyles.dp_SelfService_sub_heading} m-0 text-center`}>{data.value}</p>
                                        <p className={`${AdvertiserSelfServeStyles.dp_SelfService_sub_heading} m-0 text-center  `}>{data.label}</p>

                                        <div className="d-flex align-items-center justify-content-center pt-3">
                                            <p className={AdvertiserSelfServeStyles.ab_ssline}></p>
                                        </div>
                                    </div>
                                </Col>
                            ))}

                        </Row>
                    </Container>
                </section>
            </Layout>
        </>
    );
}