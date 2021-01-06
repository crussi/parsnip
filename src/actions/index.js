import * as api from "../api";

let _id = 1;
export function uniqueId() {
  return _id++;
}

export function fetchTasks() {
  return (dispatch) => {
    api.fetchTasks().then((resp) => {
      dispatch(fetchTasksSucceeded(resp.data));
    });
  };
}

export function createTask({ title, description, status = 'Unstarted' }) {
  return (dispatch) => {
    api.createTask({ title, description, status }).then((resp) => {
      dispatch(createTaskSucceeded(resp.data));
    });
  };
}

// export function editTask(id, params = {}) {
//   return {
//     type: "EDIT_TASK",
//     payload: {
//       id,
//       params,
//     },
//   };
// }

// export function editTask({ title, description, status }) {
//   return (dispatch) => {
//     api.editTask({ title, description, status }).then((resp) => {
//       dispatch(editTaskSucceeded(resp.data));
//     });
//   };
// }

export function fetchTasksSucceeded(tasks) {
  return {
    type: "FETCH_TASKS_SUCCEEDED",
    payload: {
      tasks,
    },
  };
}

export function createTaskSucceeded(task) {
  return {
    type: "CREATE_TASK_SUCCEEDED",
    payload: {
      task,
    },
  };
}

function editTaskSucceeded(task) {
  return {
    type: 'EDIT_TASK_SUCCEEDED',
    payload: {
      task,
    },
  };
}

export function editTask(id, params = {}) {
  return (dispatch, getState) => {
    const task = getTaskById(getState().tasks, id);
    const updatedTask = Object.assign({}, task, params);

    api.editTask(id, updatedTask).then(resp => {
      dispatch(editTaskSucceeded(resp.data));
    });
  };
}

function getTaskById(tasks, id) {
  return tasks.find(task => task.id === id);
}


