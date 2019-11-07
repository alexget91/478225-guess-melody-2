const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/7/79/National_anthem_of_Algeria%2C_by_the_U.S._Navy_Band.oga`,
        genre: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/7/74/L%27Aube_Nouvelle.ogg`,
        genre: `pop`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/c/cb/United_States_Navy_Band_-_Fatshe_leno_la_rona.ogg`,
        genre: `jazz`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/7/7e/Hymne_National_du_Burkina_Faso.ogg`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `genre`,
    genre: `folk`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/7/79/National_anthem_of_Algeria%2C_by_the_U.S._Navy_Band.oga`,
        genre: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/7/74/L%27Aube_Nouvelle.ogg`,
        genre: `folk`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/c/cb/United_States_Navy_Band_-_Fatshe_leno_la_rona.ogg`,
        genre: `jazz`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/7/7e/Hymne_National_du_Burkina_Faso.ogg`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/f/fc/La_Concorde.ogg`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jack Daniels`,
      src: `https://upload.wikimedia.org/wikipedia/commons/7/74/L%27Aube_Nouvelle.ogg`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
    ],
  },
];

export default questions;
