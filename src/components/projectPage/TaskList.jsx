import React, { useEffect } from "react";
import Task from "./Task";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { LOADING } from "../../redux/constants/projectActionConstants";
import {
  getAllTasks,
  createNewTask,
} from "../../redux/actions/projectPageActions";
import useInput from "../../hooks/useinput";

function TaskList({ tasklist }) {
  const dispatch = useDispatch();
  const projectInfo = useSelector((state) => state.ProjectReducer.projectInfo);
  const {loading} = projectInfo
  const [taskName, userInput] = useInput({ type: "text" });
  const { _id,taskListName, task } = tasklist;
  const addTaskHandler = (taskListId) => {
    dispatch(
      createNewTask({
        taskName: taskName,
        status: "inactive",
        taskListId: taskListId,
      })
    );
  };

  return (
    <div>
            <h1>{taskListName}</h1>
            {userInput}
            <button
              onClick={() => {
                addTaskHandler(_id);
              }}
            >
              nama
            </button>
            <br />
            {loading ? (
              <h1>Loading</h1>
            ) : (
              task.map((task) => {
                return <Task task={task} />;
              })
            )}
    </div>
  );
}

export default TaskList;
