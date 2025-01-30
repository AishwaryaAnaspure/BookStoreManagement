import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { BookProvider } from "./context/BookContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <BookProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/books" element={<PrivateRoute><Books /></PrivateRoute>} />
            <Route path="/books/:id" element={<PrivateRoute><BookDetail /></PrivateRoute>} />
          </Routes>
        </Router>
      </BookProvider>
    </AuthProvider>
  );

};
export default App;