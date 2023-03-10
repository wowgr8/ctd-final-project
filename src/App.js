import { 
  BrowserRouter as Router,
  Routes,
  Route 
  } from "react-router-dom";
import LandingPage from './components/LandingPage';
import styles from './App.module.css';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className={styles.bgColor}>
      <Router>
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          <Route path='todoContainer' exact element={<TodoContainer tableName="Your Todos" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;