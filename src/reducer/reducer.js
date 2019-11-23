import {combineReducers} from "redux";
import {reducer as game} from "./game/reducer/reducer";
import {reducer as data} from "./data/reducer/reducer";
import NameSpace from "./name-spaces";

export default combineReducers({
  [NameSpace.GAME]: game,
  [NameSpace.DATA]: data,
});
