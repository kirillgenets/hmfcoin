import React, { useState, useEffect } from 'react';
import { prettifyPrice } from '../../functions.js';
import './style/Capitalization.scss';
import { GLOBAL_DATA_URL } from '../../links.js';
import { fetchData } from '../../functions.js';

function Capitalization(props) {
  const [capitalization, setCapitalization] = useState(0);
  
  useEffect(() => {
    fetchData(GLOBAL_DATA_URL, fetchCapData);
  });

  function fetchCapData(capData) {
    setCapitalization(capData.data.quotes.USD.total_market_cap);
    props.setCapitalization(capitalization);
  }

  return (
    <div className="capitalization">
      <h2 className="capitalization-title">Total market cap:</h2>
      <p className="capitalization-value">${prettifyPrice(capitalization)}</p>
    </div>
  );
}

export default Capitalization;