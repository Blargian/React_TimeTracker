import React from 'react';

class TimerActionButton extends React.Component {
    
    

    render () {
        if (this.props.timerIsRunning) {
            return (
                <button
                    className = "button-red center"
                    onClick={this.props.onStopClick}
                >
                    Stop
                </button>
            );
        } else {
            return (
                <button
                className = "button-green center"
                onClick={this.props.onStartClick}
            >
                Start
            </button>
            );
        }
    }
}

export default TimerActionButton;