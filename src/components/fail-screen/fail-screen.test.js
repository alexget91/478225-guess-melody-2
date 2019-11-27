import React from "react";
import renderer from "react-test-renderer";
import FailScreen from "../fail-screen/fail-screen";
import {FailType} from "../../common/constants";
import {MemoryRouter} from "react-router-dom";

describe(`Fail screen correctly renders after relaunch`, () => {
  it(`Time fail`, () => {
    const tree = renderer
      .create(<MemoryRouter>
        <FailScreen failType={FailType.TIME} onReplayClick={jest.fn()}/>
      </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Mistakes fail`, () => {
    const tree = renderer
      .create(<MemoryRouter>
        <FailScreen failType={FailType.MISTAKES} onReplayClick={jest.fn()}/>
      </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
