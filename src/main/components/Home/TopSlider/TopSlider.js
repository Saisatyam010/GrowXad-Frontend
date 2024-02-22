
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BenefitCardStyles from "./TopSlider.module.css";

const TopSlider = () => {
    const [isHovered, setHovered] = useState(false);
    const handleHover = () => {
        setHovered(!isHovered);
    };

    return (
        <>
            <Container fluid className="">
                <Row>
                    <Col md={12}>

                        <div className="row">
                            <div className="col-md-12"></div>


                            <div
                                className={`col-md-6 ${BenefitCardStyles.outer_container}`}
                                onMouseEnter={handleHover}
                                onMouseLeave={handleHover}
                            >
                                <div
                                    className={`${BenefitCardStyles.inner_container} ${isHovered ? BenefitCardStyles.paused : ""
                                        }`}
                                >

                                    <div className="p-2 d-flex justify-content-center align-items-center">
                                        <img
                                            className={BenefitCardStyles.home_page_banner_img}
                                            src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/92bff270-befe-4742-287c-5c845af18b00/public"
                                        />
                                    </div>

                                    <div className="p-2 d-flex justify-content-center align-items-center">
                                        <img
                                            className={BenefitCardStyles.home_page_banner_img}
                                            src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d2a5d407-12f5-427d-e1ee-b7bf35b99000/public"
                                        />
                                    </div>
                                    <div className="p-2 d-flex justify-content-center align-items-center">
                                        <img
                                            className={BenefitCardStyles.home_page_banner_img1}
                                            src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/1c1a9912-326e-49d9-75af-01965c158a00/public"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className={BenefitCardStyles.home_page_banner_img1}
                                            src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/cc342ad6-d20b-463d-2f3e-41a18e049a00/public"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div
                                className={`col-md-6 ${BenefitCardStyles.outer_container}`}
                                onMouseEnter={handleHover}
                                onMouseLeave={handleHover}
                            >
                                <div
                                    className={`${BenefitCardStyles.inner_container2} ${isHovered ? BenefitCardStyles.paused : ""
                                        }`}
                                >

                                    <div className="d-flex justify-content-center mt-2">
                                        <img
                                            className={BenefitCardStyles.home_page_banner_img}
                                            src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/6e872f8e-41a0-472a-f172-6adc3009fc00/public"
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center ">
                                        <img
                                            className={BenefitCardStyles.home_page_banner_img}
                                            src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/cc342ad6-d20b-463d-2f3e-41a18e049a00/public"
                                        />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TopSlider