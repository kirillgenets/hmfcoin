import React, { useState, useEffect } from 'react';
import Cryptocurrency from './Cryptocurrency.js';
import { CRYPTOCURRENCIES_DATA_URL } from '../../links.js';
import { fetchData } from '../../functions.js';
import './style/CryptoTable.scss';

export default function CryptoTable(props) {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    fetchData(CRYPTOCURRENCIES_DATA_URL, fetchCryptocurrencies);
  });

  function fetchCryptocurrencies(result) {
    const sorted = sortCryptocurrencies(Object.values(result.data));
    setCryptocurrencies(sorted);
    props.addCryptocurrencies(cryptocurrencies);
  }

  function sortCryptocurrencies(arr) {
    return arr.sort((a, b) => b.quotes.USD.market_cap - a.quotes.USD.market_cap);
  }

  return (
    <table className="crypto-table">
      <tbody>
        {cryptocurrencies.map((data, index) => (
          <Cryptocurrency
            id={index + 1}
            name={data.name}
            cap={data.quotes.USD.market_cap}
            price={data.quotes.USD.price}
            volume={data.quotes.USD.volume_24h}
            supply={data.circulating_supply}
            change={data.quotes.USD.percent_change_24h}
          />
        ))}
      </tbody>
    </table>
  );
}