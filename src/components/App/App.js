import React from 'react';
import Capitalization from '../Capitalization/Capitalization.js';
import Navigation from '../Navigation/Navigation.js';
import Logo from './Logo.js';
import CryptoTable from '../CryptoTable/CryptoTable.js';

import './style/App.scss';

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Capitalization />
      <Navigation />
      <CryptoTable />
    </div>
  );
}