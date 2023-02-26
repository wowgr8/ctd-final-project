import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import TodoContainer from './TodoContainer';



function LandingPage() {
  const [entered, isEntered] = useState(false)
  
  let navigate = useNavigate(); 
  
  const onEnter = () => {
    isEntered(!entered)
    console.log("Entered is:", entered)
    navigate('/todoContainer')
    console.log("navigate")
  }
  return (
    <>
      <div>LandingPage Placeholder</div>
      <h3>Greeting with button to enter site (todoContainer.js)</h3>
      <button onClick={onEnter} >
        Click Here To Get Started
      </button>
    </>
  )
}

export default LandingPage