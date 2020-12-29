import React from 'react';

const Status = props => {
    return (
        <select name="statuses" id="status-select" value={props.status} onChange={props.onChange}>
            {props.statuses.map(status => (
                <option key={status} value={status}>{status}</option>
            ))}
        </select>
    );
}

export default Status