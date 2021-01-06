import React from 'react';
import Status from '../shared/Status';

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];
//abc

const Task = props => {
    return (
        <div className="task">
            <div className="task-header">
                <div>{props.task.title}</div>
                <Status status={props.task.status} statuses={TASK_STATUSES} onChange={onStatusChange}/>
            </div>
            <hr/>
            <div className="task-body">{props.task.description}</div>
        </div>
    );

    function onStatusChange(e) {
        props.onStatusChange(props.task.id, e.target.value);
        //props.task.status = e.target.value;
        props.onStatusChange(props.task);
    }
}

export default Task