import { Link } from "react-router-dom";
import React from "react";

import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import telegram from "../../assets/telegram.svg";
import visits from "../../assets/visits.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__header">
          <Link to="/" className="footer__logo">
            <img src={logo} alt='logo' />
          </Link>
          <div className="footer__contact">
            <ul className="footer__contact--social">
              <li>
                <Link to="/">
                  <img src={instagram} alt='instagram' />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={facebook} alt='facebook'/>
                </Link>
              </li>
              <li>
                <Link to="/" className="contact">
                  <img src={telegram} alt='telegram'/>
                </Link>
              </li>
            </ul>
            <Link to="/">Контакты</Link>
          </div>
        </div>
        <div className="footer__main">
          <div className="footer__main--copyright">
            <p>
              © 2013-2023 Resto.uz Все права защищены. Перепечатка и
              использование любых материалов, возможны только с указанием
              названия источника и активной гиперссылки на портал Resto.uz
            </p>
          </div>
          <div className="footer__main--menu">
            <ul>
              <li>
                <Link to="/">Реклама на сайте</Link>
              </li>
              <li>
                <Link to="/">Пользовательское соглашение</Link>
              </li>
            </ul>
          </div>
          <div className="footer__main--btn">
            <button>
              <span>Добавить новость/событие</span>
            </button>
            <Link to="/">
              <img src={visits} alt="Яндекс.Метрика" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
