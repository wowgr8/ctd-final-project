import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from 'prop-types';

// add svg icon for add button

function AddTodoForm({ onAddTodo, isLoading }) {
  const [todoField, setTodoFields] = useState({ title: '', description: '', dueDate: '' });
  const [showForm, setShowForm] = useState(false)

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo([
      {
        id: Date.now(),
        title: todoField.title,
        description: todoField.description,
        dueDate: todoField.dueDate,
      },
    ]);
    setTodoFields({ title: '', description: '', dueDate: '' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTodoFields((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const onShowForm = () => {
    setShowForm(!showForm);
  }
  return (
    <>
      {showForm 
        ? 
          <form onSubmit={handleAddTodo}>
            <InputWithLabel
            name="title"
            value={todoField.title}
            handleInputChange={handleInputChange}
            >
              Title:
            </InputWithLabel>
            <InputWithLabel
              name="description"
              value={todoField.description}
              handleInputChange={handleInputChange}
            >
              Description:
            </InputWithLabel>
            <InputWithLabel
              name="dueDate"
              value={todoField.dueDate}
              handleInputChange={handleInputChange}
            >
              Due Date:
            </InputWithLabel>
            <button type="submit">
              Add
            </button>
          </form>          
        : <>
            { isLoading 
              ? <></>
              : <button onClick={onShowForm}>Add New Todo </button>
            }
          </>
      }
    </>
  )
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

export default AddTodoForm