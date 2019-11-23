import {getGenreQuestions, getQuestions} from "./selectors";
import NameSpace from "../../name-spaces";

const mockQuestions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [],
  },
  {
    type: `artist`,
    song: {
      artist: `1`,
      src: ``,
    },
    answers: [],
  },
  {
    type: `genre`,
    genre: `jazz`,
    answers: [],
  },
  {
    type: `genre`,
    genre: `folk`,
    answers: [],
  },
  {
    type: `artist`,
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
      type: `genre`,
      genre: `rock`,
      answers: [],
    },
    {
      type: `genre`,
      genre: `jazz`,
      answers: [],
    },
    {
      type: `genre`,
      genre: `folk`,
      answers: [],
    },
  ]);
});

/* it(`Artist questions selector returns correct questions from state`, () => {
  expect(getArtistQuestions(mockState)).toEqual([
    {
      type: `artist`,
      song: {
        artist: `1`,
        src: ``,
      },
      answers: [],
    },
    {
      type: `artist`,
      song: {
        artist: `2`,
        src: ``,
      },
      answers: [],
    },
  ]);
});*/
