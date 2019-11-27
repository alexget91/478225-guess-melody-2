import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReplayButton from "./replay-button";

Enzyme.configure({adapter: new Adapter()});

it(`Click on replay button calls callback`, () => {
  const clickHandler = jest.fn();

  const replayButton = shallow(<ReplayButton
    text={`1`}
    onClick={clickHandler}
  />);

  replayButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
