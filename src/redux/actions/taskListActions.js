import TaskListAPI from "../../client_apis/taskListApis";
import { GetAllTaskList, AddTaskList, UpdateTaskList, DeleteTaskList} from "../constants/taskListsActionConstants";

const Api = new TaskListAPI();

export const getAllTaskList = (id='') => async (dispatch, getState) => {
        await Api.getAllTaskList()
            .then((response) => {
                dispatch(GetAllTaskList(response.data.projects[id].taskLists));
            })
            .catch((error) => {
            });
  };
export const addTaskList = (id='') => async (dispatch, getState) => {
    await Api.getAllTaskList()
        .then((response) => {
            dispatch(AddTaskList(response.data.projects[id].taskLists));
        })
        .catch((error) => {
        });
};
export const updateTaskList = (id='') => async (dispatch, getState) => {
    await Api.getAllTaskList()
        .then((response) => {
            dispatch(UpdateTaskList(response.data.projects[id].taskLists));
        })
        .catch((error) => {
        });
};
export const deleteTaskList = (id='') => async (dispatch, getState) => {
    await Api.getAllTaskList()
        .then((response) => {
            dispatch(DeleteTaskList(response.data.projects[id].taskLists));
        })
        .catch((error) => {
        });
};