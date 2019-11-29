import React, { useState } from 'react';
import Capitalization from '../Capitalization/Capitalization.js';
import Navigation from '../Navigation/Navigation.js';
import Logo from './Logo.js';

import './style/App.scss';

export default function App() {
  const [capitalization, setCapitalization] = useState(0);

  return (
    <div className="app">
      <Logo key="Logo" />
      <Capitalization key="Cap" value={capitalization} />
      <Navigation key="Nav" />
    </div>
  );
}