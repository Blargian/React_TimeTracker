import React from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import { v4 as uuidv4 } from 'uuid';

class TimersDashboard extends React.Component {

    state = {
        timers: [
            {
                title: 'Practise Squats',
                project: 'Gym',
                id: uuidv4(),
                elapsed: 350000,
                runningSince: Date.now()
            },
            {
                title: 'Practise Situps',
                project: 'Gym',
                id: uuidv4(),
                elapsed: 1000,
                runningSince: Date.now()
            }
        ]
    };

    handleCreateFormSubmit = (timer) => {

        const newTimer = {
            title: timer.title, 
            project: timer.project,
            id: uuidv4(),
            elapsed: 0,
            runningSince: Date.now(),
        };

        this.setState({
            timers: [...this.state.timers, newTimer]
        });
    }

    handleEditFormSubmit = (updates) => {
        this.updateTimer(updates);
    };

    updateTimer = (updates) => {
        this.setState({
            timers: this.state.timers.map((timer)=>{
                if(updates.id === timer.id) {
                    return Object.assign({},timer,{
                        title: updates.title,
                        project: updates.project
                    })
                } else {
                    return timer
                }
            })
        })
    }

    handleDeleteFormSubmit = (idToDelete) => {
        this.deleteTimer(idToDelete);
    };

    deleteTimer = (idToDelete) => {
        this.setState({
            timers: this.state.timers.filter((timer)=>{
                return idToDelete !== timer.id
            })
        })
    }

    render() {
        return (
            <div className='container'>
                <div/>
                <div className="column">
                    <EditableTimerList 
                        onFormSubmit = {this.handleEditFormSubmit}
                        onFormDelete = {this.handleDeleteFormSubmit}
                        timers={this.state.timers}
                    />
                    <ToggleableTimerForm
                        onFormSubmit = {this.handleCreateFormSubmit}
                    />
                </div>
                <div/>
            </div>
        )
    }
}

export default TimersDashboard;