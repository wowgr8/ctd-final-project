import React, { useState } from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';
import Styles from './TodoList.module.css';

function TodoList({ todoList, setTodoList, onRemoveTodo }) {
  const [sortBy, setSortBy] = useState('none');
  const [currentPage, setCurrentPage] = useState(1);

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

  const itemsPerPage = 10;
  const totalPages = Math.ceil(todoList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayTodoList = todoList.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <table>
        <thead>
          <tr id={Styles.tableRow}>
            <th>
              Title       
              <button onClick={() => sortTodoList('title-asc')}>▲</button>
              <button className={Styles.btn2} onClick={() => sortTodoList('title-desc')}>▼</button>
            </th>
            <th>
              Description       
              <button onClick={() => sortTodoList('description-asc')}>▲</button>
              <button className={Styles.btn2} onClick={() => sortTodoList('description-desc')}>▼</button>
            </th> 
            <th>Status</th>
            <th>
              Due Date
              <button onClick={() => sortTodoList('dueDateAsc')}>▲</button>
              <button className={Styles.btn2} onClick={() => sortTodoList('dueDateDesc')}>▼</button>
            </th>
            <th>Actions</th>
          </tr>
        </thead>

        {displayTodoList.map((item) =>{
          return <TodoListItem key={item.id} {...item}  onRemoveTodo={onRemoveTodo}/>
        })}
      </table>
        <div id={Styles.pagination}>
          {currentPage > 1 && <button onClick={handlePrevPage}>Previous 10</button>}
          {currentPage < totalPages && <button onClick={handleNextPage}>Next 10</button>}
        </div>
    </>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func.isRequired,
  setTodoList: PropTypes.func,
}

export default TodoList