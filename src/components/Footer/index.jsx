import React from "react";

import "./Footer.scss";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import telegram from "../../assets/telegram.svg";
import visits from "../../assets/visits.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__header">
          <div className="footer__logo">
            <img src={logo} />
          </div>
          <div className="footer__contact">
            <ul className="footer__contact--social">
              <li>
                <a href="#">
                  <img src={instagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={facebook} />
                </a>
              </li>
              <li>
                <a href="#" className="contact">
                  <img src={telegram} />
                </a>
              </li>
            </ul>
            <a href="#">Контакты</a>
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
                <a href="#">Реклама на сайте</a>
              </li>
              <li>
                <a href="#">Пользовательское соглашение</a>
              </li>
            </ul>
          </div>
          <div className="footer__main--btn">
            <button>
              <span>Добавить новость/событие</span>
            </button>
            <a href="#">
              <img src={visits} alt="Яндекс.Метрика" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
