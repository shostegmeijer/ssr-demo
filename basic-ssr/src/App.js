import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <html>
      <head>
        <title>Server Side Rendering</title>
      </head>
      <body>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </body>
    </html>
  );
};

export default App;
