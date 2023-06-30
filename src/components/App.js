import "../styles/main.scss";
import callToApi from '../services/api';

// Fichero src/components/App.js

import {Link, Route, Routes} from 'react-router-dom';

const App = () => {
  return(
    <div>
      <h2>Este titulo aparece siempre</h2>
      <Routes>
        <Route
        path='/contacto'
        element={
          <h2>
            Este titulo solo aparece cuando la usuaria entra en la pagina de contacto
          </h2>
        }
      />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to='/'>Ir al inicio</Link>
          </li>
          <li>
            <Link to='/contacto'>Ir al contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default App;