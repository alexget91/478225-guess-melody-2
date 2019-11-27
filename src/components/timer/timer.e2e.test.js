import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Timer from "./timer";

Enzyme.configure({adapter: new Adapter()});

describe(`Timer works correctly`, () => {
  const timeChangeHandler = jest.fn();
  const timer = shallow(<Timer time={300} onTimeChange={timeChangeHandler}/>);

  it(`Timer tick correctly decrements time`, () => {
    timer.instance()._tick();
    expect(timeChangeHandler).toHaveBeenCalledTimes(1);
  });
});
