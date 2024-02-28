import "animate.css";
import BenefitCardStyles from "../../components/Home/HomeStyles/BenefitCard.module.css";
import { FaArrowRight } from "react-icons/fa";
import { BenefitCardMenu } from "../Shared/data/benefitCardMenu";
import { Button, Col, Container, Row } from "react-bootstrap";
import TbSeperator from "../Shared/TbSeperator";

const BenefitCard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="text-center font-semibold text-black">
              Who can benefit{" "}
              <span style={{ color: "#71065D" }}>from GrowX</span>ad network
            </h1>
          </Col>
          <TbSeperator />
        </Row>
      </Container>

      <Container>
        <Row xs={1} md={2} lg={3}>
          {BenefitCardMenu.map((card, index) => (
            <Col key={index}>
              <div
                className={`${BenefitCardStyles.sana_card} animate__animated ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <div className={BenefitCardStyles.sana_img}>
                  <img src={card.imgUrl} alt="" />
                </div>
                <div className={BenefitCardStyles.sana_heading}>
                  <h1>{card.heading}</h1>
                </div>
                <div className={BenefitCardStyles.sana_contents}>
                  <p>{card.content}</p>
                </div>
                <div className={BenefitCardStyles.sana_btn_black}>
                  <button
                    className={`${BenefitCardStyles.sana_card_btn} d-flex`}
                  >
                    Learn More{" "}
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

export default BenefitCard;
