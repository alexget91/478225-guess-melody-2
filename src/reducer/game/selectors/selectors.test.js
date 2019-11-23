import {getMistakes, getStep, getTime} from "./selectors";
import NameSpace from "../../name-spaces";

const mockState = {
  [NameSpace.GAME]: {
    step: 11,
    mistakes: 2,
    time: 123,
  },
};

it(`Step selector returns correct step from state`, () => {
  expect(getStep(mockState)).toEqual(11);
});

it(`Mistakes selector returns correct mistakes from state`, () => {
  expect(getMistakes(mockState)).toEqual(2);
});

it(`Time selector returns correct time from state`, () => {
  expect(getTime(mockState)).toEqual(123);
});
