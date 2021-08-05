import { projectURL, taskListURL } from "../../client_apis/configUrl";
import {
  GetProjectInfo,
  ErrorProject,
  DeleteProject,
  GetAllTasks,
  CreateTask,
} from "../constants/projectActionConstants";
import axios from 'axios'
export const getProjectInfo = (projectId) => async (dispatch, getState) => {
  // getState is to collect data from current state from store
  try {
    await projectURL
      .get(`/${projectId}`)
      .then((response) => {
        dispatch(GetProjectInfo(response.data));
      })
      .catch((error) => {
        let errorResponse = error;
        dispatch(ErrorProject(errorResponse));
      });
  } catch {}
};

export const getAllTasksList = (taskListId) => async (dispatch) => {
  let response = await axios.get(`http://localhost:3000/api/taskList/${taskListId}`);
  if (response) {
    console.log(response)
    dispatch(GetAllTasks(response.data));
  }
};

export const createNewTask = (taskInfo) => async (dispatch) => {
  console.log("taskInfo",taskInfo)
  const {taskListId} = taskInfo
  let response = await axios.post(`http://localhost:3000/api/taskList/${taskListId}`,taskInfo);
  if (response) {
    console.log(response.data)
    dispatch(CreateTask(response.data));
  }
};



export const deleteProject = (projectId) => async (dispatch) => {
  let response = await projectURL.delete("/", {
    data: projectId,
  });
  console.log("response", response);
  if (response) {
    console.log(projectId);
    dispatch(DeleteProject(projectId));
  }
};
