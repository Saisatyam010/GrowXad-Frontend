import React from 'react';
import styles from "./Newsletters.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Newsletter = () => {
    return (
        <>
            <div className='container'>
                <div className='row d-flex justify-content-start mt-5'>
                    <div className='col-md-6 '>
                        <h2 className='text-center'>
                            <span className={`${styles.highlight_red}`}>Actionable, free insights to power</span>
                            <br />
                            <p className={`${styles.highlight_red}`}>your traffic monetization or marketing performance</p>
                        </h2>
                        <p className={`${styles.p_text} mt-5 ms-5`}>
                            Get monthly reports and recommendations from Adsterra experts and other
                            big market players!
                        </p>
                        <p className="ms-5">No SPAM,
                            <strong data-v-50415f48="">only handy information</strong>
                            and powerful clues.
                        </p>
                        <Form>
                            <Form.Group className="mb-3" controlId="FirstName">
                                <Form.Control className={`${styles.input_field} ms-3 mt-5`} type="email" placeholder="FirstName" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className={`${styles.input_field} ms-3 `} type="lastname" placeholder="LastName" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Email *">
                                <Form.Control className={`${styles.input_field} ms-3`} type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Select className={`${styles.input_field} ms-3 `} aria-label="Default select example ">
                                <option>Please,select</option>
                                <option>I'm an Advertiser</option>
                                <option value="1">I'm an Publisher</option>
                                <option value="2">I'm an Affiliate Marketer</option>
                            </Form.Select>
                            <p className='mt-3 ms-3'>
                                <input type="checkbox"></input>
                                <span className={`${styles.span_gap} ms-3`}>I agree to receive marketing information from Adsterra via email</span>
                                <span className='text-danger'>*</span>
                            </p>
                            <button className={`${styles.subscribe_button} mt-3 ms-3`}>Subscribe Now</button>
                        </Form>
                        <p className={`${styles.comment} mt-4 ms-3`}>
                            You may cancel your subscription at any moment by clicking the
                            Unsubscribe link inside an email.
                        </p>
                        <hr className={`${styles.horizontal_line}`}></hr>
                        <p className={`${styles.comment} ms-3 mt-3`}>
                            Ad Market Ltd., Cyprus, is the controller of your personal data. It will
                            be processed to send you our emails and newsletters and for our
                            marketing purposes.
                        </p>
                        <p className={`${styles.comment} ms-3 mt-3`}>
                            Please see more information
                            <a href="/privacy-policy-managed/" data-v-50415f48="" className={`${styles.anchor_line}`}> here</a>
                        </p>
                    </div>
                    <div className='col-md-6 bg-success ps-5'>
                        <div className={`${styles.envelope}`}>
                            <img className={`${styles.arrow_imgg}`} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/732289df-986c-41c1-ad58-a2423a671800/public" />
                        </div>
                        <h4 className='text-center mt-5'>
                            <span>WHAT'S THERE FOR YOU:</span>
                        </h4>
                        <span >
                            <img className={`${styles.arrow_img}`} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d8a89bfb-f733-4aaa-3376-d46e54de2300/public" />
                            <span className={`${styles.span_text} ms-3`}>Top-performing geos, offers, and ready-to-use traffic bundles;</span>
                        </span>
                        <br />
                        <span >
                            <img className={`${styles.arrow_img}`} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d8a89bfb-f733-4aaa-3376-d46e54de2300/public" />
                            <span className={`${styles.span_text} ms-3`}>Tips for effective advertising and monetization;</span>
                        </span>
                        <br />
                        <span >
                            <img className={`${styles.arrow_img}`} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d8a89bfb-f733-4aaa-3376-d46e54de2300/public" />
                            <span className={`${styles.span_text} ms-3`}>Product guides to making your efforts bring brilliant results;</span>
                        </span>
                        <br />
                        <span >
                            <img className={`${styles.arrow_img}`} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d8a89bfb-f733-4aaa-3376-d46e54de2300/public" />
                            <span className={`${styles.span_text} ms-3`}>Suggested bids and low-competition GEOs with substantial traffic volumes;</span>
                        </span>
                        <br />
                        <span >
                            <img className={`${styles.arrow_img}`} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d8a89bfb-f733-4aaa-3376-d46e54de2300/public" />
                            <span className={`${styles.span_text} ms-3`}>Affiliate marketing conferences, webinars,and meetups invitations;</span>
                        </span>
                        <br />
                        <span >
                            <img className={`${styles.arrow_img}`} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d8a89bfb-f733-4aaa-3376-d46e54de2300/public" />
                            <span className={`${styles.span_text} ms-3`}>Bonuses, promo codes, giveaways, and contests from Adsterra and its partners;</span>
                        </span>
                        <div className={`${styles.border_right} mt-5`}>
                            <p className={`${styles.p_textt} ps-2`}>Our mission is to help you constantly grow with our <strong>A-level</strong> expertise and the best service in the industry. Join the community of skilled pros who share your values and serve you only actionable tips! Sign up now.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Newsletter;