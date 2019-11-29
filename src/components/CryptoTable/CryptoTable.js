import React, { useState } from 'react';
import './style/CryptoTable.scss';

export default function CryptoTable() {
  const [viewType, setViewType] = useState('top-100');

  return (
    <table className="crypto-table">

    </table>
  );
}