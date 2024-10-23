import React from 'react';
import Sidenav from "./Components/Sidenav";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import  Dashboard  from "./Pages/Dashboard";
import Booktracker from "./Pages/Booktracker";
import Elibrary from "./Pages/Elibrary";
import Rules from "./Pages/Rules"


export default function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
            <Route path="/booktracker" exact element={<Booktracker />}></Route>
            <Route path="/elibrary" exact element={<Elibrary />}></Route>
            <Route path="/rules" exact element={<Rules />}></Route>
          </Routes>
        </BrowserRouter>

    </>
  )
    
}

