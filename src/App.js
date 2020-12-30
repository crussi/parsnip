import React, { Component } from 'react';
import { connect } from 'react-redux'
import TasksPage from './components/tasks/TasksPage';
import { createTask, editTask, fetchTasks  } from './actions';


  class App extends Component {
    componentDidMount() {
      this.props.dispatch(fetchTasks());
    }
        
    onCreateTask = ({ title, description }) => {
      this.props.dispatch(createTask({ title, description }));
    }
    onStatusChange = (id, status) => {
      this.props.dispatch(editTask( id, { status }));
    }

    render() {
      //console.log('props from App: ', this.props);
      return (
        <div className="main-content">
          <TasksPage tasks={this.props.tasks}
          onCreateTask={this.onCreateTask}
          onStatusChange={this.onStatusChange}
          />
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      tasks: state.tasks
    }
  }


export default connect(mapStateToProps)(App);
