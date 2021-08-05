import {
  DELETE_PROJECT,
  ERROR_PROJECT,
  GET_PROJECT_INFO,
  GET_ALL_TASKS,
  LOADING,
  UPDATE_PROJECT,
  CREATE_TASK,
} from "../constants/projectActionConstants";
import produce, { original } from "immer";

export const initialState = {
  projectInfo: {},
  loading: true,
};

const ProjectReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case LOADING: {
        draft.loading = !draft.loading;
        break;
        
      }
      
      case UPDATE_PROJECT: {
        const index = draft.findIndex((project) => project._id === payload._id);
        return (draft[index] = payload);
      }
      case GET_ALL_TASKS: {
        draft.projectInfo.taskLists = payload
        break;
      }
      case CREATE_TASK:{
        debugger
        const index = draft.projectInfo.taskLists.findIndex((tasklist)=>{return tasklist._id === payload.taskListId})
        console.log("this is index",index)
        draft.projectInfo.taskLists[index].task.push(payload)
        break;
      }

      case DELETE_PROJECT: {
        const newDraft = original(draft);
        delete newDraft[1];
        return newDraft;
      }
      case GET_PROJECT_INFO: {
        draft.projectInfo = payload;
      }
      case ERROR_PROJECT: {
        return draft;
      }
      default: {
      }
    }
  });
};

export default ProjectReducer;
