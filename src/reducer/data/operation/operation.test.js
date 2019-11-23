import configureAPI from "../../../api";
import MockAdapter from "axios-mock-adapter";
import Operation from "./operation";
import {ActionTypes} from "../reducer/reducer";

const api = configureAPI();
const apiMock = new MockAdapter(api);

it(`Should make a correct API call to /questions`, () => {
  const questionsDispatch = jest.fn();
  const questionsLoader = Operation.loadQuestions();
  const mockQuestions = [{foo: `bar`}];

  apiMock
    .onGet(`/questions`)
    .reply(200, mockQuestions);

  return questionsLoader(questionsDispatch, null, api)
    .then(() => {
      expect(questionsDispatch).toHaveBeenCalledTimes(1);
      expect(questionsDispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.SET_QUESTIONS,
        payload: mockQuestions,
      });
    });
});
