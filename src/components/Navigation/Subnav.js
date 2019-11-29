import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem.js';
import './style/Subnav.scss';

export default function Subnav(props) {
  const className = `subnav subnav-${props.type}`;

  return (
    <ul className={className}>
      {
        props.items.map((item, index) => {
          return (
            <NavItem key={index} type={props.type} text={item} />
          );
        })
      }
    </ul>
  );
}

Subnav.propTypes = {
  type: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}