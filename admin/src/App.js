import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/common/Login";
import Register from "./pages/common/Register";
import Error from "./pages/common/Error";
import { AdminHome } from "./pages/admin/adminHome/AdminHome";
import AdminProductList from "./pages/admin/adminProductList/AdminProductList";
import AdminUserList from "./pages/admin/adminUserList/AdminUserList";
import AdminProductDetail from "./pages/admin/adminProductDetail/AdminProductDetail";
import AdminUserDetail from "./pages/admin/adminUserDetail/AdminUserDetail";
import AdminProductNew from "./pages/admin/adminProductNew/AdminProductNew";
import AdminUserNew from "./pages/admin/adminUserNew/AdminUserNew";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Admin Pages */}
          <Route path="/" element={<AdminHome />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/adminProductList" element={<AdminProductList />} />
          <Route path="/adminProductNew" element={<AdminProductNew />} />

          <Route
            path="/adminProduct/:productId"
            element={<AdminProductDetail />}
          />
          <Route path="/adminUserList" element={<AdminUserList />} />
          <Route path="/adminUser/:userId" element={<AdminUserDetail />} />
          <Route path="/adminUserNew" element={<AdminUserNew />} />

          {/* End Admin Pages */}

          {/* Common Pages */}
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
