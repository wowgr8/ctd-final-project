import React from 'react';
import PropTypes from 'prop-types';

function TodoListItem({ fields, onRemoveTodo, id }) {
  return (
    <>
      <li >{fields.Title}</li>
      <button type="button" onClick={() => onRemoveTodo(id)} >
        Remove
      </button>
    </>
  )
}

TodoListItem.propTypes = {
  fields: PropTypes.object,
  onRemoveTodo: PropTypes.func.isRequired,
  id: PropTypes.string
}

export default TodoListItem