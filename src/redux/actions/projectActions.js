import { GetProject } from "../constants/projectActionConstants";

export const getAllProject = () => async (dispatch, getState) => {
  // getState is to collect data from current state from store
  const projects = [
    {
      _id: 1322,
      projectName: "StartingProject",
      projectOwner: { userName: "Devansh" },
      description: "Another description",
    },
  ];
  return dispatch(GetProject(projects))
};
