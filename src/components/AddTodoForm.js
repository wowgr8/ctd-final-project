import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm({ onAddTodo }) {
  const [ todoTitle, setTodoTitle ] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo([{ id: Date.now(), title: todoTitle }]); 
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel />
    </form>
  )
}

export default AddTodoForm