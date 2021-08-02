// export async function getProjects(db) {
//   return db.collection("projects").find().toArray();
// }
import Projects from "../models/projects"
import Users from "../models/users"
import TaskLists from "../models/tasklists"
import Comments from "../models/comments"
export async function getProjects() {
  debugger
  const allProject =  await Projects.find({},"projectName description projectOwner").lean().populate("projectOwner").exec()
  return allProject;
}

export async function insertProject(project) {
  const newProject = new Projects(project)
  let saveNewProject = await newProject.save()
  console.log(saveNewProject)
  return saveNewProject
}

export async function deleteProject(db, projectId) {
  return db.collection("projects").remove({ _id: project._id });
}
