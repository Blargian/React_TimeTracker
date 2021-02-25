import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {renderElapsedString} from '../helpers.js';
import TimerActionButton from '../components/TimerActionButton';

class Timer extends React.Component {
    
    handleDelete = () => {
        this.props.onDeleteClick(
            this.props.id
    );
    };

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(),50);
    }

    componentWillUnmount(){
        clearInterval(this.forceUpdateInterval);
    }

    handleStartClick = () => {
        this.props.onStartClick(this.props.id);
    }

    handleStopClick = () => {
        this.props.onStopClick(this.props.id);
    }

    render () {

      
        const elapsed = renderElapsedString(this.props.elapsed,this.props.runningSince)

        return (
            <div className = "timer">
                <div className="content">
                    <div className = "header">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className = "meta">
                        <h4>{this.props.project}</h4>
                    </div>
                    <div className="center elapsedTime">
                        <h2>
                            {elapsed}
                        </h2>
                    </div>
                    <div className = "extra content">
                        <span onClick={this.props.onEditClick}><FontAwesomeIcon icon={faEdit} /></span>
                        <span onClick={this.handleDelete}><FontAwesomeIcon icon={faTrash} /></span>
                    </div>
                </div>
                <TimerActionButton
                    timerIsRunning={!!this.props.runningSince}
                    onStartClick={this.handleStartClick}
                    onStopClick={this.handleStopClick}
                />
            </div> 
    );

    }

}

export default Timer;