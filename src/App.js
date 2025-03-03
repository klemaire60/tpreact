import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");


  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id='text' style={{ color }} onMouseEnter={changeColor}>
          Texte qui change de couleur
        </p>
      </header>
    </div>
  );
}

export default App;
