import React from 'react'
import { TiArrowForward } from "react-icons/ti";
import { Col, Container, Row } from 'react-bootstrap';
import NewsLetterStyleCSS from './Newsletters.module.css';
import Layout from '../../../components/Layout/Layout';

export const Newsletter = () => {
    return (
        <>
            <Layout>
                <Container className={NewsLetterStyleCSS.dp_newsletter_bgImage} >
                    <Row class=" py-5 d-flex justify-content-center">
                        <Col md={9}>
                            <div>
                                <h1 className={`fw-bold ${NewsLetterStyleCSS.dp_newsletter_MainHeading}`}>
                                    Free, actionable insights to supercharge your traffic monetization and marketing performance.
                                </h1>
                                <p className={NewsLetterStyleCSS.dp_newsletter_Content}>
                                    Access monthly expert reports and insights from Adsterra and top industry leaders! Expect no spam—just invaluable information and impactful guidance.
                                </p>
                                <p className={NewsLetterStyleCSS.dp_newsletter_Content}>
                                    Zero spam, just valuable insights and impactful tips.
                                </p>

                                <Row>

                                    <Col md={6}>
                                        <div class="form-group my-2">
                                            <input
                                                type="text"
                                                id="lastName"
                                                placeholder="first name"
                                                class="form-control dp_newsletter_form_control "
                                                required
                                            />
                                        </div>
                                    </Col>


                                    <Col md={6}>
                                        <div class="form-group my-2">
                                            <input
                                                type="text"
                                                id="firstName"
                                                placeholder="last name"
                                                class="form-control dp_newsletter_form_control"
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <Row>

                                    <Col md={6}>
                                        <div class="form-group my-2">
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="email"
                                                class="form-control dp_newsletter_form_control "
                                                required
                                            />
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div class="form-group my-2">
                                            <select
                                                id="dropdown"
                                                class="form-control dp_newsletter_form_controll"
                                                required
                                            >
                                                <option disabled selected>
                                                    Select
                                                </option>
                                                <option value="student">I'm Publisher</option>
                                                <option value="job">I'm Advertiser</option>
                                            </select>
                                        </div>
                                    </Col>

                                    <button className={`my-3 ${NewsLetterStyleCSS.SubscribeButton}`}>
                                        <span>Subscribe Now!</span>
                                    </button>
                                </Row>

                                <div className={NewsLetterStyleCSS.dp_newsletter_Content}>
                                    You have the freedom to unsubscribe anytime by simply clicking the 'Unsubscribe' link in our emails. Ad Market Ltd., Cyprus, manages your personal data, using it to send emails, newsletters, and for our marketing endeavors. For more details, please refer to our comprehensive information available here.
                                </div>
                            </div>

                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-center">
                        <Col md={9}>
                            <Row className=" py-5 align-items-center">
                                <Col md={6}>
                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d699e4c6-51fe-4a7b-fce8-ad576cde5600/public' alt="" width="100%" />
                                </Col>

                                <Col md={6}>
                                    <div className=" text-left">
                                        <h2 className={`${NewsLetterStyleCSS.dp_newsletter_Content} fw-bold`}>What's in it for you:</h2>


                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <TiArrowForward className="" size={26} fill="#71065b" />&nbsp;
                                            <p className={`${NewsLetterStyleCSS.dp_newsletter_Content}`}>Leading geos, offers, and instant traffic bundles available.</p>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <TiArrowForward className="" size={26} fill="#71065b" />&nbsp;
                                            <p className={`${NewsLetterStyleCSS.dp_newsletter_Content}`}>Strategies for effective ads and monetization success</p>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <TiArrowForward className="" size={26} fill="#71065b" />&nbsp;
                                            <p className={`${NewsLetterStyleCSS.dp_newsletter_Content}`}>Guides for optimizing efforts for brilliant outcomes.</p>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <TiArrowForward className="" size={26} fill="#71065b" />&nbsp;
                                            <p className={`${NewsLetterStyleCSS.dp_newsletter_Content}`}>Exclusive insights from top industry leaders.</p>
                                        </div>

                                    </div>
                                </Col>


                                <p className={NewsLetterStyleCSS.dp_newsletter_Content}>
                                    We're dedicated to fueling your continuous growth with top-tier expertise and industry-leading service. Join a community of skilled professionals who align with your values and exclusively provide actionable insights. Join us today and elevate your success!
                                </p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Layout>

        </>
    )
}
