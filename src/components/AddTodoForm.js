import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from 'prop-types';
import styles from './AddTodoForm.module.css';

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
    <div className={styles}>
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
            &nbsp;
            <InputWithLabel
              name="description"
              value={todoField.description}
              handleInputChange={handleInputChange}
            >
              Description:
            </InputWithLabel>
            &nbsp;
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
              : <button id={styles.buttonTwo} onClick={onShowForm}>Add New Todo </button>
            }
          </>
      }
    </div>
  )
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

export default AddTodoForm