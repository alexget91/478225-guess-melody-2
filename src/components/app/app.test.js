import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import createAudioMock from "../../common/test-stubs";

describe(`App correctly renders after relaunch`, () => {
  it(`Welcome screen`, () => {
    const tree = renderer
      .create(<App
        step={-1}
        mistakes={0}
        maxMistakes={0}
        gameTime={0}
        questions={[
          {
            type: `genre`,
            genre: ``,
            answers: [{
              genre: ``,
              src: ``,
            }],
          }
        ]}
        onUserAnswer={jest.fn()}
        onWelcomeScreenClick={jest.fn()}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Genre question screen`, () => {
    const tree = renderer
      .create(<App
        step={0}
        mistakes={0}
        maxMistakes={0}
        gameTime={0}
        questions={[
          {
            type: `genre`,
            genre: ``,
            answers: [{
              genre: ``,
              src: ``,
            }],
          }
        ]}
        onUserAnswer={jest.fn()}
        onWelcomeScreenClick={jest.fn()}
      />, createAudioMock())
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Artist question screen`, () => {
    const tree = renderer
      .create(<App
        step={0}
        mistakes={0}
        maxMistakes={0}
        gameTime={0}
        questions={[
          {
            type: `artist`,
            song: {
              artist: ``,
              src: ``,
            },
            answers: [{
              artist: ``,
              picture: ``,
            }],
          }
        ]}
        onUserAnswer={jest.fn()}
        onWelcomeScreenClick={jest.fn()}
      />, createAudioMock())
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
