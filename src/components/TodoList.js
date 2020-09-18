import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.text(todo.text))
        {
            return
        }
        const newTodos = [todo,...todos]
        setTodos(newTodos)
        // console.log(todo,...todos)
    }
    const updateTodo = (todoId, newValue) =>{
        if(!todo.text || /^\s*$/.text(todo.text))
        {
            return
        }
        setTodos(prev => prev.map(item =>(icon.id === todoId ? newValue : item)))
    }
    
    

    const completeTodo = id => {
        let updatedTodos = todos.map( todo =>{
            if(todo.id === id)
            {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    return (
        <div>
            <h1> Nào điền thứ phải làm hôm nay đê!</h1>
            <TodoForm onSubmit={addTodo}></TodoForm>
            <Todo todos = {todos} completeTodo={completeTodo} removeTodo= { removeTodo}></Todo>
          
        </div>
    )
}

export default TodoList
