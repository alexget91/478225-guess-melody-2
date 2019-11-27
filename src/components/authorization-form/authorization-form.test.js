import React from "react";
import renderer from "react-test-renderer";
import AuthorizationForm from "./authorization-form";

it(`Authorization form correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<AuthorizationForm onFormSubmit={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
