import {createSelector} from "reselect";
import NameSpace from "../../name-spaces";

const NAME_SPACE = NameSpace.DATA;

const randomFilter = (_state) => {
  return Math.random() > 0.5;
};

const getQuestions = (state) => {
  return state[NAME_SPACE].questions;
};

const getGenreQuestions = createSelector(
    getQuestions,
    (questions) => questions.filter((it) => it.type === `genre`)
);

const getArtistQuestions = createSelector(
    // Функция принимает state и возвращает результат
    getQuestions,
    // Функция так же принимает state и возвращает результат
    randomFilter,
    // Последняя функция принимает результаты всех предыдущих функций
    // и возвращает результат на их основе
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => resultTwo && it.type === `artist`);
    }
);

export {getQuestions, getGenreQuestions, getArtistQuestions};
