
export default function tasks(state = { tasks: [] }, action) {
  const {type, payload } = action;

  switch(type) {
    case 'EDIT_TASK': {
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        })
      }
    }
    case 'FETCH_TASKS_SUCCEEDED': {
      return { 
        ...state,
        tasks: action.payload.tasks
      };
    }
    case 'CREATE_TASK_SUCCEEDED': {
      return {
        ...state,
        tasks: state.tasks.concat(payload.task),
      };
    }
    default: {
      return state;
    }
  }


}



