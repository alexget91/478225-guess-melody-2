import React from "react";
import PropTypes from "prop-types";
import AuthorizationForm from "../authorization-form/authorization-form";

const AuthorizationScreen = (props) => {
  const {onAuthFormSubmit} = props;

  return <section className="login">
    <div className="login__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
    </div>
    <h2 className="login__title">Необходима авторизация</h2>
    <p className="login__text">Представьтесь!</p>
    <AuthorizationForm onFormSubmit={onAuthFormSubmit}/>
  </section>;
};

AuthorizationScreen.propTypes = {
  onAuthFormSubmit: PropTypes.func.isRequired,
};

export default AuthorizationScreen;
