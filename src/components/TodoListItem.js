import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoListItem.module.css';
import { ReactComponent as GarbageCanSVG} from '../svg/garbage-bin-svgrepo-com.svg'

function TodoListItem({ fields, onRemoveTodo, id }) {
  return (
    <tbody className={styles}>
      <tr>
        <td>{fields.Title}</td>
        <td>{fields.Description}</td>
        <td>{fields.Status}</td>
        <td>{new Date(fields['Due Date']).toLocaleDateString()}</td>
        <td>
          <button type="button" onClick={() => onRemoveTodo(id)}>
            <GarbageCanSVG height="30px" width="30px"/>
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