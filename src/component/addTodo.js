import React, { Component } from 'react'
import './addTodo.css'
import { connect } from 'react-redux'
import { addToList, deleteFromList, completeTask, editTodo } from '../action/action';


class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: '',
            onEdit: false,
            editTodo: ''
        }
    }



    handleChangedText = e => {
        let newTodo = e.target.value;
        this.setState({
            newTodo: newTodo,
        });
    };

    handleChangeEditState = () => {
        this.setState({ onEdit: !this.state.onEdit });
    }

    handleChangeEdit = e => {
        let editTodo = e.target.value;
        this.setState({
            editTodo: editTodo,
        });
    };

    render() {
        return (
            <div>
                <div className="todoHead">
                    <form >
                        <h1>TO-DO App</h1>
                        <h3>Add new To-Do</h3>
                        <input type="text" placeholder="Enter New Tasks" value={this.state.newTodo} onChange={(e) => this.handleChangedText(e)} />
                        <button onClick={(e) => { e.preventDefault(); this.props.handleAdd(this.state.newTodo); this.setState({ newTodo: '' }) }}> Add</button>
                    </form>
                </div>

                <h2>Let's get some Work done! </h2>

                <div className="todoSection">
                    {this.props.todoList.map((el, i) => (
                        <li className='todoDiv' key={i}  >
                            <button onClick={() => { this.props.handleComplete(i); }}> {(el.isComplete) ? 'Undo' : 'Complete'} </button>
                            <button onClick={() => { this.props.handleDelete(i); }}> Delete </button>
                            {this.state.onEdit ? (<input type='text' value={this.state.editTodo} onChange={(e) => this.handleChangeEdit(e)} defaultValue={el.todo} />) : (<p style={{ textDecoration: el.isComplete && 'line-through' }}>{el.todo} </p>)
                            }
                            <button onClick={(e) => { e.preventDefault(); this.props.handleEdit(i, this.state.editTodo); this.handleChangeEditState(e); this.setState({ editTodo: '' }) }} >{(this.state.onEdit ? 'Submit' : 'Edit')}</button>
                        </li>

                    ))}

                </div>
            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        todoList: state
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        handleAdd: event => dispatch(addToList(event)),
        handleDelete: i => dispatch(deleteFromList(i)),
        handleComplete: i => dispatch(completeTask(i)),
        handleEdit: (i, editedTodo) => dispatch(editTodo(i, editedTodo)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);