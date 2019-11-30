import React, { useState, useEffect } from 'react';
import './style/CryptoTable.scss';

const CRYPTOCURRENCIES_DATA_URL = 'https://api.coinmarketcap.com/v2/ticker/';

export default function CryptoTable() {
  const [viewType, setViewType] = useState('top-100');
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    fetchCryptocurrencies();
  });

  async function fetchCryptocurrencies() {
    const response = await fetch(CRYPTOCURRENCIES_DATA_URL);
    const json = await response.json();

    console.log(sortCryptocurrencies(Object.values(json.data)));
  }

  function sortCryptocurrencies(arr) {
    return arr.sort((a, b) => b.quotes.USD.market_cap - a.quotes.USD.market_cap);
  }

  return (
    <table className="crypto-table">

    </table>
  );
}