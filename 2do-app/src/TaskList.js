import React, {Component} from 'react';

const TaskInput = (props) => {
    return (
        <div className="App">
        <header className="App-header">
            <ul>
            <input type="text" value={props.taskname} onChange={props.onChange}/>
            <button type="submit" onClick={props.onClick}> Add </button>
            </ul>
        </header>
        </div>
    );
}

const TaskTable = (props) => {
    return (
        <ul> 
            {
                props.list.map(task => 
                    <li>{task}</li>
                )
            }
        </ul>
    );
}

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          list: ["Teste"],
          currTaskName: '',
        };
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleChangeTaskInput = this.handleChangeTaskInput.bind(this);
    }
    
    handleAddTask(event) {
        if (this.state.currTaskName === '' || this.state.currTaskName === undefined) {
            alert("Tarefa vazia, bb!")
        } else {
            this.setState({list: [...this.state.list, this.state.currTaskName]})
        }
        this.setState({currTaskName: ''})

        event.preventDefault()
    }

    handleChangeTaskInput(event) {
        this.setState({currTaskName: event.target.value})
    }

    render() {
        return (
            <div> 
                <TaskInput 
                    onClick={this.handleAddTask} 
                    taskname={this.state.currTaskName}
                    onChange={this.handleChangeTaskInput}/>
                <TaskTable list={this.state.list} />
            </div>
        );

    }
}

export default TaskList;