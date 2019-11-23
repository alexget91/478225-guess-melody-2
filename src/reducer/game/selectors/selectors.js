import NameSpace from "../../name-spaces";

const NAME_SPACE = NameSpace.GAME;

const getStep = (state) => {
  return state[NAME_SPACE].step;
};

const getMistakes = (state) => {
  return state[NAME_SPACE].mistakes;
};

const getTime = (state) => {
  return state[NAME_SPACE].time;
};

export {getStep, getMistakes, getTime};
