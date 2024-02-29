import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CpaGoals.css";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import AdvertiserWelcome from "../AdvertiserWelcome";
import Faqs from "../../Faqs/Faqs";
import AdvertiserPricingCard from "../../AdvertiserPricing/AdvertiserPricingCard";
import { AdvertiserCardDataMenus } from "../../Shared/data/advertiserCardMenu";
const CpaGoals = () => {
  const data = {
    heading1: "GrowXad for Advertisers.",
    heading2: "Experience a Superlative Output of Your Marketing",
    subheading:
      "A game-changing advertising network for media buyers and affiliates looking for alternative traffic sources to connect their offers to highly engaged audiences.",
    spanHeading: "ready to engage",
    afterSpanHeading: " with your offers",
    imgUrl:
      "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/a912a064-937a-4030-29a2-3db8a96e9600/public",
  };
  const data2 = AdvertiserCardDataMenus;
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <AdvertiserWelcome message={data} />
          </div>
        </div>
      </div>

      <Container style={{ marginTop: "74px" }}>
        <Row className=" d-flex justify-content-center p-0 m-0">
          <Col md={12}>
            {/* Top Benifits */}

            <Row className="mt-5 d-flex justify-content-center px-2 ">
              <Col
                md={12}
                className=" dp_cpagoals_topbenifits_container text-dark"
                style={{ backgroundColor: "#f0f0f0" }}
              >
                <h3 className="text-center">
                  Essential Benefits for Advertisers
                </h3>
                <Row className="mt-4 px-2">
                  <Col md={6} className="py-2">
                    <Row className="d-flex justify-content-between py-2">
                      <Col md={3} className="col-4">
                        <img
                          src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/a6748002-eaf6-4d71-9c5a-3a84301b1900/public"
                          width="119px"
                        ></img>
                      </Col>
                      <Col md={9} className="px-2 col-8 pt-4">
                        <h6>Minimize Traffic Expenditure</h6>
                        <p style={{ fontSize: "14px" }}>
                          Secure Impressions or Clicks, Optimizing Them with
                          Custom Rules for Key Target Actions
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={6} className="py-2">
                    <Row className="d-flex justify-content-between py-2">
                      <Col md={3} className="col-4">
                        <img
                          src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/fa2980bf-4340-4f8a-2c49-dd18ecd2fc00/public"
                          width="89px"
                        ></img>
                      </Col>
                      <Col md={9} className="px-2 col-8 pt-4">
                        <h6>Maximize Returns with Each Placement</h6>
                        <p style={{ fontSize: "14px" }}>
                          Algorithms Scrutinize Ad Placements, Retaining Only
                          Those Meeting Your KPIs
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={6} className="py-2">
                    <Row className="d-flex justify-content-between py-2">
                      <Col md={3} className="col-4">
                        <img
                          src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/9731f068-74e5-4e06-9f1b-743b52b24a00/public"
                          width="129px"
                        ></img>
                      </Col>
                      <Col md={9} className="px-2 col-8 pt-4">
                        <h6>Efficient Placement Management, Saving Time</h6>
                        <p style={{ fontSize: "14px" }}>
                          Purchasing Impressions or Clicks with Tailored Rules
                          for Optimizing Key Target Actions
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={6} className="py-2">
                    <Row className="d-flex  justify-content-between py-2">
                      <Col md={3} className="col-4">
                        <img
                          src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/87a12043-2234-4061-c6b4-9bf9dc2acb00/public"
                          width="89px"
                          alt="Image"
                        />
                      </Col>
                      <Col md={9} className="px-2 col-8 pt-4">
                        <h6>Tailored Rules for Maximum Impact</h6>
                        <p style={{ fontSize: "14px" }}>
                          Save and Update Customized Rules, Applicable to Any
                          CPM or CPC Campaigns, as Required.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row className="py-3 px-2">
                  <Col md={12} className="text-center">
                    <Link
                      to="/adveriserauthLogin"
                      className="no-underline hover:no-underline"
                    >
                      <button className="dp_cpagoals_signup_button">
                        SIGN UP AND TRY
                      </button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* How to enable CPA Goal */}

            <Row className="mt-5 p-3 d-flex justify-content-center px-2 card">
              <Col md={11}>
                <h3 className="p-0">How to enable CPA Goal</h3>

                <Row className="mt-4 ">
                  <Col md={6} style={{ fontSize: "14px" }}>
                    <Row className="mb-2">
                      <Col md={1} className="col-1">
                        <span className="dp_cpa_enableCPA_numbering">1 </span>
                      </Col>
                      <Col md={11} className="col-11  ">
                        <div className="ps-1">
                          <span className="dp_cpa_enableCPA_link ">
                            Sign up
                          </span>
                          <span> or </span>
                          <span className="dp_cpa_enableCPA_link">log in</span>
                          <span> as an advertiser.</span>
                        </div>
                      </Col>
                    </Row>

                    <Row className="mb-2">
                      <Col md={1} className="col-1">
                        <span className="dp_cpa_enableCPA_numbering">2 </span>
                      </Col>
                      <Col md={11} className="col-11">
                        <div className="ps-1">
                          <span>Ensure to set up </span>
                          <span className="dp_cpa_enableCPA_link ">
                            S2S tracking
                          </span>
                          <span>
                            {" "}
                            since it’s necessary for tracking conversions.
                          </span>
                        </div>
                      </Col>
                    </Row>

                    <Row className="mb-2">
                      <Col md={1} className="col-1">
                        <span className="dp_cpa_enableCPA_numbering">3 </span>
                      </Col>
                      <Col md={11} className="col-11">
                        <div className="ps-1">
                          <span>
                            {" "}
                            To enable CPA Goal optimization, create a new
                            campaign or choose the existing one. To create a new
                            campaign, hit Campaigns Create.
                          </span>
                        </div>
                      </Col>
                    </Row>

                    <Row className="mb-2">
                      <Col md={1} className="col-1">
                        <span className="dp_cpa_enableCPA_numbering">4 </span>
                      </Col>
                      <Col md={11} className="col-11">
                        <div className="ps-1">
                          <span>
                            On the campaign page, pick CPM or CPC from the
                            Pricing type field.
                          </span>
                        </div>
                      </Col>
                    </Row>

                    <Row className="mb-2">
                      <Col md={1} className="col-1">
                        <span className="dp_cpa_enableCPA_numbering">3 </span>
                      </Col>
                      <Col md={11} className="col-11">
                        <div className="ps-1">
                          <span>
                            Jump to Step 4 – Advanced settings. You can now
                            create a rule to optimize your traffic for the
                            number of conversions or eCPA.
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={6} className=" dp_cpa_enableCPA_bgimage">
                    <Row
                      style={{
                        padding: "40px 40px 20px 40px",
                        marginTop: "80px",
                        fontSize: "16px",
                      }}
                    >
                      <Col
                        md={12}
                        className="dp_cpa_enableCPA_bgimage_txt mb-2"
                      >
                        <span>
                          💡 Every new rule will be applied to your campaign
                          immediately.
                        </span>
                      </Col>
                      <Col
                        md={12}
                        className="dp_cpa_enableCPA_bgimage_txt mb-2"
                      >
                        <span>
                          💡 Create, adjust, and customize rules from the CPA
                          Goal rules page in your account.
                        </span>
                      </Col>
                      <Col md={12} className="dp_cpa_enableCPA_bgimage_txt">
                        <span>
                          💡 Manage all unlinked placements right on the
                          Campaign page (the Advanced Settings section){" "}
                        </span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Top Use Cases */}
            <div className="my-md-5 my-0 py-md-5 pt-3">
              <div className="" style={{ marginBottom: "-130px " }}>
                <div className="container py-3">
                  <div className="row">
                    <div className="col-md-12">
                      <AdvertiserPricingCard cardData={data2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* You can apply CPA Goal to onclick and in-page push traffic */}

            <Row className="mt-5 d-flex justify-content-center px-2">
              <Col md={11}>
                <Row className="mt-5 d-flex justify-content-center px-2">
                  <Col md={7}>
                    <h1 className="text-center py-4 ">
                      <span>
                        Implement CPA Goal for Onclick and In-Page Push Traffic
                      </span>
                    </h1>
                  </Col>
                </Row>

                <Row className=" d-flex justify-content-center dp_apply_row">
                  <Col md={12}>
                    <Row className="px-0 py-3 d-flex align-items-center justify-content-between ">
                      <Col md={3}>
                        <p style={{ fontSize: "25px", fontWeight: "600" }}>
                          Popunder (onclick)
                        </p>
                      </Col>
                      <Col md={4}>
                        <p style={{ fontSize: "16px" }}>
                          A code snippet for automatic redirection to your
                          landing page upon visiting publishers' websites,
                          ensuring unparalleled viewability.
                        </p>
                      </Col>
                      <Col md={4}>
                        <Link
                          to="/popunderad"
                          className="no-underline hover:no-underline"
                        >
                          <button className="dp_cpagoals_signup_button">
                            GET MORE INFORMATION
                          </button>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row className=" d-flex justify-content-center dp_apply_row">
                  <Col md={12}>
                    <Row className="px-0 py-3 d-flex align-items-center justify-content-between ">
                      <Col md={3}>
                        <p style={{ fontSize: "25px", fontWeight: "600" }}>
                          Social Bar
                        </p>
                      </Col>
                      <Col md={4}>
                        <p style={{ fontSize: "16px" }}>
                          Exclusive ad formats designed to elevate CTR by up to
                          30%. Access over 20 high-converting templates with
                          meticulously crafted designs.
                        </p>
                      </Col>
                      <Col md={4}>
                        <Link
                          to="/bannerad"
                          className="no-underline hover:no-underline"
                        >
                          <button className="dp_cpagoals_signup_button">
                            GET MORE INFORMATION
                          </button>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row className=" d-flex justify-content-center dp_apply_row">
                  <Col md={12}>
                    <Row className="px-0 py-3 d-flex align-items-center justify-content-between ">
                      <Col md={3}>
                        <p style={{ fontSize: "25px", fontWeight: "600" }}>
                          In-Page Push
                        </p>
                      </Col>
                      <Col md={4}>
                        <p style={{ fontSize: "16px" }}>
                          The cutting-edge successor to Web Push compatible with
                          all browsers and operating systems. No opt-ins or
                          subscriptions needed.
                        </p>
                      </Col>
                      <Col md={4}>
                        <Link
                          to="/inpagepushad"
                          className="no-underline hover:no-underline"
                        >
                          <button className="dp_cpagoals_signup_button">
                            GET MORE INFORMATION
                          </button>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className=" d-flex justify-content-center dp_apply_row">
                  <Col md={12}>
                    <Row className="px-0 py-3 d-flex align-items-center justify-content-between ">
                      <Col md={3}>
                        <p style={{ fontSize: "25px", fontWeight: "600" }}>
                          In-Page Push
                        </p>
                      </Col>
                      <Col md={4}>
                        <p style={{ fontSize: "16px" }}>
                          The cutting-edge successor to Web Push compatible with
                          all browsers and operating systems. No opt-ins or
                          subscriptions needed.
                        </p>
                      </Col>
                      <Col md={4}>
                        <Link
                          to="/inpagepushad"
                          className="no-underline hover:no-underline"
                        >
                          <button className="dp_cpagoals_signup_button">
                            GET MORE INFORMATION
                          </button>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row className=" d-flex justify-content-center dp_apply_row">
                  <Col md={12}>
                    <Row className="px-0 py-3 d-flex align-items-center justify-content-between ">
                      <Col md={3}>
                        <p style={{ fontSize: "25px", fontWeight: "600" }}>
                          In-Page Push
                        </p>
                      </Col>
                      <Col md={4}>
                        <p style={{ fontSize: "16px" }}>
                          The cutting-edge successor to Web Push compatible with
                          all browsers and operating systems. No opt-ins or
                          subscriptions needed.
                        </p>
                      </Col>
                      <Col md={4}>
                        <Link
                          to="/inpagepushad"
                          className="no-underline hover:no-underline"
                        >
                          <button className="dp_cpagoals_signup_button">
                            GET MORE INFORMATION
                          </button>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Ready to create a rules-based campaign? */}

            <Row className="mt-5 d-flex justify-content-center px-2">
              <Col
                md={12}
                className=" dp_cpagoals_topbenifits_container "
                style={{ backgroundColor: "#73035b" }}
              >
                <Row className="mt-4 px-2 d-flex justify-content-center">
                  <Col md={12}>
                    <h1 className="text-center">
                      Ready to Launch Your Rules-Based Campaign?
                    </h1>
                  </Col>
                  <Col md={10}>
                    <p className="text-center fs-5 py-4">
                      Enhance Your Campaigns with CPA Goal: Optimize Spending,
                      Maximize ROI, and Achieve Tangible Results through
                      Intelligent Algorithms and Customizable Rules.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* FAQ about CPA Goal */}

            <Row className="mt-5 d-flex justify-content-center px-2">
              <Col md={12}>
                <h1 className="text-center">FAQ about CPA Goal</h1>
              </Col>

              <Col md={12} className="p-0">
                <Row className="mt-4 px-2 d-flex justify-content-center">
                  <Faqs />
                </Row>
              </Col>
            </Row>

            {/* Reliable payment systems for advertisers */}

            <Row className="my-5 d-flex justify-content-center px-2">
              <Col md={12} className="p-0">
                <ul className="dp_payment_items">
                  <li>
                    <img
                      src="https://adsterra.com/_nuxt/img/wire-transfer.566b8a9.svg"
                      height={100}
                      width={100}
                      className="w-100 h-100"
                    ></img>
                  </li>
                  <li>
                    <img
                      src="https://adsterra.com/_nuxt/img/unionpay.94efc61.svg"
                      height={100}
                      width={100}
                      className="w-100 h-100"
                    ></img>
                  </li>
                  <li>
                    <img
                      src="https://adsterra.com/_nuxt/img/capitalist.4156058.svg"
                      height={100}
                      width={100}
                      className="w-100 h-100"
                    ></img>
                  </li>
                  <li>
                    <img
                      src="https://adsterra.com/_nuxt/img/visa-mastercard.be8a4ce.svg"
                      height={100}
                      width={100}
                      className="w-100 h-100"
                    ></img>
                  </li>
                  <li>
                    <img
                      src="https://adsterra.com/_nuxt/img/paxum.c5b741f.svg"
                      height={100}
                      width={100}
                      className="w-100 h-100"
                    ></img>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>





    </Layout>
  );
};

export default CpaGoals;
