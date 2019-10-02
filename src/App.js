import React from 'react';
import './custom.css';
import RecipeModule from "./components/RecipeModule"
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header/>
      <RecipeModule/>
    </div>
  );
}

export default App;
