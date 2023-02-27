import React, { useEffect, useState } from 'react';
import './app.css';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';

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

                <input type="text"></input> <FaSearch />

            <div id="list_block">
                <p className="list_p">Isim</p>
                <p className="list_p">Sembol</p>
                <p className="list_p">Fiyat</p>
                <p className="list_p">Degisim</p>

            </div>

            {coins.map(coin => {
                return (
                    <div key={coin.name} id="coin_columns">
                        <div className="coin_symbl">
                        <p><img src={coin.image} style={{ width: "30px" }} /></p>
                            <h2>{coin.name}</h2>
                        </div>
                        <p style={{ fontSize: "15px" }}>{coin.symbol}</p>
                        <p>${coin.current_price}</p>
                        <p style={{ color: "deeppink" }}>{coin.price_change_percentage_24h}%</p>

                </div>
                );
            })}


        </div>

  );
}

export default App;
