import React from 'react';
import './style/Navigation.scss';
import NavItem from './NavItem.js';

export default function Navigation(props) {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <NavItem key="top-100" text="top-100" value="SHOW_TOP_100" onClick={props.setVisibilityFilter} />
        <NavItem key="top-50" text="top-50" value="SHOW_TOP_50" onClick={props.setVisibilityFilter} />
        <NavItem key="top-10" text="top-10" value="SHOW_TOP_10" onClick={props.setVisibilityFilter} />
      </ul>
    </nav>
  );
}
