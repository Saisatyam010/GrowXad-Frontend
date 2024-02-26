import React from "react";
import AdvertiserBenefitsStyles from "../../components/Advertiser/AdvertiserStyles/AdvertiserBenefit.module.css";
import { Button, Col } from "react-bootstrap";
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
    heading1: "GrowXad for Advertisers.",
    heading2: "Experience a Superlative Output of Your Marketing",
    subheading:
      "A game-changing advertising network for media buyers and affiliates looking for alternative traffic sources to connect their offers to highly engaged audiences.",
    spanHeading: "ready to engage",
    afterSpanHeading: " with your offers",
    imgUrl:
      "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/424b3ba8-0537-49df-53b2-933890a6a200/public",
  };

  return (
    <Layout>
      <div>
        {/*--------------------------main Section------------------------*/}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="py-4">
                <AdvertiserWelcome message={data} />
              </div>
            </div>
          </div>
        </div>

        {/*--------------------------Second Section------------------------*/}
        <div
          className={`container-fluid py-5 ${AdvertiserBenefitsStyles.SSA_BenefitsAdv_BG_IMG1}`}
          style={{ borderEndStartRadius: "40px" }}
        >
          <div className="container pt-4 px-md-5 px-2">
            <div className="text-center">
              <span
                className={`${AdvertiserBenefitsStyles.dp_advbenifits_main_heading}`}
              >
                Revolutionizing Your Online Presence:{" "}
              </span>
              <span
                className={`${AdvertiserBenefitsStyles.dp_advbenifits_main_heading_color}`}
              >
                Revolutionizing Advanced Digital Marketing Tactics
              </span>
            </div>

            <div className="row">
              {solutions.map((item, index) => (
                <div className="col-md-6 pt-4 " key={index}>
                  <div
                    className={`p-md-5 p-3 bg-white ${AdvertiserBenefitsStyles.SSA_card1} `}
                  >
                    <div
                      className={`${AdvertiserBenefitsStyles.SSA_benefits_font26px_purple}  d-flex align-items-center`}
                    >
                      {item.title}

                      <span className="fs-3 px-2">{item.icon}</span>
                    </div>

                    <p
                      className={`${AdvertiserBenefitsStyles.dp_advbenifits_content} `}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*--------------------------Third Section------------------------*/}
        <div className="container  py-md-5 py-3">
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

          <div className="row align-items-center container px-md-5 px-3">
            <div className="col-md-7">
              <SampleMap />
            </div>

            <div className="col-md-5">
              <div>
                <div
                  className={`${AdvertiserBenefitsStyles.dp_advbenifits_sub_heading} m-0 py-3 `}
                >
                  Best-matching traffic sources
                </div>
                <p
                  className={`${AdvertiserBenefitsStyles.dp_advbenifits_content} m-0`}
                >
                  GrowXAd partners with over 28K direct publishers who send 32+
                  ad views monthly. We offer exclusive traffic platforms that
                  perfectly match iGaming, E-commerce, Apps, Utility, Software,
                  and Entertainment verticals. In addition, you can apply for
                  premium RTB traffic served by highly reputable SSP platforms.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center  px-md-5  pt-4 pt-md-0 ">
            <div className="col-md-7 text-left ">
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
            <div className="col-md-5 p-5 text-center ">
              <img
                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/6866317f-03c4-4b32-eb64-e02ebfb77500/public"
                alt=""
                width="100%"
              />
            </div>
          </div>
          <div className="row align-items-center container px-md-5 px-3 pt-4 pt-md-0">
            <div className="col-md-5 p-5 text-center">
              <img
                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/8945d70b-6845-4146-e5f0-744ca5900600/public"
                alt=""
                width="100%"
              />
            </div>
            <div className="col-md-7 text-left pl-md-5 pl-0 pt-md-0 px-2 px-md-0 pt-4">
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

        {/*--------------------------Switch Section------------------------*/}
        <Switch3Component />
        {/*----------------------------9col section-------------------------*/}

        <div className="container p-5">
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
                  className={`d-flex bg-dark py-2 ${AdvertiserBenefitsStyles.SSA_BENEFITS_OUTER}`}
                  style={{ borderRadius: " var(--border-radius-base)" }}
                >
                  <div
                    className={`${AdvertiserBenefitsStyles.SSA_BENEFITS_ICON} bg-white`}
                  >
                    <img src={item.image} alt="" />
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

        {/*--------------------payment section-------------------*/}

        {/*-------------------Box Section-------------------*/}
        <div
          className="px-3 my-3"
          style={{ bottom: "0px", marginBottom: "20px" }}
        >
          <div className="px-md-5 px-0 mx-md-5 mx-2 ">
            <div className="container-fluid  SSA_Benefit_Bg_Img3  py-md-5 py-3">
              <div className="text-center pt-5">
                <div>
                  <span
                    className={`${AdvertiserBenefitsStyles.dp_advbenifits_main_heading} `}
                  >
                    Join{" "}
                  </span>
                  <span
                    className={`${AdvertiserBenefitsStyles.dp_advbenifits_main_heading_color} `}
                  >
                    GrowXAds{" "}
                  </span>
                  <span
                    className={`${AdvertiserBenefitsStyles.dp_advbenifits_main_heading} `}
                  >
                    Today!
                  </span>
                </div>

                <p
                  className={`${AdvertiserBenefitsStyles.dp_advbenifits_sub_heading} text-black`}
                >
                  You’re only a few minutes away from high-value audiences ready
                  to engage with your offers.
                </p>
                <Col md={{ span: 4, offset: 4 }} className="mb-2 my-5">
                  <Button className={`MoreButton btn`}>
                    <div className="p-0 m-0">
                      <div className="d-flex align-items-center justify-content-center">
                        <span>Signup And Try</span>
                        <span className={`ps-3 moreArrrow`}>
                          <FaArrowCircleRight />
                        </span>
                      </div>
                    </div>
                  </Button>
                </Col>
              </div>
            </div>
          </div>
        </div>

        {/*-----------second last section------------------*/}
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center container px-md-5  pt-4 pt-md-0 ">
              <div className="col-md-7 text-left ">
                <div className="text-center">
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
                  className={`${AdvertiserBenefitsStyles.dp_advbenifits_content}m-0 py-3`}
                >
                  The GrowXAds Self-Serve Platform is ideal for people who want
                  to purchase traffic without the help of a manager. You'll have
                  access to a range of targeting options, competitive
                  intelligence, and ad optimization tools, which will help you
                  improve your campaigns and increase conversions.
                </p>
                <div>
                  <Button className={`MoreButton btn m-0`}>
                    <div className="p-0 m-0">
                      <div className="d-flex align-items-center justify-content-center">
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
                  </Button>
                </div>
              </div>
              <div className="col-md-5  ">
                <img
                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/7a94bf72-e93b-4833-2c8d-f01efdb49b00/public"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <BenefitSlider /> */}
      </div>
    </Layout>
  );
};

export default AdvertiserBenefits;
