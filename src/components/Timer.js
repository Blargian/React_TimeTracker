import React from 'react';
import moment from 'moment';

class Timer extends React.Component {
    render () {
    
        const elapsedTime = moment(this.props.elapsed).format('HH:MM:SS')

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
                            {elapsedTime}
                        </h2>
                    </div>
                    <div className = "extra content">
                        <i className="trash icon"></i>
                        <i className="edit icon"></i>
                    </div>
                </div>
                <div className = "button-blue center">
                    start
                </div>
            </div> 
    )

    }
}

export default Timer;