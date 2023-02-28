import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

function TodoList({ todoList, onRemoveTodo }) {
  console.log("In todoList.js - todoList: ", todoList)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        {todoList.map((item) =>{
          return <TodoListItem key={item.id} {...item}  onRemoveTodo={onRemoveTodo}/>
        })}
      </table>
    </>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func.isRequired
}

export default TodoList