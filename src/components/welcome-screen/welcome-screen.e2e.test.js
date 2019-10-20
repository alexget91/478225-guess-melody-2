import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({adapter: new Adapter()});

it(`Clicking on a game launch button calls callback`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen
    time={0}
    errorCount={0}
    onGameStartClick={clickHandler}
  />);

  const startButton = welcomeScreen.find(`.js-game-start`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
