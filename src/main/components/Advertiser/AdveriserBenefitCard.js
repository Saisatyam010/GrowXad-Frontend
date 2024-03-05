import React from "react";
import "animate.css";
import BenefitCardStyles from "../../components/Home/HomeStyles/BenefitCard.module.css";
import { FaArrowRight } from "react-icons/fa";
import { AdvertiserBenefitCardMenu } from "../Shared/data/benefitCardMenu";
import { Col, Container, Row } from "react-bootstrap";
import TbSeperator from "../Shared/TbSeperator";
const AdvertiserBenefitCard = (props) => {
    console.log(props.message)
    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>

                        <div className="text-center pt-4">
                            <span className={`${BenefitCardStyles.dp_advbenifits_main_heading}`}>We do care about </span>
                            <span className={`${BenefitCardStyles.dp_advbenifits_main_heading_color}`}>your business </span>
                            <span className={`${BenefitCardStyles.dp_advbenifits_main_heading}`}>growth </span>
                        </div>
                    </Col>
                    <TbSeperator />
                </Row>
            </Container>
            <Container>
    <Row className='gx-5'>
        {props.message.map((card, index) => (
            <Col md={3} sm={6} lg={3} xs={12} className='p-2' key={index}>
                <div className={`${BenefitCardStyles.sana_card} p-3 d-flex flex-column`} style={{ borderRadius: "10px", height: '100%' }}>
                    <div>
                        <img
                            width={100}
                            src={card.imgUrl}
                            alt=""
                        />
                    </div>
                    <div className='mt-3'>
                        <h5 className='text-white fw-bold'>{card.heading}</h5>
                    </div>
                    <div className='mt-3'>
                        <p className='text-white'>
                            {card.content}
                        </p>
                    </div>
                    <div className='mt-auto'>
                        <button className={`${BenefitCardStyles.sana_card_btn} d-flex align-items-center`}>
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
