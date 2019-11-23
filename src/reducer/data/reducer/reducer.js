const initialState = {
  questions: [],
};

const ActionTypes = {
  SET_QUESTIONS: `SET_QUESTIONS`,
};

const ActionCreator = {
  setQuestions: (questions) => ({
    type: ActionTypes.SET_QUESTIONS,
    payload: questions
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.payload
      });
  }

  return state;
};

export {ActionTypes, ActionCreator, reducer};
