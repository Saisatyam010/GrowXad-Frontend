import { Container, Row, Col } from "react-bootstrap";
import CpagoalsStyle from "./CpaGoals.module.css";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import AdvertiserWelcome from "../AdvertiserWelcome";
import Faqs from "../../Faqs/Faqs";
import AdvertiserPricingCard from "../../AdvertiserPricing/AdvertiserPricingCard";
import {
  AdvertiserCardDataMenus,
  CpaGoals_benefitsData,
  CpaGoals_applyData,
  CpaGoal_paymentItems,
} from "../../Shared/data/advertiserCardMenu";
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
          <div
            className={`col-md-12 mx-auto ${CpagoalsStyle.dp_cpagoals_top_container}`}
          >
            <AdvertiserWelcome message={data} />
          </div>
        </div>
      </div>

      <Container style={{ marginTop: "74px" }}>
        <Row className=" d-flex justify-content-center p-0 m-0">
          <Col md={12}>
            {/* Top Benifits */}
            <Row className="mt-5 d-flex justify-content-center px-2">
              <Col
                md={12}
                className={` ${CpagoalsStyle.dp_cpagoals_topbenifits_container} text-dark`}
              >
                <h3 className="text-center">
                  Essential Benefits for Advertisers
                </h3>
                <Row className="mt-4 px-2">
                  {CpaGoals_benefitsData.map((benefit, index) => (
                    <Col md={6} className="py-2" key={index}>
                      <Row className="d-flex justify-content-between py-2">
                        <Col md={3} className="col-4">
                          <img
                            src={benefit.imageSrc}
                            width="119px"
                            alt="Benefit Image"
                          />
                        </Col>
                        <Col md={9} className="px-2 col-8 pt-4">
                          <h6>{benefit.title}</h6>
                          <p>{benefit.description}</p>
                        </Col>
                      </Row>
                    </Col>
                  ))}
                </Row>
                <Row className="py-3 px-2">
                  <Col md={12} className="text-center">
                    <Link
                      to="/adveriserauthLogin"
                      className="no-underline hover:no-underline"
                    >
                      <button
                        className={CpagoalsStyle.dp_cpagoals_signup_button}
                      >
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
                  <Col md={6}>
                    <Row className="mb-2">
                      <Col md={1} className="col-1">
                        <span
                          className={CpagoalsStyle.dp_cpa_enableCPA_numbering}
                        >
                          1{" "}
                        </span>
                      </Col>
                      <Col md={11} className="col-11  ">
                        <div className="ps-1">
                          <span className={CpagoalsStyle.dp_cpa_enableCPA_link}>
                            Sign up
                          </span>
                          <span> or </span>
                          <span className={CpagoalsStyle.dp_cpa_enableCPA_link}>
                            log in
                          </span>
                          <span> as an advertiser.</span>
                        </div>
                      </Col>
                    </Row>

                    <Row className="mb-2">
                      <Col md={1} className="col-1">
                        <span
                          className={CpagoalsStyle.dp_cpa_enableCPA_numbering}
                        >
                          2{" "}
                        </span>
                      </Col>
                      <Col md={11} className="col-11">
                        <div className="ps-1">
                          <span>Ensure to set up </span>
                          <span className={CpagoalsStyle.dp_cpa_enableCPA_link}>
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
                        <span
                          className={CpagoalsStyle.dp_cpa_enableCPA_numbering}
                        >
                          3{" "}
                        </span>
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
                        <span
                          className={CpagoalsStyle.dp_cpa_enableCPA_numbering}
                        >
                          4{" "}
                        </span>
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
                        <span
                          className={CpagoalsStyle.dp_cpa_enableCPA_numbering}
                        >
                          5{" "}
                        </span>
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

                  <Col
                    md={6}
                    className={CpagoalsStyle.dp_cpa_enableCPA_bgimage}
                  >
                    <Row
                      style={{
                        padding: "40px 40px 20px 40px",
                        marginTop: "80px",
                        fontSize: "16px",
                      }}
                    >
                      <Col
                        md={12}
                        className={`${CpagoalsStyle.dp_cpa_enableCPA_bgimage_txt} mb-2`}
                      >
                        <span>
                          💡 Every new rule will be applied to your campaign
                          immediately.
                        </span>
                      </Col>
                      <Col
                        md={12}
                        className={`${CpagoalsStyle.dp_cpa_enableCPA_bgimage_txt} mb-2`}
                      >
                        <span>
                          💡 Create, adjust, and customize rules from the CPA
                          Goal rules page in your account.
                        </span>
                      </Col>
                      <Col
                        md={12}
                        className={CpagoalsStyle.dp_cpa_enableCPA_bgimage_txt}
                      >
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
                    <h1 className="text-center py-4">
                      <span>
                        Implement CPA Goal for Onclick and In-Page Push Traffic
                      </span>
                    </h1>
                  </Col>
                </Row>

                {CpaGoals_applyData.map((item, index) => (
                  <Row
                    className={`d-flex justify-content-center ${CpagoalsStyle.dp_apply_row}`}
                    key={index}
                  >
                    <Col md={12}>
                      <Row className="px-0 py-3 d-flex align-items-center justify-content-between">
                        <Col md={3}>
                          <p style={{ fontSize: "25px", fontWeight: "600" }}>
                            {item.title}
                          </p>
                        </Col>
                        <Col md={4}>
                          <p style={{ fontSize: "16px" }}>{item.description}</p>
                        </Col>
                        <Col md={4}>
                          <Link
                            to={item.linkTo}
                            className="no-underline hover:no-underline"
                          >
                            <button
                              className={
                                CpagoalsStyle.dp_cpagoals_signup_button
                              }
                            >
                              GET MORE INFORMATION
                            </button>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
            {/* Ready to create a rules-based campaign? */}
            <Row className="mt-5 d-flex justify-content-center px-2">
              <Col
                md={12}
                className={
                  CpagoalsStyle.dp_cpagoals_topbenifits_container_Launch
                }
              >
                <Row className="mt-4 px-2 d-flex justify-content-center">
                  <Col md={12}>
                    <h1 className="text-center">
                      Ready to Launch Your Rules-Based Campaign?
                    </h1>
                  </Col>
                  <Col md={10}>
                    <p
                      className={`text-center fs-5 py-4 ${CpagoalsStyle.Rules_Based_Camp_p}`}
                    >
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
                <ul className={CpagoalsStyle.dp_payment_items}>
                  {CpaGoal_paymentItems.map((item, index) => (
                    <li key={index}>
                      <img
                        src={item.src}
                        alt={item.alt}
                        height={100}
                        width={100}
                        className="w-100 h-100"
                      />
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            ;
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default CpaGoals;
