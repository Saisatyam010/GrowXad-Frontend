import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CPANetworkStyleCSS from "../../components/CpaNetwork/CpaNetwork.module.css";

import { FaArrowCircleRight } from "react-icons/fa";
import AdvertiserBenefitsStyles from "../../components/Advertiser/AdvertiserStyles/AdvertiserBenefit.module.css";

import { GoRocket } from "react-icons/go";

const AdvertiserWelcome = (props) => {
  console.log(props);

  return (
    <>
      <Container fluid>
        <Row className="">
          <Col md={6} className="d-flex align-items-center ">
            <Row>
              <Col md={12} className=" p-0 m-0 ">
                <div>
                  <span
                    className={`${CPANetworkStyleCSS.dp_cpanetwork_main_heading} m-0`}
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
                    className={` ${CPANetworkStyleCSS.dp_cpanetwork_main_sub_heading} m-0 py-3 `}
                  >
                    {props.message.subheading}
                  </p>
                </div>
              </Col>
              <Col md={12} className="p-0 py-2">
                <div className="">
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
            className="d-flex align-items-center px-3  justify-content-center "
          >
            <div>
              <img src={props.message.imgUrl} alt=""></img>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdvertiserWelcome;
