// export async function getProjects(db) {
//   return db.collection("projects").find().toArray();
// }
import Projects from "../models/projects";
import Users from "../models/users";
import TaskLists from "../models/tasklists";
import Task from "../models/tasks";
import Comments from "../models/comments";
import { model, Types } from "mongoose";

export async function getTaskList(taskListId, projection = "", populate = "") {
  const taskLists = await TaskLists.find(
    { projectId: Types.ObjectId(taskListId) },
    projection
  )
    .lean()
    .populate("tasks");
  console.log(taskLists);
  return taskLists;
}
createTask;

export async function createTask(task, projection = "", populate = "") {
  task.taskListId = Types.ObjectId(task.taskListId);
  console.log("task", task);
  const newTask = new Task(task);
  let saveNewTask = await newTask.save();
  return saveNewTask;
}
// export async function insertTask(task) {
//   console.log("this is lala", task);
//   project.projectOwner = Types.ObjectId(project.projectOwner);
//   const newProject = new Projects(project);
//   let saveNewProject = await newProject.save();
//   console.log(saveNewProject);
//   return saveNewProject;
// }
