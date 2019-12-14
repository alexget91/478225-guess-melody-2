import * as React from "react";
import * as renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

it(`Welcome screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      time={0}
      errorCount={0}
      onStartButtonClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
