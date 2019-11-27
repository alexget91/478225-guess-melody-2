import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import createAudioMock from "../../common/test-stubs";
import {MemoryRouter} from "react-router-dom";
import Path from "../../common/path";

const mockGenreQuestion = {
  type: `genre`,
  genre: ``,
  answers: [{
    genre: ``,
    src: ``,
  }],
};
const mockArtistQuestion = {
  type: `artist`,
  song: {
    artist: ``,
    src: ``,
  },
  answers: [{
    artist: ``,
    picture: ``,
  }],
};

describe(`App correctly renders after relaunch`, () => {
  it(`Welcome screen`, () => {
    const tree = renderer
      .create(<MemoryRouter><App
        step={-1}
        maxMistakes={1}
        gameTime={1}
        questions={[]}
        onWelcomeScreenClick={jest.fn()}
        onSignIn={jest.fn()}
        onReplayClick={jest.fn()}
      /></MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Genre question screen`, () => {
    const tree = renderer
      .create(<MemoryRouter><App
        step={0}
        mistakes={0}
        gameTime={1}
        questions={[{
          type: `genre`,
          genre: ``,
          answers: [{
            genre: ``,
            src: ``,
          }],
        }]}
        onTimeChange={jest.fn()}
        onSignIn={jest.fn()}
        onReplayClick={jest.fn()}
      /></MemoryRouter>, createAudioMock())
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Artist question screen`, () => {
    const tree = renderer
      .create(<MemoryRouter><App
        step={0}
        mistakes={0}
        gameTime={1}
        questions={[mockArtistQuestion]}
        onTimeChange={jest.fn()}
        onSignIn={jest.fn()}
        onReplayClick={jest.fn()}
      /></MemoryRouter>, createAudioMock())
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Win screen`, () => {
    const tree = renderer
      .create(<MemoryRouter><App
        step={100}
        mistakes={0}
        gameTime={1}
        questions={[]}
        onTimeChange={jest.fn()}
        onSignIn={jest.fn()}
        onReplayClick={jest.fn()}
      /></MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Fail screen (time is over)`, () => {
    const tree = renderer
      .create(<MemoryRouter><App
        step={0}
        mistakes={0}
        gameTime={0}
        questions={[mockGenreQuestion]}
        onTimeChange={jest.fn()}
        onSignIn={jest.fn()}
        onReplayClick={jest.fn()}
      /></MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Fail screen (mistakes)`, () => {
    const tree = renderer
      .create(<MemoryRouter><App
        step={0}
        mistakes={10}
        maxMistakes={1}
        gameTime={1}
        questions={[mockGenreQuestion]}
        onTimeChange={jest.fn()}
        onSignIn={jest.fn()}
        onReplayClick={jest.fn()}
      /></MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Authorization screen`, () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={[Path.AUTH]}><App
        step={0}
        mistakes={0}
        gameTime={1}
        questions={[]}
        onTimeChange={jest.fn()}
        onSignIn={jest.fn()}
        onReplayClick={jest.fn()}
      /></MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
