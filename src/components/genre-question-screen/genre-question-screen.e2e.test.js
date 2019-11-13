import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen";

Enzyme.configure({adapter: new Adapter()});

describe(`Genre question screen`, () => {
  it(`Submitting answer form calls callback`, () => {
    const onUserAnswer = jest.fn();
    const genreQuestionScreen = shallow(<GenreQuestionScreen
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
      onAnswerSubmit={onUserAnswer}
      onScreenChange={jest.fn()}
    />);

    genreQuestionScreen.find(`.js-answer-form`).simulate(`submit`, {
      preventDefault: () => {}
    });

    expect(onUserAnswer).toHaveBeenCalledTimes(1);
  });
});
