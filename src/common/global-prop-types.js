import PropTypes from "prop-types";

const genreQuestion = {
  type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  genre: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.exact({
    genre: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
};

const artistQuestion = {
  type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  song: PropTypes.exact({
    artist: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  answers: PropTypes.arrayOf(PropTypes.exact({
    artist: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })).isRequired
};

const userData = {
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export {genreQuestion, artistQuestion, userData};
