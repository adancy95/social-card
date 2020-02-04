import React from 'react';
import Title from './Components/Title'
import Body from './Components/Body'
import User from './Components/User'
import './App.css';

function App() {
  return (
    <div className="App">
        Social Card
        <Title />
        <hr/>
        <User/>
        <Body />
    </div>
  );
}

export default App;
