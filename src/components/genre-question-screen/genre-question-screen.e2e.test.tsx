import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen";
import {QuestionType} from "../../common/constants";

Enzyme.configure({adapter: new Adapter()});

describe(`Genre question screen`, () => {
  it(`Submitting answer form calls callback`, () => {
    const onUserAnswer = jest.fn();
    const genreQuestionScreen = Enzyme.shallow(<GenreQuestionScreen
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
      onAnswerSubmit={onUserAnswer}
      onScreenChange={jest.fn()}
    />);

    genreQuestionScreen.find(`.js-answer-form`).simulate(`submit`, {
      preventDefault: () => {}
    });

    expect(onUserAnswer).toHaveBeenCalledTimes(1);
  });
});
