import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./screens/home/home";
import Admin from "./screens/admin/admin";
import Login from "./screens/auth/login";
import Ack from "./screens/ack/ack";

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:formId" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/submitted" element={<Ack />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}