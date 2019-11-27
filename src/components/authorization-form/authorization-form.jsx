import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class AuthorizationForm extends PureComponent {
  constructor(props) {
    super(props);

    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  render() {
    return <React.Fragment>
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
    </React.Fragment>;
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

AuthorizationForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default AuthorizationForm;
