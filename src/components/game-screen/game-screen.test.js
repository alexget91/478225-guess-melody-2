import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import GameScreen from "./game-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";

describe(`Game screen correctly renders after relaunch`, () => {
  it(`Genre question`, () => {
    const tree = renderer
      .create(<GameScreen type={`genre`} mistakes={1} time={0} onTimeChange={jest.fn()}>
        <GenreQuestionScreen
          screenIndex={0}
          question={{
            type: `genre`,
            genre: ``,
            answers: [{
              genre: ``,
              src: ``,
            }],
          }}
          userAnswer={[]}
          renderPlayer={jest.fn()}
          onAnswerChange={jest.fn()}
          onAnswerSubmit={jest.fn()}
        />
      </GameScreen>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Artist question`, () => {
    const tree = renderer
      .create(<GameScreen type={`artist`} mistakes={1} time={0} onTimeChange={jest.fn()}>
        <ArtistQuestionScreen
          screenIndex={0}
          question={{
            type: `artist`,
            song: {
              artist: ``,
              src: ``,
            },
            answers: [{
              artist: ``,
              picture: ``,
            }],
          }}
          onAnswer={jest.fn()}
          renderPlayer={jest.fn()}
        />
      </GameScreen>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
