import React from "react";
import renderer from "react-test-renderer";
import WinScreen from "./win-screen";
import {BrowserRouter} from "react-router-dom";

describe(`Win screen correctly renders after relaunch`, () => {
  it(`For non-authorized user`, () => {
    const tree = renderer
      .create(<BrowserRouter><WinScreen
        user={null}
        onReplayClick={jest.fn()}
        onAuthFormSubmit={jest.fn()}
      /></BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`For authorized user`, () => {
    const tree = renderer
      .create(<BrowserRouter><WinScreen
        user={{
          id: 1,
          email: ``,
        }}
        onReplayClick={jest.fn()}
        onAuthFormSubmit={jest.fn()}
      /></BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
