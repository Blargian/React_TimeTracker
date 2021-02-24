import React from 'react';

class TimerForm extends React.Component { 

    state = {
        title: this.props.title || '',
        project: this.props.project || ''
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleProjectChange = (e) => {
        this.setState({
            project: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project,
        });
    };

    handleClose = () => {
        this.props.onFormClose();
    };

    render () {
        const submitText = this.props.id ? 'Update' : 'Create';
        return(
            <div className = "timer-form">
                <div className = "content">
                    <div className = "ui form">
                        <div className = "field">
                            <label>Title</label>
                            <input 
                                type = "text" 
                                value={this.state.title}
                                onChange={this.handleTitleChange}
                            />
                        </div>
                        <div className = "field">
                            <label>Project</label>
                            <input 
                                type = "text" 
                                value={this.state.project}
                                onChange={this.handleProjectChange}
                            />
                        </div>
                    </div>
                </div>
                <div className = "form-buttons">
                    <button 
                        className = "button-blue center"
                        onClick = {this.handleSubmit}
                    >
                        {submitText}
                    </button>
                    <button 
                        className = "button-red center"
                        onClick = {this.handleClose}
                    >
                        Cancel
                    </button>
                </div>
                </div>
        );
    }
}

export default TimerForm;
