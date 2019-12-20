import React from 'react';
import './App.css';
import TopMenu from './components/TopMenu/TopMenu'
import Abstract from './components/Abstract/Abstract'

function App() {
  return (
    <div className="App">
      <TopMenu/>
      <div className="container">
        <Abstract/>

      </div>
    </div>
  );
}

export default App;
