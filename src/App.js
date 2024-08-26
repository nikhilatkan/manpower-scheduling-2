import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
// import Adduser from "./pages/Adduser/Adduser";
// import logo from "./logo.svg";
import Department from "./pages/Department/Department";
import ScheduleShift from "./pages/ScheduleShift/ScheduleShift";

function App() {
  return (
    // <Routes />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      {/* <Route path="/sign-in" element={<Adduser />} /> */}
      <Route path="/departments" element={<Department />} />
      <Route path="/schedule-shift" element={<ScheduleShift />} />
    </Routes>
    // <Home />
  );
}

export default App;
