import {ActionCreator, ActionTypes, isArtistAnswerCorrect, isGenreAnswerCorrect, reducer} from "./reducer";
import {QuestionType} from "../../../common/constants";

describe(`Business logic is correct`, () => {
  it(`Artist answer is checked correctly`, () => {
    expect(isArtistAnswerCorrect(`1`, {
      type: QuestionType.ARTIST,
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
      type: QuestionType.ARTIST,
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
      type: QuestionType.GENRE,
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
      type: QuestionType.GENRE,
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
      type: ActionTypes.INCREMENT_STEP,
      payload: 1
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload when artist answer is correct`, () => {
    expect(ActionCreator.incrementMistakes(`correct`,
        {
          type: QuestionType.ARTIST,
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
      type: ActionTypes.INCREMENT_MISTAKES,
      payload: 0
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload when artist answer is incorrect`, () => {
    expect(ActionCreator.incrementMistakes({
      artist: `incorrect`,
      picture: ``
    },
    {
      type: QuestionType.ARTIST,
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
      type: ActionTypes.INCREMENT_MISTAKES,
      payload: 1
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload when genre answer is correct`, () => {
    expect(ActionCreator.incrementMistakes([false, false, true, false],
        {
          type: QuestionType.GENRE,
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
      type: ActionTypes.INCREMENT_MISTAKES,
      payload: 0
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload when genre answer is incorrect`, () => {
    expect(ActionCreator.incrementMistakes([false, true, true, false],
        {
          type: QuestionType.GENRE,
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
      type: ActionTypes.INCREMENT_MISTAKES,
      payload: 1
    });
  });

  it(`Action creator for decrement time returns correct action`, () => {
    expect(ActionCreator.decrementTime()).toEqual({
      type: ActionTypes.DECREMENT_TIME,
      payload: 1
    });
  });

  it(`Action creator for reset returns correct action`, () => {
    expect(ActionCreator.reset()).toEqual({
      type: ActionTypes.RESET,
    });
  });
});

describe(`Reducer works correctly`, () => {
  const initialState = {
    step: -1,
    mistakes: 0,
    time: 300
  };

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should increment number of mistakes by a given value`, () => {
    expect(reducer(initialState, {
      type: ActionTypes.INCREMENT_MISTAKES,
      payload: 1
    })).toEqual(Object.assign({}, initialState, {
      mistakes: 1,
    }));

    expect(reducer(initialState, {
      type: ActionTypes.INCREMENT_MISTAKES,
      payload: 0
    })).toEqual(Object.assign({}, initialState));
  });

  it(`Reducer should correctly reset application state`, () => {
    expect(reducer({
      questions: [{foo: `bar`}],
      step: 100,
      mistakes: 20,
      time: 300
    }, {
      type: ActionTypes.RESET
    })).toEqual(Object.assign({}, initialState, {
      step: 0,
      questions: [{foo: `bar`}]
    }));
  });
});
