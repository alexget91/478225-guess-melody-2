import settings from "../../../common/settings";
import {QuestionType} from "../../../common/constants";

const initialState = {
  step: -1,
  mistakes: 0,
  time: settings.gameTime
};

const ActionTypes = {
  INCREMENT_STEP: `INCREMENT_STEP`,
  SET_STEP: `SET_STEP`,
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  DECREMENT_TIME: `DECREMENT_TIME`,
  RESET: `RESET`,
};

const isArtistAnswerCorrect = (userAnswer, question) =>
  userAnswer === question.song.artist;

const isGenreAnswerCorrect = (userAnswer, question) =>
  userAnswer.every((it, i) => it === (
    question.answers[i].genre === question.genre
  ));

const ActionCreator = {
  incrementStep: () => ({
    type: ActionTypes.INCREMENT_STEP,
    payload: 1
  }),

  incrementMistakes: (userAnswer, question) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case QuestionType.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
        break;
      case QuestionType.GENRE:
        answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
        break;
    }

    return {
      type: ActionTypes.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1
    };
  },

  decrementTime: () => ({
    type: ActionTypes.DECREMENT_TIME,
    payload: 1
  }),

  reset: () => ({type: ActionTypes.RESET})
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_STEP:
      return Object.assign({}, state, {
        step: state.step + action.payload
      });
    case ActionTypes.INCREMENT_MISTAKES:
      return Object.assign({}, state, {
        mistakes: state.mistakes + action.payload
      });
    case ActionTypes.DECREMENT_TIME:
      return Object.assign({}, state, {
        time: state.time - action.payload
      });
    case ActionTypes.RESET:
      return Object.assign({}, initialState, {
        step: 0,
        questions: state.questions
      });
  }

  return state;
};

export {ActionTypes, ActionCreator, reducer, isArtistAnswerCorrect, isGenreAnswerCorrect};
