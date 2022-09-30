import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard";
import PublicRoute from "./routes/PublicRoute";
import Register from "./pages/Register";
import "./App.css";
import Contact from "./pages/Contact";
import News from "./pages/News";
import UserProvider from "./context/UserContext";
import Error from "./pages/Error";
import AdminBoard from "./pages/AdminBoard";
import AdminRoute from "./routes/AminRoute";

function App() {
  return (
    <Router>
      <UserProvider>
      <Routes>
      <Route path="*" element={<Error />} />
        <Route path="/" element={<PublicRoute><Landing /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/news" element={<News />} /> 
        <Route path="/landing" element={<PublicRoute><Landing /></PublicRoute>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Registro" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute> } />
        <Route path="/admin" element={<AdminRoute><AdminBoard /></AdminRoute>} />
      </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
