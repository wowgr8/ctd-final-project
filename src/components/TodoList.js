import React from 'react'

function TodoList({ todoList }) {
  console.log("In todoList.js - todoList: ", todoList)
  return (
    <>
      <div>TodoList Placeholder</div>
      {todoList.map((item) =>{
        return <h1>{item.fields.Title}</h1>
      })}
    </>
  )
}

export default TodoList