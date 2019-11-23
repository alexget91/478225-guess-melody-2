import configureAPI from "../../../api";
import MockAdapter from "axios-mock-adapter";
import Operation from "./operation";
import {ActionTypes} from "../reducer/reducer";

const api = configureAPI();
const apiMock = new MockAdapter(api);

it(`Should make a correct API call to /login`, () => {
  const dispatch = jest.fn();
  const userLoader = Operation.signIn();
  const mockUser = [{foo: `bar`}];

  apiMock
    .onPost(`/login`)
    .reply(200, mockUser);

  return userLoader(dispatch, null, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.SET_USER,
        payload: mockUser,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionTypes.SET_AUTHORIZATION_REQUIRED,
        payload: false,
      });
    });
});
