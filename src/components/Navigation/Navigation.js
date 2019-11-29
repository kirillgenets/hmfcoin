import React from 'react';
import './style/Navigation.scss';
import Subnav from './Subnav.js';

export default function Navigation() {
  return (
    <nav className='navigation'>
      <Subnav type='crypto-type' items={['All', 'Coins Only', 'Tokens Only']} />
      <Subnav type='view-type' items={['Full List', 'Top-100', 'Next 100']} />
    </nav>
  );
}
