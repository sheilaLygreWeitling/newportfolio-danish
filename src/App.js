import './App.css';
import Body from './page/Body';
import { Routes, Route } from "react-router-dom";
import BodyWhoAmI from './page/BodyWhoAmI';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/About" element={<BodyWhoAmI />} />
      </Routes>
    </div>
  );
}

export default App;
