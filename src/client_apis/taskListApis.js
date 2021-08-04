import Axios from 'axios';
 // const urlBackEnd = process.env.LOCAL_URL;
const urlBackEnd = 'http://localhost:3000/api';
class TaskListAPI {
    constructor() {
        this.API = Axios.create({
            baseURL: urlBackEnd,
        });
    }

    getAllTaskList(data) {
        return this.API.get(`/taskLists`, data);
    }
    updateTaskList(data) {
        return this.API.put(`/taskLists`, data);
    }
    deleteTaskList(data) {
        return this.API.delete(`/taskLists`, data);
    }
    addTaskList(data) {
        return this.API.post(`/taskLists`, data);
    }

}

export default TaskListAPI;
