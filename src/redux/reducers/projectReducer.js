import {
  ADD_PROJECT,
  DELETE_PROJECT,
  ERROR_PROJECT,
  GET_PROJECT,
  UPDATE_PROJECT,
} from "../constants/projectActionConstants";
import produce from "immer";

export const initialState = [];

const ProjectReducer = (state = initialState, action) => produce(state, draft => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PROJECT: {
      const index = draft.findIndex((project) => project._id === payload._id);
      return (draft[index] = payload);
    }
    case ADD_PROJECT: {
      draft.push(payload)
      return draft
    }

    case DELETE_PROJECT: {
      const index = draft.findIndex((project) => project._id === payload._id);
      return draft.splice(index, 1);
    }
    case GET_PROJECT: {
      return (draft = payload);
    }
    case ERROR_PROJECT: {
      return draft
    }
    default: {
      return draft;
    }
  }
});

export default ProjectReducer;
