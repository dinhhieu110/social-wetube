import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/common/Login";
import Register from "./pages/common/Register";
import Error from "./pages/common/Error";
import { AdminHome } from "./pages/admin/adminHome/AdminHome";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Common Pages */}
          <Route path="/" element={<AdminHome />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
          {/* End Common Pages */}
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
