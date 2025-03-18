import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";

const App1: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/list" element={<List />} />
        </Routes>
    );
};

export default App1;
