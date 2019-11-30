import React, { useState, useEffect } from 'react';
import { prettifyPrice } from '../../functions.js';
import './style/Capitalization.scss';

const GLOBAL_DATA_URL = 'https://api.coinmarketcap.com/v2/global/';

function Capitalization() {
  const [capitalization, setCapitalization] = useState(0);
  
  useEffect(() => {
    fetchCapData();
  });

  async function fetchCapData() {
    const response = await fetch(GLOBAL_DATA_URL);
    const json = await response.json();

    setCapitalization(json.data.quotes.USD.total_market_cap);
  }

  return (
    <div className='capitalization'>
      <h2 className='capitalization-title'>Total market cap:</h2>
      <p className='capitalization-value'>${prettifyPrice(capitalization)}</p>
    </div>
  );
}

export default Capitalization;