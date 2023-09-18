import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Index from "./cart/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
