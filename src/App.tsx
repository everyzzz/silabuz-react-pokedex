import './App.css';
import Pokedex from "./components/Pokedex"
import Favorites from './components/Favorit';

import {
  Routes, Route
} from "react-router-dom";


function App() {
     return (
      <Routes>
      <Route path="/" element={<Pokedex />}/>
      <Route path="/favoritos" element={<Favorites/>} />
      </Routes>
      
      
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  );
}

export default App;
