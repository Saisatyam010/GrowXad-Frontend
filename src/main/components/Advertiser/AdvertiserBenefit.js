import React from "react";
import AdvertiserBenefitsStyles from "../../components/Advertiser/AdvertiserStyles/AdvertiserBenefit.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Switch3Component from "../Shared/Switch3Component";
import SampleMap from "./SampleMap";
import {
  solutions,
  CardDataSix,
} from "../../components/Shared/data/advertiserBenefits";
import AdvertiserWelcome from "./AdvertiserWelcome";
import Layout from "../Layout/Layout";
import { FaArrowCircleRight } from "react-icons/fa";
import { AdvertiserBenefitsProsData } from "../Shared/data/advertiserBenefitsPros";
import AdvertiserBenefitCard from "./AdveriserBenefitCard";
import { AdvertiserBenefitCardMenu } from "../Shared/data/benefitCardMenu";

const AdvertiserBenefits = () => {
  const data = {
    heading1: "GrowXAds for Advertisers.",
    heading2: "Experience a Superlative Output of Your Marketing",
    subheading:
      "A game-changing advertising network for media buyers and affiliates looking for alternative traffic sources to connect their offers to highly engaged audiences.",
    spanHeading: "ready to engage",
    afterSpanHeading: " with your offers",
    imgUrl:
      "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/424b3ba8-0537-49df-53b2-933890a6a200/public",
  };

  const buttons = [{ text: "I'm an Advertiser" }, { text: "I'm a Publisher" }];
  return (
    <Layout>
      <div>
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div>
                <AdvertiserWelcome message={data} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`container-fluid pt-3 ${AdvertiserBenefitsStyles.SSA_BenefitsAdv_BG_IMG1}`}
          style={{ borderEndStartRadius: "40px" }}
        >
          <div className="container py-4 px-md-5 px-2">
            <div className="text-center">
              <span
                className={`${AdvertiserBenefitsStyles.dp_advbenifits_main_heading}`}
              >
                Which entities derive benefits from the utilization of GrowXad's
                advertising solutions?
              </span>
            </div>

            <div className="row">
              {solutions.map((item, index) => (
                <div className="col-md-6 " key={index}>
                  <div
                    className={`p-md-3 d-flex align-items-center  p-3 bg-white ${AdvertiserBenefitsStyles.SSA_card1} `}
                  >
                    <div>
                      <div
                        className={`${AdvertiserBenefitsStyles.SSA_benefits_font2ghgf6px_purple} pb-2  d-flex align-items-center`}
                      >
                        <span
                          className={AdvertiserBenefitsStyles.rk_adv_card_sbH}
                        >
                          {item.title}
                        </span>
                        <span className="px-2">
                          <img width={50} src={item.icon} />
                        </span>
                      </div>
                      <p
                        className={`${AdvertiserBenefitsStyles.dp_advbenifits_content} `}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container  mt-5 px-4">
          <div className="text-center">
            <span
              className={`${AdvertiserBenefitsStyles.dp_advbenifits_main_heading}`}
            >
              {" "}
              Connect with target audiences{" "}
            </span>
            <span
              className={`${AdvertiserBenefitsStyles.dp_advbenifits_main_heading_color}`}
            >
              ready to engage{" "}
            </span>
            <span
              className={`${AdvertiserBenefitsStyles.dp_advbenifits_main_heading}`}
            >
              {" "}
              with your offers{" "}
            </span>
          </div>
          <div className="row align-items-center px-md-5 pt-4 pt-md-0">
            <div className="col-md-6" style={{ overflow: "hidden" }}>
              <SampleMap style={{ width: "100%" }} />
            </div>
            <div className="col-md-6">
              <div
                className={`${AdvertiserBenefitsStyles.dp_advbenifits_sub_heading} m-0 py-3 `}
              >
                Best-matching traffic sources
              </div>
              <p
                className={`${AdvertiserBenefitsStyles.dp_advbenifits_content} m-0`}
              >
                GrowXAd partners with over 28K direct publishers who send 32+ ad
                views monthly. We offer exclusive traffic platforms that
                perfectly match iGaming, E-commerce, Apps, Utility, Software,
                and Entertainment verticals. In addition, you can apply for
                premium RTB traffic served by highly reputable SSP platforms.
              </p>
            </div>
          </div>
          <div className="row align-items-center  px-md-5  pt-4 pt-md-0 ">
            <div className="col-md-6 text-left ">
              <div
                className={`${AdvertiserBenefitsStyles.dp_advbenifits_sub_heading} m-0 py-3 `}
              >
                Powerful business space
              </div>
              <p className={AdvertiserBenefitsStyles.dp_advbenifits_content}>
                The GrowXAds Self-Serve Platform is ideal for people who want to
                purchase traffic without the help of a manager. You'll have
                access to a range of targeting options, competitive
                intelligence, and ad optimization tools, which will help you
                improve your campaigns and increase conversions. <br /> <br />{" "}
              </p>
              <div>
                <button
                  className={`${AdvertiserBenefitsStyles.RegisterButton} MoreButton  m-0`}
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <span>Learn More</span>
                    <span className={`ps-3 moreArrrow`}>
                      <FaArrowCircleRight />
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="col-md-6 mt-2 mt-md-0 ">
              <img
                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/6866317f-03c4-4b32-eb64-e02ebfb77500/public"
                alt=""
                width="100%"
              />
            </div>
          </div>
          <div className="row align-items-center container px-md-5 px-3 pt-4 mt-5 pt-md-0">
            <div className="col-md-6">
              <img
                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/8945d70b-6845-4146-e5f0-744ca5900600/public"
                alt=""
                width="100%"
              />
            </div>
            <div className="col-md-6 text-left pl-md-5 pl-0 pt-md-0 px-2 px-md-0 pt-4">
              <div
                className={`${AdvertiserBenefitsStyles.dp_advbenifits_sub_heading} m-0 py-3 `}
              >
                Budget-saving tools
              </div>

              <p className={AdvertiserBenefitsStyles.dp_advbenifits_content}>
                Spend less buying CPM/CPC traffic and setting rules to optimize
                it by eCPA or conversions (CPA Goal). Add automated bidding to
                your ad strategy, allowing Smart CPM to find the best-converting
                placements at the fairest price.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Switch3Component />
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="text-center py-4">
            <span
              className={`${AdvertiserBenefitsStyles.dp_advbenifits_main_heading}`}
            >
              Join pros who make 1.34B{" "}
            </span>
            <span
              className={`${AdvertiserBenefitsStyles.dp_advbenifits_main_heading_color}`}
            >
              Conversions{" "}
            </span>
            <span
              className={`${AdvertiserBenefitsStyles.dp_advbenifits_main_heading}`}
            >
              per year{" "}
            </span>
          </div>
          <div className="row">
            {AdvertiserBenefitsProsData.map((item, index) => (
              <div className="col-md-4 mb-3">
                <div
                  className={`d-flex bg-dark py-2 bg-info ${AdvertiserBenefitsStyles.SSA_BENEFITS_OUTER}`}
                  style={{ borderRadius: " 20px" }}
                >
                  <div
                    className={`${AdvertiserBenefitsStyles.SSA_BENEFITS_ICON} `}
                  >
                    <img
                      src={item.image}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div
                    className={`${AdvertiserBenefitsStyles.dp_advbenifits_heading} text-white px-3`}
                  >
                    {item.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <AdvertiserBenefitCard message={AdvertiserBenefitCardMenu} />
        <Container>
          <Row className="d-flex justify-content-center ">
            <Col md={12}>
              <div
                className={` container mt-5 rounded-lg ${AdvertiserBenefitsStyles.rk_adv_bnft_bg}`}
              >
                <div className="row d-flex justify-content-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                  <div className="col-md-12">
                    <section
                      className={AdvertiserBenefitsStyles.rs_section_container}
                    >
                      <section
                        className={
                          AdvertiserBenefitsStyles.rs_common_red_square_block
                        }
                      >
                        <div
                          className={`${AdvertiserBenefitsStyles.rs_col_7} col-lg-8 offset-lg-2`}
                        >
                          <p
                            className={`${AdvertiserBenefitsStyles.AdvertisersContainerHeading} text-center fw-bold fs-3 text-white`}
                          >
                            Join GrowXAds Today
                          </p>
                          <p
                            className={`${AdvertiserBenefitsStyles.JoinGrowXAdsSubHeading} text-white`}
                          >
                            You’re only a few minutes away from high-performing
                            ad campaigns and loads of quality traffic. Welcome
                            to your new growth area!
                          </p>
                        </div>
                        <div className="conatiner">
                          <div className="row d-flex justify-content-center">
                            {buttons.map((button, index) => (
                              <div
                                key={index}
                                className="col-lg-4 col-md-4 pb-2"
                              >
                                <p
                                  className={
                                    AdvertiserBenefitsStyles.rs_block_list
                                  }
                                >
                                  {button.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </section>
                    </section>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="container-fluid">
          <div className="container">
            <div className="row px-md-5  pt-md-0 d-flex align-items-center">
              <div className="col-md-7  ">
                <div>
                  <span
                    className={`${AdvertiserBenefitsStyles.dp_advbenifits_main_heading}`}
                  >
                    Partnerships that{" "}
                  </span>
                  <span
                    className={`${AdvertiserBenefitsStyles.dp_advbenifits_main_heading_color}`}
                  >
                    you can profit{" "}
                  </span>
                  <span
                    className={`${AdvertiserBenefitsStyles.dp_advbenifits_main_heading}`}
                  >
                    from{" "}
                  </span>
                </div>

                <p
                  className={`${AdvertiserBenefitsStyles.dp_advbenifits_content}m-0 pt-3`}
                >
                  The GrowXAds Self-Serve Platform is ideal for people who want
                  to purchase traffic without the help of a manager. You'll have
                  access to a range of targeting options, competitive
                  intelligence, and ad optimization tools, which will help you
                  improve your campaigns and increase conversions.
                </p>
                <div>
                  <button className={`MoreButton  m-0`}>
                    <div className="p-0 m-0">
                      <div className="d-flex align-items-center justify-content-center ">
                        <span
                          className={`${AdvertiserBenefitsStyles.dp_advbenifits_content}`}
                        >
                          Learn More
                        </span>
                        <span className={`ps-3 moreArrrow`}>
                          <FaArrowCircleRight />
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="col-md-5">
                <img
                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/7a94bf72-e93b-4833-2c8d-f01efdb49b00/public"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdvertiserBenefits;
