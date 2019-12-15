import * as React from "react";
import * as renderer from "react-test-renderer";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import GameScreen from "./game-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import {QuestionType} from "../../common/constants";

describe(`Game screen correctly renders after relaunch`, () => {
  it(`Genre question`, () => {
    const tree = renderer
      .create(<GameScreen type={QuestionType.GENRE} mistakes={1} time={0} onTimeChange={jest.fn()}>
        <GenreQuestionScreen
          screenIndex={0}
          question={{
            type: QuestionType.GENRE,
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
      .create(<GameScreen type={QuestionType.ARTIST} mistakes={1} time={0} onTimeChange={jest.fn()}>
        <ArtistQuestionScreen
          screenIndex={0}
          question={{
            type: QuestionType.ARTIST,
            song: {
              artist: ``,
              picture: ``,
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
