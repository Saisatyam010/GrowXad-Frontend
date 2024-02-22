import React from "react";
import "animate.css";
import styles from "../../../pages/styles/Banner.module.css";
// import "./TestCards.css";
import cardsStyle from "./TestCards.module.css";
import { FaArrowRight } from "react-icons/fa";

const cardData = [
  {
    heading: "TOTAL AUTONOMY VIA SELF-SERVICE PLATFORM",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum tenetur, obcaecati adipisci provident quasi ipsum minus ducimus, sint magni sapiente distinctio voluptatem blanditiis ratione aut optio necessitatibus quibusdam. Repellendus, reiciendis! Eius, nostrum? Labore quidem incidunt obcaecati reiciendis, architecto reprehenderit natubis nostrum sint ea voluptate eius quis dolorem voluptates, dolor, delectus incidunt evenie",
  },
  {
    heading: "TOTAL AUTONOMY VIA SELF-SERVICE PLATFORM",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum tenetur, obcaecati adipisci provident quasi ipsum minus ducimus, sint magni sapiente distinctio voluptatem blanditiis ratione aut optio necessitatibus quibusdam. Repellendus, reiciendis! Eius, nostrum? Labore quidem incidunt obcaecati reiciendis, architecto reprehenderit natubis nostrum sint ea voluptate eius quis dolorem voluptates, dolor, delectus incidunt evenie",
  },
  {
    heading: "TOTAL AUTONOMY VIA SELF-SERVICE PLATFORM",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum tenetur, obcaecati adipisci provident quasi ipsum minus ducimus, sint magni sapiente distinctio voluptatem blanditiis ratione aut optio necessitatibus quibusdam. Repellendus, reiciendis! Eius, nostrum? Labore quidem incidunt obcaecati reiciendis, architecto reprehenderit natubis nostrum sint ea voluptate eius quis dolorem voluptates, dolor, delectus incidunt evenie",
  },
  {
    heading: "TOTAL AUTONOMY VIA SELF-SERVICE PLATFORM",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum tenetur, obcaecati adipisci provident quasi ipsum minus ducimus, sint magni sapiente distinctio voluptatem blanditiis ratione aut optio necessitatibus quibusdam. Repellendus, reiciendis! Eius, nostrum? Labore quidem incidunt obcaecati reiciendis, architecto reprehenderit natubis nostrum sint ea voluptate eius quis dolorem voluptates, dolor, delectus incidunt evenie",
  },

  {
    heading: "TOTAL AUTONOMY VIA SELF-SERVICE PLATFORM",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum tenetur, obcaecati adipisci provident quasi ipsum minus ducimus, sint magni sapiente distinctio voluptatem blanditiis ratione aut optio necessitatibus quibusdam. Repellendus, reiciendis! Eius, nostrum? Labore quidem incidunt obcaecati reiciendis, architecto reprehenderit natubis nostrum sint ea voluptate eius quis dolorem voluptates, dolor, delectus incidunt evenie",
  },
  // Add more card data as needed
];

const Testcards = () => {
  return (
    <div className={`container mt-5 p-5 ${cardsStyle.sana_color_background} `}>
      <div className="row sana_cards m-5">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${
              cardsStyle.sana_card
            } col-md-6 m-3 animate__animated ${
              index % 2 === 0 ? "animate__backInUp" : "animate__bounceInUp"
            }`}
          >
            <div className={cardsStyle.sana_img}>
              <img src="http://localhost:3001/images/quotation.png" alt="" />
            </div>
            <div className={cardsStyle.sana_heading}>
              <h1>{card.heading}</h1>
            </div>
            <div className={cardsStyle.sana_contents}>
              <p>{card.content}</p>
            </div>
            <div className={cardsStyle.sana_btn_black}>
              <button className="d-flex">
                Explore More{" "}
                <FaArrowRight className={`${cardsStyle.sana_icon_btn} fs-4 ml-3`} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testcards;
