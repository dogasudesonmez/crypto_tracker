import React, { useState, useEffect } from 'react';
import './app.css';


import Coin from './components/Coin';


function App() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(response => response.json())
            .then(response => setCoins(response));
    }, []);
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div className="App">
            <h1>Kripto Borsa </h1>

            <form>
                <input
                    type="text"
                    placeholder="Search"
                    className="coin-input" onChange={handleChange}
                ></input>
            </form>

                          
            <div id="coin_columns">
                <div id="head_line">
                <h2>Isim</h2>
                <h2>Sembol</h2>
                <h2>Fiyat</h2>
                <h2>Degisim</h2>
                </div>
                {filteredCoins.map(coin => {
                    return (
                        <Coin key={coin.id} name={coin.name} image={coin.image}
                            symbol={coin.symbol} price={coin.current_price}
                            priceChange = { coin.price_change_percentage_24h }
                            
                        />

                    );
                }
                )}
            </div>
            
        </div>

  );
}

export default App;
