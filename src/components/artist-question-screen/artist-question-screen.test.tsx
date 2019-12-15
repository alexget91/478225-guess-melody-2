import * as React from "react";
import * as renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen";
import {QuestionType} from "../../common/constants";

it(`Artist question screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ArtistQuestionScreen
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
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
