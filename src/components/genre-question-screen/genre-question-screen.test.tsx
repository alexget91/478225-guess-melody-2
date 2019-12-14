import * as React from "react";
import * as renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen";
import {QuestionType} from "../../common/constants";

it(`Genre question screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<GenreQuestionScreen
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
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
