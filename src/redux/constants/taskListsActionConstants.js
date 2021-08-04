// change naming as per convention

export const UPDATE_TASK_LIST = "UPDATE_TASK_LIST";
export const ADD_TASK_LIST = "ADD_TASK_LIST";
export const DELETE_TASK_LIST = "DELETE_TASK_LIST";
export const GET_TASK_LIST = "GET_TASK_LIST";

export const UpdateTaskList = (data) => ({
  type: UPDATE_TASK_LIST,
  payload: data,
});

export const AddTaskList = (data) => ({
  type: ADD_TASK_LIST,
  payload: data,
});

export const DeleteTaskList = (data) => ({
  type: DELETE_TASK_LIST,

  payload: data,
});
export const GetAllTaskList = (data) => ({
  type: GET_TASK_LIST,
  payload: data,
});
