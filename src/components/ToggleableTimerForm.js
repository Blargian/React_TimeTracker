import React from 'react';
import TimerForm from './TimerForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class ToggleableTimerForm extends React.Component {

    state = {
        isOpen: false,
    };

    handleFormClose = () => {
        this.setState({
            isOpen: false
        })
    };

    handleFormOpen = () => {
        this.setState({
            isOpen: true
        });
    };

    handleFormSubmit = (timer) => {
        console.log(timer)
        this.props.onFormSubmit(timer);
        this.setState({
            isOpen:false
        })
    }

    render () {
        if(this.state.isOpen){
            return (
                <TimerForm
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <div className = "ui basic content center aligned segment">
                    <button     
                        className="button-clear"
                        onClick={this.handleFormOpen}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            );
        }
    }
}

export default ToggleableTimerForm;