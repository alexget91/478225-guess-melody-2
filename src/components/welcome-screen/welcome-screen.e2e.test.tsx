import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({adapter: new Adapter()});

it(`Clicking on a game launch button calls callback`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = Enzyme.shallow(<WelcomeScreen
    time={0}
    errorCount={0}
    onStartButtonClick={clickHandler}
  />);

  const startButton = welcomeScreen.find(`.js-game-start`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
