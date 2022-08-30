import "./App.css";
// import Demo from "./components/demo";
import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Login from "./components/login";
import Home from "./components/home";
import Contact from "./components/contact";
import Sign_Up from "./components/sign_up";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/sign_up" element={<Sign_Up />} />
          <Route exact path="*" element={<Home />} />
       </Routes>
      </Router>

      {/* <Demo /> */}
      <Footer />
    </div>
  );
}

export default App;
