import React, { useState } from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

function TodoList({ todoList, setTodoList, onRemoveTodo }) {
  const [sortBy, setSortBy] = useState('none');

  const sortTodoList = (sortType) => {
    let sortedTodoList = [...todoList];
    if (sortType === 'title-asc') {
      sortedTodoList.sort((a, b) => a.fields.Title.localeCompare(b.fields.Title));
    } else if (sortType === 'title-desc') {
      sortedTodoList.sort((a, b) => b.fields.Title.localeCompare(a.fields.Title));
    } else if (sortType === 'description-asc') {
      sortedTodoList.sort((a, b) => a.fields.Description.localeCompare(b.fields.Description));
    } else if (sortType === 'description-desc') {
      sortedTodoList.sort((a, b) => b.fields.Description.localeCompare(a.fields.Description));
    } else if (sortType === 'dueDateAsc') {
      sortedTodoList.sort((a, b) => new Date(a.fields['Due Date']) - new Date(b.fields['Due Date']));
    } else if (sortType === 'dueDateDesc') {
      sortedTodoList.sort((a, b) => new Date(b.fields['Due Date']) - new Date(a.fields['Due Date']));
    }
    setSortBy(sortType);
    setTodoList(sortedTodoList);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              Title       
              <button onClick={() => sortTodoList('title-asc')}>▲</button>
              <button onClick={() => sortTodoList('title-desc')}>▼</button>
            </th>
            <th>
              Description       
              <button onClick={() => sortTodoList('description-asc')}>▲</button>
              <button onClick={() => sortTodoList('description-desc')}>▼</button>
            </th> 
            <th>Status</th>
            <th>
              Due Date
              <button onClick={() => sortTodoList('dueDateAsc')}>▲</button>
              <button onClick={() => sortTodoList('dueDateDesc')}>▼</button>
            </th>
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
  onRemoveTodo: PropTypes.func.isRequired,
  setTodoList: PropTypes.func,
}

export default TodoList