import React from 'react';
import Lists from './components/Lists';
import './App.css';

function App() {
  return (
    <div className="bg-[#fcf8f5] h-screen pt-4">
      <h1 className="text-[#270f08] text-4xl font-bold ml-4 mb-4">Desserts</h1>
      <Lists></Lists>
    </div>
  );
}

export default App;
