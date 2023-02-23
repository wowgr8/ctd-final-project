import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
  } from "react-router-dom";
import LandingPage from './components/LandingPage';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Router>
        <p>Hello World!</p>
        <Routes>
          <Route path='/landing' exact element={<LandingPage />} />
          <Route path='todoList' exact element={<TodoList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;