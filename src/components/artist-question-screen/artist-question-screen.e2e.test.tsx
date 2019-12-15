import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import ArtistQuestionScreen from "./artist-question-screen";
import {QuestionType} from "../../common/constants";

Enzyme.configure({adapter: new Adapter()});

describe(`Artist question screen`, () => {
  it(`When the user answers, the callback function gets the data in the correct format`, () => {
    const onUserAnswer = jest.fn();
    const genreQuestionScreen = Enzyme.shallow(<ArtistQuestionScreen
      screenIndex={0}
      question={{
        type: QuestionType.ARTIST,
        song: {
          artist: ``,
          picture: ``,
        },
        answers: [{
          artist: `1`,
          picture: ``,
        }]
      }}
      onAnswer={onUserAnswer}
      renderPlayer={jest.fn()}
      onScreenChange={jest.fn()}
    />);

    genreQuestionScreen.find(`.js-answer-input`).simulate(`change`, {
      currentTarget: {
        dataset: {
          index: 0
        }
      }
    });

    expect(onUserAnswer).toHaveBeenCalledTimes(1);
    expect(onUserAnswer).toHaveBeenCalledWith(`1`);
  });
});
