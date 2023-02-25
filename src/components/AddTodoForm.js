import React, {useState} from 'react'

function AddTodoForm({ onAddTodo }) {
  const [ todoTitle, setTodoTitle ] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo([{ id: Date.now(), title: todoTitle }]); 
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleAddTodo}>
      
    </form>
  )
}

export default AddTodoForm