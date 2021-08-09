import { projectURL, taskListURL } from "../../client_apis/configUrl";
import {
  GetProjectInfo,
  ErrorProject,
  DeleteProject,
  GetAllTasks,
  CreateTask,
  DeleteTask,
  MoveTask,
} from "../constants/projectActionConstants";
import axios from "axios";
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

  let response = await axios.get(
    `http://localhost:3000/api/taskList/${taskListId}`
  );
  if (response) {
    console.log(response);
    dispatch(GetAllTasks(response.data));
  }
};

export const createNewTask = (taskInfo) => async (dispatch) => {
  const { taskListId } = taskInfo;
  let response = await axios.post(
    `http://localhost:3000/api/taskList/${taskListId}`,
    taskInfo
  );
  if (response) {
    console.log(response.data);
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

export const deleteTask = (taskInfo) => async (dispatch) => {
  const { taskListId } = taskInfo;
  let response = await axios.delete(
    `http://localhost:3000/api/taskList/${taskListId}`,
    {data:taskInfo}
  );
  // let response = await taskListURL.delete("", {
  //   data: taskInfo,
  // });
  console.log("response", response);
  if (response) {
    console.log(response);
    dispatch(DeleteTask(taskInfo));
  }
};

export const moveTaskAction = (taskInfo) => async (dispatch) => {
  const { sourceTaskListId } = taskInfo;
  let response = await axios.put(
    `http://localhost:3000/api/taskList/${sourceTaskListId}/move`,
    {data:taskInfo}
  );
  // let response = await taskListURL.delete("", {
  //   data: taskInfo,
  // });
  console.log("response", response);
  if (response) {
    console.log(response);
    dispatch(MoveTask(taskInfo));
  }
};
