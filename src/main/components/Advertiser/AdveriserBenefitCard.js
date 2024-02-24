import React from "react";
import "animate.css";
import BenefitCardStyles from "../../components/Home/HomeStyles/BenefitCard.module.css";
// import "./TestCards.css";
import { FaArrowRight } from "react-icons/fa";
import { AdvertiserBenefitCardMenu } from "../Shared/data/benefitCardMenu";
import { Col, Container, Row } from "react-bootstrap";


import TbSeperator from "../Shared/TbSeperator";


const AdvertiserBenefitCard = (props) => {


    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>

                        <div className="text-center py-4">
                            <span className={`${BenefitCardStyles.dp_advbenifits_main_heading}`}>We do care about </span>
                            <span className={`${BenefitCardStyles.dp_advbenifits_main_heading_color}`}>your business </span>
                            <span className={`${BenefitCardStyles.dp_advbenifits_main_heading}`}>growth </span>
                        </div>
                    </Col>
                    <TbSeperator />
                </Row>
            </Container>

            <Container>
                <Row>
                    {props.message.map((card, index) => (
                        <Col md={3}>
                            <div
                                key={index}
                                className={`${BenefitCardStyles.sana_card
                                    }  animate__animated ${index % 2 === 0 ? "animate__backInUp" : "animate__bounceInUp"
                                    }`}
                            >
                                <div className={BenefitCardStyles.sana_img}>
                                    <img
                                        src={card.imgUrl}
                                        alt=""
                                    />
                                </div>

                                <div>
                                    <p className={`${BenefitCardStyles.sana_heading} m-0`}>{card.heading}</p>
                                </div>

                                <div >
                                    <p className={`${BenefitCardStyles.sana_contents} m-0 pt-3`}>{card.content}</p>
                                </div>

                                <div className={BenefitCardStyles.sana_btn_black}>
                                    <button className={`${BenefitCardStyles.sana_card_btn} d-flex`}>
                                        <span className={`${BenefitCardStyles.dp_advbenifits_sub_heading}`}></span>
                                        Learn More
                                        <FaArrowRight
                                            className={`${BenefitCardStyles.sana_icon_btn} ml-3 animate__animated animate__bounce animate__delay-2s`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </>
    );
};

export default AdvertiserBenefitCard;
