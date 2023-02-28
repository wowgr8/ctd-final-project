import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoListItem.module.css';

function TodoListItem({ fields, onRemoveTodo, id }) {
  return (
    // <>
    //   <li >{fields.Title}</li>
    //   <button type="button" onClick={() => onRemoveTodo(id)} >
    //     Remove
    //   </button>
    // </>

    // <table>
    //   <tr>
    //     <td>{fields.Title}</td>
    //     <td>{fields.Description}</td>
    //     <td>{fields.Status}</td>
    //     <td>{fields["Due Date"]}</td>
    //     <td>
    //       <button type="button" onClick={() => onRemoveTodo(id)}>
    //         Remove
    //       </button>
    //     </td>
    //   </tr>
    // </table>

    // <table>
    //   <thead>
    //     <tr>
    //       <th>Title</th>
    //       <th>Description</th>
    //       <th>Status</th>
    //       <th>Due Date</th>
    //       <th>Actions</th>
    //     </tr>
    //   </thead>
      <tbody>
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
    // </table>

  )
}

TodoListItem.propTypes = {
  fields: PropTypes.object,
  onRemoveTodo: PropTypes.func.isRequired,
  id: PropTypes.string
}

export default TodoListItem