import React, {useState, useEffect} from 'react'
import TodoList from './TodoList';

function TodoContainer({ tableName }) {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      }
    })
    .then((response) => response.json())
    .then((result) => {
      setTodoList(result.records);
      console.log(result.records)
      setIsLoading(false)
    })
  },[tableName]);
  
  useEffect(() => {
    if( isLoading === false ){
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  return (
    <div>
      <p>TodoContainer Placeholder!</p>
      <h1>This is the table name: {tableName}</h1>
      {isLoading 
        ? (<p>Loading...</p>)
        : (<TodoList todoList={todoList}  />)
      }
    </div>
  )
}

export default TodoContainer