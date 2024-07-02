import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodoAction, editTodoAction } from '../redux/actions/todo.action'

class List extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <ul className="list-group mt-2">
                {
                    this.props.todos.length > 0 ? this.props.todos.map((todo, index) => (
                        <li className="list-group-item d-flex justify-content-between" key={index}>
                            <div>
                                {todo}
                            </div>
                            <div>
                                <button
                                    className='btn btn-warning btn-sm me-2'
                                    onClick={() => this.props.editTodo(index, todo)}
                                    disabled={this.props.editData.index !== -1 ? true : false}
                                    >Edit</button>
                                <button
                                    className='btn btn-danger btn-sm'
                                    onClick={() => this.props.deleteTodo(todo)}
                                    disabled={this.props.editData.index !== -1 ? true : false}
                                    >Delete </button>
                            </div>
                        </li>
                    )) : <li className="list-group-item">No Todo</li>
                }
            </ul>
        )
    }
}

const stateMapToProps = (store) => {
    return {
        todos: store.todos,
        editData: store.editData
    }
}

const dispatchMapToProps = (dispatch) => {
    return {
        deleteTodo: (value) => dispatch(deleteTodoAction(value)),
        editTodo: (index, data) => dispatch(editTodoAction(index, data))
    }
}

export default connect(stateMapToProps, dispatchMapToProps)(List)