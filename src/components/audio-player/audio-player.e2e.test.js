import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player";

Enzyme.configure({adapter: new Adapter()});

describe(`State changes correctly`, () => {
  const pauseStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `pause`)
    .mockImplementation(() => {});

  const audioPlayer = mount(<AudioPlayer
    src={``}
    isPlaying={false}
    onPlayButtonClick={jest.fn()}
  />);

  const playButton = audioPlayer.find(`.js-track-button`);

  audioPlayer.setState({isLoading: false});

  it(`When "Play" button clicked`, () => {
    expect(playButton.length).toBe(1);
    playButton.simulate(`click`);
    expect(pauseStub).toHaveBeenCalled();
    expect(audioPlayer.state(`isPlaying`)).toBe(true);
  });

  it(`When "Pause" button clicked`, () => {
    expect(playButton.length).toBe(1);
    playButton.simulate(`click`);
    expect(pauseStub).toHaveBeenCalled();
    expect(audioPlayer.state(`isPlaying`)).toBe(false);
  });
});
