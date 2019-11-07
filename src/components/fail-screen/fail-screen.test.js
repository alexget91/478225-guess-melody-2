import React from "react";
import renderer from "react-test-renderer";
import FailScreen from "../fail-screen/fail-screen";

describe(`Fail screen correctly renders after relaunch`, () => {
  it(`Time fail`, () => {
    const tree = renderer
      .create(<FailScreen failType={`time`}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Mistakes fail`, () => {
    const tree = renderer
      .create(<FailScreen failType={`mistakes`}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
