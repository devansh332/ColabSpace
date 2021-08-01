import { projectURL } from "../config/configUrl";
import {
  GetProject,
  AddProject,
  ErrorProject,
} from "../constants/projectActionConstants";

export const getAllProject = () => async (dispatch, getState) => {
  // getState is to collect data from current state from store
  try{
  await projectURL
    .get("/")
    .then((response) => {
      dispatch(GetProject(response.data.projects));
    })
    .catch((error) => {
      let errorResponse = error;
      dispatch(ErrorProject(errorResponse));
    });
}
catch{

}};

export const addNewProject = (newProject) => async (dispatch) => {
  console.log("tis came here");
  let response = await projectURL.post(`${origin}/api/projects/`, newProject);
  if (response) {
    dispatch(AddProject(response.data.projects));
  }
};
