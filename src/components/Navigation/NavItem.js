import React from 'react';
import PropTypes from 'prop-types';
import './style/NavItem.scss';

export default function NavItem(props) {
  function handleClick(evt) {
    evt.preventDefault();

    props.onClick(props.value);
  }

  return (
    <li className="nav-item">
      <a href="#">{props.text}</a>
    </li>
  );
}

NavItem.propTypes = {
  text: PropTypes.string.isRequired
}