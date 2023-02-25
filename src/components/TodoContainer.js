import React, {useState, useEffect} from 'react'
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import PropTypes from 'prop-types';

function TodoContainer({ tableName }) {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}`, {
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

  const addTodo = (newTodo) => {   
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}`, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Title: newTodo[0].title,
        },
        typecast: true,
      })
    })
    .then((response) => response.json())
    .then((data) => {
      setTodoList([...todoList, data]);
    })
  };

  const removeTodo = async (id) => {
    const res = await fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/${id}`,
    {
        method: 'DELETE',
        headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
        },
    });
    const filteredTodoList = todoList.filter(
      (item) => id !== item.id
      );  
    setTodoList(filteredTodoList);
    const data = await res.json();
    return data;
  };

  return (
    <div>
      <p>TodoContainer Placeholder!</p>
      <h1>This is the table name: {tableName}</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading 
        ? (<p>Loading...</p>)
        : (<TodoList todoList={todoList}  onRemoveTodo={removeTodo} />)
      }
    </div>
  )
}

TodoContainer.propTypes = {
  tableName: PropTypes.string,
}

export default TodoContainer