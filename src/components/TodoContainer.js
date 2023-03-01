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
      result.records.sort(function(objectA, objectB){
        if (objectA.fields.Title < objectB.fields.Title) {
          return -1;
        } else if (objectA.fields.Title > objectB.fields.Title) {
          return 1;
        } else {
          return 0;
        }
      })
      setTodoList(result.records);
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
          Description: newTodo[0].description,
          Status: "In Progress",
          "Due Date": newTodo[0].dueDate
        },
        typecast: true,
      })
    })
    .then((response) => response.json())
    .then((data) => {
      setTodoList([...todoList, data].sort((a, b) => (a.fields.Title > b.fields.Title) ? 1 : -1));
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
      <h1>{tableName}</h1>
      <AddTodoForm onAddTodo={addTodo} isLoading={isLoading} />
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