import React from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimersDashboard extends React.Component {

    render() {
        return (
            <div className='container'>
                <div/>
                <div className="column">
                    <EditableTimerList />
                    <ToggleableTimerForm isOpen={true}/>
                </div>
                <div/>
            </div>
        )
    }
}

export default TimersDashboard;