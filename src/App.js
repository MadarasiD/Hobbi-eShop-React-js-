import React from 'react';
import './App.css';
import Header from './layout/Header';
import Home from './components/Home'
import Header2 from './layout/Header2';


function App() {
  return (
    <div className="App">
      <Header />
      <Header2 />
      <Home />
    </div>
  );
}

export default App;
