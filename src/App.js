import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import { AppStates } from "./Store/States";
function App() {
  const {menu}=useContext(AppStates);
  return (
    <Router>
      <Navbar />
      {menu?<Menu />:""}
      <Routes>
        <Route path="/" element={<SectionOne />} />
      </Routes>
    </Router>
  );
}

export default App;
