import React, { useState } from 'react';
import { FilterButton } from './components/filterButton/filterButton';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hide = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="App">
      <div className="App-box">
        <div className= "nav-bar-titles">Title</div>
        <div className= "nav-bar-titles">Title</div>
        <div className= "nav-bar-titles">Title</div>
        <div className= "nav-bar-titles">Title</div>
        <div className= "open-button-box">
          <button className= "open-button" onClick={hide}>
            Search
          </button>
          <FilterButton isShowing={isModalOpen} hide={hide}/>
        </div>
      </div>
    </div>
  );
}

export default App;
