import React, { useState } from 'react';
import dropStyles from "../Faqs/Faq.module.css";
import { FaqsMenu } from './FaqsMenu';
import { FaChevronDown } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa6";
const Faqs = () => {
  const [openQuestionIds, setOpenQuestionIds] = useState([]);

  const handleOpen = (questionId) => {
    setOpenQuestionIds((prevIds) => {
      if (prevIds.includes(questionId)) {
        return prevIds.filter((id) => id !== questionId);
      } else {
        return [...prevIds, questionId];
      }
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className='text-center font-semibold text-black'>GrowXAd <span style={{ color: "#71065D" }}>Networks</span>FAQs</h1>
        </div>
      </div>
      <div className="row mt-5">
        {FaqsMenu.map((question, index) => (
          <div
            key={question.id}
            className={`col-md-12 ${dropStyles.sana_drop_question}`}
          >
            <div className={dropStyles.sana_DropQues_container}>
              <p onClick={() => handleOpen(question.id)}>
                <span
                  className={`${dropStyles.question_number} ${openQuestionIds.includes(question.id)
                    ? dropStyles.opened
                    : ""
                    }`}
                >
                  {index + 1}.
                </span>{" "}
                {question.title}
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
              <p className="ml-3">{question.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
