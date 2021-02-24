import EditableTimer from './EditableTimer';
import React from 'react';

class EditableTimerList extends React.Component {

    render () {
        const timers = this.props.timers.map((timer)=>(
            <EditableTimer 
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
                onFormSubmit={this.props.onFormSubmit}
                onFormDelete={this.props.onFormDelete}
            />
        ))

        return (
            <div className='timers'>
                {timers}
            </div>
        );
    }
}

export default EditableTimerList;