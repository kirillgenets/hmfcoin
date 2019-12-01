import React from 'react';
import Logo from './Logo.js';
import './style/App.scss';
import NavigationContainer from '../../containers/NavigationContainer.js';
import CapitalizationContainer from '../../containers/CapitalizationContainer.js';
import CryptoTableContainer from '../../containers/CryptoTableContainer.js';

export default function App() {
  return (
    <div className="app">
      <Logo />
      <CapitalizationContainer />
      <NavigationContainer />
      <CryptoTableContainer />
    </div>
  );
}