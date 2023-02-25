import React from 'react';
import PropTypes from 'prop-types';

function TodoListItem({ fields }) {
  return (
    <>
      <li >{fields.Title}</li>
    </>
  )
}

TodoListItem.propTypes = {
  fields: PropTypes.object,
}

export default TodoListItem