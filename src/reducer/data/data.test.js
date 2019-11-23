import {ActionTypes, ActionCreator, reducer} from "./data";

describe(`Action creators works correctly`, () => {
  it(`Action creator for set questions returns correct action`, () => {
    expect(ActionCreator.setQuestions([{foo: `bar`}])).toEqual({
      type: ActionTypes.SET_QUESTIONS,
      payload: [{foo: `bar`}]
    });
  });
});

describe(`Reducer works correctly`, () => {
  const initialState = {
    questions: [],
  };

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should set given value as a questions`, () => {
    expect(reducer(initialState, {
      type: ActionTypes.SET_QUESTIONS,
      payload: [{foo: `bar`}]
    })).toEqual(Object.assign({}, initialState, {
      questions: [{foo: `bar`}],
    }));
  });
});
