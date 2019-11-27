import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";

it(`Header correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Header
      mistakes={2}
      time={300}
      onTimeChange={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
