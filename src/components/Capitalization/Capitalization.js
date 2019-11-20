import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/Capitalization.scss';

class Capitalization extends React.Component {
  constructor(props) {
    super(props);
    this.value = props.value;
  }

  render() {
    return (
      <div class='capitalization'>
        <h2 class='capitalization-title'>Total market cap:</h2>
        <p class='capitalization-value'>${this.value}</p>
      </div>
    );
  }
}

export default Capitalization;