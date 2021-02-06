import './App.css';
import React from 'react';
import FetchData from './FetchData';
import NavBar from './NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <FetchData />
    </div>
  );
}

export default App;
