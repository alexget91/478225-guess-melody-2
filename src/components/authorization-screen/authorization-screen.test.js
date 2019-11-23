import React from "react";
import renderer from "react-test-renderer";
import AuthorizationScreen from "./authorization-screen";

it(`Authorization screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<AuthorizationScreen onFormSubmit={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
