import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoListItem.module.css';

function TodoListItem({ fields, onRemoveTodo, id }) {
  return (
    <tbody className={styles}>
      <tr>
        <td>{fields.Title}</td>
        <td>{fields.Description}</td>
        <td>{fields.Status}</td>
        <td>{fields["Due Date"]}</td>
        <td>
          <button type="button" onClick={() => onRemoveTodo(id)}>
            Remove
          </button>
        </td>
      </tr>
    </tbody>
  )
}

TodoListItem.propTypes = {
  fields: PropTypes.object,
  onRemoveTodo: PropTypes.func.isRequired,
  id: PropTypes.string
}

export default TodoListItem