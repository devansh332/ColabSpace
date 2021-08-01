// change naming as per convention

export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const ADD_PROJECT = "ADD_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const GET_PROJECT = "GET_PROJECT";
export const ERROR_PROJECT = "ERROR_PROJECT";

export const UpdateProject = (data) => ({
  type: UPDATE_PROJECT,
  payload: data,
});

export const AddProject = (data) => ({
  type: ADD_PROJECT,
  payload: data,
});

export const DeleteProject = (data) => ({
  type: DELETE_PROJECT,

  payload: data,
});
export const GetProject = (data) => ({
  type: GET_PROJECT,
  payload: data,
});

export const ErrorProject = (error) => {
  return {
    type: ERROR_PROJECT,
    error: error,
  };
};
