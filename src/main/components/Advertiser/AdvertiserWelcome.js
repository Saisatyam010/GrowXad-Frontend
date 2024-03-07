import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CPANetworkStyleCSS from "../../components/CpaNetwork/CpaNetwork.module.css";

import { FaArrowCircleRight } from "react-icons/fa";
import AdvertiserBenefitsStyles from "../../components/Advertiser/AdvertiserStyles/AdvertiserBenefit.module.css";

const AdvertiserWelcome = (props) => {
  console.log(props);

  return (
    <>
      <Container fluid>
        <Row className="">
          <Col md={6} className="d-flex align-items-center order-2 order-md-1 ">
            <Row>
              <Col md={12} className=" py-5 m-0 ">
                <div>
                  <span
                    className={`${CPANetworkStyleCSS.dp_cpanetwork_main_heading} m-0 `}
                  >
                    {props.message.heading1}{" "}
                  </span>

                  <span
                    className={`${CPANetworkStyleCSS.dp_cpanetwork_main_heading} m-0`}
                  >
                    {props.message.heading2} {props.spanHeading}{" "}
                    {props.afterSpanHeading}{" "}
                  </span>

                  <p
                    className={` ${CPANetworkStyleCSS.dp_cpanetwork_main_sub_heading} m-0 pt-2  `}
                  >
                    {props.message.subheading}
                  </p>
                </div>
              </Col>
              <Col md={12} className="mb-3">
                <div className={AdvertiserBenefitsStyles.create_resp_btn}>
                  <button
                    className={`${AdvertiserBenefitsStyles.RegisterButton02} MoreButton m-0`}
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <span>Learn More</span>
                      <span className={`ps-3 moreArrrow`}>
                        <FaArrowCircleRight />
                      </span>
                    </div>
                  </button>
                </div>
              </Col>
            </Row>
          </Col>

          <Col
            md={6}
            className="d-flex justify-content-md-end justify-content-center order-1 order-md-2"
          >
            <img src={props.message.imgUrl} alt="" width={"80%"}></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdvertiserWelcome;
