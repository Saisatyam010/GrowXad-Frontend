import React from 'react'
import { TiArrowForward } from "react-icons/ti";
import { Col, Container, Form, Row } from 'react-bootstrap';
import Layout from '../../../components/Layout/Layout';
import styles from "./Newsletters.module.css";

export const Newsletter = () => {
    return (
        <>
            <Layout>
                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <div className='row d-flex justify-content-start mt-5'>
                            <div className='col-md-6 '>
                                <h2 className='text-center'>
                                    <span className={`${styles.highlight_red}`}>Actionable, free insights to power</span>
                                    <br />
                                    <p >your traffic monetization or marketing performance</p>
                                </h2>
                                <p className={`${styles.p_text}`}>
                                    Get monthly reports and recommendations from Adsterra experts and other
                                    big market players!
                                </p>
                                <p>No SPAM,
                                    <strong data-v-50415f48="">only handy information</strong>
                                    and powerful clues.

                                </p>

                                <Form>
                                    <Form.Group className="mb-3" controlId="FirstName">

                                        <Form.Control className={`${styles.input_field}`} type="email" placeholder="FirstName" />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">

                                        <Form.Control className={`${styles.input_field}`} type="lastname" placeholder="LastName" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Email *">

                                        <Form.Control className={`${styles.input_field}`} type="email" placeholder="Email" />
                                    </Form.Group>


                                    <Form.Select className={`${styles.input_field} `} aria-label="Default select example ">
                                        <option>Please,select</option>
                                        <option>I'm an Advertiser</option>
                                        <option value="1">I'm an Publisher</option>
                                        <option value="2">I'm an Affiliate Marketer</option>

                                    </Form.Select>


                                    <p className='mt-3'>
                                        <input type="checkbox"></input>
                                        <span className={`${styles.span_gap}`}>I agree to receive marketing information from Adsterra via email</span>
                                        <span className='text-danger'>*</span>
                                    </p>



                                    <button className={`${styles.subscribe_button}`}>Subscribe Now</button>
                                </Form>

                                <p className={`${styles.comment} mt-4`}>

                                    You may cancel your subscription at any moment by clicking the
                                    Unsubscribe link inside an email.

                                </p>
                                <hr className={`${styles.horizontal_line}`}></hr>
                                <p className={`${styles.comment}`}>
                                    Ad Market Ltd., Cyprus, is the controller of your personal data. It will
                                    be processed to send you our emails and newsletters and for our
                                    marketing purposes.
                                </p>
                                <p className={`${styles.comment}`}>
                                    Please see more information
                                    <a href="/privacy-policy-managed/" data-v-50415f48="" className={`${styles.anchor_line}`}> here</a>
                                </p>


                            </div>

                            <div className='col-md-6 ps-5'>
                                <div className={`${styles.envelope}`}>
                                    <img className={`${styles.arrow_imgg}`} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/732289df-986c-41c1-ad58-a2423a671800/public" />
                                </div>
                                <h4 className='text-center mt-5'>
                                    <span>WHAT'S THERE FOR YOU:</span>
                                </h4>
                                <span >
                                    <img className={`${styles.arrow_img}`} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d8a89bfb-f733-4aaa-3376-d46e54de2300/public" />
                                    Top-performing geos, offers, and ready-to-use traffic bundles;
                                </span>
                                <br />
                                <span >
                                    <img className={`${styles.arrow_img}`} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d8a89bfb-f733-4aaa-3376-d46e54de2300/public" />
                                    Tips for effective advertising and monetization;
                                </span>

                                <br />
                                <span >
                                    <img className={`${styles.arrow_img}`} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d8a89bfb-f733-4aaa-3376-d46e54de2300/public" />
                                    Product guides to making your efforts bring brilliant results;
                                </span>
                                <br />
                                <span >
                                    <img className={`${styles.arrow_img}`} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d8a89bfb-f733-4aaa-3376-d46e54de2300/public" />
                                    Suggested bids and low-competition GEOs with substantial traffic volumes;
                                </span>
                                <br />
                                <span >
                                    <img className={`${styles.arrow_img}`} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d8a89bfb-f733-4aaa-3376-d46e54de2300/public" />
                                    Affiliate marketing conferences, webinars,and meetups invitations;
                                </span>
                                <br />
                                
                                <span >
                                    <img className={`${styles.arrow_img}`} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d8a89bfb-f733-4aaa-3376-d46e54de2300/public" />
                                    Bonuses, promo codes, giveaways, and contests from Adsterra and its partners;
                                </span>

                                

                                <div className={`${styles.border_right} mt-5`}>
                                    <p className={`${styles.p_textt} ps-2`}>Our mission is to help you constantly grow with our <strong>A-level</strong> expertise and the best service in the industry. Join the community of skilled pros who share your values and serve you only actionable tips! Sign up now.</p>
                                </div>

                            </div>



                        </div>

                    </div>
                </div>
            </Layout>

        </>
    )
}
