import React, { useState } from "react";
import AddStyle from "../BannerAd/BannerAd.module.css";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import BannerSwitch from "./InterstitialSwitch";
import {
  BannerAdsGoodReasons,
  SelfServePlatform,
  solutionData,
  sectionsData,
} from "./InterstitialMenu";

import { Button, Col, Container, Row } from "react-bootstrap";
import Layout from "../../Layout/Layout";
import SectionSeperator from "../../Shared/SectionSeperator";
import TbSeperator from "../../Shared/TbSeperator";

const InterstitialAd = () => {
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
            <div className="col-md-6 order-2 order-md-1">
              <h1 className={`${AddStyle.dp_bannerads_main_heading} m-0`}>
                <span className={AddStyle.sana_DisplayBanner_VoiletText}>
                  Interstitial Ad{" "}
                </span>
                <span> — Interstitial Advertising on Your Website</span>
              </h1>
              <p className={`${AddStyle.dp_bannerads_sub_heading}  py-3 m-0`}>
                Interstitial Ads guarantee unmatched performance for publishers.
                Website owners and bloggers benefit from a 100% fill rate and
                lucrative payouts. Advertisers tap into dependable traffic
                sources, reaching engaged customers prepared to make purchases.
                If you seek impactful results, Interstitial Ads are the ideal
                solution.
              </p>
              <div class="d-flex justify-content-start  align-items-center  ">
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
                      Get Popunder Code
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-4 px-3 px-md-0 px-lg-0 pt-md-0 pt-lg-0 order-1 order-md-2">
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
        <div className=" py-2">
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

        {/*3rd section*/}
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>

        <div className=" container-fluid">
          <div className="container py-md-5 p-3">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div>
                  <h1 className="text-start font-semibold text-black">
                    {" "}
                    Types of GrowXad{" "}
                    <span style={{ color: "#71065D" }}>
                      Interstitial ads
                    </span>{" "}
                    you can get
                  </h1>

                  <p
                    className={`${AddStyle.dp_bannerads_sub_heading} m-0 py-3`}
                  >
                    Interstitial advertising is the oldest type of online
                    advertising with proven efficiency. Interstitial are images
                    or GIF files that are to be placed on publishers’ websites,
                    mobile sites, and blogs. According to IAB, there are typical
                    and most clickable Interstitial ad formats for desktop and
                    mobile devices.
                  </p>
                </div>
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
          <div className="container p-3 ">
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
                <h1 className="text-center font-semibold text-black mb-3">
                  What are
                  <span style={{ color: "#71065D" }}>
                    {" "}
                    Interstitial ads
                  </span>{" "}
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

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center font-semibold text-black">
                {" "}
                How to put{" "}
                <span style={{ color: "#71065D" }}>Interstitial</span> on a
                website?
              </h1>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container p-3">
            <div className="row">
              <div className="col-md-12  pr-0">
                <div className="">
                  <p
                    className={`${AddStyle.dp_bannerads_content} fw-bold pb-3 m-0`}
                  >
                    1. Employ Interstitial strategically across your
                    webpage—header, sidebar, footer, and more. Utilize the GrowX
                    code/script to seamlessly integrate popunder ads, enhancing
                    visibility and engaging users on your web or mobile page.
                    Boost interaction with effective advertisements.
                  </p>
                  <p
                    className={`${AddStyle.dp_bannerads_content} fw-bold  pb-2 m-0`}
                  >
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
        <Container>
          <div
            className={`py-5  bg-[rgba(0,0,0,0.7)] rounded-lg ${AddStyle.adv_bnft_bg}`}
          >
            <div className="container p-3  rounded">
              <div className="row ">
                <div className="col-md-12 ">
                  <p
                    className={`${AddStyle.dp_bannerads_main_heading} text-light m-0 text-center text-white`}
                  >
                    Best <span style={{ color: "#fff" }}>opportunities</span>
                  </p>
                  {/* <hr /> */}

                  <p
                    className={`${AddStyle.dp_bannerads_sub_heading} offset-lg-2 py-1 text-light m-0 text-center text-white`}
                  >
                    Leveraging partnerships with 28K+ direct publishers and 13K+
                    advertisers, GrowX employs AI algorithms to <br />{" "}
                    consistently assess traffic quality, ensuring optimal
                    traffic-to-offer matches.
                  </p>

                  <div className=" mt-4 d-flex align-items-center justify-content-center">
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
        </Container>

        {/*8th section*/}

        <div className="container-fluid">
          <div className="container p-3">
            <div className="row">
              <div className="col-md-7">
                <h2 className=" font-semibold text-black mb-3">
                  How To Get{" "}
                  <span style={{ color: "#71065D" }} className="mr-2">
                    Interstitial Code
                  </span>
                  in minutes with GrowX Self-Serve Platform
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
                <div className="d-flex justify-content-center mt-5">
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
        {/*-----------lastt section-----------*/}
      </div>
    </Layout>
  );
};

export default InterstitialAd;
