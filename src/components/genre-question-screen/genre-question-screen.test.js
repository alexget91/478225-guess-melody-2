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
      onAnswer={jest.fn()}
    />,
    {createNodeMock(element) {
      if (element.type === `audio`) {
        return {
          createRef() {}
        };
      }
      return null;
    }})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
