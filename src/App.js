import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
// import Adduser from "./pages/Adduser/Adduser";

function App() {
  return (
    // <Routes />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      {/* <Route path="/sign-in" element={<Adduser />} /> */}
    </Routes>
    // <Home />
  );
}

export default App;
