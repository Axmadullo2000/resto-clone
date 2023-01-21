import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Cardnew from "../../components/Cardnew";

import search from "../../assets/search.svg";
import crosschair from "../../assets/crosshair.svg";
import locate from "../../assets/location.svg";

import "./HomePage.scss";

const HomePage = () => {

  return (
    <div className="container">
      <Header />
      <Navbar />
      <div>
        <h2 className="restaraunts_title">
          Рестораны и кафе в Москве - поиск заведений
        </h2>
        <div className="search_block">
          <form>
            <img
              src={search}
              width={25}
              height={25}
              alt=""
              className="search_block__search_icon"
            />
            <input
              placeholder="Заведение или блюдо"
              name="search"
              id="search"
              className="search_block__search_input"
            />
            <button className="search_block__btn">Искать</button>
          </form>
          <div className="search_block__place_near">
            <button className="search_block__place_btn">
              <img src={crosschair} alt="" />
              <span>Заведения рядом</span>
            </button>
          </div>
          <div className="search_block__place_in_map">
            <button className="search_block__place_in_map_btn">
              <img src={locate} alt="" width={50} height={50} />
              <span>Заведения рядом</span>
            </button>
          </div>
        </div>
      </div>
      <Cardnew />
    </div>
  );
};
