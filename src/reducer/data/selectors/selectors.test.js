import {getGenreQuestions, getQuestions} from "./selectors";
import NameSpace from "../../name-spaces";
import {QuestionType} from "../../../common/constants";

const mockQuestions = [
  {
    type: QuestionType.GENRE,
    genre: `rock`,
    answers: [],
  },
  {
    type: QuestionType.ARTIST,
    song: {
      artist: `1`,
      src: ``,
    },
    answers: [],
  },
  {
    type: QuestionType.GENRE,
    genre: `jazz`,
    answers: [],
  },
  {
    type: QuestionType.GENRE,
    genre: `folk`,
    answers: [],
  },
  {
    type: QuestionType.ARTIST,
    song: {
      artist: `2`,
      src: ``,
    },
    answers: [],
  },
];

const mockState = {
  [NameSpace.DATA]: {
    questions: mockQuestions,
  },
};

it(`Questions selector returns correct questions from state`, () => {
  expect(getQuestions(mockState)).toEqual(mockQuestions);
});

it(`Genre questions selector returns correct questions from state`, () => {
  expect(getGenreQuestions(mockState)).toEqual([
    {
      type: QuestionType.GENRE,
      genre: `rock`,
      answers: [],
    },
    {
      type: QuestionType.GENRE,
      genre: `jazz`,
      answers: [],
    },
    {
      type: QuestionType.GENRE,
      genre: `folk`,
      answers: [],
    },
  ]);
});

/* it(`Artist questions selector returns correct questions from state`, () => {
  expect(getArtistQuestions(mockState)).toEqual([
    {
      type: QuestionType.ARTIST,
      song: {
        artist: `1`,
        src: ``,
      },
      answers: [],
    },
    {
      type: QuestionType.ARTIST,
      song: {
        artist: `2`,
        src: ``,
      },
      answers: [],
    },
  ]);
});*/
