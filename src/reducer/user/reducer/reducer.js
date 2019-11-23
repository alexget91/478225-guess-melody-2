const initialState = {
  isAuthorizationRequired: false,
  user: null,
};

const ActionTypes = {
  SET_AUTHORIZATION_REQUIRED: `SET_AUTHORIZATION_REQUIRED`,
  SET_USER: `SET_USER`,
};

const ActionCreator = {
  setAuthorizationRequired: (flag) => ({
    type: ActionTypes.SET_AUTHORIZATION_REQUIRED,
    payload: flag
  }),
  setUser: (data) => ({
    type: ActionTypes.SET_USER,
    payload: data
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_AUTHORIZATION_REQUIRED:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload
      });
    case ActionTypes.SET_USER:
      return Object.assign({}, state, {
        user: action.payload
      });
  }

  return state;
};

export {ActionTypes, ActionCreator, reducer};
