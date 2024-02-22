import React, { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import Pagination from "react-bootstrap/Pagination";
import { GlossariesData } from "./GlossariesData";
import GlossaryStyleCSS from "./Glossary.module.css";
import Layout from "../../../components/Layout/Layout";

export const Glossary = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(GlossariesData.length / itemsPerPage);

    // Generate an array of page numbers from 1 to totalPages
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    // Calculate the index range for the current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return (
        <Layout>
            <Container >

                <Row>
                    <Col md={6} className='d-flex align-items-center'>
                        <Row>
                            <Col md={12}>
                                <div className='p-2'>
                                    
                                    <div>
                                        <span className={GlossaryStyleCSS.dp_glosssary_main_heading}>Affiliate Marketing </span>
                                        <span className={GlossaryStyleCSS.dp_glosssary_main_heading_color}>Glossary</span>
                                    </div>


                                    <p className={`py-3 ${GlossaryStyleCSS.dp_glosssary_heading}`}>
                                        Here is the complete list of affiliate marketing terminologies
                                        and acronyms either you're a newbie or seasoned veteran.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={6} className='py-2 '>
                        <div className='text-center '>
                            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/fe6a3c69-b134-477d-c0f6-680b33e35b00/public' width="100%" height="100%" alt=''></img>
                        </div>
                    </Col>
                </Row>

                <Row >
                    <Col md={12} className="pt-5">
                        {GlossariesData.slice(startIndex, endIndex).map((pageData, index) => (
                            <Container key={index}>
                                <Row className="pt-3">
                                    <Col md={12}>
                                        <p className={`fw-bold ${GlossaryStyleCSS.dp_glosssary_content} m-0 py-1`}>{` ${pageData.id}.  ${pageData.title} `}</p>
                                        <p className={`${GlossaryStyleCSS.dp_glosssary_content} m-0`}>- {pageData.content}</p>
                                    </Col>
                                </Row>
                            </Container>
                        ))}
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <Pagination className="d-flex justify-content-center mt-4">
                            {pageNumbers.map((pageNumber) => (
                                <Pagination.Item
                                    key={pageNumber}
                                    onClick={() => setPage(pageNumber)}
                                    style={{ cursor: 'pointer', backgroundColor: 'transparent', color: 'yellow' }}>
                                    {pageNumber}
                                </Pagination.Item>
                            ))}
                        </Pagination>

                    </Col>
                </Row>

            </Container>
        </Layout>
    )
}
