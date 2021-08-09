import React, { useEffect } from "react";
import Task from "./Task";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { LOADING } from "../../redux/constants/projectActionConstants";
import {
  getAllTasks,
  createNewTask,
  deleteTask,
} from "../../redux/actions/projectPageActions";
import useInput from "../../hooks/useinput";

import styles from "../../../styles/Home.module.scss";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function TaskList({ tasklist }) {
  const dispatch = useDispatch();
  const projectInfo = useSelector((state) => state.ProjectReducer.projectInfo);
  const { loading } = projectInfo;
  const [taskName, userInput] = useInput({ type: "text" });
  const { _id, taskListName, task } = tasklist;
  const getStatusStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "#00BFFF" : "",
  });
  const addTaskHandler = (taskListId) => {
    dispatch(
      createNewTask({
        taskName: taskName,
        status: "inactive",
        taskListId: taskListId,
      })
    );
  };

  const deleteTaskHandler = (taskListId, taskId) => {
    dispatch(
      deleteTask({
        taskId: taskId,
        taskListId: taskListId,
      })
    );
  };

  return (
    <Droppable droppableId={tasklist._id}>
      {(provided, snapshot) => (
        <div
          className={styles.taskList}
          ref={provided.innerRef}
          style={getStatusStyle(snapshot.isDraggingOver)}
        >
          <div className={styles.cardheader}>
            <h5>{taskListName}</h5>
            <h6>{task.length > 0 ? task.length : ""}</h6>
          </div>
          <div>
            {userInput}
            <button
              onClick={() => {
                addTaskHandler(_id);
              }}
            >
              nama
            </button>
          </div>

          {task.map((taskin, index) => {
            return (
              <Task
                key={taskin._id}
                taskListId={_id}
                deleteTaskHandler={deleteTaskHandler}
                index={index}
                task={taskin}
              />
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default TaskList;
