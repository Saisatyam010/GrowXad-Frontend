import React, { useState } from "react";
import AddStyle from "../BannerAd/BannerAd.module.css";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import BannerSwitch from "./BannerSwitch";
import {
  BannerAdsGoodReasons,
  SelfServePlatform,
  solutionData,
  sectionsData,
} from "./BannerMenu";

import { Button, Col, Row } from "react-bootstrap";
import Layout from "../../Layout/Layout";
import SectionSeperator from "../../Shared/SectionSeperator";

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
      <div className="container py-5">
        {/*1st section*/}

        <div className="row">
          <div className="col-md-6">
            <div style={{ lineHeight: "40px" }}>
              <span className={`${AddStyle.dp_bannerads_main_heading_color}`}>
                Banner Ad{" "}
              </span>
              <span className={`${AddStyle.dp_bannerads_main_heading}`}>
                {" "}
                — Implement Banner Ads on Your Site
              </span>
            </div>

            <p className={`${AddStyle.dp_bannerads_sub_heading}  py-4 m-0`}>
              Maximize publisher revenue with impactful banner ads. Webmasters
              and bloggers benefit from high fill rates and lucrative payouts.
              Advertisers connect with informed customers for successful
              campaigns. Choose the effectiveness of online banner ads for
              optimal results.
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

        {/*2nd section*/}

        <SectionSeperator />

        <div className="row">
          <div className="text-center ">
            <span className={`${AddStyle.dp_bannerads_main_heading}`}>
              Who benefits format{" "}
            </span>
            <span className={`${AddStyle.dp_bannerads_main_heading_color}`}>
              Who GrowXad{" "}
            </span>
            <span className={`${AddStyle.dp_bannerads_main_heading}`}>
              advertising solutions
            </span>
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

        {/*3rd section*/}

        <SectionSeperator />

        <Row className="d-flex align-items-center">
          <Col md={6}>
            <h1 className={`${AddStyle.dp_bannerads_main_heading}`}>
              Diversify with GrowXads Banner Options for Optimal Engagement
            </h1>
            <p className={`${AddStyle.dp_bannerads_sub_heading} m-0 py-3`}>
              Unleash the enduring power of banner advertising, a proven
              strategy for online promotion. These versatile ads, presented as
              static images or dynamic GIFs, seamlessly integrate into
              publishers' websites, mobile sites, and blogs. Embrace
              IAB-recognized standard formats for high clickability on both
              desktop and mobile devices.
            </p>
          </Col>

          <Col md={6}>
            <div className="d-flex justify-content-center">
              <img
                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/a39a5652-7919-473c-e64d-84b0ef212e00/public"
                alt=""
              />
            </div>
          </Col>
        </Row>

        {/*4th section*/}
        <SectionSeperator />

        <div>
          <Row>
            <Col md={12}>
              <div className="text-center ">
                <span className={`${AddStyle.dp_bannerads_main_heading}`}>
                  Benefits from{" "}
                </span>
                <span className={`${AddStyle.dp_bannerads_main_heading_color}`}>
                  GrowXad{" "}
                </span>
                <span className={`${AddStyle.dp_bannerads_main_heading}`}>
                  advertising solutions
                </span>
              </div>
            </Col>
          </Row>

          <SectionSeperator />

          <Row>
            {sectionsData.map((card, index) => (
              <div
                className="col-md-6 col-lg-6 my-2"
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`${AddStyle.rs_card_block} `}>
                  <div className={`${AddStyle.rs_img} d-flex`}>
                    <img src={card.imageUrl} alt="" loading="lazy" />
                  </div>
                  <div className={`${AddStyle.rs_h_card_border} `}> </div>
                  <h5 className={AddStyle.rs_h_text}>{card.title}</h5>
                  <p className={AddStyle.rs_p_text}>{card.description}</p>
                </div>
              </div>
            ))}
          </Row>
        </div>

        {/*5th section*/}

        <SectionSeperator />
        <div className="row">
          <div className="col-md-6  pt-md-0 pt-lg-0">
            <div className="d-flex justify-content-center p-4">
              <img
                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/f99fd012-8759-4f86-c7e9-1532566b5a00/public"
                alt=""
              />
            </div>
          </div>

          <div className="col-md-6">
            <div>
              <span className={`${AddStyle.dp_bannerads_main_heading}`}>
                Benefits from{" "}
              </span>
              <span className={`${AddStyle.dp_bannerads_main_heading_color}`}>
                Banner ads{" "}
              </span>
              <span className={`${AddStyle.dp_bannerads_main_heading}`}>
                good for?
              </span>
            </div>

            {BannerAdsGoodReasons.map((item, index) => {
              return (
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
              );
            })}
          </div>
        </div>

        {/*6th section*/}

        <SectionSeperator />
        <div className="row">
          <div className="col-md-12">
            <div className="text-center py-3">
              <span className={`${AddStyle.dp_bannerads_main_heading}`}>
                How to put{" "}
              </span>
              <span className={`${AddStyle.dp_bannerads_main_heading_color}`}>
                Banner ads{" "}
              </span>
              <span className={`${AddStyle.dp_bannerads_main_heading}`}>
                on a website?
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className={`${AddStyle.dp_bannerads_content} pb-3 m-0 fw-bold`}>
              1. Effortlessly integrate banner ads anywhere on your
              webpage—header, sidebar, footer, and more. Implement the GrowX
              code/script on your website or mobile page for effortless
              showcasing of advertisements and enhanced user engagement.
              Maximize visibility with strategic banner ad placements.
            </p>
            <p className={`${AddStyle.dp_bannerads_content} pb-2 m-0 fw-bold`}>
              2. First, register as a Publisher and log in. <br /> <br />
              3. Generate code for the needed banner size (160×300, 160×600,
              300×250, 320х50, 728×90, 468×60), use ADD NEW WEBSITE button and
              fill out the required fields. Now all you have to do is wait for
              approval. <br /> <br />
              4. Afterward, get the code from your account or the GrowX email,
              then copy the code and paste it to any page you like.
            </p>
          </div>
        </div>

        {/*7th section*/}
        {/* <SectionSeperator /> */}
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
        <div className="row">
          <div className="col-md-7">
            <h2 className="text-start font-semibold text-black">
              How to get a{" "}
              <span style={{ color: "#71065D" }}> BANNER CODE</span> in minutes
              with GrowX Self-Serve Platform
            </h2>
            {SelfServePlatform.map((item, index) => {
              return (
                <div className="d-flex text-left" key={index}>
                  {/* <span className='p-2' style={{ backgroundColor:'#73035b', borderRadius:'50%',color:'white',fontWeight:'500'}} >{item.num}</span>  */}
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

        <SectionSeperator />
        {/*---------switch button_________*/}

        <div className="row">
          <div className="col-md-12">
            <div className="text-center ">
              <span className={`${AddStyle.dp_bannerads_main_heading}`}>
                Top GrowXad services for{" "}
              </span>
              <span className={`${AddStyle.dp_bannerads_main_heading_color}`}>
                {" "}
                advertisers{" "}
              </span>
              <span className={`${AddStyle.dp_bannerads_main_heading}`}>
                and publishers
              </span>
            </div>
            <div className="">
              <BannerSwitch />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BannerAd;
