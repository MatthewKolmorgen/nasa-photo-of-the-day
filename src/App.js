import React from "react";
import "./App.css";
import NasaPOD from './components/NasaPOD'

function App() {
  return (
    <div className='container'>
      <header>
        <h1>Header Goes Here:</h1>
        <h3>Description Goes Here:</h3>
      </header>
      <section id='pictureOfTheDay'>
        <p>Explanation Goes Here</p>
      </section>
    </div>
  );
}

export default App;
