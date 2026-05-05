import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    // <header>
    //   <nav>
    //     <Link to="/">Home</Link>
    //   </nav>
    // </header>
  );
}

export default App;
