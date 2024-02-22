import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CiSearch } from "react-icons/ci";
import TrafficMonitizationStylesCSS from './TrafficMonitization.module.css';
import { TrafficMonitisationData } from './TrafficMonitisationData';
import { CategoriesItemsData } from '../freeResourcesData/CategoriesItemsData';
import { LatestPostsData } from '../freeResourcesData/LatestPostsData';
import Layout from '../../../components/Layout/Layout';

export const TrafficMonitization = () => {
    return (
        <Layout>
            <Container className='py-4'>

                {/* Heading */}

                <Row>
                    <Col md={12}>
                        <Row className='py-0'>
                            <Col md={8} className='col-12 d-flex align-items-center'>
                                <div>
                                    <span className={`${TrafficMonitizationStylesCSS.dp_blog_TrafficMonitisation_Main_heading} `}>How to Profit from </span>
                                    <span className={`${TrafficMonitizationStylesCSS.dp_blog_TrafficMonitisation_Main_heading_color} `}>Traffic monitization </span>
                                </div>
                            </Col>

                            <Col md={4} className='col-12 px-4 '>
                                <Row className={`${TrafficMonitizationStylesCSS.dp_blog_TrafficMonitization_search_container} d-flex justify-content-between`}>

                                    <Col md={10} className='col-10'>
                                        <input type='text' placeholder='Type and hit enter...' className={`${TrafficMonitizationStylesCSS.dp_blog_search_input} d-flex justify-content-between`}
                                        ></input>
                                    </Col>

                                    <Col md={2} className='col-2 text-end px-2'>
                                        <CiSearch className='fs-4' />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Latest Posts & NEWSLETTER */}

                <Row>
                    <Col md={12}>

                        {/* News Cards & Latest Posts */}

                        <Row className='pt-2 ' >

                            {/* 4 News Cards */}

                            <Col md={8}>
                                <Row>
                                    {TrafficMonitisationData.map((ele, index) => (
                                        <Col md={12} className='pb-3'>
                                            <div className={`${TrafficMonitizationStylesCSS.dp_blog_TrafficMonitisation_container}`}>
                                                <Row>
                                                    <Col md={4} className=' '>
                                                        <img src={ele.imgPath} alt='' width="100%" height="100%" style={{ borderRight: "1px solid black",height:"100%" }}></img>
                                                    </Col>

                                                    <Col md={8}>
                                                        <div className='px-2 pt-3'>

                                                            <p className={`${TrafficMonitizationStylesCSS.dp_TrafficMonitisation_sub_heading} fw-bold m-0 p-0`}>{ele.title}</p>
                                                            <p className={`${TrafficMonitizationStylesCSS.dp_blog_TrafficMonitisation_content}`}>{ele.content}</p>
                                                            <p className={`${TrafficMonitizationStylesCSS.dp_blog_TrafficMonitisation_date}`}>{ele.date}</p>

                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>

                            </Col>

                            {/* Lastest Post & Categories*/}

                            <Col md={4} className='px-4' >

                                {/* latest posts */}
                                <Row>
                                    <Col md={12}>
                                        <p className={`${TrafficMonitizationStylesCSS.dp_blog_post_heading} fw-bold`} >LATEST POSTS</p>

                                        {LatestPostsData.map((title, index) => (
                                            <p key={index} className={`${TrafficMonitizationStylesCSS.dp_blog_post_lists}`}>{title.title}</p>
                                        ))}

                                    </Col>
                                </Row>

                                {/* Categories */}

                                <Row className={`${TrafficMonitizationStylesCSS.dp_blogs_posts_stick}`}>
                                    <Col md={12} className='pt-3' >
                                        <ul className=' p-0'>
                                            <h3 className={`${TrafficMonitizationStylesCSS.dp_blog_post_heading} fw-bold`}>CATEGORIES</h3>
                                            {CategoriesItemsData.map((title, index) => (
                                                <p key={index} className={`${TrafficMonitizationStylesCSS.dp_blog_post_lists} `}>{title.title}</p>
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
    )
}


// LatestPostsData
// CategoriesItemsData
