import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoListItem.module.css';
import { ReactComponent as GarbageCanSVG} from '../svg/garbage-bin-svgrepo-com.svg'
import { ReactComponent as EditSVG} from '../svg/edit-4-svgrepo-com.svg'
import { ReactComponent as DoneSVG} from '../svg/completed.svg'

function TodoListItem({ fields, onRemoveTodo, id }) {
  return (
    <tbody className={styles}>
      <tr>
        <td>{fields.Title}</td>
        <td>{fields.Description}</td>
        <td>{fields.Status}</td>
        <td>{new Date(fields['Due Date']).toLocaleDateString()}</td>
        <td>
          <button id={styles.trashBtn} type="button" onClick={() => onRemoveTodo(id)}>
            <GarbageCanSVG height="30px" width="30px"/>
          </button>

          {/* Edit and Done buttons below are non-functional. WIP */}
          <button id={styles.editBtn} type="button" onClick={"fn() placeholder"}>
            <EditSVG height="30px" width="30px"/>
          </button>
          <button id={styles.doneBtn} type="button" onClick={"fn() placeholder"}>
            <DoneSVG height="30px" width="30px"/>
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