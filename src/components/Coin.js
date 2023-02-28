import React, { useEffect, useState } from 'react';
import './coin.css';

const Coin = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(response => response.json())
            .then(response => setCoins(response));
    }, []);

    return (
        <div>
            
            {coins.map(coin => {
                return (
                    <div className="coin_lines">                       
                        <div className="title_name" key={coin.name}>
                            <p><img src={coin.image} style={{ width: "30px" }} /></p><h2>{coin.name}</h2>
                            </div>                       
                        <div key={coin.name} className="title_symbol">
                            <p style={{ fontSize: "15px" }}>{coin.symbol}</p>
                        </div>                            
                        <div className="title_price" key={coin.name} >
                            <p>${coin.current_price}</p>
                        </div>
                            
                        <div className="title_change" key={coin.name}>
                            <p style={{ color: "deeppink" }}>{coin.price_change_percentage_24h}%</p>
                            </div>

                    </div>
                );
            })}
        </div>
    );
}
export default Coin;