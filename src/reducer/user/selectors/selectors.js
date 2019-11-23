import NameSpace from "../../name-spaces";

const NAME_SPACE = NameSpace.USER;

const getAuthorizationRequired = (state) => {
  return state[NAME_SPACE].isAuthorizationRequired;
};

export {getAuthorizationRequired};
