import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistQuestionScreen from "./artist-question-screen";

Enzyme.configure({adapter: new Adapter()});

describe(`Artist question screen`, () => {
  it(`When the user answers, the callback function gets the data in the correct format`, () => {
    const onUserAnswer = jest.fn();
    const genreQuestionScreen = shallow(<ArtistQuestionScreen
      screenIndex={0}
      question={{
        type: `artist`,
        song: {
          artist: ``,
          src: ``,
        },
        answers: [{
          artist: `1`,
          picture: ``,
        }]
      }}
      onAnswer={onUserAnswer}
    />);

    genreQuestionScreen.find(`.js-answer-input`).simulate(`change`);

    expect(onUserAnswer).toHaveBeenCalledTimes(1);
    expect(onUserAnswer).toHaveBeenCalledWith(`1`);
  });
});
