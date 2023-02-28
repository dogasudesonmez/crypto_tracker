import React, { useEffect, useState } from 'react';
import './coinName.css';
const CoinNames = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(response => response.json())
            .then(response => setCoins(response));
    }, []);
    
    return (
        <div>
            <h2>Isim</h2>
            {coins.map(coin => {
                return (
                    <div>
                        <div className="title_name" key={coin.name}>
                            <p><img src={coin.image} style={{ width: "30px" }} /></p><h2>{coin.name}</h2>
                        </div>
                    </div>
                );
            })}
            </div>
    );
}
export default CoinNames;