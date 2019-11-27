import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import ReplayButton from "./replay-button";

it(`Replay button correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<BrowserRouter>
      <ReplayButton text={`1`} onClick={jest.fn()}/>
    </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
