import React from 'react';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.newTodo = React.createRef();
    }
    handleAddTodo = e => {
        const name = this.newTodo.current.value;
        if(name === '') return;
        this.setState(prevState => ({todos: [...prevState.todos, {name: name, completed: false }]}))
        this.newTodo.current.value = '';
    }
    handleToggle = todo => {
        this.setState(prevState => ({todos: [...prevState.todos.filter(curr => curr.name !== todo.name), {...todo, completed: !todo.completed}]}))
    }
    removeCompletedTodos = () => {
        this.setState(prevState => ({todos: prevState.todos.filter(curr => !curr.completed)}))
    }
    render() {
        return (
            <div>
                <div>
                    <input type='text' ref={this.newTodo} />
                    <button onClick={this.handleAddTodo}>Add ToDo</button>
                    <button onClick={this.removeCompletedTodos}>Remove Complete</button>
                </div>
                <div>
                    {
                        this.state.todos.map(todo => (
                            <div key={todo.name}>
                                <label>
                                    <input type='checkbox' checked={todo.complete} onChange={() => this.handleToggle(todo)}/>
                                    {todo.name}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default ToDoList;