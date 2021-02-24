import EditableTimer from './EditableTimer';
import React from 'react';

class EditableTimerList extends React.Component {

    render () {
        return (
            <div className='timers'>
                <EditableTimer
                    title='Learn React'
                    project='Web Domination'
                    elapsed='8986300'
                    runningSince={null}
                    editFormOpen={false}
                />
                <EditableTimer
                    title='Learn extreme ironing'
                    project='Be clean'
                    elapsed='3890985'
                    runningSince={null}
                    editFormOpen={true}
                />
            </div>
        );
    }
}

export default EditableTimerList;