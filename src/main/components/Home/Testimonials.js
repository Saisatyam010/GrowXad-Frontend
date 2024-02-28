import React, { useRef } from "react";
import Slider from "react-slick";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { sliderData, settings } from "../Shared/data/TestimonialMenu";
import Cardstyles from "../../components/Home/HomeStyles/Testimonials.module.css";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12 ">
          <div className={Cardstyles.rk_blog_b2_cardslider_main}>
            <div>
              <h1 className="text-center font-semibold text-black">
                Our partners’ <span style={{ color: "#71065D" }}>Trust</span> is
                our core value
              </h1>
            </div>
            <div className="d-flex gap-2">
              <button
                className={Cardstyles.rk_grow_sl_button}
                onClick={goToPrev}
              >
                <MdArrowBack />
              </button>
              <button
                className={Cardstyles.rk_grow_sl_button}
                onClick={goToNext}
              >
                <MdArrowForward />
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Slider
              ref={sliderRef}
              {...settings}
              style={{ margin: "auto", width: "100%" }}
            >
              {sliderData.map((item, index) => (
                <div key={index}>
                  <div className={`${Cardstyles.sana_mainPage_card} p-3`}>
                    <div className={Cardstyles.sana_img_quotation}>
                      <p className={Cardstyles.rk_img_quote}>
                        <RiDoubleQuotesL />
                      </p>
                    </div>
                    <div className={Cardstyles.sana_content}>
                      <p className="text-start">{item.content}</p>
                    </div>
                    <div
                      className={`${Cardstyles.sana_main_page_card_image2} mt-4 d-flex`}
                    >
                      <img
                        className="rounded-full"
                        src={item.author.imageSrc}
                        alt=""
                        height={100}
                        width={100}
                      />
                      <div className={Cardstyles.sana_cards_details}>
                        <h5 className="text-start">{item.author.name}</h5>
                        <p className="text-start">{item.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
