import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import ReplayButton from "./replay-button";

Enzyme.configure({adapter: new Adapter()});

it(`Click on replay button calls callback`, () => {
  const clickHandler = jest.fn();

  const replayButton = Enzyme.shallow(<ReplayButton
    text={`1`}
    onClick={clickHandler}
  />);

  replayButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
