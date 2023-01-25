import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { restaurantsService } from "../../service";
import {
  restaurantsFailFetched,
  restaurantsSuccessFetched,
} from "../../redux/slice/RestaurantSlice";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

import search from "../../assets/search.svg";
import crosschair from "../../assets/crosshair.svg";
import locate from "../../assets/location.svg";

import "./HomePage.scss";
import Footer from "../../components/Footer";

export const HomePage = () => {
  const { restaurantData } = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();

  const showRestaurantCard = async () => {
    try {
      const response = await restaurantsService.fetchRestaurantList();
      dispatch(restaurantsSuccessFetched(response));
      console.log(response);
    } catch (error) {
      dispatch(restaurantsFailFetched(error.response.data));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.search.value === "") {
      showRestaurantCard();
    } else {
      const filtered = restaurantData.filter((item) => {
        return (
          item.name
            .toLowerCase()
            .includes(e.target.search.value.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(e.target.search.value.toLowerCase())
        );
      });
      dispatch(restaurantsSuccessFetched(filtered));
    }
  };

  useEffect(() => {
    showRestaurantCard();
    dispatch(restaurantsSuccessFetched(restaurantData));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <Header />
      <Navbar />
      <div>
        <h2 className="restaraunts_title">
          Рестораны и кафе в Москве - поиск заведений
        </h2>
        <div className="search_block">
          <form onSubmit={handleSubmit}>
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
      <Card />
      <Footer />
    </div>
  );
};
