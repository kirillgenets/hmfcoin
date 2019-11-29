import React from 'react';
import PropTypes from 'prop-types';
import './style/NavItem.scss';

export default function NavItem(props) {
  const className = `nav-item nav-item-${props.type}`;

  return (
    <li className={className}>
      <a href="#">{props.text}</a>
    </li>
  );
}

NavItem.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}