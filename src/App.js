import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <Routes />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    // <Home />
  );
}

export default App;
