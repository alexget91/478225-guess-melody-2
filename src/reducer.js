import settings from "./mocks/settings";

const FAIL_SCREEN_STEPS = {
  time: -2,
  mistakes: -3,
};

const isArtistAnswerCorrect = (userAnswer, question) =>
  userAnswer === question.song.artist;

const isGenreAnswerCorrect = (userAnswer, question) =>
  userAnswer.every((it, i) => it === (
    question.answers[i].genre === question.genre
  ));

const ActionCreator = {
  incrementStep: () => ({
    type: `INCREMENT_STEP`,
    payload: 1
  }),

  incrementMistakes: (userAnswer, question, mistakes, maxMistakes) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case `artist`:
        answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
        break;
      case `genre`:
        answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
        break;
    }

    if (!answerIsCorrect && mistakes + 1 >= maxMistakes) {
      return {
        type: `RESET`
      };
    }

    return {
      type: `INCREMENT_MISTAKES`,
      payload: answerIsCorrect ? 0 : 1
    };
  },

  decrementTime: () => ({
    type: `DECREMENT_TIME`,
    payload: 1
  }),

  showFailScreen: (type) => ({
    type: `SET_STEP`,
    payload: FAIL_SCREEN_STEPS[type]
  }),

  reset: () => ({type: `RESET`})
};

const initialState = {
  step: -1,
  mistakes: 0,
  time: settings.gameTime
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `INCREMENT_STEP`:
      return Object.assign({}, state, {
        step: state.step + action.payload
      });
    case `SET_STEP`:
      return Object.assign({}, state, {
        step: action.payload
      });
    case `INCREMENT_MISTAKES`:
      return Object.assign({}, state, {
        mistakes: state.mistakes + action.payload
      });
    case `DECREMENT_TIME`:
      return Object.assign({}, state, {
        time: state.time - action.payload
      });
    case `RESET`:
      return Object.assign({}, initialState);
  }

  return state;
};

export {ActionCreator, reducer, isArtistAnswerCorrect, isGenreAnswerCorrect};
