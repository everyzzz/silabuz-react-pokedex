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
  );
}

export default App;
