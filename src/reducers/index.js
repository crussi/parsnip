import { uniqueId } from '../actions';

const mockTasks = [
    {
      id: uniqueId(),
      title: 'Learn Redux',
      description: 'The store, actions and reducers ... oh my!',
      status: 'In Progress'
    },
    {
      id: uniqueId(),
      title: 'Peace on Earth',
      description: 'No big deal',
      status: 'In Progress'
    },
  ];

export default function tasks(state = { tasks: mockTasks }, action) {
  const {type, payload } = action;
  if (type === 'CREATE_TASK') {
    return { tasks: state.tasks.concat(payload)};
  }
  if (type === 'EDIT_TASK') {

    return {
      tasks: state.tasks.map(task => {
        if (task.id === payload.id) {
          return Object.assign({}, task, payload.params);
        }
        return task;
      })
    }
  }  
  return state;
}

