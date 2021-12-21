import './App.css';
import Home from './views/home/Home';
import { Routes, Route } from "react-router-dom";
import Login from './views/login/Login';
import NewEntry from './views/newEntry/NewEntry';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/newEntry' element={<NewEntry/>}/>
    </Routes>
  );
}

export default App;
