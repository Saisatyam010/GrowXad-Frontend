import React from "react";
import "animate.css";
import { FaArrowRight } from "react-icons/fa";
// import styles from "";
// import "./TestCards.css";
import HoverStyle from "../../components/Home/HomeStyles/HoverCard.module.css";


const HoverCard = () => {
  const cardData = [
    {
      heading: "Advertisers",
      content:
        "Lorem ipsum dolor sit, amet consectetur avident quasi ipsum minus ducimus, sint magni sapiente distinctio voluptatem blareprehenderit natubis nostrum sint ea voluptate eius quis dolorem voluptates, dolor, delectus incidunt evenie",
    },
    {
      heading: "Publisher",
      content:
        "Lorem ipsum dolor sit, amet consectetur aaecati adipisci provident quasi ipsum minus ducimus, sint magni sapiente distinctio to reprehenderit natubis nostrum sint ea voluptate eius quis dolorem voluptates, dolor, delectus incidunt evenie",
    },
  ];
  return (
    <div className={`container mt-5 p-5 ${HoverStyle.sana_color_background} `}>
      <div className="row sana_cards m-5">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${HoverStyle.sana_card
              } col-md-6 m-3 animate__animated ${index % 2 === 0 ? "animate__backInUp" : "animate__bounceInUp"
              }`}
          >
            <div className={HoverStyle.sana_img}>
              <img
                src="https://GrowXAd.com/_nuxt/img/advertisers.a75f3c4.png"
                alt=""
              />
            </div>
            <div className={HoverStyle.sana_heading}>
              <h1>{card.heading}</h1>
            </div>
            <div className={HoverStyle.sana_contents}>
              <p>{card.content}</p>
            </div>
            <div className={HoverStyle.sana_btn_black}>
              <button className="d-flex">
                Explore More{" "}
                <FaArrowRight
                  className={`${HoverStyle.sana_icon_btn} fs-4 ml-3`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverCard;
