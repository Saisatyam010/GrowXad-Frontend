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
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center font-semibold text-black'>Why Choose <span style={{ color: "#71065D" }}>the Leading Online</span> Ad Network</h1>

          </div>
        </div>
      </div>
      <div className={cardHomeStyles.rs_bg_color}>

        <div className='container mt-3 p-4'>
          <div className='row mt-4 p-2 '>
            {props.cardData.map((card, index) => (
              <div className='col-md-3 col-lg-3 mb-4'
                key={index} // Don't forget to add a unique key for each card
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
                <div className={`${cardHomeStyles.rs_card_block} `}>
                  <div className={cardHomeStyles.rs_inner}>
                    <div className={`${cardHomeStyles.rs_img} d-flex ${cardHomeStyles.rs_strawberry}`}>
                      <img
                        src={index === hoveredIndex ? card.imagepath : card.imagepath2}
                        alt='Unique Partner Care'
                        loading='lazy'
                        className=''
                      />
                    </div>
                    <div className={`${cardHomeStyles.rs_h_card_border} `}>
                      <div className={cardHomeStyles.slide_card}></div>
                    </div>
                    {/* <h5 className="text-black text-[20px]">{card.nameh1}</h5> */}
                    <p className='text-black text-[20px] mt-2'>{card.namep1}</p>
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
