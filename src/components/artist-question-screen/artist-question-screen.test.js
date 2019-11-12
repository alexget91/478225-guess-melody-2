import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen";

it(`Artist question screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ArtistQuestionScreen
      screenIndex={0}
      question={{
        type: `artist`,
        song: {
          artist: ``,
          src: ``,
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
