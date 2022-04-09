import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Moviedetails from "./moviedetails";
import Movies from "./movies";


function App() {
  return (
    // <div>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/moviedetails/:id" element={<Moviedetails />}/>
      </Routes>
  );
}

export default App;
