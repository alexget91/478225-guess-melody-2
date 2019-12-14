import * as React from "react";
import * as renderer from "react-test-renderer";
import Timer from "./timer";

it(`Timer correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Timer time={300} onTimeChange={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
