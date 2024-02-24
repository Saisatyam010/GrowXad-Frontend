import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogsStylesCSS from "./Blogs.module.css";
import { topCards } from "../freeResourcesData/TopCardsData";
import { CaseStudyData } from "../CaseStudies/CaseStudyData";
import { CategoriesItemsData } from "../freeResourcesData/CategoriesItemsData";
import { TrafficMonitisationData } from "../TrafficMonitization/TrafficMonitisationData";
import { LatestPostsData } from "../freeResourcesData/LatestPostsData";
import Layout from "../../../components/Layout/Layout";

export const Blogs = () => {
  return (
    <Layout>
      <Container>
        {/* Top Photo */}

        <Row>
          <Col md={6} className="pt-5 ">
            <div className="text-center ">
              <img
                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/73554e33-3b25-41a2-27cc-2a2f3b3fb900/public"
                width="100%"
                height="100%"
                alt=""
              ></img>
            </div>
          </Col>

          <Col md={6} className="d-flex align-items-center">
            <div className="p-2">
              <div>
                <span className={BlogsStylesCSS.dp_blog_main_heading_color}>
                  Your{" "}
                </span>
                <span className={BlogsStylesCSS.dp_blog_main_heading}>
                  Story{" "}
                </span>
                <span className={BlogsStylesCSS.dp_blog_main_heading_color}>
                  , Our{" "}
                </span>
                <span className={BlogsStylesCSS.dp_blog_main_heading}>
                  Platform:{" "}
                </span>
              </div>

              <p className={BlogsStylesCSS.dp_blog_main_sub_heading}>
                Advertise effectively on premier publisher websites,
                transforming your narrative with a strategic $200 investment.
                Unlock enhanced visibility, engage a broader audience online.
                Seize the opportunity to amplify your message, connecting
                meaningfully in the digital realm.
              </p>
            </div>
          </Col>
        </Row>

        {/* Top Categories */}

        <Row className="py-5 justify-content-center">
          {topCards.map((ele, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <div className={`mb-4 ${BlogsStylesCSS.dp_blog_cards}`}>
                <div className="text-center">
                  <p
                    className={`${BlogsStylesCSS.dp_blog_cards_icon} fs-1 d-flex`}
                  >
                    {ele.icon}
                  </p>
                  <p
                    className={`${BlogsStylesCSS.dp_blog_cards_heading} text-center`}
                  >
                    {ele.title}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Latest Posts & NEWSLETTER */}

        <Row>
          <Col md={12}>
            {/* Latest Posts */}

            <Row className="pt-2 ">
              <Col md={8} className="col-12 d-flex align-items-center ">
                <Row>
                  <Col md={12} className="col-12">
                    {/* Traffic Monitisation */}
                    <Row>
                      <Col md={12}>
                        <h3
                          className={`${BlogsStylesCSS.dp_blog_TrafficMonitisation_Main_heading} fw-bold py-3`}
                        >
                          TRAFFIC MONETIZATION
                        </h3>
                      </Col>
                      {TrafficMonitisationData.map((ele, index) => (
                        <Col md={6} className="pb-3">
                          <div
                            className={`${BlogsStylesCSS.dp_blog_TrafficMonitisation_container}`}
                          >
                            <Row>
                              <Col md={12}>
                                <img
                                  src={ele.imgPath}
                                  alt=""
                                  width="100%"
                                  height="100%"
                                  style={{ borderBottom: "1px solid black" }}
                                ></img>
                              </Col>

                              <Col
                                md={12}
                                className=" d-flex align-items-center "
                              >
                                <div className="px-3 py-1">
                                  <p
                                    className={`${BlogsStylesCSS.dp_blog_main_sub_heading} fw-bold`}
                                  >
                                    {ele.title}
                                  </p>
                                  <p
                                    className={`${BlogsStylesCSS.dp_blog_TrafficMonitisation_content}`}
                                  >
                                    {ele.content}
                                  </p>
                                  <p
                                    className={`${BlogsStylesCSS.dp_blog_TrafficMonitisation_date}`}
                                  >
                                    {ele.date}
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      ))}
                    </Row>

                    {/* Case Study */}

                    <Row>
                      <Col md={12}>
                        <h3
                          className={`${BlogsStylesCSS.dp_blog_TrafficMonitisation_Main_heading} fw-bold py-3`}
                        >
                          CASE STUDY
                        </h3>
                      </Col>

                      {CaseStudyData.map((ele, index) => (
                        <Col md={6} className="pb-3">
                          <div
                            className={`${BlogsStylesCSS.dp_blog_TrafficMonitisation_container} `}
                          >
                            <Row>
                              <Col md={12}>
                                <img
                                  src={ele.imgPath}
                                  alt=""
                                  width="100%"
                                  height="100%"
                                  style={{ borderBottom: "1px solid black" }}
                                ></img>
                              </Col>

                              <Col
                                md={12}
                                className=" d-flex align-items-center "
                              >
                                <div className="px-3 py-1">
                                  <p
                                    className={`${BlogsStylesCSS.dp_blog_main_sub_heading} fw-bold`}
                                  >
                                    {ele.title}
                                  </p>
                                  <p
                                    className={`${BlogsStylesCSS.dp_blog_TrafficMonitisation_content}`}
                                  >
                                    {ele.content}
                                  </p>
                                  <p
                                    className={`${BlogsStylesCSS.dp_blog_TrafficMonitisation_date}`}
                                  >
                                    {ele.date}
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col md={4} className="px-4">
                {/* latest posts */}
                <Row>
                  <Col md={12}>
                    <p
                      className={`${BlogsStylesCSS.dp_blog_post_heading} fw-bold`}
                    >
                      LATEST POSTS
                    </p>

                    {LatestPostsData.map((title, index) => (
                      <p
                        key={index}
                        className={`${BlogsStylesCSS.dp_blog_post_lists}`}
                      >
                        {title.title}
                      </p>
                    ))}
                  </Col>
                </Row>

                {/* Categories */}

                <Row className={`${BlogsStylesCSS.dp_blogs_posts_stick}`}>
                  <Col md={12} className="pt-3">
                    <ul className=" p-0">
                      <h3
                        className={`${BlogsStylesCSS.dp_blog_post_heading} fw-bold`}
                      >
                        CATEGORIES
                      </h3>
                      {CategoriesItemsData.map((title, index) => (
                        <p
                          key={index}
                          className={`${BlogsStylesCSS.dp_blog_post_lists} `}
                        >
                          {title.title}
                        </p>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
