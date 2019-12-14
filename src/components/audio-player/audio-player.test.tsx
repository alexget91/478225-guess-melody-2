import * as React from "react";
import AudioPlayer from "./audio-player";
import * as renderer from "react-test-renderer";

it(`Audio player correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<AudioPlayer
      isLoading={false}
      isPlaying={false}
      src={``}
      renderAudio={jest.fn()}
      onPlayButtonClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
