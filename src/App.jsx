import React from 'react';
//importing styles
import './css/app.css';
//importing components
import MainGrid from './components/MainGrid';

const App = () => {
  return (
    <div className="app__container">
      <div className="wrapper">
        <MainGrid />
      </div>
    </div>
  );
};

export default App;
