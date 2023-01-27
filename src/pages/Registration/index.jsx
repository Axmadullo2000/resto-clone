import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { registerUserFailure, registerUser } from "../../redux/slice/AuthSlice";
import Header from "../../components/Header";
import { authService } from "../../service/auth";
import Footer from "../../components/Footer";

import "./Registration.scss";

export const Registration = () => {
  const { user, error } = useSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const data = { username, password, new_password: repeatPassword, email };
  const navigate = useNavigate();

  const register = async () => {
    try {
      const response = await authService.registration(data);
      console.log(response);

      dispatch(registerUser(response));
      localStorage.setItem("token", response.token);
      navigate("/");
    } catch (error) {
      dispatch(registerUserFailure(error.response.data));
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register();
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="form">
          <h2>Registration</h2>

          {error &&
            Object.entries(error).map((key, value) => {
              return (
                <div key={key}>
                  {password !== repeatPassword ? (
                    <p>Password must have be similarly</p>
                  ) : (
                    <p>
                      <span className="text-danger">{key[0]}</span>: {key[1][0]}
                    </p>
                  )}
                </div>
              );
            })}

          {user != null && error == null && (
            <h2>You have successfully registered!!!</h2>
          )}

          <form className="registration-form" onSubmit={handleSubmit}>
            <label>
              <input
                className="input-field"
                type="email"
                placeholder="E-mail:"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <br />
            <label>
              <input
                className="input-field"
                type="text"
                placeholder="Имя"
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
            <label>
              <input
                className="input-field"
                type="password"
                placeholder="Пароль"
                value={repeatPassword}
                onChange={(event) => setRepeatPassword(event.target.value)}
              />
            </label>
            <br />
            <button className="submit-button" type="submit">
              Зарегистрироваться
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};
