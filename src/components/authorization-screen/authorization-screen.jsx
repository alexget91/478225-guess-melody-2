import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class AuthorizationScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  render() {
    return <section className="login">
      <div className="login__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
      <h2 className="login__title">Вы настоящий меломан!</h2>
      <p className="login__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
      <p className="login__text">Хотите сравнить свой результат с предыдущими попытками? Представьтесь!</p>
      <form className="login__form js-login-form" action="" onSubmit={this.formSubmitHandler}>
        <p className="login__field">
          <label className="login__label" htmlFor="name">Логин</label>
          <input className="login__input js-email-input" type="email" name="name" id="name" required/>
        </p>
        <p className="login__field">
          <label className="login__label" htmlFor="password">Пароль</label>
          <input className="login__input js-password-input" type="password" name="password" id="password" required/>
          <span className="login__error">Неверный пароль</span>
        </p>
        <button className="login__button button" type="submit">Войти</button>
      </form>
      <button className="replay" type="button">Сыграть ещё раз</button>
    </section>;
  }

  formSubmitHandler(evt) {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const login = formData.get(`name`);
    const password = formData.get(`password`);

    if (login && password) {
      this.props.onFormSubmit(login, password);
    }
  }
}

AuthorizationScreen.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default AuthorizationScreen;
