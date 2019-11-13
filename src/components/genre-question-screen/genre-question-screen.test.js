import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen";

it(`Genre question screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<GenreQuestionScreen
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
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
