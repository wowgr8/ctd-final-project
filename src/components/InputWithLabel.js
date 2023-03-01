import React, { useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './AddTodoForm.module.css';

function InputWithLabel({ name, value, handleInputChange, children}) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  
  return (
    <>
      <label className={styles.label} htmlFor={name}>{children}</label> 
      <input 
        id={name} 
        type="text" 
        name={name}
        ref={inputRef}
        value={value} 
        onChange={handleInputChange}
      />
    </>
  )
}

InputWithLabel.propTypes = {
  children: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
}

export default InputWithLabel