import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from 'prop-types';

// add svg icon for add button

function AddTodoForm({ onAddTodo }) {
  const [ todoTitle, setTodoTitle ] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [todoStatus, setTodoStatus] = useState('');
  const [todoDueDate, setTodoDueDate] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo([
      {
        id: Date.now(),
        title: todoTitle,
        description: todoDescription,
        status: todoStatus,
        dueDate: todoDueDate,
      },
    ]);
    setTodoTitle('');
    setTodoDescription('');
    setTodoStatus('');
    setTodoDueDate('');
  };

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleDescriptionChange = (event) => {
    const newTodoDescription = event.target.value;
    setTodoDescription(newTodoDescription);
  };

  const handleStatusChange = (event) => {
    const newTodoStatus = event.target.value;
    setTodoStatus(newTodoStatus);
  };

  const handleDueDateChange = (event) => {
    const newTodoDueDate = event.target.value;
    setTodoDueDate(newTodoDueDate);
  };


  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>
        Title:
      </InputWithLabel>
      <InputWithLabel todoTitle={todoDescription} handleTitleChange={handleDescriptionChange}>
        Description:
      </InputWithLabel>
      <InputWithLabel todoTitle={todoStatus} handleTitleChange={handleStatusChange}>
        Status:
      </InputWithLabel>
      <InputWithLabel todoTitle={todoDueDate} handleTitleChange={handleDueDateChange}>
        Due Date:
      </InputWithLabel>
      <button type="submit">Add</button>
    </form>
  )
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
}

export default AddTodoForm