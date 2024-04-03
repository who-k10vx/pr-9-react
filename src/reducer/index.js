import { combineReducers } from "redux";
import reducer from "./Counter";

const rootreducer = combineReducers({
    crud: reducer
})

export default rootreducer