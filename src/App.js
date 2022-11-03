import React, { useContext } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="register" index element={<Register />} />
        <Route path="login" index element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
