import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import CharacterPage from "./Pages/Info/CharacterPage";

import "./main.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
