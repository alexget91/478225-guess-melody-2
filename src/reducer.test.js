import {ActionCreator, isArtistAnswerCorrect, isGenreAnswerCorrect, reducer} from "./reducer";

describe(`Business logic is correct`, () => {
  it(`Artist answer is checked correctly`, () => {
    expect(isArtistAnswerCorrect(`1`, {
      type: `artist`,
      song: {
        artist: `1`,
        src: ``,
      },
      answers: [
        {
          picture: ``,
          artist: `1`,
        },
        {
          picture: ``,
          artist: `2`,
        },
        {
          picture: ``,
          artist: `3`,
        },
      ],
    })).toEqual(true);

    expect(isArtistAnswerCorrect(`1`, {
      type: `artist`,
      song: {
        artist: `2`,
        src: ``,
      },
      answers: [
        {
          picture: ``,
          artist: `1`,
        },
        {
          picture: ``,
          artist: `2`,
        },
        {
          picture: ``,
          artist: `3`,
        },
      ],
    })).toEqual(false);
  });

  it(`Genre answer is checked correctly`, () => {
    expect(isGenreAnswerCorrect([true, false, true, false], {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: ``,
          genre: `rock`,
        },
        {
          src: ``,
          genre: `pop`,
        },
        {
          src: ``,
          genre: `rock`,
        },
        {
          src: ``,
          genre: `jazz`,
        },
      ],
    })).toEqual(true);

    expect(isGenreAnswerCorrect([true, false, false, false], {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: ``,
          genre: `rock`,
        },
        {
          src: ``,
          genre: `pop`,
        },
        {
          src: ``,
          genre: `rock`,
        },
        {
          src: ``,
          genre: `jazz`,
        },
      ],
    })).toEqual(false);
  });
});

describe(`Action creators works correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: `INCREMENT_STEP`,
      payload: 1
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload when artist answer is correct`, () => {
    expect(ActionCreator.incrementMistakes(`correct`,
        {
          type: `artist`,
          song: {
            artist: `correct`,
            src: ``
          },
          answers: [
            {
              artist: `correct`,
              picture: ``
            },
            {
              artist: `incorrect`,
              picture: ``
            },
            {
              artist: `incorrect-2`,
              picture: ``
            }
          ]
        }, 0, Infinity)).toEqual({
      type: `INCREMENT_MISTAKES`,
      payload: 0
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload when artist answer is incorrect`, () => {
    expect(ActionCreator.incrementMistakes({
      artist: `incorrect`,
      picture: ``
    },
    {
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``
      },
      answers: [
        {
          artist: `correct`,
          picture: ``
        },
        {
          artist: `incorrect`,
          picture: ``
        },
        {
          artist: `incorrect-2`,
          picture: ``
        }
      ]
    }, 0, Infinity)).toEqual({
      type: `INCREMENT_MISTAKES`,
      payload: 1
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload when genre answer is correct`, () => {
    expect(ActionCreator.incrementMistakes([false, false, true, false],
        {
          type: `genre`,
          genre: `jazz`,
          answers: [
            {
              src: ``,
              genre: `rock`,
            },
            {
              src: ``,
              genre: `rock`,
            },
            {
              src: ``,
              genre: `jazz`,
            },
            {
              src: ``,
              genre: `rock`,
            },
          ]
        }, 0, Infinity)).toEqual({
      type: `INCREMENT_MISTAKES`,
      payload: 0
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload when genre answer is incorrect`, () => {
    expect(ActionCreator.incrementMistakes([false, true, true, false],
        {
          type: `genre`,
          genre: `jazz`,
          answers: [
            {
              src: ``,
              genre: `rock`,
            },
            {
              src: ``,
              genre: `rock`,
            },
            {
              src: ``,
              genre: `jazz`,
            },
            {
              src: ``,
              genre: `rock`,
            },
          ]
        }, 0, Infinity)).toEqual({
      type: `INCREMENT_MISTAKES`,
      payload: 1
    });
  });

  it(`Action creator resets state if user is answered incorrect and exceeded the number of permissible mistakes`, () => {
    expect(ActionCreator.incrementMistakes({
      artist: `incorrect`,
      picture: ``
    },
    {
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``
      },
      answers: [
        {
          artist: `correct`,
          picture: ``
        },
        {
          artist: `incorrect`,
          picture: ``
        },
        {
          artist: `incorrect-2`,
          picture: ``
        }
      ]
    }, Infinity, 0)).toEqual({
      type: `RESET`
    });

    expect(ActionCreator.incrementMistakes([false, true, true, false],
        {
          type: `genre`,
          genre: `jazz`,
          answers: [
            {
              src: ``,
              genre: `rock`,
            },
            {
              src: ``,
              genre: `rock`,
            },
            {
              src: ``,
              genre: `jazz`,
            },
            {
              src: ``,
              genre: `rock`,
            },
          ]
        }, Infinity, 0)).toEqual({
      type: `RESET`
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      step: -1,
      mistakes: 0
    });
  });

  it(`Reducer should increment current step by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakes: 0
    }, {
      type: `INCREMENT_STEP`,
      payload: 1
    })).toEqual({
      step: 0,
      mistakes: 0
    });

    expect(reducer({
      step: -1,
      mistakes: 0
    }, {
      type: `INCREMENT_STEP`,
      payload: 0
    })).toEqual({
      step: -1,
      mistakes: 0
    });
  });

  it(`Reducer should increment number of mistakes by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakes: 0
    }, {
      type: `INCREMENT_MISTAKES`,
      payload: 1
    })).toEqual({
      step: -1,
      mistakes: 1
    });

    expect(reducer({
      step: -1,
      mistakes: 0
    }, {
      type: `INCREMENT_MISTAKES`,
      payload: 0
    })).toEqual({
      step: -1,
      mistakes: 0
    });
  });

  it(`Reducer should correctly reset application state`, () => {
    expect(reducer({
      step: 100,
      mistakes: 20
    }, {
      type: `RESET`
    })).toEqual({
      step: -1,
      mistakes: 0
    });
  });
});
