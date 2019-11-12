import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player";

Enzyme.configure({adapter: new Adapter()});

it(`Clicking on a play/pause button calls callback`, () => {
  const playClickHandler = jest.fn();
  const audioPlayer = mount(<AudioPlayer
    src={``}
    isLoading={false}
    isPlaying={false}
    renderAudio={jest.fn()}
    onPlayButtonClick={playClickHandler}
  />);

  const playButton = audioPlayer.find(`.js-track-button`);
  expect(playButton.length).toBe(1);

  playButton.simulate(`click`);
  expect(playClickHandler).toHaveBeenCalledTimes(1);
});
