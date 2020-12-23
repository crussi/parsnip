//import { render } from "@testing-library/react";
import React, { Component } from "react";
import TaskList from "./TaskList";

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewCardForm: false,
      title: "",
      description: "",
    };
  }

  onTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  onCreateTask = (e) => {
    e.preventDefault();
    this.props.onCreateTask({
      title: this.state.title,
      description: this.state.description,
    });
    this.resetForm();
  };

  toggleForm = () => {
      this.setState({ showNewCardForm: !this.state.showNewCardForm });
  }

  renderTaskLists() {
    const { tasks } = this.props;
    return TASK_STATUSES.map((status) => {
      const statusTasks = tasks.filter((task) => task.status === status);
      return <TaskList key={status} status={status} tasks={statusTasks} />;
    });
  }

  render() {
    // return (
    //   <div className="tasks">
    //     <div className="task-lists">{this.renderTaskLists()}</div>
    //   </div>
    // );
    return (
        <div className="task-list">
            <div className="task-list-header">
                <button className="button button-default" onClick={this.toggleForm}>
                    + New task
                </button>
            </div>
        </div>
    );
  }
}

export default TasksPage;
