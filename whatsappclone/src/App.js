import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM Naming Convention
    <div className="App">
      <div className="app__body">
        <Sidebar />
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
