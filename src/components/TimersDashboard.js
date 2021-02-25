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
                runningSince: null
            },
            {
                title: 'Practise Situps',
                project: 'Gym',
                id: uuidv4(),
                elapsed: 1000,
                runningSince: null
            }
        ]
    };

    handleCreateFormSubmit = (timer) => {

        const newTimer = {
            title: timer.title, 
            project: timer.project,
            id: uuidv4(),
            elapsed: 0,
            runningSince: null,
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

    handleStartClick = (timerId) => {
        this.startTimer(timerId);
    }

    handleStopClick = (timerId) => {
        this.stopTimer(timerId);
    };

    startTimer = (timerId) => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map((timer)=>{
                if(timer.id === timerId) {
                    return Object.assign({},timer,{
                        runningSince: now,
                    });
                } else {
                    return timer;
                }
            }),
        });
    }

    stopTimer = (timerId) => {
        
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince: null,
                    });
                } else {
                    return timer;
                }
            }),
        });
    }

    render() {
        return (
            <div className='container'>
                <div/>
                <div className="column">
                    <EditableTimerList 
                        onFormSubmit = {this.handleEditFormSubmit}
                        onFormDelete = {this.handleDeleteFormSubmit}
                        onStartClick={this.handleStartClick}
                        onStopClick={this.handleStopClick}
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