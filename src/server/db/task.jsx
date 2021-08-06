import Projects from "../models/projects";
import Users from "../models/users";
import TaskLists from "../models/tasklists";
import Task from "../models/tasks";
import Comments from "../models/comments";
import { model, Types } from "mongoose";

export async function createTask(taskinfo, projection = "", populate = "") {
  taskinfo.taskListId = Types.ObjectId(taskinfo.taskListId);
  const newTask = new Task(taskinfo);
  let saveNewTask = await newTask.save();
  return saveNewTask;
}

export async function deleteTask(taskinfo, projection = "", populate = "") {
 const foundTask = Task.findOneAndDelete({_id: taskinfo.taskId});
  return foundTask;
}


export async function moveTask(taskinfo, projection = "", populate = "") {
    const foundTask = Task.findOneAndUpdate(
      { _id: taskinfo.taskId },
      {
        taskListId: Types.ObjectId(taskinfo.destinationTaskListId),
      }
    );
    return foundTask;
  }
  