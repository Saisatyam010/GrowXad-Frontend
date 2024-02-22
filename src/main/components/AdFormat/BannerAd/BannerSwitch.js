import React from "react";
import { useState } from "react";
import Layout from "../../Layout/Layout";

import { data1, data2 } from "./BannerMenu";
import AddStyle from "./BannerAd.module.css";

const BannerSwitch = () => {
  const [contentAdvertiser, setContentAdvertiser] = useState(true);
  const [contentPublisher, setContentPublisher] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  
  return (
    <div>
      <div className="container px-md-5 px-lg-5 px-2 py-5">
        <div className="px-md-5 px-0">
          <div
            class="row mx-md-5 mx-0 justify-content-center"
            style={{
              padding: "0px !important",
              margin: "0px !important",
              border: "1px solid black",
              borderRadius: "28px",
            }}
          >
            <div className="col-md-6 justify-content-center  align-items-center " onClick={() => {
              setContentAdvertiser(true);
              setContentPublisher(false);
            }}
              style={{
                cursor: 'pointer',
                backgroundColor: contentAdvertiser ? 'black' : 'white',
                color: contentAdvertiser ? 'white' : 'black',
                borderTopLeftRadius: '28px',
                borderBottomLeftRadius: '28px',
                borderTopRightRadius: '28px',
                borderBottomRightRadius: '28px'
              }}
            >
              <div className='d-flex align-items-center mt-3 mb-2 justify-content-center' style={{}}>
                <div ><h3 className='font-semibold text-center'>Advertisers</h3></div>
              </div>
            </div>

            <div className="col-md-6 " onClick={() => {
              setContentAdvertiser(false);
              setContentPublisher(true);
            }}
              style={{
                cursor: 'pointer', backgroundColor: contentPublisher ? 'black' : 'white', color: contentPublisher ? 'white' : 'black',
                borderTopRightRadius: '28px', borderBottomRightRadius: '28px'
                , borderTopLeftRadius: '28px', borderBottomLeftRadius: '28px'
              }}
            >
              <div className='d-flex align-items-center mt-3 mb-2 justify-content-center' style={{}}>
                <div><h3 className='font-semibold text-center'>Publisher</h3></div>
              </div>
            </div>
          </div>

          {contentAdvertiser ? (
            <>
              <div className=" pt-3 pt-md-5 pt-lg-5">
                <div className="row">
                  {data2.map((card, index) => (
                    <div
                      className="col-md-4 col-lg-4 mb-4"
                      key={index} // Don't forget to add a unique key for each card
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className={`${AddStyle.rs_card_block} `}>
                        <div className={AddStyle.rs_inner}>
                          <div
                            className={`${AddStyle.rs_img} d-flex ${AddStyle.rs_strawberry}`}
                          >
                            <img
                              src={card.imgSrc}
                              alt="Unique Partner Care"
                              loading="lazy"
                              className=""
                            />
                          </div>
                          <div className={`${AddStyle.rs_h_card_border} `}>
                            <div className={AddStyle.slide_card}></div>
                          </div>
                          <h5 className={AddStyle.rs_h_text}>{card.title}</h5>
                          <p className={AddStyle.rs_p_text}>{card.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className=" pt-3 pt-md-5 pt-lg-5">
                <div className="row">
                  {data1.map((card, index) => (
                    <div
                      className="col-md-4 col-lg-4 mb-4"
                      key={index} // Don't forget to add a unique key for each card
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className={`${AddStyle.rs_card_block} `}>
                        <div className={AddStyle.rs_inner}>
                          <div
                            className={`${AddStyle.rs_img} d-flex ${AddStyle.rs_strawberry}`}
                          >
                            <img
                              src={card.imgSrc}
                              alt="Unique Partner Care"
                              loading="lazy"
                              className=""
                            />
                          </div>
                          <div className={`${AddStyle.rs_h_card_border} `}>
                            <div className={AddStyle.slide_card}></div>
                          </div>
                          <h5 className={AddStyle.rs_h_text}>{card.title}</h5>
                          <p className={AddStyle.rs_p_text}>{card.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerSwitch;
