import React, { useState } from "react";
import "./LoginForm.scss";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="form">
      <ul>
        <li>
          <a href="#">
            <b>Главная</b>
          </a>
        </li>
        <li className="active">Авторизация на сайте</li>
      </ul>
      <h1>Авторизация</h1>
      <hr />
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          <input
            className="input-field"
            type="text"
            placeholder="E-mail"
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
              <a href="#">Напомнить пароль</a>
            </li>
            <li>
              <a href="#">Зарегистрироваться</a>
            </li>
          </ul>
        </div>
        <br />
        <button className="submit-button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
