import "./App.css";
import * as React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// @ts-ignore
// import reactLogo from "./assets/react.svg";

import { Login } from "./routes/login";
import ErrorPage from "./routes/error";
import { SignUp } from "./routes/sign-up";
import { Products } from "./routes/products";
import { Dashboard } from "./routes/dashboard";
import PrivateRoutes from "./components/PrivateRoutes";
import { AuthProvider } from "./components/AuthContext";
import { Orders } from "./routes/orders";

function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route element={<PrivateRoutes />}>
              <Route path='/' element={<Dashboard />} />
              <Route path='/products' element={<Products />} />
              <Route path='/orders' element={<Orders />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
