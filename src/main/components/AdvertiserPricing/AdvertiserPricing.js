import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'react-slick'
import PricingCard from './PricingCard';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import PricingSlider from './PricingSlider/PricingSlider';
import AdvertiserWelcome from '../Advertiser/AdvertiserWelcome';
import SectionSeperator from '../Shared/SectionSeperator';
import AdvertiserPricingCard from './AdvertiserPricingCard';

import { AdvertiserCardDataMenus } from '../Shared/data/advertiserCardMenu';
import PrcingStyle from "./AdvertiserPricing.module.css";

const pricingData = [
    {
        title: "CPA",
        subtitle: "COST-PER-ACQUISITION",
        description:
            "Opt for Cost-Per-Acquisition (CPA) in familiar markets with a simple conversion process. For uncharted territories or complex flows, start with Cost Per Mille (CPM). This balance optimizes strategies, tailoring them to specific goals, while testing and data analysis pinpoint the most efficient model for maximum return on investment.",
        topVerticals: ["VPN & Utility", "PIN Submits", "Sweepstakes"],
        topAdFormats: ["Popunder", "Popunder", "Push Ads", "Native Banners"],
    },
    {
        title: "CPC",
        subtitle: "COST-PER-CLICK",
        description:
            "Opt for cost-per-click payment for easily convertible offers, such as a simple opt-in. Utilize the Traffic Chart and Traffic Estimator tools to ensure a substantial volume of impressions. This ensures an effective strategy by aligning the payment model with the simplicity of the conversion process while optimizing impressions for maximum impact.",
        topVerticals: [
            "Mobile Apps & Games",
            "Utilities & Software",
            "Subscriptions",
        ],
        topAdFormats: ["Popunder", "Popunder", "Push Ads", "Native Banners"],
    },
    {
        title: "CPM",
        subtitle: "COST-PER-MILLE",
        description:
            "Opt for cost-per-click payment for easily convertible offers, such as a simple opt-in. Utilize the Traffic Chart and Traffic Estimator tools to ensure a substantial volume of impressions. This ensures an effective strategy by aligning the payment model with the simplicity of the conversion process while optimizing impressions for maximum impact.",
        topVerticals: ["Finance", "E-commerce"],
        topAdFormats: ["Popunder", "Popunder", "Push Ads", "Native Banners"],
    },
];

const AdvertiserPricing = () => {
    const data = {
        heading1: 'GrowXad for Advertisers.',
        heading2: 'Experience a Superlative Output of Your Marketing',
        subheading: 'A game-changing advertising network for media buyers and affiliates looking for alternative traffic sources to connect their offers to highly engaged audiences.',
        spanHeading: 'ready to engage',
        afterSpanHeading: ' with your offers',
        imgUrl: 'https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/6de390dc-1dc4-42b0-0835-88f663227900/public'

    }
    const data2 = AdvertiserCardDataMenus;


    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-10">
                            <AdvertiserWelcome message={data} />
                        </div>
                    </div>
                </div>
                <div
                    className="container-fluid py-4 mt-2"
                >
                    <div className="row">
                        <div className="">
                            <h1 className="text-center">
                                Why to Join
                                <span className={PrcingStyle.webcl_theme}> GrowXad</span>
                            </h1>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div col-md-12>
                            <PricingSlider />
                        </div>
                    </div>

                    <SectionSeperator />

                    <Container fluid className="  ">
                        <Container className="pt-3">
                            <h1 className=" text-center mb-3">
                                Operate pricing models to gain <br /> broader reach and{" "}
                                <span className={PrcingStyle.webcl_theme}> larger ROI</span>
                            </h1>
                            {pricingData.map((pricingSection, index) => (
                                <Row key={index}>
                                    <Col>
                                        <Row className="d-flex justify-content-center mb-4">
                                            <Col md={6} className="text-center"></Col>
                                        </Row>
                                        <Row className="">
                                            <Col md={6} className="">
                                                <h2 className={PrcingStyle.webcl_theme}>
                                                    {pricingSection.title}
                                                </h2>
                                                <h6 className={PrcingStyle.rk_price_h2}>
                                                    {pricingSection.subtitle}
                                                </h6>
                                                <p>{pricingSection.description}</p>
                                            </Col>
                                            <Col md={6} className="">
                                                <Row className="d-flex justify-content-center">
                                                    {/* Render Top Verticals using map */}
                                                    <Col md={4} sm={5} xs={5} className="">
                                                        <div className={PrcingStyle.rk_price_bx_3}>
                                                            <p className={PrcingStyle.webcl_theme}>
                                                                TOP VERTICALS:
                                                            </p>
                                                            <ul>
                                                                {pricingSection.topVerticals.map(
                                                                    (vertical, vIndex) => (
                                                                        <li key={vIndex}>
                                                                            <Link
                                                                                to=""
                                                                                className="text-black no-underline"
                                                                            >
                                                                                {vertical}
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                    <Col md={1} sm={2} xs={2} className="">
                                                        <div className={PrcingStyle.rk_price_bx_3_Vl}></div>
                                                    </Col>
                                                    {/* Render Top Ad Formats using map */}
                                                    <Col md={4} sm={5} xs={5}>
                                                        <div className={PrcingStyle.rk_price_bx_3}>
                                                            <p className={PrcingStyle.webcl_theme}>
                                                                TOP AD FORMATS:
                                                            </p>
                                                            <ul>
                                                                {pricingSection.topAdFormats.map(
                                                                    (adFormat, aIndex) => (
                                                                        <li key={aIndex}>
                                                                            <Link
                                                                                to=""
                                                                                className="text-black no-underline"
                                                                            >
                                                                                {adFormat}
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <hr className={PrcingStyle.rk_price_bx_3_Hl} />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            ))}
                        </Container>
                    </Container>

                    <div className="row pt-5">
                        <div col-md-12>
                            <PricingCard />
                        </div>
                    </div>

                    <AdvertiserPricingCard cardData={data2} />
                </div>
            </Layout>
        </div>
    )
}

export default AdvertiserPricing