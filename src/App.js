import React from 'react';
import './app.css';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import Coin from './components/Coin';

function App() {

    return (
        <div className="App">
            <h1>Kripto Borsa </h1>

            <input type="text"></ input> <FaSearch />

               
            <div id="coin_columns">
                        <h2>Isim</h2>
                    <Coin />     
                </div>

        </div>

  );
}

export default App;
