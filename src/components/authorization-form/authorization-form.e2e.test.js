import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AuthorizationForm from "./authorization-form";

Enzyme.configure({adapter: new Adapter()});

it(`Authorization form submitting calls callback with correct data`, () => {
  const formSubmitHandler = jest.fn();
  const authScreen = mount(<AuthorizationForm onFormSubmit={formSubmitHandler}/>);

  const loginForm = authScreen.find(`.js-login-form`);
  expect(loginForm.length).toBe(1);

  const emailInput = authScreen.find(`.js-email-input`);
  expect(emailInput.length).toBe(1);

  const passwordInput = authScreen.find(`.js-password-input`);
  expect(passwordInput.length).toBe(1);

  emailInput.instance().value = `mockEmail`;
  passwordInput.instance().value = `mockPassword`;

  loginForm.simulate(`submit`, {
    preventDefault: () => {},
    target: loginForm.instance(),
  });

  expect(formSubmitHandler).toHaveBeenCalledTimes(1);
  expect(formSubmitHandler).toHaveBeenCalledWith(`mockEmail`, `mockPassword`);
});
