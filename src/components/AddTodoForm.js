import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm({ onAddTodo }) {
  const [ todoTitle, setTodoTitle ] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo([{ id: Date.now(), title: todoTitle }]); 
    setTodoTitle("");
  }

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel 
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        Title:
      </InputWithLabel>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodoForm