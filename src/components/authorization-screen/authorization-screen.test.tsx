import * as React from "react";
import * as renderer from "react-test-renderer";
import AuthorizationScreen from "./authorization-screen";

it(`Authorization screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<AuthorizationScreen onAuthFormSubmit={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
