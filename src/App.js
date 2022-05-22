import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './component/page/Home';
import Memopage from './component/page/Memo';
import Navbar from './component/components/navBar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
  <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route path="/memo" element={<Memopage />}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
