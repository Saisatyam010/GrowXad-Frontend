import { Col, Container, Row } from 'react-bootstrap';
import { FaChevronRight } from "react-icons/fa6";
import dropStyles from '../../components/Home/HomeStyles/FAQPages.module.css';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa6";
import Layout from '../../components/Layout/Layout';
import { FaqForGetAdsCodesQuestions } from '../../components/Home/FaqForGetCouponCodesData';

export const GetAdsCodes = () => {
    const [openQuestionIds, setOpenQuestionIds] = useState([]);

    const handleOpen = (questionId) => {
        setOpenQuestionIds(prevIds => {
            if (prevIds.includes(questionId)) {
                return prevIds.filter(id => id !== questionId);
            } else {
                return [...prevIds, questionId];
            }
        });
    };
    return (
        <Layout>
            <Container>
                <Row>

                    <Col md={12} className='p-4'>
                        <div className='d-flex align-items-center'>
                            <span className={`${dropStyles.dp_campaign_guide_items} fw-bold`}>All Collections</span>
                            <span className='px-1'><FaChevronRight className='text-secondary' /></span>
                            <span className={`${dropStyles.dp_campaign_guide_sub_items}`}>FAQ for Get Ads Codes</span>
                        </div>

                        <div className="row">
                            <div className="col-md-12 text-center">
                                <span className={`text-center py-3 ${dropStyles.dp_faq_main_heading}`}>
                                    FAQ for </span>
                                <span className={`${dropStyles.dp_faq_main_heading_color}`}>Get Ads Codes</span>
                            </div>
                        </div>
                    </Col>

                    <Col md={12}>

                        {FaqForGetAdsCodesQuestions.map((question, index) => (
                            <div
                                key={question.id}
                                className={`col-md-12 ${dropStyles.sana_drop_question}`}
                            >
                                <div className={dropStyles.sana_DropQues_container}>
                                    <p onClick={() => handleOpen(question.id)}>

                                        <span
                                            className={`${dropStyles.dp_faq_content} ${openQuestionIds.includes(question.id)
                                                ? dropStyles.opened
                                                : ""
                                                }`}
                                        >
                                            Q{index + 1}.
                                        </span>

                                        <span className={`${dropStyles.dp_faq_content} `}> {question.question}</span>

                                        <span
                                            className={`${dropStyles.sana_chevron_icon} ${openQuestionIds.includes(question.id)
                                                ? dropStyles.rotate
                                                : ""
                                                }`}
                                        >
                                            <FaPlus />
                                        </span>
                                    </p>
                                </div>
                                <div
                                    className={`${dropStyles.sana_dropdown_content} ${openQuestionIds.includes(question.id) ? dropStyles.open : ""
                                        }`}
                                >
                                    <p className={`${dropStyles.dp_faq_content}`}>A.{question.id} {question.answer}</p>
                                </div>
                            </div>
                        ))}
                    </Col>

                </Row>
            </Container>
        </Layout>
    )
}
