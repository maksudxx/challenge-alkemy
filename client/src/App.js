import './App.css';
import Home from './views/home/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path='home' element={<Home />} />
    </Routes>
  );
}

export default App;
