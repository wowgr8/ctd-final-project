import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList({ todoList }) {
  console.log("In todoList.js - todoList: ", todoList)
  return (
    <>
      <div>TodoList.js Placeholder</div>
      {todoList.map((item) =>{
        return <TodoListItem key={item.id} {...item}  />
      })}
    </>
  )
}

export default TodoList