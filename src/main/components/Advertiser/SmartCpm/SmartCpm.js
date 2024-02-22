import React from "react";
import "./SmartCpm.css";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import AdvertiserWelcome from "../AdvertiserWelcome";
import AdvertiserPricingCard from "../../AdvertiserPricing/AdvertiserPricingCard";
import { AdvertiserCardDataSmartCpmMenus, AdvertiserSmartCpmBusinessCardData, smartCPM_CardData } from "../../Shared/data/advertiserCardMenu";
import { Button, Col } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
import Faqs from "../../Faqs/Faqs";

const SmartCpm = () => {
    const data = {
        heading1: 'GrowXad for Advertisers.',
        heading2: 'Achieve unparalleled marketing results.',
        subheading: 'A transformative advertising platform catering to media buyers and affiliates seeking innovative traffic channels to connect their offers with highly engaged audiences.',
        spanHeading: 'ready to engage',
        afterSpanHeading: ' with your offers',
        imgUrl: 'http://localhost:3000/images/arrowRtbBanner.png'

    }
    const data2 = AdvertiserCardDataSmartCpmMenus;
    const smartCPM_CardDataMenu = smartCPM_CardData

    const data3 = AdvertiserSmartCpmBusinessCardData;








    const SmartCPMExpenses = [
        {
            num: "1",
            content: "You set a bid cap for a specific ad placement.",
        },
        {
            num: "2",
            content: "SmartCPM algorithm evaluates the overall competition.",
        },
        {
            num: "3",
            content: "The algorithm bids for traffic within your targeting.",
        },
        {
            num: "4",
            content: "The algorithm bids for traffic within your targeting.",
        },
        {
            num: "5",
            content: "The algorithm bids for traffic within your targeting.",
        },
        {
            num: "6",
            content: "The algorithm bids for traffic within your targeting.",
        },
    ];
    return (
        <>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <AdvertiserWelcome message={data} />
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-12">
                            {/* <AdvertiserBenefitCard message={data3} /> */}
                        </div>
                    </div>
                </div>

                <div>
                    {/*-----------------SmartCPM MAin Page-------------------*/}

                    {/*-----------------second section-------------------*/}
                    <div className="py-md-5 py-0" style={{ backgroundColor: "#212529" }}>
                        <div className="container py-3">
                            <div className="row text-white">
                                <div className="SSA_SmartCPM_Font_34px pb-2 text-center pb-2 pt-4">
                                    Unlocking SmartCPM with GrowXAds: Key Highlights
                                </div>

                                {/* <div className="col-md-3 px-3  pt-3">
                                    <div className="">
                                        <div className="SSA_SmartCPM_imgbgcolor">
                                            <img
                                                className="pt-3 px-1"
                                                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/55b28d18-a5e2-4d93-d76e-c7b9e7ca6900/public"
                                                alt=""
                                            />
                                        </div>
                                        <div className="SSA_benefits_font26px_purple pt-4 pb-2 text-white">
                                            Inexpensive Traffic Acquisition
                                        </div>
                                        <div className="SSA_Ad_Benefits_font19px pb-4">
                                            SmartCPM optimizes bids, ensuring maximum ROI within your budget by
                                            evaluating competition and selecting the most effective options.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3  px-3  pt-3">
                                    <div className="">
                                        <div className="SSA_SmartCPM_imgbgcolor">
                                            <img
                                                className="pt-2 px-1"
                                                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/026bfd41-ffeb-4665-ea64-928589d5a900/public"
                                                alt=""
                                            />
                                        </div>
                                        <div className="SSA_benefits_font26px_purple pt-4 pb-2 text-white">
                                            Customized Automated Bidding
                                        </div>
                                        <div className="SSA_Ad_Benefits_font19px pb-4">
                                            Continuous SmartCPM Bidding Secures Placements, Frees Time Spent on Manual
                                            Efforts, Ensuring Efficient Campaign Management Round the Clock
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 px-3 pt-3">
                                    <div className="">
                                        <div className="SSA_SmartCPM_imgbgcolor">
                                            <img
                                                className="px-2 pt-1 pb-2"
                                                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/848bd5dc-cc78-4e9e-cf68-dba23e558b00/public"
                                                alt=""
                                            />
                                        </div>
                                        <div className="SSA_benefits_font26px_purple pt-4 pb-2 text-white">
                                            Enhanced Targeted Traffic
                                        </div>
                                        <div className="SSA_Ad_Benefits_font19px pb-4">
                                            Dynamic, Real-Time Bid Adjustments Tailored for Each Ad Placement, Ensuring
                                            Relevance and Increased Traffic for Your Promotions.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3   px-3 pt-3">
                                    <div className=" ">
                                        <div className="SSA_SmartCPM_imgbgcolor">
                                            <img
                                                className="p-1"
                                                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/83b163ec-f692-4832-36e2-dcb58bfe8e00/public"
                                                alt=""
                                            />
                                        </div>
                                        <div className="SSA_benefits_font26px_purple pt-4 pb-2 text-white">
                                            Effective Testing, Scaling
                                        </div>
                                        <div className="SSA_Ad_Benefits_font19px pb-4">
                                            It’s a perfect pricing for testing new traffic slices or scaling your
                                            campaigns since it protects you from overspending and sends quality ad
                                            views.
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/*-----------------third section-------------------*/}
                    <div className="container py-5 px-3 x">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-6 text-left">
                                <div className="SSA_SmartCPM_Font_34px pb-2 ">SmartCPM: Cutting Your Expenses</div>
                                <p className="SSA_smartCPM_Font18px py-3">
                                    SmartCPM employs second-price auction principles: Set a bid cap, and the algorithm strategically competes within your targeting. By estimating competitors' bids, it offers slightly above the second-highest CPM to secure wins, ensuring cost management.
                                </p>
                                <Link to="/adveriserauthLogin" className="text-black no-underline hover:no-underline">
                                    <button type="button" class="btn btn-dark px-5 py-2">
                                        TRY NOW
                                    </button>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <img
                                    src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/6fe45403-130c-46ae-383c-3e3cdf48fb00/public"
                                    alt=""
                                    width="100%"
                                />
                            </div>
                        </div>
                    </div>

                    {/*-----------------fourth section-------------------*/}
                    <div className="container px-3 py-md-5 py-0 py-lg-5">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <img src="https://adsterra.com/_nuxt/img/screenshot.17ddd39.png" alt="" />
                            </div>
                            <div className="col-md-6 text-left pt-3 pt-md-0">
                                <div className="SSA_SmartCPM_Font_34px pb-2 mb-4">Accelerated Onboarding Guide for SmartCPM</div>
                                {SmartCPMExpenses.map((item, index) => {
                                    return (
                                        <div className="d-flex " key={index}>
                                            <span
                                                className="mb-3"
                                                style={{
                                                    backgroundColor: "#73035b",
                                                    borderRadius: "50%",
                                                    padding: "4px 12px",
                                                    color: "white",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                {item.num}
                                            </span>
                                            <p className="pb-3 mb-0 ml-2 " style={{ fontSize: "20px" }}>
                                                {item.content}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <AdvertiserPricingCard cardData={smartCPM_CardDataMenu} />

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Faqs />
                            </div>
                        </div>
                    </div>

                    {/*-----------------fifth section-------------------*/}

                </div>


                <div
                    className="px-3 my-3 "
                    style={{ bottom: "0px", marginBottom: "20px" }}
                >
                    <div className="px-md-5 px-0 mx-md-5 mx-2 ">
                        <div className="container-fluid  SSA_Benefit_Bg_Img3  py-md-5 py-3">
                            <div className="text-center text-white pt-5">
                                <div className="SSA_Ad_Benefits_font2rem_Section2  text-white">
                                    Why try SmartCPM today?
                                </div>
                                <p className="SSA_Ad_Benefits_font22px">
                                    Our intelligent pricing model solves the problem


                                    <br />
                                    of overpaying for traffic. {" "}
                                    <span className="">                                It's a powerful tool to save money and increase ROI. When you enable automated bidding, you only pay the best price needed to get relevant ad views. The algorithm will do all the jobs by competing over traffic 24/7.
                                    </span>
                                </p>
                                <Col md={{ span: 4, offset: 4 }} className="mb-2 my-5">
                                    <Button className={`MoreButton btn`}>
                                        <div className='p-0 m-0'>
                                            <div className='d-flex align-items-center justify-content-center'>

                                                <span>ENABLE SMARTCPM</span>
                                                <span className={`ps-3 moreArrrow`}><FaArrowCircleRight /></span>

                                            </div>
                                        </div>
                                    </Button>
                                </Col>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    );
};

export default SmartCpm;
