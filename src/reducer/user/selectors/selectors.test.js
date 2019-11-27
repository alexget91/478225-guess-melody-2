import {getAuthorizationRequired, getUser} from "./selectors";
import NameSpace from "../../name-spaces";

const mockState = {
  [NameSpace.USER]: {
    isAuthorizationRequired: false,
    user: null,
  },
};

it(`"Authorization required" selector returns correct value from state`, () => {
  expect(getAuthorizationRequired(mockState)).toEqual(false);
});

it(`User selector returns correct value from state`, () => {
  expect(getUser(mockState)).toEqual(null);
});
