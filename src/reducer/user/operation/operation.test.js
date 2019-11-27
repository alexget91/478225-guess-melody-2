import configureAPI from "../../../api";
import MockAdapter from "axios-mock-adapter";
import Operation from "./operation";
import {ActionTypes} from "../reducer/reducer";

const api = configureAPI();
const apiMock = new MockAdapter(api);
const mockUser = [{foo: `bar`}];

describe(`Should make a correct API calls`, () => {
  it(`To sign in`, () => {
    const dispatch = jest.fn();
    const userLoader = Operation.signIn();

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

  it(`To check authorize`, () => {
    const dispatch = jest.fn();
    const checkAuth = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, mockUser);

    return checkAuth(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionTypes.SET_AUTHORIZATION_REQUIRED,
          payload: false,
        });
      });
  });
});
