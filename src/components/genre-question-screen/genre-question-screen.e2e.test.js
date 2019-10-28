import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen";

Enzyme.configure({adapter: new Adapter()});

describe(`Genre question screen`, () => {
  it(`When the user answers, the callback function gets the data in the correct format`, () => {
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
      onAnswer={onUserAnswer}
    />);

    genreQuestionScreen.find(`.js-answer-form`).simulate(`submit`, {
      preventDefault: () => {}
    });

    expect(onUserAnswer).toHaveBeenCalledTimes(1);
    expect(onUserAnswer).toHaveBeenCalledWith([]);
  });
});
