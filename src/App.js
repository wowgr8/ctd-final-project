import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
  } from "react-router-dom";
import LandingPage from './components/LandingPage';
import TodoList from './components/TodoList';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <p>Hello World!</p>
        <Routes>
          <Route path='/landing' exact element={<LandingPage />} />
          <Route path='todoContainer' exact element={<TodoContainer tableName=" Your Todo List " />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;