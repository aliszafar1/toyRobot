import { combineReducers } from "redux";
import RobotReducer from "./robot/reducer";

const rootReducer = combineReducers({ RobotReducer });
export default rootReducer;