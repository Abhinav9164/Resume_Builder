import React from 'react';
import Header from './components/Headers/Header';
import Body from './components/Body/Body';

import './App.css';
import LoginNav from './components/LoginNav/Login';


function App() {
  return ( 
    <div className="App">
      {/* <LoginNav/> */}
      <Header/>
      <Body />
    </div>
  );
}

export default App;
