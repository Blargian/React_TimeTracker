import React from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import { v4 as uuidv4 } from 'uuid';

class TimersDashboard extends React.Component {

    state = {
        timers: []
    };

    componentDidMount() {
        this.loadTimersFromServer();
        setInterval(this.loadTimersFromServer,5000);
    };

    loadTimersFromServer = () => {
        client.getTimers((serverTimers)=>{
            this.setState({timers: serverTimers})
        });
    };

    handleCreateFormSubmit = (timer) => {

        const newID = uuidv4();
        const newTimer = {
            title: timer.title, 
            project: timer.project,
            id: newID,
            elapsed: 0,
            runningSince: null,
        };

        this.setState({
            timers: [...this.state.timers, newTimer]
        });

        client.createTimer({
            id: newID,
            project: timer.project,
            title: timer.title
        })
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
                    return timer;
                }
            })
        });

        client.updateTimer({
            id: updates.id,
            title: updates.title,
            project: updates.project
        });
    }

    handleDeleteFormSubmit = (idToDelete) => {
        this.deleteTimer(idToDelete);
    };

    deleteTimer = (idToDelete) => {
        this.setState({
            timers: this.state.timers.filter((timer)=>{
                return idToDelete !== timer.id
            })
        });

        client.deleteTimer({
            id: idToDelete
        });

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

        client.startTimer(
            {id: timerId, start: now}
        );
    };

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

        client.stopTimer(
            {id: timerId, stop: now}
        );
    };

    render() {
        return (
            <div>
                <div className="Aligner-item Aligner-item--top"></div>
                <div className="Aligner-item">
                    <EditableTimerList 
                        onFormSubmit = {this.handleEditFormSubmit}
                        onFormDelete = {this.handleDeleteFormSubmit}
                        onStartClick={this.handleStartClick}
                        onStopClick={this.handleStopClick}
                        timers={this.state.timers}
                    />
                    <ToggleableTimerForm
                        onFormSubmit = {this.handleCreateFormSubmit}
                        timers={this.state.timers}
                    />
                </div>
                <div className="Aligner-item Aligner-item--bottom"></div>
            </div>
        )
    }
}

export default TimersDashboard;