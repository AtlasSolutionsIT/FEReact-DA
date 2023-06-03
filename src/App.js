import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';

import { Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout';
import { UserContextProvider } from './UserContext';


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
