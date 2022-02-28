import "./App.css";
import Home from "./views/home/Home";
import { Routes, Route } from "react-router-dom";
import NewEntry from "./views/newEntry/NewEntry";
import Landing from "./views/landing/Landing";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newEntry" element={<NewEntry />} />
      </Routes>
    </div>
  );
}

export default App;
