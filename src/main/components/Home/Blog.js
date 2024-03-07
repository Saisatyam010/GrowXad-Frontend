import React, { useRef } from "react";
import Slider from "react-slick";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Cardstyles from "../Home/HomeStyles/Blog.module.css";
import { BlogData, settings } from "../Shared/data/BlogMenu";
import { Link } from "react-router-dom";

const Blog = () => {
  const sliderRef = useRef(null);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 wow animate__animated animate__fadeIn animate__delay-1s">
          <div className={Cardstyles.rk_blog_b2_cardslider_main}>
            <div>
              <h1 className="text-center font-semibold text-black">
                Latest in the<span style={{ color: "#71065D" }}> Blog </span>
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
              {BlogData.map((item, index) => (
                <div className="p-2">
                  <div key={index} className="card">
                    <div className={`${Cardstyles.sana_mainPage_card} `}>
                      <div>
                        <div className="">
                          <img
                            src={item.imageSrc}
                            alt=""
                            className={Cardstyles.rk_blog_card_img}
                          />
                        </div>
                      </div>
                      <div className="px-3">
                        <div>
                          <p className={Cardstyles.rk_blog_card_content}>
                            {item.content}
                          </p>
                        </div>
                        <div className={Cardstyles.rk_blog_card2}>
                          <div>
                            <span className="text-start">
                              <p className={Cardstyles.rk_blog_card_time}>
                                {item.updatetime}
                              </p>
                            </span>
                          </div>
                          <div className="d-flex justify-content-end">
                            <span>
                              <Link to={"/blogs"} style={{ textDecoration: "none" }}>
                                < button
                                  className={Cardstyles.rk_blog_card_button}
                                >
                                  {item.button} &nbsp; <FaArrowRight />
                                </button>
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Blog;
