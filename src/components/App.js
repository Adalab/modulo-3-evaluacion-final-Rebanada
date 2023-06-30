import "../styles/main.scss";
import { useEffect, useState } from "react";
import dataApi from "../services/Api.js";
import Header from "./Header.js";

import {Link, Route, Routes} from 'react-router-dom';

const App = () => {
  return(
    <div className="page">
      <Routes>
        <Route
        path='/contacto'
        element={
         <><Header/>
         </>
        }
      />
      </Routes>
      
    </div>
  );
};
export default App;