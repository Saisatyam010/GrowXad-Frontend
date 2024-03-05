import React, { useState } from 'react';
import cardHomeStyles from "../Home/HomeStyles/CardHome.module.css";

const AdvertiserPricingCard = (props) => {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center font-semibold text-black py-4 m-0">
              Why Choose{" "}
              <span className={cardHomeStyles.webcl_theme}>
                the Leading Online
              </span>{" "}
              Ad Network
            </h1>
          </div>
        </div>
      </div>

      <div className={`${cardHomeStyles.rs_bg_color}  p-0 m-0`} >
        <div className="container  mt-3 p-4">
          <div className="row mt-4 p-2 ">
            {props.cardData.map((card, index) => (
              <div
                className="col-md-3 col-lg-3 mb-4"
                key={index} // Don't forget to add a unique key for each card
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`${cardHomeStyles.rs_card_block} `}>
                  <div className={cardHomeStyles.rs_inner}>
                    <div
                      className={`${cardHomeStyles.rs_img} d-flex ${cardHomeStyles.rs_strawberry}`}
                    >
                      <img
                        src={
                          index === hoveredIndex
                            ? card.imagepath
                            : card.imagepath2
                        }
                        alt="Unique Partner Care"
                        loading="lazy"
                        className=""
                      />
                    </div>
                    <div className={`${cardHomeStyles.rs_h_card_border} `}>
                      <div className={cardHomeStyles.slide_card}></div>
                    </div>
                    <p className={`${cardHomeStyles.dp_whychoose_card_txt} m-0`}>{card.namep1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdvertiserPricingCard
