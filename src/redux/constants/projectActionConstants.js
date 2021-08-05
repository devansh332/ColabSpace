// change naming as per convention

export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const ADD_PROJECT = "ADD_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const GET_PROJECT_INFO = "GET_PROJECT_INFO";
export const GET_ALL_TASKS = "GET_ALL_TASKS";
export const ERROR_PROJECT = "ERROR_PROJECT";
export const CREATE_TASK  = "CREATE_TASK"
export const LOADING = "LOADING"

export const UpdateProject = (data) => ({
  type: UPDATE_PROJECT,
  payload: data,
});

export const AddUser = (data) => ({
  type: ADD_USER,
  payload: data,
});

export const DeleteUser = (data) => ({
  type: DELETE_USER,
  payload: data,
});
export const GetProjectInfo = (data) => ({
  type: GET_PROJECT_INFO,
  payload: data,
});

export const GetAllTasks = (data) => ({
  type: GET_ALL_TASKS,
  payload: data,
});
export const ErrorProject = (error) => {
  return {
    type: ERROR_PROJECT,
    error: error,
  };
};

export const CreateTask = (data) => {
  return {
    type: CREATE_TASK,
    payload:data
  };
};
export const Loading = () => {
  return {
    type: LOADING,
  };
};
