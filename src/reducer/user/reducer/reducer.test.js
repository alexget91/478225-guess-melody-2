import {ActionTypes, ActionCreator, reducer} from "./reducer";

describe(`Action creators works correctly`, () => {
  it(`Action creator for set user returns correct action`, () => {
    expect(ActionCreator.setUser([{foo: `bar`}])).toEqual({
      type: ActionTypes.SET_USER,
      payload: [{foo: `bar`}]
    });
  });

  it(`Action creator for set "authorization required" returns correct action`, () => {
    expect(ActionCreator.setAuthorizationRequired(true)).toEqual({
      type: ActionTypes.SET_AUTHORIZATION_REQUIRED,
      payload: true
    });
  });
});

describe(`Reducer works correctly`, () => {
  const initialState = {
    isAuthorizationRequired: false,
    user: null,
  };

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should set given value as a user`, () => {
    expect(reducer(initialState, {
      type: ActionTypes.SET_USER,
      payload: [{foo: `bar`}]
    })).toEqual(Object.assign({}, initialState, {
      user: [{foo: `bar`}],
    }));
  });

  it(`Reducer should set given value as a "authorization required"`, () => {
    expect(reducer(initialState, {
      type: ActionTypes.SET_AUTHORIZATION_REQUIRED,
      payload: true
    })).toEqual(Object.assign({}, initialState, {
      isAuthorizationRequired: true,
    }));
  });
});
