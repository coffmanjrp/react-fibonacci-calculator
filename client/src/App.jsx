import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Fib } from './components';
import { About } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link> <br />
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Fib />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
