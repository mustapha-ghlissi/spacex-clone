import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/common/common.scss";
import "assets/scss/pages/home.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
