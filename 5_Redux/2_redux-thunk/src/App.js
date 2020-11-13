import React from 'react'
import './App.css';

import DroidsContainer from './app/droids/components/DroidsContainer'
import DroidsForm from './app/droids/components/DroidsForm'



function App() {
  return (
    <div className="App">
      <DroidsContainer/>
      <DroidsForm/>
    </div>
  );
}

export default App;
