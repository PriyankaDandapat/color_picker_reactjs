import React from 'react';
import './App.css';
import Colorpick from './components/Colorpick';

function App() {
  const colors = [
    "#FF5733", "#33FF68", "#337BFF", "#FFE833", "#FF33E8", 
    "#00FFFF", "#FFA500", "#800080","#FFFDD0", "#33FF68", 
    "#337BFF", "#FFE833", "#000000","#8A2BE2", "#00FF00", "#FFD700", "#FF6B6B", "#00CED1"
  ];

  return (
    <div className="App">
      <Colorpick colors={colors} />
    </div>
  );
}

export default App;