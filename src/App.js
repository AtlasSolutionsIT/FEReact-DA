import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';

import { Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout';


function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>


    </Routes>
  );
}

export default App;
