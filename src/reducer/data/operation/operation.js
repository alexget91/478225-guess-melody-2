import {ActionCreator} from "../reducer/reducer";

const Operation = {
  loadQuestions: () => (dispatch, _, api) => {
    return api.get(`/questions`)
      .then((response) => {
        dispatch(ActionCreator.setQuestions(response.data));
      });
  },
};

export default Operation;
