import {getAuthorizationRequired} from "./selectors";
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
