import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends React.Component {

    state = {
        editFormOpen: false,
    }

    handleEditClick = () => {
        this.openForm();
    };

    handleFormClose = () => {
        this.closeForm();
    }

    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    }

    handleDeleteClick = (timer) => {
        this.props.onFormDelete(timer);
        this.closeForm();
    }

    closeForm = () => {
        this.setState({
            editFormOpen: false
        })
    }

    openForm = () => {
        this.setState({
            editFormOpen: true
        })
    }

    render () {
            if (this.state.editFormOpen){
                return (
                    <TimerForm
                        id={this.props.id} 
                        title={this.props.title}
                        project={this.props.project}
                        onFormClose={this.handleFormClose}
                        onFormSubmit={this.handleSubmit}
                    />
                );
            } else {
                return (
                    <Timer
                        id={this.props.id}
                        title={this.props.title}
                        project={this.props.project}
                        elapsed={this.props.elapsed}
                        runningSince={this.props.runningSince}
                        onEditClick={this.handleEditClick}
                        onDeleteClick={this.handleDeleteClick}
                        onStartClick={this.props.onStartClick}
                        onStopClick={this.props.onStopClick}
                    />
                );
            }
    }
}

export default EditableTimer;