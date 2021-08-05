// export async function getProjects(db) {
//   return db.collection("projects").find().toArray();
// }
import Projects from "../models/projects";
import Users from "../models/users";
import TaskLists from "../models/tasklists";
import Task from "../models/tasks";
import Comments from "../models/comments";
import { model, Types } from "mongoose";

export async function getAllProjects(
  projection = "projectName description",
  populate = ""
) {
  const allProject = await Projects.find({}, projection)
    .lean()
    .populate(populate)
    .exec();
  return allProject;
}
export async function getProject(projectId, projection = "", populate = "") {
  const Project = await Projects.aggregate([
    {
      $match: {
        _id: Types.ObjectId(projectId),
      },
    },
    {
      $lookup: {
        from: "tasklists",
        let: {
          projectId: "$_id",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$$projectId", "$projectId"],
              },
            },
          },
        ],
        as: "taskListLookups",
      },
    },
    {
      $unwind: "$taskListLookups",
    },
    {
      $lookup: {
        from: "tasks",
        let: {
          taskListId: "$taskListLookups._id",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$$taskListId", "$taskListId"],
              },
            },
          },
        ],
        as: "taskLookups",
      },
    },
    {
      $unwind: "$taskLookups",
    },
    {
      $group: {
        _id: "$taskListLookups._id",
        tasks: {
          $addToSet: "$taskLookups",
        },
        projectName: {
          $first: "$projectName",
        },
        description: {
          $first: "$description",
        },
        id: {
          $first: "$_id",
        },
        taskListName: {
          $first: "$taskListLookups.taskListName",
        },
      },
    },
    {
      $group: {
        _id: "$id",
        taskLists: {
          $addToSet: {
            _id:"$_id",
            taskListName: "$taskListName",
            task: "$tasks",
          },
        },
        projectName: {
          $first: "$projectName",
        },
        description: {
          $first: "$description",
        },
        id: {
          $first: "$id",
        },
      },
    },
    {
      $project: {
        id: 0,
      },
    },
  ]);
  console.log("aggregate project info", Project);
  return Project[0];
}
export async function insertProject(project) {
  console.log("this is lala", project);
  project.projectOwner = Types.ObjectId(project.projectOwner);
  const newProject = new Projects(project);
  let saveNewProject = await newProject.save();
  console.log(saveNewProject);
  return saveNewProject;
}

export async function deleteProject(projectId) {
  console.log("thishis", projectId);
  const foundProjectInfo = Projects.findOneAndDelete({ _id: projectId });
  return foundProjectInfo;
}
