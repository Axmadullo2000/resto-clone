import React, { useState } from "react";
import "./RegistrationForm.scss";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [antibot, setAntibot] = useState("");
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
        <li className="active">Регистрация на сайте</li>
      </ul>
      <h1>Регистрация на сайте</h1>
      <hr />
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
        <br />
        <label>
          <input
            className="input-field"
            type="text"
            placeholder="Впишите результат 2 + 8"
            value={antibot}
            onChange={(event) => setAntibot(event.target.value)}
          />
        </label>
        <br />
        <button className="submit-button" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
