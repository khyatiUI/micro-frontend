import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import App1 from "./App1/App1";
import App2 from "./App2/App2";
import "./styles/global.scss";
import List from "./App1/pages/List";
import Dashboard from "./App1/pages/Dashboard";

const App: React.FC = () => {
  return (
    <Router>
      <div className="main-layout">
        <Header />
        <div className="content">
          <SideMenu />
          <div className="page-container">
            <Routes>
              <Route path="/app1/*" element={<App1 />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/list" element={<List />} />
              <Route path="/app2" element={<App2 />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
