import {createSelector} from "reselect";
import NameSpace from "../../name-spaces";
import {QuestionType} from "../../../common/constants";

const NAME_SPACE = NameSpace.DATA;

const randomFilter = (_state) => {
  return Math.random() > 0.5;
};

const getQuestions = (state) => {
  return state[NAME_SPACE].questions;
};

const getGenreQuestions = createSelector(
    getQuestions,
    (questions) => questions.filter((it) => it.type === QuestionType.GENRE)
);

const getArtistQuestions = createSelector(
    // Функция принимает state и возвращает результат
    getQuestions,
    // Функция так же принимает state и возвращает результат
    randomFilter,
    // Последняя функция принимает результаты всех предыдущих функций
    // и возвращает результат на их основе
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => resultTwo && it.type === QuestionType.ARTIST);
    }
);

export {getQuestions, getGenreQuestions, getArtistQuestions};
