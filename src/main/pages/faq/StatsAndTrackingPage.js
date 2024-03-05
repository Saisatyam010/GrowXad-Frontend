import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaChevronRight } from "react-icons/fa6";
import dropStyles from '../../components/Home/HomeStyles/FAQPages.module.css';
import { FaPlus } from "react-icons/fa6";
import Layout from '../../components/Layout/Layout';
import { FaqForStatsAndTrackingQuestions } from '../../components/Home/FaqForStatsAndTrackingData';

export const StatsAndTrackingPage = () => {
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
                            <span className={`${dropStyles.dp_campaign_guide_sub_items}`}>FAQ for Stats and Tracking</span>
                        </div>

                        <div className="row">
                            <div className="col-md-12 text-center">
                                <span className={`text-center py-3 ${dropStyles.dp_faq_main_heading}`}>
                                    FAQ for </span>
                                    
                                <span className={`${dropStyles.dp_faq_main_heading_color}`}>Stats and Tracking</span>
                            </div>
                        </div>
                    </Col>

                    <Col md={12}>
                        {FaqForStatsAndTrackingQuestions.map((question, index) => (
                            <div
                            key={question.id}
                            className={`col-md-12 ${dropStyles.sana_drop_question}`}
                          >
                            <div className={dropStyles.sana_DropQues_container}>
                              <div
                              className={`${dropStyles.rk_drop_q_cont} row `}
                              onClick={() => handleOpen(question.id)}>
                                 <div className='d-flex col-md-11 col-sm-11 col-11 col-xs-11 justify-content-start'>
                                <div
                                  className={`${dropStyles.dp_faq_content} ${openQuestionIds.includes(question.id)
                                    ? dropStyles.opened
                                    : ""
                                    }`}
                                >
                                  Q{index + 1}.
                                </div>
          
                                <div className={`${dropStyles.dp_faq_content} `}> {question.question}</div>
                                </div>
          
                                <div
                                className='col-md-1 col-sm-1 col-1 col-xs-1'
                                  
                                >
                                  <FaPlus className={`${dropStyles.sana_chevron_icon}  ${openQuestionIds.includes(question.id)
                                    ? dropStyles.rotate
                                    : ""
                                    }`}/>
                                </div>
                              </div>
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
