import {QuestionType} from "./constants";

type Song = {
  artist: string,
  picture: string,
};

type ArtistAnswer = {
  artist: string,
  picture: string,
};

type GenreAnswer = {
  genre: string,
  src: string,
};

type ArtistQuestion = {
  type: QuestionType,
  song: Song,
  answers: Array<ArtistAnswer>,
};

type GenreQuestion = {
  type: QuestionType,
  genre: string,
  answers: Array<GenreAnswer>,
};

type User = {
  id: number,
  email: string,
};

export {Song, ArtistQuestion, GenreQuestion, User};
