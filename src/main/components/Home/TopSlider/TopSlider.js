import React, { useRef, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BenefitCardStyles from "./TopSlider.module.css";
const TopSlider = () => {
    const container1Ref = useRef(null);
    const container2Ref = useRef(null);
    useEffect(() => {
        const container1 = container1Ref.current;
        const container2 = container2Ref.current;
        const cloneContent = (container) => {
            const firstChild = container.children[0];
            container.appendChild(firstChild.cloneNode(true));
        };
        const handleAnimationEnd = (container) => {
            const firstChild = container.children[0];
            container.removeChild(firstChild);
            cloneContent(container);
        };
        cloneContent(container1);
        cloneContent(container2);
        container1.addEventListener("animationend", () => handleAnimationEnd(container1));
        container2.addEventListener("animationend", () => handleAnimationEnd(container2));
        return () => {
            container1.removeEventListener("animationend", () => handleAnimationEnd(container1));
            container2.removeEventListener("animationend", () => handleAnimationEnd(container2));
        };
    }, []);
    const [currentNumber, setCurrentNumber] = useState(200);
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Increase the number by 1
            setCurrentNumber((prevNumber) => (prevNumber >= 300 ? 100 : prevNumber + 1));
        }, 200); // You can adjust the interval time in milliseconds (e.g., 1000 for 1 second)
        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <Container fluid className="">
                <Row className="">
                    <Col md={12} className={`${BenefitCardStyles.rk_mainslider_outer_div}`} >
                        <Row>
                            <Col md={6}>
                                <div
                                    ref={container1Ref}
                                    className={`col-md-12 ${BenefitCardStyles.outer_container}`}
                                >
                                    <div className={`${BenefitCardStyles.inner_container}`}>
                                        <div className="p-2 mb-4 d-flex justify-content-center align-items-center">
                                            <img
                                                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/3f1748e1-50f0-4d03-6d37-f925d4ccb200/public"
                                            />
                                        </div>
                                        <div className="p-2 mb-4 d-flex justify-content-center align-items-center">
                                            <img
                                                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/302d07e6-893f-4cec-17c6-bc310b430000/public"
                                            />
                                        </div>
                                        <div className="p-2 mb-4 d-flex justify-content-center align-items-center">
                                            <div className={`${BenefitCardStyles.rkSlider_bg} p-2`}>
                                                <img
                                                    src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/85e8d00c-7140-4471-c4aa-836671ce2d00/public"
                                                />
                                                <p className={BenefitCardStyles.rk_homepage_slider_clients} >{currentNumber}K+</p>
                                            </div>
                                        </div>
                                        <div className="p-2 mb-4 d-flex justify-content-center align-items-center">
                                            <img
                                                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/06371004-729d-4e30-6d72-ebe961a49000/public"
                                            />
                                        </div>
                                        <div className="p-2 mb-4 d-flex justify-content-center align-items-center">
                                            <img
                                                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/6e872f8e-41a0-472a-f172-6adc3009fc00/public"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div
                                    ref={container2Ref}
                                    className={`col-md-12 ${BenefitCardStyles.outer_container}`}
                                >
                                    <div className={`${BenefitCardStyles.inner_container} ${BenefitCardStyles.reverse}`}>
                                        <div className="p-2 mb-4 d-flex justify-content-center align-items-center rk_homepage_slider_img">
                                            <img
                                                className="rk_homepage_slider_img_wrapper"
                                                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/394f7f4d-5b7a-48fb-2ef5-dd05144eaf00/public"
                                            />
                                        </div>
                                        <div className="p-2 mb-4 d-flex justify-content-center align-items-center">
                                            <div>
                                                <div className="mb-2" >
                                                    <img
                                                        src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/5e2cf828-dfbd-48ba-9eeb-1712dbeb5e00/public" />
                                                </div>
                                                <div>
                                                    <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/b611c08e-fe12-4519-7003-dc6a69878500/public" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 mb-4 d-flex justify-content-center align-items-center">
                                            <img
                                                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d16a7a84-43d1-4e05-426c-ca55a6c96400/public"
                                            />
                                        </div>
                                        <div className="p-2 mb-4 d-flex justify-content-center align-items-center">
                                            <div>
                                                <div className="mb-2" >
                                                    <img
                                                        src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/5e2cf828-dfbd-48ba-9eeb-1712dbeb5e00/public" />
                                                </div>
                                                <div className="mb-2">
                                                    <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/b611c08e-fe12-4519-7003-dc6a69878500/public" />
                                                </div>
                                                <div  >
                                                    <img
                                                        src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/5e2cf828-dfbd-48ba-9eeb-1712dbeb5e00/public" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default TopSlider;