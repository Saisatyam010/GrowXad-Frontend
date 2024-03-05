import React from "react";
// import "./Footer.css";
import FooterStyles from "./Footer.module.css";
import { FaGoogle } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={FooterStyles.rs_footer_adserver}>
        <footer className={FooterStyles.footer_section}>
          <div className="container">
            <div className={`${FooterStyles.footer_cta} `}>
              <div className="row"></div>
            </div>
            <div className="footer-content pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                  <div className={FooterStyles.footer_widget}>
                    <div className={FooterStyles.footer_logo}>
                      <a href="index.html">
                        <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/eda470eb-c1df-4037-59fd-7bdc265fbe00/public" />
                      </a>
                    </div>
                    <div className={FooterStyles.footer_text}>
                      <p>
                        GrowXAds helps you Empower your business, with the
                        innovative ads server. Maximize revenue, target
                        audiences effectively, and elevate your brand presence
                        seamlessly.
                      </p>
                    </div>
                    <div
                      className={`${FooterStyles.footer_social_icon} pb-3 d-flex gap-1 d-flex align-items-center`}
                    >
                      <div className={`pe-2 ${FooterStyles.ab_fontwhite}`}>
                        Follow us
                      </div>
                      <div className={`${FooterStyles.ab123ab} mt-3`}>
                        <ul className={FooterStyles.abul123}>
                          <li>
                            <a class={FooterStyles.facebook} href="#">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <div className="d-flex py-2 justify-content-center align-items-center">
                                <FaFacebook size={30} />
                              </div>
                            </a>
                          </li>

                          <li>
                            <a class={FooterStyles.instagram} href="#">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <div className="d-flex py-2 justify-content-center align-items-center">
                                <FaInstagram size={30} />
                              </div>
                            </a>
                          </li>

                          <li>
                            <a className={FooterStyles.twitter} href="#">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <div className="d-flex py-2 justify-content-center align-items-center">
                                <FaTwitter size={30} />
                              </div>
                            </a>
                          </li>

                          <li>
                            <a class={FooterStyles.google} href="#">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <div className="d-flex py-2 justify-content-center align-items-center">
                                <FaGoogle size={30} />
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30 mt-3">
                  <div className={FooterStyles.footer_widget}>
                    <div className={FooterStyles.footer_widget_heading}>
                      <h3>Ad Type </h3>
                    </div>
                    <ul>
                      <li>
                        <Link to="/bannerAds" className="hover:no-underline">
                          Banner Ad
                        </Link>
                      </li>
                      <li>
                        <Link to="/nativead" className="hover:no-underline">
                          Native Ad
                        </Link>
                      </li>
                      <li>
                        <Link to="/directlinkad">Direct Link</Link>
                      </li>
                      <li>
                        <Link to="/popunderAds">Popunder Ad</Link>
                      </li>
                      <li>
                        <Link to="/inpagepushad">In-Page Push Ads</Link>
                      </li>
                      <li>
                        <Link to="/interstitialad">Interstitial Ad</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-1 mt-3">
                  <div className={FooterStyles.footer_widget}>
                    <div className={FooterStyles.footer_widget_heading}>
                      <h3>Subscribe</h3>
                    </div>
                    <div className={`${FooterStyles.footer_text} mb-25`}>
                      <p>
                        Don’t miss to subscribe to our new feeds, kindly fill
                        the form below.
                      </p>
                    </div>
                    <div
                      className={`${FooterStyles.subscribe_form} ${FooterStyles.ab_td_none}`}
                    >
                      <form action="#">
                        <input
                          className="outline-none"
                          type="text"
                          placeholder="Enter Email Address"
                        />
                        <span className={FooterStyles.Subs_form_span}>
                          <FaTelegram className="text-white fs-4" />
                        </span>
                      </form>
                      <div className="container pt-3">
                        <div className="row">
                          <div className="col-md-8 text-white fs-3">
                            <p className="text-white">Payment Options</p>
                            <div className="d-flex">
                              <span className="pe-2 ">
                                <img
                                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/0bdd07b5-7256-448e-15f2-8d49ca1ea300/public"
                                  width={520}
                                  className={FooterStyles.ab_imgfadeeffect}
                                />
                              </span>
                              <span className="pe-2 ">
                                <img
                                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/482a761d-b57f-4560-8b7e-458ade61a000/public"
                                  width={520}
                                  className={FooterStyles.ab_imgfadeeffect}
                                />
                              </span>
                              <span className="pe-2 ">
                                <img
                                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/7affb09a-87c6-4dbe-60d6-233ec69a2d00/public"
                                  width={520}
                                  className={FooterStyles.ab_imgfadeeffect}
                                />
                              </span>
                              <span className="pe-2 ">
                                <img
                                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/dcfff894-7f66-48ac-34f7-6bb94dffa400/public"
                                  width={520}
                                  className={FooterStyles.ab_imgfadeeffect}
                                />
                              </span>
                              <span className="pe-2 ">
                                <img
                                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/e4e134ef-2d48-4783-1ef6-60ddf0d4bb00/public"
                                  width={520}
                                  className={FooterStyles.ab_imgfadeeffect}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
