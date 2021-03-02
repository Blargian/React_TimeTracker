import React from 'react';
import TimerForm from './TimerForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {Img} from 'react-image';
import clockMan from '../images/clockman.png';
import { motion } from "framer-motion"

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
        } else if (this.props.timers.length===0) {
            return (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <button     
                        className="button-clear"
                        onClick={this.handleFormOpen}
                    >   
                        <Img className="clockImage" src={clockMan}/>
                        <h2> Click to add a new timer</h2>
                        <FontAwesomeIcon className="plusButton" icon={faPlus} />
                    </button>
                </motion.div>
            );
        } else {
            return (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <button     
                        className="button-clear"
                        onClick={this.handleFormOpen}
                    >   
                        <FontAwesomeIcon className="plusButton" icon={faPlus} />
                    </button>
                </motion.div>
            );
        }
    }
}

export default ToggleableTimerForm;