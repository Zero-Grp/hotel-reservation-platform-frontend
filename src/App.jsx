import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Login,
  Signup,
  Dashboard,
  Room,
  Reservation,
  Admin,
} from "./pages/index.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
