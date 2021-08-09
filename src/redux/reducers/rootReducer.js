import { combineReducers } from "redux";
import ProjectReducer from "./ProjectReducer";
import { HYDRATE } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  ProjectReducer,
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return combinedReducer(state, action);
  }
};

export default rootReducer;
