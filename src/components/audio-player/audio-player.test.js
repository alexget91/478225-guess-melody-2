import React from "react";
import AudioPlayer from "./audio-player";
import renderer from "react-test-renderer";

it(`Audio player correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<AudioPlayer
      src={``}
      isPlaying={false}
      onPlayButtonClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
