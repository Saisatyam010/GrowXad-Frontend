import React, { useState } from "react";
import AddStyle from "../BannerAd/BannerAd.module.css";
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import BannerSwitch from "./BannerSwitch";
import {
  BannerAdsGoodReasons,
  SelfServePlatform,
  solutionData,
  sectionsData,
} from "../BannerAd/BannerMenu";

import { Button, Col, Row } from "react-bootstrap";
import Layout from "../../Layout/Layout";
import SectionSeperator from "../../Shared/SectionSeperator";
import TbSeperator from "../../Shared/TbSeperator";

const BannerAd = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <Layout>
      <div>
        {/*1st section*/}
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className={`${AddStyle.dp_bannerads_main_heading} m-0`}>
                <span className={AddStyle.sana_DisplayBanner_VoiletText}>
                  Banner Ad{" "}
                </span>
                <span> — Display Banner Advertising on Your Website</span>
              </h1>
              <p className={`${AddStyle.dp_bannerads_sub_heading}  py-3 m-0`}>
                Online Banner Ads deliver unprecedented performance to
                publishers. Webmasters and bloggers enjoy 100% fill rates and
                high payouts. Advertisers access reliable traffic sources and
                reach conscious customers that are ready to buy. If it is the
                result you’re looking for, then an online display ad is what you
                need.
              </p>
              <div class="d-flex justify-content-start  align-items-center m-0 ">
                <div className="mr-3 w-60">
                  <Link
                    to="/adveriserauthLogin"
                    className="text-black no-underline hover:no-underline border-0 outline-0"
                  >
                    <button
                      type="button"
                      className={`${AddStyle.SSA_Btn_HOME_buytraffic} py-3   p-3 w-100`}
                    >
                      Launch Campaign
                    </button>
                  </Link>
                </div>

                <div className="w-60">
                  <Link
                    to="/adveriserauthLogin"
                    className="text-white no-underline hover:no-underline "
                  >
                    <Button
                      variant="outline"
                      className={`${AddStyle.gradient_signup}  px-5 mr-2 p-3 w-100`}
                    >
                      Get Banner Code
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 pt-4 px-3 px-md-0 px-lg-0 pt-md-0 pt-lg-0">
              <div className="d-flex justify-content-center">
                <img
                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/6bd7511b-3cea-4a0b-a607-900fb787f000/public"
                  alt=""
                  className="mx-0"
                  style={{ width: "70%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/*2nd section*/}
        <div className="py-md-5 py-2">
          <div className="container py-5">
            <div className="row">
              <div
                className={`${AddStyle.dp_bannerads_main_heading} text-center`}
              >
                <h1 className="text-center font-semibold text-black">
                  Who benefits from{" "}
                  <span style={{ color: "#71065D" }}>GrowXad</span> advertising
                  solutions
                </h1>
              </div>
              

              {solutionData.map((item, index) => (
                <div key={index} className="col-md-6 pt-4">
                  <div className={AddStyle.sana_Solution_New_Cards_Box}>
                    <div className={`${AddStyle.sana_Solution_Cards} p-4`}>
                      <div className={AddStyle.sana_hover_color_bubble}></div>
                      <div
                        className={`${AddStyle.dp_bannerads_sub_heading} fw-bold`}
                      >
                        {item.title}
                      </div>
                      <p className={` ${AddStyle.dp_bannerads_content}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <TbSeperator /> */}

        {/*3rd section*/}
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>

        <div className=" container-fluid">
          <div className="container py-md-5 p-3 card">
            <div className="row"></div>
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div>
                  <h1 className="text-center font-semibold text-black">
                    {" "}
                    Types of GrowXad{" "}
                    <span style={{ color: "#71065D" }}>banner ads</span> you can
                    get
                  </h1>

                  <p
                    className={`${AddStyle.dp_bannerads_sub_heading} m-0 py-3`}
                  >
                    Display or banner advertising is the oldest type of online
                    advertising with proven efficiency. Banners are images or
                    GIF files that are to be placed on publishers’ websites,
                    mobile sites, and blogs. According to IAB, there are typical
                    and most clickable banner ad formats for desktop and mobile
                    devices.
                  </p>
                </div>
                {/* <Link
                to="/adveriserauthLogin"
                className="no-underline hover:no-underline"
              >
                <button
                  className={`${AddStyle.sana_Add_formate_btns} px-5 py-3 `}
                >
                  THE BANNER CODE
                </button>
              </Link> */}
              </div>
              <div className="col-md-6 pt-md-0 pt-lg-0 pt-3">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/a39a5652-7919-473c-e64d-84b0ef212e00/public"
                    alt=""
                    // className=""
                    // style={{ width: "80%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*4th section*/}
        <SectionSeperator />
        <div>
          <div className="container ">
            <Row>
              <Col md={12}>
                <h1 className="text-center font-semibold text-black">
                  {" "}
                  benefits from{" "}
                  <span style={{ color: "#71065D" }}>GrowXad</span> advertising
                  solutions
                </h1>
              </Col>
            </Row>
            <SectionSeperator />

            <Row>
              {sectionsData.map((card, index) => (
                <div
                  className="col-md-6 col-lg-6 mb-4"
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
                          src={card.imageUrl}
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
            </Row>
          </div>
        </div>

        <SectionSeperator />
        <div className="container-fluid">
          <div className="container p-3 card">
            <div className="row">
              <div className="col-md-6  pt-md-0 pt-lg-0 pt-3">
                <div className="d-flex justify-content-center p-4">
                  <img
                    src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/f99fd012-8759-4f86-c7e9-1532566b5a00/public"
                    alt=""
                    className="mx-0"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h1 className="text-center font-semibold text-black">
                  What are<span style={{ color: "#71065D" }}> banner ads</span>{" "}
                  good for?
                </h1>

                {BannerAdsGoodReasons.map((item, index) => {
                  return (
                    <div className=" ">
                      <div className="d-flex  align-items-center" key={index}>
                        <TiTick
                          className="mb-2 p-1"
                          size={24}
                          style={{
                            backgroundColor: "#73035b",
                            borderRadius: "50%",
                          }}
                          fill="white"
                        />
                        <p
                          className={`${AddStyle.dp_bannerads_content} pb-3 mb-0 ml-2 pt-2`}
                        >
                          {item}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/*6th section*/}

        <SectionSeperator />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center font-semibold text-black">
                {" "}
                How to put <span style={{ color: "#71065D" }}>Banners</span> on
                a website?
              </h1>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container  card p-3">
            <div className="row">
              <div className="col-md-12  pr-0">
                <div className="">
                  <p className={`${AddStyle.dp_bannerads_content} pb-3 m-0`}>
                    1. Effortlessly integrate banners anywhere on your
                    webpage—header, sidebar, footer, and more. Implement the
                    GrowX code/script on your website or mobile page to
                    seamlessly showcase advertisements and enhance user
                    engagement.
                  </p>
                  <p className={`${AddStyle.dp_bannerads_content} pb-2 m-0`}>
                    2. First, register as a Publisher and log in. <br /> <br />
                    3. Generate code for the needed banner size (160×300,
                    160×600, 300×250, 320х50, 728×90, 468×60), use ADD NEW
                    WEBSITE button and fill out the required fields. Now all you
                    have to do is wait for approval. <br /> <br />
                    4. Afterward, get the code from your account or the GrowX
                    email, then copy the code and paste it to any page you like.
                  </p>
                </div>
              </div>
              <div className="col-md-6 pl-md-5 pl-lg-5 pl-0">
                <div></div>
              </div>
            </div>
          </div>
        </div>

        {/*7th section*/}
        <div className={`py-5`}>
          <div className="container bg-black p-3 rounded">
            <div className="row ">
              <div className="col-md-12 ">
                <p
                  className={`${AddStyle.dp_bannerads_main_heading} text-light m-0 text-center text-white`}
                >
                  Best <span style={{ color: "#fff" }}>opportunities</span>
                </p>
                <hr />

                <p
                  className={`${AddStyle.dp_bannerads_sub_heading} py-4 text-light m-0 text-center text-white`}
                >
                  Leveraging partnerships with 28K+ direct publishers and 13K+
                  advertisers, GrowX employs AI algorithms to consistently
                  assess traffic quality, ensuring optimal traffic-to-offer
                  matches.
                </p>

                <div className="d-flex align-items-center justify-content-center">
                  <Link
                    to="/adveriserauthLogin"
                    className="no-underline hover:no-underline"
                  >
                    <div className="row d-flex justify-content-center text-center mx-auto ">
                      <div className=" col-md-6">
                        <Button
                          variant="outline"
                          className={`${AddStyle.gradient_signup2}  px-5 p-3 m-2 w-60 text-white`}
                        >
                          Get Direct Link Code
                        </Button>{" "}
                      </div>
                      <div className=" col-md-6">
                        <Button
                          variant="outline"
                          className={`${AddStyle.gradient_signup2}  px-5 p-3 m-2 w-60  text-white`}
                        >
                          Learn More
                        </Button>{" "}
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="d-flex align-tems-end justify-content-end py-2">
                  <Link
                    to="/adveriserauthLogin"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                    className={`"no-underline hover:no-underline" ${AddStyle.dp_bannerads_sub_heading}`}
                  ></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*8th section*/}
        <SectionSeperator />
        <div className="container-fluid">
          <div className="container card p-3">
            <div className="row p-2">
              <div className="col-md-7">
                <h1 className=" font-semibold text-black mb-3 m-2">
                  What are{" "}
                  <span style={{ color: "#71065D" }} className="mr-2">
                    banner ads
                  </span>
                  good for?
                </h1>
                {SelfServePlatform.map((item, index) => {
                  return (
                    <div className="d-flex text-left" key={index}>
                      <p
                        className={`${AddStyle.dp_bannerads_sub_heading} m-0 pb-2`}
                      >
                        {index + 1}. {item.content}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="col-md-5">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/1e510e77-05c3-4c9f-549d-7660086f5e00/public"
                    alt=""
                    className="mx-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <SectionSeperator />
        {/*---------switch button_________*/}
        <div className="py-5">
          <div
            className={`${AddStyle.dp_bannerads_main_heading} py-2 text-center`}
          >
            <h1 className="text-center font-semibold text-black">
              {" "}
              Top GrowXad services{" "}
              <span style={{ color: "#71065D" }} className="mr-2">
                {" "}
                for advertisers
              </span>{" "}
              and publishers
            </h1>
          </div>
          <div className="">
            <BannerSwitch />
          </div>
        </div>
        {/*-----------last section-----------*/}
      </div>
    </Layout>
  );
};

export default BannerAd;
