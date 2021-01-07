import React, { useState } from 'react';
//importing styles
import './css/app.css';
//importing components
import MainGrid from './components/MainGrid';

const App = () => {
  //state
  const [isClosed, setIsClosed] = useState(true);
  return (
    <div className={`app__container ${isClosed === false ? 'overlay' : ''}`}>
      <div className="wrapper">
        <MainGrid isClosed={isClosed} setIsClosed={setIsClosed} />
      </div>
    </div>
  );
};

export default App;
