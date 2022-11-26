import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Employees from "./Components/Employees";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
