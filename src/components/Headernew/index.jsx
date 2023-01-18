import React from "react";
import { Link } from "react-router-dom";
import "./Headernew.scss";
import logo from "./img/logo.png";
const Headernew = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <img src={logo} className="header__logo" />
        <ul className="header__navbar">
          <li className="header__item">
            <Link to="/" className="header__link">
              Кулинария
            </Link>
          </li>
          <li className="header__item">
            <Link to="/" className="header__link">
              Рецепты
            </Link>
          </li>
          <li className="header__item">
            <Link to="/" className="header__link">
              Тосты
            </Link>
          </li>
          <li className="header__item">
            <Link to="/" className="header__link">
              Помощь по сайту
            </Link>
          </li>
          <li className="header__item">
            <Link to="/" className="header__link">
              Реклама на сайте
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Headernew;
