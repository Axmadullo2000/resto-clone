import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  loginUserFailure,
  loginUserSuccess,
} from "../../redux/slice/AuthSlice";
import { authService } from "../../service/auth";

import "./Login.scss";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const data = { username: username, password: password };

  const dispatch = useDispatch();

  const loginUser = async () => {
    try {
      const response = await authService.login(data);
      dispatch(loginUserSuccess(response));
      localStorage.setItem("token", response.token);
      navigate("/");
    } catch (error) {
      dispatch(loginUserFailure(error.response.data));
    }
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    console.log(error);
    loginUser();
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="form">
          <h2>Login</h2>
          {!!error &&
            Object.entries(error).map((item) => {
              return (
                <div key={item}>
                  <h2>
                    {item[0]} {item[1]}
                  </h2>
                </div>
              );
            })}

          <form className="login-form" onSubmit={handlerSubmit}>
            <label>
              <input
                className="input-field"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
            <br />
            <label>
              <input
                className="input-field"
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <br />
            <div className="forget">
              <ul>
                <li>
                  <Link to="/auth/sign-up">Зарегистрироваться</Link>
                </li>
              </ul>
            </div>
            <br />
            <button className="submit-button" type="submit">
              Войти
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};
