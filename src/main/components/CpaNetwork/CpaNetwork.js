import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  CPANetworkSocialMediaIcons,
  CpaNetworkDiscoverKeyFeatures,
  CpaNetworkExOpportunity,
  CpaNetworkGrowXAdsVerticals,
} from "../Shared/data/CpaNetworkData";
import CPANetworkStyleCSS from "../../components/CpaNetwork/CpaNetwork.module.css";
import Layout from "../Layout/Layout";
import TbSeperator from "../Shared/TbSeperator";

export const CpaNetwork = () => {
  return (
    <Layout>
      <Container className="py-5">
        <Row className={CPANetworkStyleCSS.rk_main_div_mob}>
          <Col md={6} className="">
            <h1>
              <span
                className={CPANetworkStyleCSS.dp_cpanetwork_main_heading_color}
              >
                Sign up{" "} 
              </span>

              <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading}>
                with{" "}
              </span>
              <span
                className={CPANetworkStyleCSS.dp_cpanetwork_main_heading_color}
              >
                GrowXAds{" "}
              </span>
              <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading}>
                today to access exclusive offers directly from{" "}
              </span>
              <span
                className={CPANetworkStyleCSS.dp_cpanetwork_main_heading_color}
              >
                Advertisers!
              </span>
            </h1>
            <p
              className={`py-2 ${CPANetworkStyleCSS.dp_cpanetwork_main_sub_heading}`}
            >
              Unlock exclusive offers with higher payouts and exceptional
              conversion rates just moments away. Explore our top selection of
              VPN, Utility, and Sweepstake Offers – start testing now!"
            </p>
            <Row>
              <Col
                md={10}
                className={`${CPANetworkStyleCSS.rk_main_div_mob_btn} p-0 m-0 `}
              >
                <button
                  className={`my-1 mx-0  fw-bold ${CPANetworkStyleCSS.RegisterButton}`}
                >
                  Register Now!
                </button>
              </Col>
            </Row>
          </Col>

          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="w-2/3">
              <img
                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d741e910-49e8-411d-f605-2f6ed68a9c00/public"
                width="100%"
                height="100%"
                alt=""
              ></img>
            </div>
          </Col>
        </Row>

        {/* Exclusive Opportunity */}

        <Row>
          <Col md={12}>
            <div style={{ lineHeight: "40px" }} className="text-center pt-5">
              <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading}>
                {" "}
                Access exclusive opportunities with{" "}
              </span>

              <span
                className={CPANetworkStyleCSS.dp_cpanetwork_main_heading_color}
              >
                GrowXAds CPA{" "}
              </span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Row className="d-flex justify-content-center">
              <Col
                md={12}
                className={`${CPANetworkStyleCSS.rk_card_sprt_div} m-2`}
              >
                {CpaNetworkExOpportunity.map((ele, index) => (
                  <Col
                    sm={12}
                    xs={12}
                    md={4}
                    xl={4}
                    key={index}
                    className={`${CPANetworkStyleCSS.dp_cpanetwork_exclusive_cards} m-2`}
                  >
                    <Row>
                      <Col md={12}>
                        <p
                          className={`${CPANetworkStyleCSS.dp_cpanetwork_main_sub_heading} text-center fw-bold`}
                        >
                          {ele.title}{" "}
                        </p>
                      </Col>
                      <Col md={12} className="d-flex justify-content-center">
                        <div
                          className={`${CPANetworkStyleCSS.dp_cpanetwork_opp_cards_underline}  `}
                        >
                          {" "}
                        </div>
                      </Col>
                      <Col md={12}>
                        <p
                          className={`${CPANetworkStyleCSS.dp_cpaNetwork_cards_content} text-center`}
                        >
                          {ele.content}{" "}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
        <TbSeperator />
        <Row>
          <Col md={12}>
            <div className="text-center pt-4 pb-3 ">
              <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading}>
                Verticals that work best with{" "}
              </span>

              <span
                className={CPANetworkStyleCSS.dp_cpanetwork_main_heading_color}
              >
                GrowXAds traffic
              </span>
            </div>
          </Col>

         
           
              <div className="">
                <Row className=" d-flex justify-content-center">
                {CpaNetworkGrowXAdsVerticals.map((ele, index) => (
                  <Col md={3} xs={6} sm={6}>
                    <Row>
                      <Col md={12} className={CPANetworkStyleCSS.dp_cpanetwork_icon_main}>
                        <div
                          className={`${CPANetworkStyleCSS.dp_cpanetwork_icon_circle}`}
                        >
                          <img src={ele.imgPath} alt="" />
                          
                        </div>
                        <div className=""><p
                          className={`${CPANetworkStyleCSS.dp_cpanetwork_main_sub_heading}  text-center py-2 `}
                        >
                          {ele.title}
                        </p></div>
                      </Col>
                    </Row>
                  </Col>
                ))}
                </Row>
              </div>
          
         
        </Row>

        {/* Discover Our Key Features */}

        <Row className="">
          <Col md={12} className="pt-4">
            <div className="text-center ">
              <h1>
              <span
                className={CPANetworkStyleCSS.dp_cpanetwork_main_heading_color}
              >
                Discover{" "}
              </span>

              <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading}>
                Our Key Features{" "}
              </span>
              </h1>
            </div>

            <p
              className={`text-center ${CPANetworkStyleCSS.dp_cpanetwork_main_sub_heading} `}
            >
              Every day, our dedicated work strives to improve and brighten our
              clients' lives.
            </p>
          </Col>
          </Row>

          <Row className="d-flex justify-content-between py-4">
            <Col
              md={12}
              className="d-flex align-items-center justify-content-between"
            >
              <Row className="d-flex justify-content-center">
                {CpaNetworkDiscoverKeyFeatures.map((ele, index) => (
                  <Col md={4} className="justify-content-center pt-4">
                    <div
                      className={`text-center  ${CPANetworkStyleCSS.dp_cpanetwork_keyfeatures_card}`}
                    >
                      <img
                        src={ele.imgPath}
                        alt=""
                        className={`text-center  ${CPANetworkStyleCSS.dp_cpanetwork_keyfeatures_card_image}`}
                        width="100px"
                      />

                      <p
                        className={`${CPANetworkStyleCSS.dp_cpanetwork_main_sub_heading}  text-center fw-bold pt-5`}
                      >
                        {ele.title}
                      </p>

                      <p
                        className={`${CPANetworkStyleCSS.dp_cpaNetwork_cards_content}  text-center `}
                      >
                        {ele.content}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
       
        <Row className="">
          <Col md={12} className="pt-3">
            <div className="text-center ">
              <span className={CPANetworkStyleCSS.dp_cpanetwork_main_heading}>
                About{" "}
              </span>

              <span
                className={CPANetworkStyleCSS.dp_cpanetwork_main_heading_color}
              >
                GrowXAds{" "}
              </span>
            </div>
          </Col>

          <Col md={12}>
            <Row className="d-flex align-items-center">
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center mb-2"
              >
                <div className="text-center w-2/3">
                  <img
                    src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/99e4efb9-a05f-4c97-78dd-e20b8c367900/public"
                    alt=""
                  />
                </div>
              </Col>

              <Col md={6}>
                <div
                  className={`text-center  ${CPANetworkStyleCSS.dp_cpanetwork_keyfeatures_card} 
                                  ${CPANetworkStyleCSS.dp_cpaNetwork_cards_content}
                                  `}
                >
                  <p>
                    Welcome to GrowXAds, a pioneering ad network established in
                    2013. Trusted by over 30,000 advertisers and publishers
                    globally, we offer an intuitive platform featuring regularly
                    updated offers, rapid and generous payouts, user-friendly
                    statistics, and an advanced tracking system.
                  </p>

                  <p>
                    Experience unique, high-payout offers tailored for
                    individual affiliates – seize the opportunity to be the
                    first to access exclusive closed offers!
                  </p>

                  <p>
                    At GrowXAds, we prioritize top-notch service, ensuring full
                    support throughout your campaign launch. Join us for a
                    seamless and rewarding advertising journey!
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <TbSeperator />
       
      </Container>
      <Container fluid>

      <Row
          className={`${CPANetworkStyleCSS.dp_cpanetwork_socialmedia_bg}  d-flex justify-content-center`}
        >
          <Col md={8}>
            <h1
              className={`text-center  ${CPANetworkStyleCSS.dp_cpanetwork_main_heading}`}
            >
              Be part of the GrowXAds community, where passionate professionals
              thrive.
            </h1>

            <p
              className={`text-center ${CPANetworkStyleCSS.dp_cpanetwork_main_sub_heading}`}
            >
              Stay ahead with early access to new offers, traffic insights, and
              expert strategies.
            </p>
          </Col>

          <Col md={12}>
            <Row className=" justify-content-center">
              {CPANetworkSocialMediaIcons.map((ele, index) => (
                <div className="col-md-1 col-4">
                  <img
                    style={{ borderRadius: "50%" }}
                    src={ele.imgPath}
                    alt=""
                    width="80%"
                  />
                </div>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
