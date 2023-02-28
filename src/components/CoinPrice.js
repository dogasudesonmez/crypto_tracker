import React, { useState, useEffect } from 'react';

const CoinPrice = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(response => response.json())
            .then(response => setCoins(response));
    }, []);

    return (

        <div className="title_price">
            <h2>Fiyat</h2>
            {coins.map(coin => {
                return (
                    <div>
                       
                        <div key={coin.name}>
                            <p>${coin.current_price}</p>
                        </div>

                    </div>
                );
            })}
        </div>



    );



}
export default CoinPrice;