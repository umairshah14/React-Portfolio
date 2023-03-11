import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
