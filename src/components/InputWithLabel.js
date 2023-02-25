import React, { useRef, useEffect} from 'react'

function InputWithLabel({ todoTitle, handleTitleChange}) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  

  return (
    <>
      <label htmlFor="todoTitle">{} </label>
      <input 
        id="todoTitle" 
        type="text" 
        name="title" 
        ref={inputRef}
        value={todoTitle} 
        onChange={handleTitleChange}
      />
    </>
  )
}

export default InputWithLabel