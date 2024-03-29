import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import{RiCloseCircleLine} from 'react-icons/ri'
import{TiEdit} from 'react-icons/ti'

function Todo({todos,completeTodo, removeTodo}) {
    const [edit,setEdit] = useState({
        id: null,
        value: ''
    })
    return TodoList.map((todo,index) => (
        <div className={todo.isComplete ? 'todo-row comlete': 'todo-row'} key = {index}>
            <div key = {todo.id} onClick={()=> completeTodo(todo.id)}>{todo.text}</div>
            <div className="icons">
                <RiCloseCircleLine onClick={()=> removeTodo(todo.id)} className='delete-icon'></RiCloseCircleLine>
                <TiEdit onClick={()=> setEdit({id:todo.id,value:todo.text})} className='edit-icon'></TiEdit>
            </div>
        </div> 
    ))
}

export default Todo
