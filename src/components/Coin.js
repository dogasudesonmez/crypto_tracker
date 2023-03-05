import React, { useEffect, useState } from 'react';
import './coin.css';

const Coin = ({ name, image, symbol, price, priceChange }) => {
    const [coins, setCoins] = useState([]);
 
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(response => response.json())
            .then(response => setCoins(response));
    }, []);
    return (

            <div className="coin_lines">
                <div className="title_name">
                    <img src={image} alt="crypto" style={{ widt: "50px", height: "50px" }} />
                    <h1>{name}</h1>
                    
                </div>
                <div>
                <p >{symbol}</p>
            </div>
            <div>
                <p >${price}</p>
            </div>
            <div>
                <p > {priceChange}%</p>
            </div>
                   
                
                
            </div>


    );
}
export default Coin;