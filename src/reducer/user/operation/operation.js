import {ActionCreator} from "../reducer/reducer";

const Operation = {
  signIn: (email, password) => (dispatch, _, api) => {
    return api.post(`/login`, {
      email,
      password
    })
      .then((response) => {
        dispatch(ActionCreator.setUser(response.data));
        dispatch(ActionCreator.setAuthorizationRequired(false));
      });
  },
  checkAuth: () => {
    return (dispatch, _getState, api) => {
      return api
        .get(`/login`)
        .then((res) => {
          if (res.status === 200) {
            dispatch(ActionCreator.setAuthorizationRequired(false));
          }
        });
    };
  },
};

export default Operation;
