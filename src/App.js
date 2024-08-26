import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Department from './pages/Department/Department';
import ScheduleShift from './pages/ScheduleShift/ScheduleShift';

function App() {
  return (
    // <Routes />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/departments" element={<Department />} />
      <Route path="/schedule-shift" element={<ScheduleShift />} />
    </Routes>
    // <Home />
  );
}

export default App;
