//Remember ICE, Import/Component/Export

import React from "react";
import "./App.css";
// import axios from 'axios'
import NasaPOD from './components/NasaPOD'
//importing theme & Theme Provider
import theme from './theme/index'
import {ThemeProvider} from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NasaPOD />
      </div>
    </ThemeProvider>
  );
}

export default App;
