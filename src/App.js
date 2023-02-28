import React, { useEffect, useState } from 'react';
import './app.css';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import CoinNames from './components/name/CoinNames';
import CoinSymbol from './components/symbl/CoinSymbol';
import CoinPrice from './components/price/CoinPrice';
import CoinChange from './components/change/CoinChange';

function App() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(response => response.json())
            .then(response => setCoins(response));
    }, []);
    return (
        <div className="App">
            <h1>Kripto Borsa </h1>

            <input type="text"></ input> <FaSearch />

            {coins.map(coin => {
                return (
                    <div id="coin_columns">
                        <CoinNames/>
                        <CoinSymbol />
                        <CoinPrice />
                        <CoinChange/>
                    
                </div>
                );
            })}


        </div>

  );
}

export default App;
