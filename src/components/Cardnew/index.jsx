import React from "react";
import { Link, useNavigate } from "react-router-dom";

import cafe from "../../assets/cafe.png";
import locate from "../../assets/location.png";
import cardPhoto from "../../assets/cafe.png";
import kitchen from "../../assets/kitchen.png";
import meal from "../../assets/meal.png";
import shedule from "../../assets/shedule.png";
import "./Cardnew.scss";

const Cardnew = () => {
  const data = {
    cafeName: "Кафе Street77",
    location: "На карте",
    cardPhoto: { cafe },
    address: "Ташкент, ул. Шастри, 19 А",
    kitchen: "Italian",
    meal: "Pizza",
    shedule: "Открыто с 08-00 до 23-00",
  };

  return (
    <div className="card">
      <div className="card__container">
        <div className="card__header">
          <a href="#" className="card__header--name">
            {data.cafeName}
          </a>

          <button className="card__header--location">
            <img src={locate} />
            <span>{data.location}</span>
          </button>
        </div>
        <div className="card__main">
          <div className="card__main--left">
            <img src={cardPhoto} />
          </div>
          <div className="card__main--right">
            <ul>
              <li>
                <img src={locate} />
                <span>{data.address}</span>
              </li>
              <li>
                <img src={kitchen} />
                <span>{data.kitchen}</span>
              </li>
              <li>
                <img src={meal} />
                <span>{data.meal}</span>
              </li>
              <li>
                <img src={shedule} />
                <span>{data.shedule}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardnew;
