import React from "react";
import AudioPlayer from "./audio-player";
import renderer from "react-test-renderer";
import createAudioMock from "../../common/test-stubs";

it(`Audio player correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<AudioPlayer
      src={``}
      isPlaying={false}
      onPlayButtonClick={jest.fn()}
    />, createAudioMock())
    .toJSON();

  expect(tree).toMatchSnapshot();
});
