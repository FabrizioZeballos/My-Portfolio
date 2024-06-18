import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Portfolio } from "./views/Portfolio/Portfolio";
import { About } from "./views/About/About";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
