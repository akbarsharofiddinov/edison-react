import { useEdisonContext } from "@/context/EdisonContext";
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const FeedbackModal: React.FC = () => {
  const { modal } = useEdisonContext();
  const [score, setScore] = useState(0);
  const outlineStars = [
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
  ];

  const filledStars = [
    <AiFillStar />,
    <AiFillStar />,
    <AiFillStar />,
    <AiFillStar />,
    <AiFillStar />,
  ];

  const rating = [
    {
      title: "Кухня",
      rate: 5,
    },
    {
      title: "Интерьер",
      rate: 5,
    },
    {
      title: "Обслуживания",
      rate: 5,
    },
    {
      title: "Атмосфера",
      rate: 5,
    },
  ];

  return (
    <div className={modal ? "modal active" : "modal"}>
      <div className="feedback-inner">
        <h1 className="title">Оцените нас!</h1>
        <form>
          <div className="ratingBoxes">
            <div className="kitchenRating rating-box">
              <label>Кухня</label>
              <div>{outlineStars.map((item) => item)}</div>
            </div>
            <div className="interiorRating rating-box">
              <label>Интерьер</label>
              <div>{outlineStars.map((item) => item)}</div>
            </div>
            <div className="servicesRating rating-box">
              <label>Обслуживания</label>
              <div>{outlineStars.map((item) => item)}</div>
            </div>
            <div className="atmosphereRating rating-box">
              <label>Атмосфера</label>
              <div>{outlineStars.map((item) => item)}</div>
            </div>
          </div>
          <div className="messageBox">
            <label>Ваши предложения и жалоби</label>
            <textarea cols={30} rows={5} autoComplete="off"></textarea>
          </div>
          <button>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;
