import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import styles from './LandingPage.module.css'

function LandingPage() {
  const [entered, isEntered] = useState(false);
  
  let navigate = useNavigate(); 
  
  const onEnter = () => {
    isEntered(!entered)
    navigate('/todoContainer')
  }
  
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Welcome to the Todo App</h2>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardText}>Get organized and stay on top of your tasks with our simple and intuitive todo list app.</p>
        <button className={styles.cardButton} onClick={onEnter}>Get Started</button>
      </div>
    </div>
  )
}

export default LandingPage