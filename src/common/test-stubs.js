const createAudioMock = () => {
  return {createNodeMock(element) {
    if (element.type === `audio`) {
      return {
        createRef() {}
      };
    }
    return null;
  }};
};

export default createAudioMock;
