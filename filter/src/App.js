import React, { useState } from 'react';
import { FilterButton } from './components/filterButton/filterButton';
import { IoIosSearch } from "react-icons/io";
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hide = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="App">
      <div className="App-box">

        <div className= "open-button-box">
          <button className= "open-button" onClick={hide}>
            <div> 
              <IoIosSearch size={16} />
            </div>
            {"Search"}
          </button>
          {isModalOpen ? <FilterButton hide={hide}/> : null }
        </div>
      </div>
    </div>
  );
}

export default App;
