import * as React from "react";
import * as renderer from "react-test-renderer";
import Mistakes from "./mistakes";

it(`Mistakes correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Mistakes count={3}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
