import React, { Component } from 'react'
import { addTodoAction, updateTodoAction } from '../redux/actions/todo.action';
import { connect } from 'react-redux';

class Input extends Component {
    constructor() {
        super();

        this.state = {
            todo: "",
            editData: {
                index: -1,
                data: ""
            }
        }
    }

    submit = (event) => {
        event.preventDefault();
       
        if(this.props.editData.index > - 1) {
            this.props.updateTodo(this.props.editData.index, this.state.todo)
        }else {
            this.props.addTodo(this.state.todo)
        }

        this.setState({
            todo: ""
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.editData.index !== this.props.editData.index) {
            this.setState({
                todo: this.props.editData.data,
                editData: {
                    index: this.props.editData.index,
                    data: this.props.editData.data,
                }
            })
        }   
    }

    render() {
        return (
            <form className="row" onSubmit={this.submit}>
                <div className="col-12">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Enter todo'
                            value={this.state.todo}
                            onChange={(event) => this.setState({
                                todo: event.target.value
                            })}
                        />
                        <button
                            className="btn btn-outline-primary"
                            disabled={!this.state.todo}
                        >
                            {
                                this.props.editData.index > -1 ?  "Update": "Add"
                            }
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

const stateMapToProps = (store) => {
    return {
        editData: store.editData
    }
}

const dispatchMapToProps = (dispatch) => {
    return {
        addTodo: (value) => dispatch(addTodoAction(value)),
        updateTodo: (index, data) => dispatch(updateTodoAction(index,data))
    }   
}

export default connect(stateMapToProps, dispatchMapToProps)(Input)

