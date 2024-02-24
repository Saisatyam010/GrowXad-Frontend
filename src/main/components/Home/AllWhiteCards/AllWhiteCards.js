import React, { useState } from 'react';
import cardHomeStyles from "../../Home/HomeStyles/CardHome.module.css";




const AllWhiteCards = (props) => {
    console.log(props.message)

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='text-center font-semibold text-black'>{props.message.blackHeading1} <span style={{ color: "#71065D" }}>{props.message.purpleSpan}</span>{props.message.blackHeading2}</h1>

                    </div>
                </div>
            </div>
            <div className='bg_light_theme_primary'>

                <div className='container mt-3 p-4'>
                    <div className='row mt-4 p-2 '>
                        {props.message.map((card, index) => (


                            <div className='col-md-4 col-lg-4 mb-4 '


                                key={index} // Don't forget to add a unique key for each card
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}>
                                <div className={`${cardHomeStyles.rs_card_block} rounded-lg`} style={{ boxShadow: " 2px 2px 24px rgba(0,0,0,.09)" }}>
                                    <div className={cardHomeStyles.rs_inner}>
                                        <div className={`${cardHomeStyles.rs_img} d-flex ${cardHomeStyles.rs_strawberry}`}>
                                            <img
                                                src={index === hoveredIndex ? card.imgUrl : card.imgUrl}
                                                alt='Unique Partner Care'
                                                loading='lazy'
                                                className=''
                                            />
                                        </div>
                                        <div className={`${cardHomeStyles.rs_h_card_border} `}>
                                            <div className={cardHomeStyles.slide_card}></div>
                                        </div>
                                        <h5 className={`${cardHomeStyles.rs_h_text} textChangeTheme`}>{card.heading}</h5>
                                        <p className={`${cardHomeStyles.rs_p_text} text-black`}>{card.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>




            </div>
        </>
    )
}

export default AllWhiteCards
