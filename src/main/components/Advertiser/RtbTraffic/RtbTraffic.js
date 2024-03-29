import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai";
import rtbStyles from "./RtbTraffic.module.css";
import Layout from "../../Layout/Layout";
import AdvertiserWelcome from "../AdvertiserWelcome";
import SmartCpmStyle from "../SmartCpm/SmartCpm.module.css";
import { Link } from "react-router-dom";
const RtbTraffic = () => {
  const aboutRtbCardData = [
    {
      title: "INTEGRATION",
      content: "OpenRTB XML and JSON feeds",
      imgPath:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/cb57682d-3247-4733-070c-a1e363363500/public",
    },
    {
      title: "AD FORMATS",
      content: "Popundars Web Push and Native ads social Bar",
      imgPath:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/c5d535a1-d52b-4531-6da1-ef400e21be00/public",
    },
    {
      title: "ANY TRAFFIC",
      content: "ALL GEOs Mobile & desktop Advanced targeting",
      imgPath:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/81284225-e029-4487-4d3c-bef861693800/public",
    },
  ];

  const RtbIntegrationStepsData = [
    {
      title: "Choose a  Ad Exchange",
      content:
        "Research and select a DSP or ad exchange that suits your advertising goals and budget. Popular options include Google Marketing Platform, The Trade Desk, MediaMath, and AppNexus",
      imgPath:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/cb57682d-3247-4733-070c-a1e363363500/public",
    },
    {
      title: "Register and Set Up an Account",
      content: "Sign up for an account with your chosen DSP or ad exchange",
      imgPath:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/c5d535a1-d52b-4531-6da1-ef400e21be00/public",
    },
    {
      title: "Implement Tracking Tags",
      content:
        "These tags help track user behavior and collect data that can be used for targeting and optimization purposes",
      imgPath:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/81284225-e029-4487-4d3c-bef861693800/public",
    },
    {
      title: "Create Campaigns and Set Targeting Parameters",
      content:
        "Define your campaign objectives, budget, targeting parameters, and bidding strategy. Targeting parameters may include factors such as demographics, interests, geography, device type, and browsing behavior.",
      imgPath:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/81284225-e029-4487-4d3c-bef861693800/public",
    },
    {
      title: "Monitor and Optimize Campaign Performance",
      content:
        "Monitor key metrics such as impressions, clicks, click-through rates (CTR), conversions, and return on investment (ROI)",
      imgPath:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/81284225-e029-4487-4d3c-bef861693800/public",
    },
    {
      title: "Implement Conversion Tracking",
      content:
        "By implementing conversion tracking, you can accurately measure the ROI of your campaigns and optimize your bidding and targeting strategies based on actual conversion data",
      imgPath:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/81284225-e029-4487-4d3c-bef861693800/public",
    },
  ];

  // const visibleIcons = icons.slice(startIndex, startIndex + iconsPerPage);
  const data = {
    heading1: "GrowXad for Advertisers.",
    heading2: "Experience a Superlative Output of Your Marketing",
    subheading:
      "A game-changing advertising network for media buyers and affiliates looking for alternative traffic sources to connect their offers to highly engaged audiences.",
    spanHeading: "ready to engage",
    afterSpanHeading: " with your offers",
    imgUrl:
      " https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d30cde05-3032-42fa-b4c7-04394a7e1500/public",
  };
  return (
    <>
      <Layout>
        <div className="container">
          <div className="row d-flex justify-content-center pt-5">
            <div className="col-md-11">
              <AdvertiserWelcome message={data} />
            </div>
          </div>

          <Container fluid className="my-4">
            <Row className="d-flex justify-content-center">
              <Col md={8}>
                <div className="text-center">
                  <span className={`${rtbStyles.dp_RtbTraffic_main_heading}`}>
                    About{" "}
                  </span>
                  <span
                    className={`${rtbStyles.dp_RtbTraffic_main_heading_color}`}
                  >
                    RTB
                  </span>
                </div>

                <div className="text-center px-3 ">
                  <p className={`${rtbStyles.dp_RtbTraffic_heading} m-0 pt-3`}>
                    Optimize your real-time bidding with GrowX, a renowned RTB
                    ad network for advertisers and publishers. Achieve speed,
                    scale, and flexibility, connecting with your audience
                    instantly and maximizing budget efficiency through GrowX's
                    programmatic solutions.
                  </p>
                  <p className={`${rtbStyles.dp_RtbTraffic_heading} m-0 pt-3`}>
                    Real-time bidding, a form of programmatic advertising,
                    operates as an automated auction where advertisers bid on ad
                    impressions. This streamlined process ensures instant,
                    efficient, and straightforward media buying and selling.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-3">
            <Row className="d-flex justify-content-center p-5">
              {aboutRtbCardData.map((ele, index) => (
                <>
                  <Col md={4} className="my-2">
                    <div className={rtbStyles.dp_rtbtraffic_card}>
                      <span>
                        <div className="d-flex justify-content-center">
                          <div>
                            <img src={ele.imgPath} width={100} />
                          </div>
                        </div>
                        <p
                          className={`${rtbStyles.dp_RtbTraffic_heading} text-center m-0 py-2`}
                        >
                          {ele.title}
                        </p>
                        <p
                          className={`${rtbStyles.dp_RtbTraffic_content} text-center m-0`}
                        >
                          {ele.content}
                        </p>
                      </span>
                    </div>
                  </Col>
                </>
              ))}
            </Row>
          </Container>

          <Container>
            <Row
              className={`d-flex justify-content-center ${rtbStyles.simple_steps_bg}`}
            >
              <Col>
                <Row className="d-flex justify-content-center ">
                  <Col md={12}>
                    <Row className="">
                      <Col className="text-center">
                        <div className="text-center mb-5">
                          <span
                            className={`${rtbStyles.dp_RtbTraffic_main_heading}`}
                          >
                            GrowXAds{" "}
                          </span>
                          <span
                            className={`${rtbStyles.dp_RtbTraffic_main_heading_color}`}
                          >
                            RTB Integration{" "}
                          </span>
                          <span
                            className={`${rtbStyles.dp_RtbTraffic_main_heading}`}
                          >
                            in 6 simple steps:
                          </span>
                        </div>

                        <div className="d-none d-md-block m-4">
                          <img
                            src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/7b9d5fd7-a85d-4272-7402-ac096b50d200/public"
                            alt=""
                          />
                        </div>
                      </Col>
                    </Row>

                    <Container className="d-md-none d-xs-block ">
                      <Row className="d-flex align-items-center justify-content-between mb-3">
                        <Col xs={4} sm={3}>
                          <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/8cd01e97-6f9a-4f7e-caf8-c7c80f69bc00/public" />
                        </Col>
                        <Col xs={7} sm={6} className="text-start">
                          <p>
                            Select a DSP or exchange that suits your goals and
                            budget (e.g., Google, Trade Desk, MediaMath,
                            AppNexus).
                          </p>
                        </Col>
                      </Row>
                      <Row className="d-flex align-items-center justify-content-between mb-3">
                        <Col xs={7} sm={6}>
                          <p>
                            Register and set up your account on the chosen
                            platform.
                          </p>
                        </Col>
                        <Col xs={4} sm={3}>
                          <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/2b2dde91-a2bf-4b20-a241-3508a1dd9500/public" />
                        </Col>
                      </Row>
                      <Row className="d-flex align-items-center justify-content-between mb-3">
                        <Col xs={4} sm={3}>
                          <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/a91f8848-fccd-44f5-7617-96f2272fa000/public" />
                        </Col>
                        <Col xs={7} sm={6}>
                          <p>
                            Implement tracking tags to collect user behavior
                            data.
                          </p>
                        </Col>
                      </Row>
                      <Row className="d-flex align-items-center justify-content-between mb-3">
                        <Col xs={7} sm={6}>
                          <p>
                            Define campaign objectives, budget, and targeting
                            parameters (demographics, interests).
                          </p>
                        </Col>
                        <Col xs={4} sm={3}>
                          <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/68414e3b-ff40-44b6-335b-9f7b69b54d00/public" />
                        </Col>
                      </Row>
                      <Row className="d-flex align-items-center justify-content-between mb-3">
                        <Col xs={4} sm={3}>
                          <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/e52806bf-47b0-4167-6687-3a1b41f1cc00/public" />
                        </Col>
                        <Col xs={7} sm={6}>
                          <p>
                            Implement conversion tracking for accurate ROI
                            measurement.
                          </p>
                        </Col>
                      </Row>
                      <Row className="d-flex align-items-center justify-content-between mb-3">
                        <Col xs={7} sm={6}>
                          <p>
                            Monitor key metrics and optimize performance by
                            adjusting strategies as needed.
                          </p>
                        </Col>
                        <Col xs={4} sm={3}>
                          <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/f311564f-5832-47eb-24da-db2ea828bf00/public" />
                        </Col>
                      </Row>
                    </Container>

                    {/* <Row className={rtbStyles.rk_rktb_box_3_dview_only}>
                      <Col md={6} className=" ">
                        <div className={rtbStyles.rk_rktb_box_3_sub}>
                          <p className="fs-5 pt-4 pb-4">
                            <span className="pe-2">01</span> Send us your <br />{" "}
                            request
                          </p>
                          <p className="fs-5 pt-4 pb-4">
                            <span className="pe-2">03</span>
                            Post-integration, we conduct tests to n <br />
                            ensure accuracy and check for discrepancies.
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div
                          className={`${rtbStyles.rk_rktb_box_3_sub} text-center`}
                        >
                          <p className="fs-5 pt-4 pb-4">
                            <span className="pe-2">02</span>
                            Submit your documentation
                            <br /> to proceed.
                          </p>
                          <p className="fs-5 pt-4 pb-4">
                            <span className="pe-2">04</span>Start receiving
                            access to more than <br />
                            Unlock 30BN+ monthly impressions via RTB.
                          </p>
                        </div>
                      </Col>
                    </Row> */}

                    <div className={rtbStyles.rk_rktb_box_3_mview_only}>
                      <div className={rtbStyles.rk_rktb_box_3_sub}>
                        <p className="fs-5 p-2">
                          <span className="pe-2">01</span> Send us your <br />{" "}
                          request
                        </p>
                        <p className="fs-5 p-2">
                          <span className="pe-2">02</span> Provide us with{" "}
                          <br /> your documentation
                        </p>
                      </div>

                      <div className={rtbStyles.rk_rktb_box_3_sub}>
                        <p className="fs-5 p-2">
                          <span className="pe-2">03</span>After integration we
                          run <br />
                          tests to check discrepancy
                        </p>
                        <p className="fs-5 p-2">
                          <span className="pe-2">04</span>Start receiving access
                          to more than <br /> 30BN+ impressions per month via
                          RTB
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row className="pt-5">
              <Col>
                <div className="text-center mt-5">
                  <span className={`${rtbStyles.dp_RtbTraffic_main_heading}`}>
                    How does{" "}
                  </span>
                  <span
                    className={`${rtbStyles.dp_RtbTraffic_main_heading_color}`}
                  >
                    RTB{" "}
                  </span>
                  <span className={`${rtbStyles.dp_RtbTraffic_main_heading}`}>
                    work?
                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="mb-4">
                <div className={rtbStyles.rk_rtb_work1}>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <img
                      className={rtbStyles.rk_rtb_box_4_icon_4}
                      src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/398013e8-36e5-4a66-9078-e685dfb85400/public"
                    />
                    <p className="fs-4 text-center fw-bold ">
                      GrowX Ad <br /> Impression
                    </p>
                  </div>
                  <div
                    className={`d-flex align-items-center ${rtbStyles.rk_rtb_mview_hidden_cont} p-2`}
                  >
                    <svg
                      width="462"
                      height="16"
                      viewBox="0 0 462 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M455.343 0.92888L461.707 7.29284C462.098 7.68336 462.098 8.31653 461.707 8.70705L455.343 15.071C454.953 15.4615 454.319 15.4615 453.929 15.071C453.538 14.6805 453.538 14.0473 453.929 13.6568L458.586 8.99995H458.494V6.99995H458.586L453.929 2.34309C453.538 1.95257 453.538 1.3194 453.929 0.92888C454.319 0.538355 454.953 0.538355 455.343 0.92888ZM2.50543 8.99995H0V6.99995H2.50543V8.99995ZM12.5272 8.99995H7.5163V6.99995H12.5272V8.99995ZM22.5489 8.99995H17.538V6.99995H22.5489V8.99995ZM32.5707 8.99995H27.5598V6.99995H32.5707V8.99995ZM42.5924 8.99995H37.5815V6.99995H42.5924V8.99995ZM52.6141 8.99995H47.6033V6.99995H52.6141V8.99995ZM62.6359 8.99995H57.625V6.99995H62.6359V8.99995ZM72.6576 8.99995H67.6467V6.99995H72.6576V8.99995ZM82.6793 8.99995H77.6685V6.99995H82.6793V8.99995ZM92.7011 8.99995H87.6902V6.99995H92.7011V8.99995ZM102.723 8.99995H97.712V6.99995H102.723V8.99995ZM112.745 8.99995H107.734V6.99995H112.745V8.99995ZM122.766 8.99995H117.755V6.99995H122.766V8.99995ZM132.788 8.99995H127.777V6.99995H132.788V8.99995ZM142.81 8.99995H137.799V6.99995H142.81V8.99995ZM152.832 8.99995H147.821V6.99995H152.832V8.99995ZM162.853 8.99995H157.842V6.99995H162.853V8.99995ZM172.875 8.99995H167.864V6.99995H172.875V8.99995ZM182.897 8.99995H177.886V6.99995H182.897V8.99995ZM192.918 8.99995H187.908V6.99995H192.918V8.99995ZM202.94 8.99995H197.929V6.99995H202.94V8.99995ZM212.962 8.99995H207.951V6.99995H212.962V8.99995ZM222.984 8.99995H217.973V6.99995H222.984V8.99995ZM233.005 8.99995H227.994V6.99995H233.005V8.99995ZM243.027 8.99995H238.016V6.99995H243.027V8.99995ZM253.049 8.99995H248.038V6.99995H253.049V8.99995ZM263.071 8.99995H258.06V6.99995H263.071V8.99995ZM273.092 8.99995H268.081V6.99995H273.092V8.99995ZM283.114 8.99995H278.103V6.99995H283.114V8.99995ZM293.136 8.99995H288.125V6.99995H293.136V8.99995ZM303.157 8.99995H298.147V6.99995H303.157V8.99995ZM313.179 8.99995H308.168V6.99995H313.179V8.99995ZM323.201 8.99995H318.19V6.99995H323.201V8.99995ZM333.223 8.99995H328.212V6.99995H333.223V8.99995ZM343.244 8.99995H338.233V6.99995H343.244V8.99995ZM353.266 8.99995H348.255V6.99995H353.266V8.99995ZM363.288 8.99995H358.277V6.99995H363.288V8.99995ZM373.31 8.99995H368.299V6.99995H373.31V8.99995ZM383.331 8.99995H378.32V6.99995H383.331V8.99995ZM393.353 8.99995H388.342V6.99995H393.353V8.99995ZM403.375 8.99995H398.364V6.99995H403.375V8.99995ZM413.396 8.99995H408.386V6.99995H413.396V8.99995ZM423.418 8.99995H418.407V6.99995H423.418V8.99995ZM433.44 8.99995H428.429V6.99995H433.44V8.99995ZM443.462 8.99995H438.451V6.99995H443.462V8.99995ZM453.483 8.99995H448.473V6.99995H453.483V8.99995Z"
                        fill="#D5D5D5"
                      />
                    </svg>
                  </div>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <div>
                      <img
                        className={`${rtbStyles.rk_rtb_box_4_icon_4} P-2`}
                        src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/af102706-97d5-455b-ea6e-32f82da4af00/public"
                      />
                    </div>
                    <div>
                      <p className="fs-4 text-center fw-bold">
                        Partner <br />
                        RTB bid
                      </p>
                    </div>
                    <div
                      className={`d-flex justify-content-center ${rtbStyles.rk_rtb_box_4_width} ${rtbStyles.rk_rtb_mview_hidden_cont}`}
                    >
                      <svg
                        width="16"
                        height="21"
                        viewBox="0 0 16 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.0714 13.8431L8.7074 20.2071C8.31688 20.5976 7.68371 20.5976 7.29319 20.2071L0.929229 13.8431C0.538705 13.4526 0.538704 12.8195 0.929228 12.4289C1.31975 12.0384 1.95292 12.0384 2.34344 12.4289L7.0003 17.0858L7.0003 17.0625L9.0003 17.0625L9.0003 17.0858L13.6572 12.4289C14.0477 12.0384 14.6808 12.0384 15.0714 12.4289C15.4619 12.8195 15.4619 13.4526 15.0714 13.8431ZM7.0003 12.1875L7.0003 7.3125L9.0003 7.3125L9.0003 12.1875L7.0003 12.1875ZM7.0003 2.4375L7.0003 -3.656e-07L9.0003 -2.78178e-07L9.0003 2.4375L7.0003 2.4375Z"
                          fill="#D5D5D5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                md={12}
                className={`d-flex justify-content-center ${rtbStyles.rk_rtb_mview_comp}`}
              >
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <img
                    className={rtbStyles.rk_rtb_box_4_icon_4}
                    src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/b52623a8-364e-4c19-f9e4-bdf5c7ed4d00/public"
                  />
                  <p className="fs-4 text-center fw-bold">Comparison</p>
                </div>
              </Col>

              <Col md={12} className="">
                <div
                  className={`${rtbStyles.rk_rtb_work1}   ${rtbStyles.rk_rtb_box_4_arrow_main} ${rtbStyles.rk_rtb_work1} `}
                >
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <img
                      className={rtbStyles.rk_rtb_box_4_icon_4}
                      src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/482acd82-09c8-4966-3793-622781531000/public"
                    />
                    <p className="fs-4 text-center fw-bold ">
                      GrowX
                      <br /> In-house bid
                    </p>
                  </div>
                  <div
                    className={`d-flex align-items-center ${rtbStyles.rk_rtb_mview_hidden_cont} px-2`}
                  >
                    <svg
                      width="153"
                      height="2"
                      viewBox="0 0 153 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.55 2H0V0H2.55V2ZM12.75 2H7.65V0H12.75V2ZM22.95 2H17.85V0H22.95V2ZM33.15 2H28.05V0H33.15V2ZM43.35 2H38.25V0H43.35V2ZM53.55 2H48.45V0H53.55V2ZM63.75 2H58.65V0H63.75V2ZM73.95 2H68.85V0H73.95V2ZM84.15 2H79.05V0H84.15V2ZM94.35 2H89.25V0H94.35V2ZM104.55 2H99.45V0H104.55V2ZM114.75 2H109.65V0H114.75V2ZM124.95 2H119.85V0H124.95V2ZM135.15 2H130.05V0H135.15V2ZM145.35 2H140.25V0H145.35V2ZM153 2H150.45V0H153V2Z"
                        fill="#D5D5D5"
                      />
                    </svg>
                  </div>
                  <div className={`px-2 d-flex justify-content-center align-items-center flex-column ${rtbStyles.rk_rtb_mview_hidden_cont}`}>
                    <img
                      className={rtbStyles.rk_rtb_box_4_icon_4}
                      src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/7859eb06-021c-4b25-0264-f2c731e8a700/public"
                    />
                    <p className="fs-4 text-center fw-bold">Comparison</p>
                  </div>
                  <div
                    className={`d-flex align-items-center ${rtbStyles.rk_rtb_mview_hidden_cont} px-2`}
                  >
                    <svg
                      width="153"
                      height="2"
                      viewBox="0 0 153 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.55 2H0V0H2.55V2ZM12.75 2H7.65V0H12.75V2ZM22.95 2H17.85V0H22.95V2ZM33.15 2H28.05V0H33.15V2ZM43.35 2H38.25V0H43.35V2ZM53.55 2H48.45V0H53.55V2ZM63.75 2H58.65V0H63.75V2ZM73.95 2H68.85V0H73.95V2ZM84.15 2H79.05V0H84.15V2ZM94.35 2H89.25V0H94.35V2ZM104.55 2H99.45V0H104.55V2ZM114.75 2H109.65V0H114.75V2ZM124.95 2H119.85V0H124.95V2ZM135.15 2H130.05V0H135.15V2ZM145.35 2H140.25V0H145.35V2ZM153 2H150.45V0H153V2Z"
                        fill="#D5D5D5"
                      />
                    </svg>
                  </div>

                  <div className="px-1 d-flex justify-content-center align-items-center flex-column">
                    <div>
                      <img
                        className={rtbStyles.rk_rtb_box_4_icon_4}
                        src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/c33d0589-5aa1-43c1-97c0-d45f93b72600/public"
                      />
                    </div>
                    <div>
                      <p className="fs-4 text-center fw-bold ">Partner RTB</p>
                    </div>
                  </div>
                  <div
                    className={`d-flex justify-content-end ${rtbStyles.rk_rtb_box_4_arrow} ${rtbStyles.rk_rtb_mview_hidden_cont}`}
                  >
                    <svg
                      width="415"
                      height="42"
                      viewBox="0 0 615 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.0885358 2.74858C0.0298096 1.83982 0 0.923323 0 0H2C2 0.880265 2.02842 1.75375 2.08437 2.6196L0.0885358 2.74858ZM615 0C615 0.923324 614.97 1.83982 614.911 2.74858L612.916 2.61961C612.972 1.75375 613 0.880265 613 0H615ZM614.201 8.19571C613.842 10.0102 613.366 11.7828 612.781 13.5052L610.887 12.8625C611.444 11.2227 611.897 9.5352 612.239 7.80757L614.201 8.19571ZM2.21878 13.5052C1.63422 11.7828 1.15837 10.0102 0.799408 8.19571L2.76138 7.80757C3.10316 9.5352 3.55619 11.2227 4.11268 12.8625L2.21878 13.5052ZM7.07485 23.3366C6.05849 21.8184 5.13843 20.2303 4.32343 18.5807L6.1165 17.6948C6.89254 19.2655 7.76874 20.778 8.73678 22.2239L7.07485 23.3366ZM610.677 18.5807C609.862 20.2303 608.942 21.8184 607.925 23.3366L606.263 22.2239C607.231 20.778 608.107 19.2655 608.883 17.6948L610.677 18.5807ZM14.307 31.5776C12.9294 30.3685 11.6315 29.0706 10.4224 27.693L11.9256 26.3737C13.0775 27.6861 14.3139 28.9225 15.6263 30.0744L14.307 31.5776ZM604.578 27.693C603.368 29.0706 602.071 30.3685 600.693 31.5776L599.374 30.0744C600.686 28.9225 601.923 27.6861 603.074 26.3737L604.578 27.693ZM23.4193 37.6766C21.7697 36.8616 20.1815 35.9415 18.6634 34.9251L19.7761 33.2632C21.222 34.2313 22.7345 35.1075 24.3052 35.8835L23.4193 37.6766ZM596.337 34.9252C594.818 35.9415 593.23 36.8616 591.581 37.6766L590.695 35.8835C592.266 35.1075 593.778 34.2313 595.224 33.2632L596.337 34.9252ZM33.8043 41.2006C31.9898 40.8416 30.2172 40.3658 28.4948 39.7812L29.1375 37.8873C30.7773 38.4438 32.4648 38.8968 34.1924 39.2386L33.8043 41.2006ZM586.505 39.7812C584.783 40.3658 583.01 40.8416 581.196 41.2006L580.808 39.2386C582.535 38.8968 584.223 38.4438 585.862 37.8873L586.505 39.7812ZM42 42C41.0767 42 40.1602 41.9702 39.2514 41.9115L39.3804 39.9156C40.2462 39.9716 41.1197 40 42 40H44.5047V42H42ZM575.749 41.9115C574.84 41.9702 573.923 42 573 42H570.495V40H573C573.88 40 574.754 39.9716 575.62 39.9156L575.749 41.9115ZM54.5236 42H49.5141V40H54.5236V42ZM64.5424 42H59.533V40H64.5424V42ZM74.5613 42H69.5519V40H74.5613V42ZM84.5802 42H79.5707V40H84.5802V42ZM94.5991 42H89.5896V40H94.5991V42ZM104.618 42H99.6085V40H104.618V42ZM114.637 42H109.627V40H114.637V42ZM124.656 42H119.646V40H124.656V42ZM134.674 42H129.665V40H134.674V42ZM144.693 42H139.684V40H144.693V42ZM154.712 42H149.703V40H154.712V42ZM164.731 42H159.722V40H164.731V42ZM174.75 42H169.741V40H174.75V42ZM184.769 42H179.759V40H184.769V42ZM194.788 42H189.778V40H194.788V42ZM204.807 42H199.797V40H204.807V42ZM214.825 42H209.816V40H214.825V42ZM224.844 42H219.835V40H224.844V42ZM234.863 42H229.854V40H234.863V42ZM244.882 42H239.873V40H244.882V42ZM254.901 42H249.891V40H254.901V42ZM264.92 42H259.91V40H264.92V42ZM274.939 42H269.929V40H274.939V42ZM284.957 42H279.948V40H284.957V42ZM294.976 42H289.967V40H294.976V42ZM304.995 42H299.986V40H304.995V42ZM315.014 42H310.005V40H315.014V42ZM325.033 42H320.023V40H325.033V42ZM335.052 42H330.042V40H335.052V42ZM345.071 42H340.061V40H345.071V42ZM355.089 42H350.08V40H355.089V42ZM365.108 42H360.099V40H365.108V42ZM375.127 42H370.118V40H375.127V42ZM385.146 42H380.137V40H385.146V42ZM395.165 42H390.155V40H395.165V42ZM405.184 42H400.174V40H405.184V42ZM415.203 42H410.193V40H415.203V42ZM425.221 42H420.212V40H425.221V42ZM435.24 42H430.231V40H435.24V42ZM445.259 42H440.25V40H445.259V42ZM455.278 42H450.269V40H455.278V42ZM465.297 42H460.287V40H465.297V42ZM475.316 42H470.306V40H475.316V42ZM485.335 42H480.325V40H485.335V42ZM495.353 42H490.344V40H495.353V42ZM505.372 42H500.363V40H505.372V42ZM515.391 42H510.382V40H515.391V42ZM525.41 42H520.401V40H525.41V42ZM535.429 42H530.419V40H535.429V42ZM545.448 42H540.438V40H545.448V42ZM555.467 42H550.457V40H555.467V42ZM565.486 42H560.476V40H565.486V42Z"
                        fill="#D5D5D5"
                      />
                    </svg>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="">
              <Col>
                <div
                  className={`d-flex justify-content-center ${rtbStyles.rk_rtb_mview_hidden_cont} `}
                >
                  <svg
                    width="16"
                    height="40"
                    viewBox="0 0 16 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.0709 32.8431L8.70691 39.2071C8.31639 39.5976 7.68322 39.5976 7.2927 39.2071L0.928739 32.8431C0.538214 32.4526 0.538214 31.8195 0.928739 31.4289C1.31926 31.0384 1.95243 31.0384 2.34295 31.4289L7.00777 36.0937L8.99184 36.0937L13.6567 31.4289C14.0472 31.0384 14.6804 31.0384 15.0709 31.4289C15.4614 31.8195 15.4614 32.4526 15.0709 32.8431ZM6.99981 2.40625L6.99981 -3.656e-07L8.99981 -2.78178e-07L8.99981 2.40625L6.99981 2.40625ZM6.99981 12.0312L6.99981 7.21875L8.99981 7.21875L8.99981 12.0312L6.99981 12.0312ZM6.99981 21.6562L6.99981 16.8437L8.99981 16.8437L8.99981 21.6562L6.99981 21.6562ZM6.99981 31.2812L6.99981 26.4687L8.99981 26.4687L8.99981 31.2812L6.99981 31.2812Z"
                      fill="#D5D5D5"
                    />
                  </svg>
                </div>
              </Col>
            </Row>
            <Row className={`${rtbStyles.rk_rtb_work1} mt-2 mb-2`}>
              <Col md={8} className="">
                <div>
                  <div
                    className={`${rtbStyles.rk_rtb_box_4_icon21} ${rtbStyles.rk_rtb_work1}`}
                  >
                    <div className="px-2 d-flex justify-content-center align-items-center flex-column">
                      <img
                        className={` ${rtbStyles.rk_rtb_box_4_icon_4}`}
                        src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/4c992425-7ac7-47ee-4957-cbfa63592500/public"
                      />
                      <p className="fs-4 text-center fw-bold">
                        Wins Partner <br />
                        RTB bid
                      </p>
                    </div>

                    <div
                      className={`d-flex justify-content-center align-items-center flex-column px-2 ${rtbStyles.rk_rtb_mview_hidden_cont}`}
                    >
                      <svg
                        width="154"
                        height="16"
                        viewBox="0 0 154 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M147.343 0.92888L153.707 7.29284C154.098 7.68336 154.098 8.31653 153.707 8.70705L147.343 15.071C146.953 15.4615 146.319 15.4615 145.929 15.071C145.538 14.6805 145.538 14.0473 145.929 13.6568L150.586 8.99995H150.45V6.99995H150.586L145.929 2.34309C145.538 1.95257 145.538 1.3194 145.929 0.92888C146.319 0.538355 146.953 0.538355 147.343 0.92888ZM2.55 8.99995H0V6.99995H2.55V8.99995ZM12.75 8.99995H7.65V6.99995H12.75V8.99995ZM22.95 8.99995H17.85V6.99995H22.95V8.99995ZM33.15 8.99995H28.05V6.99995H33.15V8.99995ZM43.35 8.99995H38.25V6.99995H43.35V8.99995ZM53.55 8.99995H48.45V6.99995H53.55V8.99995ZM63.75 8.99995H58.65V6.99995H63.75V8.99995ZM73.95 8.99995H68.85V6.99995H73.95V8.99995ZM84.15 8.99995H79.05V6.99995H84.15V8.99995ZM94.35 8.99995H89.25V6.99995H94.35V8.99995ZM104.55 8.99995H99.45V6.99995H104.55V8.99995ZM114.75 8.99995H109.65V6.99995H114.75V8.99995ZM124.95 8.99995H119.85V6.99995H124.95V8.99995ZM135.15 8.99995H130.05V6.99995H135.15V8.99995ZM145.35 8.99995H140.25V6.99995H145.35V8.99995Z"
                          fill="#D5D5D5"
                        />
                      </svg>
                    </div>
                    <div className="px-2 ">
                      <div className="d-flex justify-content-center ">
                        <img
                          className={rtbStyles.rk_rtb_box_4_icon_4}
                          src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/7505907e-f39a-4413-a145-785f8f332c00/public"
                        />
                      </div>
                      <div>
                        <p className="fs-4 text-center fw-bold ">
                          We sell ad <br /> impression via RTB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          {/* 
          <Container>
            <Row className={`mb-5 ${rtbStyles.rk_rtb_box_6_bg_main} py-3`}>
              <Col className="" md={6} sm={12} xs={12}>
                <div>
                  <div
                    className={`${rtbStyles.rk_rtb_box_5_pstn_div_main}   d-flex justify-content-center`}
                  >
                    <div>
                      <img
                        src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d076e71e-c41c-4d59-4578-8978367ae000/public"
                        className={rtbStyles.about_real_time_bidding}
                      />
                    </div>
                  </div>
                </div>
              </Col>

              <Col
                md={6}
                sm={12}
                xs={12}
                className="d-flex justify-content-between align-items-center py-3"
              >
                <div className="d-flex align-items-center justify-content-end">
                  <button className={rtbStyles.rk_rtb_box_6_btn_icon}>
                    <AiOutlineRight />
                  </button>
                </div>

                <div className="px-3 m-5">
                  <span className={`${rtbStyles.dp_RtbTraffic_main_heading}`}>
                    Read more about{" "}
                  </span>
                  <span
                    className={`${rtbStyles.dp_RtbTraffic_main_heading_color}`}
                  >
                    real-time bidding{" "}
                  </span>
                  <span className={`${rtbStyles.dp_RtbTraffic_main_heading}`}>
                    advertising on our blog.
                  </span>
                </div>
              </Col>
            </Row>
          </Container> */}

          <Container className="mb-5">
            <Row className="d-flex justify-content-center ">
              <Col md={12}>
                <div
                  className={` container mt-5 rounded-lg ${SmartCpmStyle.rk_adv_bnft_bg}`}
                >
                  <div className="row d-flex justify-content-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                    <div className="col-md-12">
                      <section className={SmartCpmStyle.rs_section_container}>
                        <section
                          className={SmartCpmStyle.rs_common_red_square_block}
                        >
                          <div
                            className={`${SmartCpmStyle.rs_col_7} col-lg-8 offset-lg-2`}
                          >
                            <p
                              className={`${SmartCpmStyle.AdvertisersContainerHeading} text-center fw-bold fs-3 text-white`}
                            >
                              Why try SmartCPM today?
                            </p>
                            <p
                              className={`${SmartCpmStyle.JoinGrowXAdsSubHeading} text-white`}
                            >
                              Our intelligent pricing model solves the problem
                              <br />
                              of overpaying for traffic.{" "}
                              <span className="">
                                {" "}
                                It's a powerful tool to save money and increase
                                ROI. When you enable automated bidding, you only
                                pay the best price needed to get relevant ad
                                views. The algorithm will do all the jobs by
                                competing over traffic 24/7.
                              </span>
                            </p>
                          </div>
                          <Row className="py-3 px-2">
                            <Col md={12} className="text-center">
                              <Link
                                to="/adveriserauthLogin"
                                className="no-underline hover:no-underline"
                              >
                                <button className={SmartCpmStyle.Enable_btn}>
                                  <div className="p-0 m-0">
                                    <div className="d-flex align-items-center justify-content-center">
                                      <span>ENABLE SMARTCPM</span>
                                      <span className={`ps-3 moreArrrow`}>
                                        {/* <FaArrowCircleRight /> */}
                                      </span>
                                    </div>
                                  </div>
                                </button>
                              </Link>
                            </Col>
                          </Row>
                        </section>
                      </section>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default RtbTraffic;
